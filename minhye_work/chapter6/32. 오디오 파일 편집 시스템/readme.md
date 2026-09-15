# 🎵 오디오 파일 편집 웹 시스템 (Audio Editor Web App)

웹 브라우저 상에서 별도의 서버나 외부 라이브러리 설치 없이 **MP3, WAV 등 오디오 파일을 업로드하고 볼륨 조절, 구간 잘라내기(Trim), 포맷 변환(WAV)**을 수행할 수 있는 경량화된 단일 페이지 웹 애플리케이션(SPA)입니다.

---

## ✨ 주요 기능 (Features)

1. **오디오 파일 업로드 & 미리보기**
   - MP3, WAV, AAC, OGG 등 브라우저가 지원하는 오디오 포맷 지원
   - 파일 재생 및 기본 메타데이터(파일명, 용량) 확인 가능

2. **🔊 1. 볼륨 조절 (Volume Control)**
   - `0%` ~ `200%` 범위로 원본 오디오의 음량을 손쉽게 조절

3. **✂️ 2. 일부 구간 잘라내기 (Trim)**
   - 시작 시간(초)과 종료 시간(초)을 지정하여 원하는 구간만 추출

4. **🔄 3. 포맷 변환 및 다운로드 (Format Conversion)**
   - 웹 오디오 API(Web Audio API) 기반으로 고음질 표준 **.WAV** 파일로 인코딩 후 다운로드

---

## 🛠 기술 스택 (Tech Stack)

- **HTML5**
- **CSS3** (Flexbox, CSS Variables, Responsive Design)
- **JavaScript (ES6+)**
  - [Web Audio API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API) (오디오 디코딩, 게인 조절, 타임 슬라이싱)
  - Pure JS TypedArray/DataView 기반 WAV Binary Encoder

---

## 🚀 실행 방법 (Getting Started)

별도의 의존성(Dependencies) 설치나 서버 구축 없이 브라우저에서 바로 실행할 수 있습니다.

### 1. 프로젝트 클론 또는 다운로드
```bash
git clone https://github.com/your-username/audio-editor-webapp.git
cd audio-editor-webapp