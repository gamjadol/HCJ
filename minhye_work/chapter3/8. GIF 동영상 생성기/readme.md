# 🎬 Video to GIF Converter

브라우저 내에서 동영상(Video) 파일을 고품질 GIF 애니메이션으로 빠르게 변환해 주는 단일 페이지 웹 애플리케이션입니다.

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)

---

## ✨ 주요 기능

- **브라우저 기반 GIF 변환**: 서버 업로드 없이 클라이언트 브라우저에서 직접 변환하여 안전하고 빠릅니다.
- **29 FPS 제한 최적화**: 변환 속도와 메모리 사용량을 최적화하기 위해 최대 29 FPS 프레임 제한을 적용했습니다.
- **드래그 앤 드롭 업로드**: 파일을 간편하게 드래그 앤 드롭하거나 파일 선택 버튼을 통해 업로드할 수 있습니다.
- **실시간 프로그레스 바 & 썸네일**:
  - 동영상 업로드 시 자동으로 썸네일 생성
  - 0% ~ 50% (프레임 추출) → 50% ~ 100% (GIF 인코딩) 실시간 진행률 표시
- **100% 완료 시 다운로드 지원**: 변환이 완료되면 즉시 GIF 파일 다운로드 버튼이 제공됩니다.
- **작업 삭제 기능**: 변환 중이거나 완료된 항목을 목록에서 즉시 삭제하고 브라우저 메모리를 정리할 수 있습니다.

---

## 🛠 기술 스택

| 구분 | 기술 / 라이브러리 |
| :--- | :--- |
| **Frontend** | HTML5, CSS3, JavaScript (ES6+) |
| **GIF Engine** | [gif.js](https://github.com/jnordberg/gif.js) (v0.2.0) |
| **Optimization** | Web Worker (Inline Blob Object)를 활용한 CORS 차단 방지 및 비동기 멀티스레딩 처리 |

---

## 📂 프로젝트 구조

```text
.
├── index.html       # HTML, CSS, JS 통합 단일 실행 파일
├── logo.png         # 상단 헤더 로고 이미지 (나나랩)
└── README.md        # 프로젝트 설명 문서