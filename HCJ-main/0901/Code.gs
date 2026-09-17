// 교육자료 신청 / 만족도 설문 웹앱
const SPREADSHEET_ID = '1cjrffBqji9h7j11Gc0srbjlBwnP2ofsNrRanLd0AH2g';

function doGet() {
  return HtmlService
    .createHtmlOutputFromFile('index')
    .setTitle('교육자료 신청');
}

function saveSurvey(data) {
  if (!data) throw new Error('설문 데이터가 없습니다.');

  const difficulty = data.difficulty || '';
  const helpful = data.helpful || '';
  const speed = data.speed || '';
  const material = data.material || '';
  const message = data.message || '';

  if (!difficulty) throw new Error('1번 질문에 답해주세요.');
  if (!helpful) throw new Error('2번 질문에 답해주세요.');
  if (!speed) throw new Error('3번 질문에 답해주세요.');
  if (!material) throw new Error('4번 질문에 답해주세요.');

  const spreadsheet = SpreadsheetApp.openById(SPREADSHEET_ID);
  const sheet = spreadsheet.getSheets()[0];

  sheet.appendRow([
    difficulty,
    helpful,
    speed,
    material,
    message
  ]);

  return '오늘 교육 받느라 수고하셨습니다.';
}
