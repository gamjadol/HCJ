# 📸 Smart Image Resizer

> **Smart Image Resizer**는 별도의 서버 업로드 없이 웹 브라우저에서 즉시 동작하는 **클라이언트 사이드 이미지 종횡비 변환 및 편집 툴**입니다.  
> 원본 손실 없이 빠르게 비율을 조정하거나 여백/크롭 처리를 진행하고, 일괄 ZIP 파일로 다운로드할 수 있습니다.

---

## ✨ 주요 기능 (Key Features)

- **🖼️ 다양한 캔버스 비율 지원**: 
  - 기본 제공 비율: `1:1`, `3:4`, `4:3`, `9:16`, `16:9`
  - 사용자 지정 `커스텀 비율(너비:높이)` 입력 지원
- **🎨 2가지 리사이즈 모드**:
  - **Padding (여백 추가)**: 원본 비율을 유지하며 모자란 공간에 여백을 채웁니다. (여백 색상 자유 변경 가능)
  - **Crop (자르기)**: 지정한 비율에 맞춰 이미지의 중앙을 기준으로 잘라냅니다.
- **📁 대량 파일 및 드래그 앤 드롭**:
  - 드래그 앤 드롭(Drag & Drop) 또는 파일 탐색기를 통한 다중 이미지 업로드 지원
- **📊 실시간 진행률 & 개별/일괄 다운로드**:
  - 각 이미지별 썸네일 및 프로그레스 바(Progress Bar) 연동
  - 작업 완료 시 개별 이미지 다운로드 가능
  - 모든 작업 완료 후 **JSZip 기반의 `.zip` 일괄 압축 다운로드** 제공
- **⚡ 100% 클라이언트 사이드 동작**:
  - 서버로 이미지를 전송하지 않아 **속도가 매우 빠르고 개인정보/보안에 안전**합니다.

---

## 🛠️ 기술 스택 (Tech Stack)

| 구분 | 사용 기술 / 라이브러리 |
| :--- | :--- |
| **Frontend** | HTML5, CSS3, JavaScript (ES6+) |
| **Graphics API** | HTML5 Canvas API |
| **File Processing** | FileReader API, Blob API |
| **Third-Party Library** | [JSZip v3.10.1](https://stuk.github.io/jszip/) (CDN) |
| **Design / Typography** | Noto Sans KR, Custom Dashboard CSS |

---

## 🚀 시작하기 (Getting Started)

별도의 Node.js 설치나 빌드 과정이 필요 없습니다.

1. 이 저장소를 클론(Clone)하거나 `index.html` 파일을 다운로드합니다.
   ```bash
   git clone https://github.com/your-username/smart-image-resizer.git