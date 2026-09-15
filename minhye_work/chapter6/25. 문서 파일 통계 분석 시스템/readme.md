# 📄 Document Analyzer (문서 파일 통계 분석 시스템)

> **PDF 및 DOCX 문서의 글자 수, 단어 수, 공백 수, 이미지 개수를 웹 브라우저에서 즉시 분석하는 웹 애플리케이션**

![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

---

## 📌 개요

`Document Analyzer`는 서버 전송 없이 **100% 클라이언트(웹 브라우저) 측에서 동작**하는 파일 통계 분석 도구입니다.  
사용자가 문서를 업로드하면 실시간으로 문서를 파싱하여 상세한 통계 데이터를 예쁜 카드 형태의 UI로 제공합니다.

---

## ✨ 주요 기능

- 📁 **다양한 문서 형식 지원**: `.pdf` 및 `.docx` 파일 분석 지원
- 📊 **상세한 문서 통계 제공**:
  - **전체 글자 수** (공백 포함)
  - **글자 수** (공백 제외)
  - **단어 수** (Word Count)
  - **공백 개수** (Spaces)
  - **포함된 이미지 개수** (Images)
- 🔒 **강력한 보안 및 개인정보 보호**: 파일이 외부 서버로 업로드되지 않고 사용자의 웹 브라우저 로컬 환경에서만 안전하게 처리됩니다.
- 🎨 **모던하고 직관적인 UI/UX**: 파스텔톤 아이콘과 카드형 레이아웃으로 직관적인 시각화 제공

---

## 🛠 기술 스택 (Tech Stack)

| 구분 | 기술 / 라이브러리 | 설명 |
| :--- | :--- | :--- |
| **Frontend** | HTML5, CSS3, Vanilla JavaScript | 단일 파일(Single File) 구조 구현 |
| **PDF Parsing** | [PDF.js](https://mozilla.github.io/pdf.js/) | PDF 텍스트 추출 및 이미지 개수 카운트 |
| **DOCX Parsing**| [JSZip](https://stuk.github.io/jszip/) | OpenXML(ZIP) 구조 해제 및 텍스트/미디어 분석 |

---

## 🚀 사용 방법

별도의 서버 설치나 빌드 과정 없이 바로 실행할 수 있습니다.

1. 본 저장소를 클론(Clone)하거나 `index.html` 파일을 다운로드합니다.
   ```bash
   git clone https://github.com/your-username/document-analyzer.git