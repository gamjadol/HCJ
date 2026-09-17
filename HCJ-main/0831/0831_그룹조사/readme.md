# 📅 스터디 시간 조율 및 활동 기록 웹 앱

Google Apps Script(GAS)와 Google 스프레드시트를 연동하여 스터디원의 **가능한 시간대**와 **동아리 활동 내용**을 수집하는 반응형 웹 애플리케이션입니다.

---

## 🌟 주요 기능

* ⏱️ **가능 시간대 타임테이블 선택**: 월~일요일, 시간대별 그리드에서 클릭/터치로 직관적인 다중 선택 지원
* 🆔 **학번 실시간 중복 체크**: 입력 중 실시간으로 이전 제출 여부를 확인하여 동일 회차 중복 응답 방지
* 📝 **입력값 검증 (Validation)**: 학번, 이름, 최소 1개 이상의 시간대 선택, 동아리 활동 내용 등 필수 항목 입력 검증
* 📱 **반응형 UI**: Tailwind CSS 기반으로 모바일 및 데스크톱 환경 모두에 최적화된 사용자 경험 제공
* 🔗 **간편한 공유**: 현재 설문 링크 복사 기능 및 QR 코드 안내 포함

---

## 🛠️ 기술 스택

| 구분 | 기술 / 라이브러리 |
| :--- | :--- |
| **Frontend** | HTML5, JavaScript (Vanilla JS), Tailwind CSS, Material Symbols |
| **Backend** | Google Apps Script (GAS) |
| **Database** | Google Sheets (구글 스프레드시트) |

---

## 📁 프로젝트 구조

```text
.
├── Code.gs      # Apps Script 백엔드 (구글 시트 연동 및 API 구현)
└── Index.html   # 사용자 입력 화면 (프론트엔드 UI & 스크립트)