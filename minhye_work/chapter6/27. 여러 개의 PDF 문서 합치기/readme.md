# 📄 나나컴퍼니 PDF 병합기 (Nana Company PDF Merger)

> **서버 설치 없이 웹 브라우저에서 안전하고 빠르게 PDF 파일들을 하나로 병합하는 도구**

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![pdf-lib](https://img.shields.io/badge/pdf--lib-1.17.1-blue?style=flat-square)

---

## 📌 프로젝트 소개 (Overview)

본 프로젝트는 **나나컴퍼니**의 웹 기반 PDF 병합 애플리케이션입니다. 
별도의 백엔드 서버 구축이나 설치 과정 없이, 단 하나의 `index.html` 파일만으로 웹 브라우저 상에서 동작합니다.

---

## ✨ 주요 기능 (Key Features)

- **🖱️ 드래그 앤 드롭 (Drag & Drop)**: PDF 파일을 업로드 영역에 끌어다 놓아 빠르게 추가 가능
- **📁 다중 파일 병합**: 여러 개의 PDF 문서를 한 번에 병합
- **🔒 100% 클라이언트 사이드 (보안 우수)**: 외부 서버로 파일을 전송하지 않고 브라우저 자체 메모리에서 병합하므로 대외비/보안 문서 처리 시 안전
- **⚡ 별도 설치 불필요 (Zero Setup)**: Node.js, Python 등의 설치 없이 `index.html` 실행만으로 즉시 동작
- **🎨 깔끔한 브랜드 UI**: 나나컴퍼니 아이덴티티가 반영된 반응형 레이아웃 제공

---

## 🛠️ 기술 스택 (Tech Stack)

| 구분 | 기술 / 라이브러리 |
| :--- | :--- |
| **Frontend** | HTML5, CSS3, JavaScript (ES6+) |
| **PDF Processing** | [pdf-lib](https://pdf-lib.js.org/) (CDN) |

---

## 🚀 시작하기 (Getting Started)

### 1. 다운로드 및 실행
1. 프로젝트 소스 코드(`index.html`)를 다운로드합니다.
2. `index.html` 파일을 두 번 클릭하거나 웹 브라우저(Chrome, Edge, Safari 등)로 드래그하여 실행합니다.

---

## 📖 사용 가이드 (How to Use)

1. **파일 업로드**:
   - 중앙 박스 영역으로 PDF 파일들을 **드래그 앤 드롭**하거나, 박스를 **클릭**하여 파일 선택 창에서 PDF 파일들을 선택합니다.
2. **파일 목록 확인**:
   - 업로드된 PDF 파일 목록과 파일 개수를 확인합니다.
3. **병합 및 저장**:
   - `[PDF 합치기 및 다운로드]` 버튼을 누르면 병합이 진행되며, 완료 시 `merged_document.pdf` 파일이 자동으로 다운로드됩니다.

---

## 🔒 보안 안내 (Security)

- 본 서비스는 서버와의 통신이 발생하지 않는 **순수 웹 브라우저 전용 프로그램**입니다.
- 개인정보, 금융 문서, 회사 내부 보안 문서를 처리할 때도 안심하고 사용하실 수 있습니다.

---

© **나나컴퍼니 (Nana Company)** All rights reserved.