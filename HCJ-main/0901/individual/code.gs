const SHEET_URL = 'https://docs.google.com/spreadsheets/d/1eB9tVx2mS4ygauWLxutBb7270ukSvjtkYZJ30a1LyuA/edit';
const SHEET_NAME = '시트1';
const CURRENT_ROUND = '1주차';

const COL = {
  TIMESTAMP: 1, ROUND: 2, STUDENT_ID: 3, NAME: 4,
  TIME_SLOTS: 5, NOTE: 6, CLUB_ACTIVITY: 7
};

function doGet() {
  const tpl = HtmlService.createTemplateFromFile('index');
  tpl.currentRound = CURRENT_ROUND;
  return tpl.evaluate()
    .setTitle('스터디 시간 조율')
    .addMetaTag('viewport', 'width=device-width, initial-scale=1')
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function getSheet_() {
  const ss = SpreadsheetApp.openByUrl(SHEET_URL);
  const sheet = ss.getSheetByName(SHEET_NAME) || ss.getSheets()[0];
  if (!sheet) throw new Error('시트를 찾을 수 없습니다.');
  return sheet;
}

function normalizeId_(value) {
  if (value === null || value === undefined) return '';
  let s = String(value).trim();
  if (typeof value === 'number') s = value.toFixed(0);
  return s.replace(/\s+/g, '').toUpperCase();
}

function getExistingIdsForCurrentRound_(sheet) {
  const last = sheet.getLastRow();
  if (last < 2) return {};
  const range = sheet.getRange(2, COL.ROUND, last - 1, COL.STUDENT_ID - COL.ROUND + 1).getValues();
  const map = {};
  for (let i = 0; i < range.length; i++) {
    const round = String(range[i][0]).trim();
    const id = normalizeId_(range[i][1]);
    if (round === CURRENT_ROUND && id) map[id] = true;
  }
  return map;
}

function getCurrentRound() { return CURRENT_ROUND; }

function checkStudentId(studentId) {
  const id = normalizeId_(studentId);
  if (!id) return { duplicated: false };
  const exists = getExistingIdsForCurrentRound_(getSheet_());
  return { duplicated: !!exists[id] };
}

function submitForm(data) {
  data = data || {};
  const studentId = normalizeId_(data.studentId);
  const name = String(data.name || '').trim();
  const note = String(data.note || '').trim();
  const clubActivity = String(data.clubActivity || '').trim();
  const timeSlots = Array.isArray(data.timeSlots) ? data.timeSlots.filter(String) : [];

  if (!studentId) return {ok:false, code:'INVALID', message:'학번을 입력해 주세요.'};
  if (!name) return {ok:false, code:'INVALID', message:'이름을 입력해 주세요.'};
  if (timeSlots.length === 0) return {ok:false, code:'INVALID', message:'가능한 시간대를 1개 이상 선택해 주세요.'};
  if (!clubActivity) return {ok:false, code:'INVALID', message:'동아리 활동 내용을 입력해 주세요.'};

  const lock = LockService.getScriptLock();
  try {
    lock.waitLock(20000);
  } catch(e) {
    return {ok:false, code:'BUSY', message:'접속이 몰리고 있습니다. 잠시 후 다시 시도해 주세요.'};
  }

  try {
    const sheet = getSheet_();
    const exists = getExistingIdsForCurrentRound_(sheet);

    if (exists[studentId]) {
      return {ok:false, code:'DUPLICATE',
        message:'이미 '+CURRENT_ROUND+'에 제출한 학번입니다. (회차당 1회만 제출할 수 있습니다)'};
    }

    sheet.appendRow([
      new Date(), CURRENT_ROUND, studentId, name,
      timeSlots.join(', '), note, clubActivity
    ]);
    sheet.getRange(sheet.getLastRow(), COL.STUDENT_ID).setNumberFormat('@');

    return {ok:true, message:'스터디 시간 조율에 참여해 주셔서 감사합니다!'};
  } catch(err) {
    return {ok:false, code:'ERROR', message:'저장 중 오류가 발생했습니다: '+err.message};
  } finally {
    lock.releaseLock();
  }
}

function setupHeader() {
  const sheet = getSheet_();
  const header = ['타임스탬프','회차','학번','이름','가능한 시간대','비고','동아리 활동 내용'];
  sheet.getRange(1,1,1,header.length).setValues([header]).setFontWeight('bold');
  sheet.getRange('C:C').setNumberFormat('@');
  sheet.setFrozenRows(1);
}
