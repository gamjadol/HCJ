# 🎨 나나랩 | Smart GIF Studio (Free GIF Editor)

> **서버 전송 없는 100% 브라우저 기반 GIF 무료 편집 웹 애플리케이션**  
> **Smart GIF Studio**는 사용자 컴퓨터의 웹 브라우저에서 모든 GIF 프로세싱을 로컬로 처리하여, 자료 유출 걱정 없이 안전하게 GIF를 편집할 수 있는 웹 앱입니다.

---

## 📌 주요 특징 (Key Features)

- **🔒 강력한 개인정보 보호 (100% Client-Side Processing)**  
  업로드한 GIF 파일이 외부 서버로 전송되지 않고 사용자의 컴퓨터 브라우저 안에서만 완벽하게 처리됩니다.
- **📊 실시간 GIF 바이너리 메타데이터 분석**  
  파일 업로드 즉시 GIF 바이너리를 직접 파싱하여 **파일 용량, 해상도(WxH), Frame Rate(FPS), 총 프레임 수**를 정확하게 측정합니다.
- **📱 반응형 웹 디자인 (Responsive Design)**  
  - **데스크톱**: GIF 미리보기(좌) / 편집 패널(우) 배치
  - **모바일**: GIF 미리보기(상) / 편집 패널(하) 배치
- **📂 손쉬운 파일 로드 & 초기화**  
  드래그 앤 드롭 지원 및 `Choose Another File` 버튼을 통해 작업 간 편리하게 새 파일을 로드하고 화면을 초기화할 수 있습니다.

---

## 🛠️ 9가지 GIF 편집 도구 (Editor Tools)

Smart GIF Studio는 아래 9가지 핵심 GIF 편집 도구를 제공합니다.

| 도구 (Tool) | 설명 (Description) | 주요 기능 (Main Controls) |
| :--- | :--- | :--- |
| **Resize** | GIF 해상도 크기 조절 | • 원본 대비 5% ~ 300% 슬라이더 조절<br>• 자물쇠(🔒) 토글을 통한 종횡비 고정/자유 조절 |
| **Crop** | 특정 비율 및 화면 자르기 | • 1:1, 16:9, 4:3, 9:16 비율 프리셋<br>• 여백 확대 채움 (Zoom) 및 단색 배경 채움 (Color Picker) |
| **Downsizing** | 용량 다중 축소 | • 해상도 축소 (-25%)<br>• 프레임 간격 삭제 (1/2 감소)<br>• 화질 및 색상 팔레트 최적화 선택 |
| **Format Convert** | 포맷 변환 | • GIF ➔ 🎬 **MP4 동영상 파일** 변환<br>• GIF ➔ 🖼️ **JPG 이미지 파일** 변환 |
| **Rotate** | 회전 및 반전 | • 90°, 180°, 270° 시계 방향 회전<br>• ↔️ 좌우 반전 / ↕️ 상하 반전 |
| **Optimize** | 손실 없는 용량 최적화 | • LZW 압축 테이블 재정리<br>• 불필요한 메타데이터 및 헤더 제거<br>• 중복 색상 팔레트 투명화 통합 |
| **Reverse** | 역재생 애니메이션 | • 🔄 전체 프레임 역재생 (Reverse)<br>• 🪃 왕복 재생 (Boomerang) |
| **Speed** | 재생 속도 조절 | • 0.25x ~ 3.0x 범위의 미세 슬라이더 조절<br>• 0.5x, 1.0x, 1.5x, 2.0x 퀵 프리셋 버튼 |
| **Cut** | 구간 자르기 | • 자동 파싱된 총 프레임 기반 **시작 프레임 ~ 종료 프레임** 범위 추출 |

---

## 📁 저장 파일명 규칙 (File Naming Conventions)

편집 완료 후 생성된 결과 파일은 어떤 편집 기능을 사용했는지 직관적으로 알아볼 수 있도록 자동 파일명이 적용됩니다.

- **Resize**: `Resized_<원본파일명>.gif`
- **Crop**: `Cropped_<원본파일명>.gif`
- **Downsizing**: `Downsized_<원본파일명>.gif`
- **Format Convert**: `Converted_MP4_<원본파일명>.mp4` 또는 `Converted_JPG_<원본파일명>.jpg`
- **Rotate**: `Rotated_<원본파일명>.gif`
- **Optimize**: `Optimized_<원본파일명>.gif`
- **Reverse**: `Reversed_<원본파일명>.gif`
- **Speed**: `Speed_<원본파일명>.gif`
- **Cut**: `Cut_<원본파일명>.gif`

---

## 💻 기술 스택 (Tech Stack)

- **Frontend**: HTML5, CSS3 (Flexbox/Grid, CSS Variables, Responsive Media Queries)
- **JavaScript**: Vanilla JS (ES6+, HTML5 Canvas API, File & Blob API, ArrayBuffer Binary Parser)
- **Dependencies**: 별도의 외부 라이브러리나 서버 백엔드 설치 없이 단일 `.html` 파일로 즉시 구동 가능

---

## 🚀 실행 및 사용 방법 (How to Run)

1. 이 저장소의 `index.html` 파일을 다운로드합니다.
2. 웹 브라우저(Chrome, Edge, Safari, Firefox 등)로 `index.html` 파일을 엽니다.
3. 편집할 GIF 파일을 드래그 앤 드롭하거나 **[파일 선택]** 버튼을 눌러 로드합니다.
4. 원하는 **Editor Tool**을 선택하여 상세 옵션을 설정한 후 **`< Go! >`** 버튼을 클릭합니다.
5. 새롭게 생성된 **Result GIF 패널**에서 결과를 확인하고 **[Download]** 버튼을 눌러 저장합니다.

---

## 🏢 브랜드 및 제작 (Company Info)

- **회사명**: 나나랩 (NanaLab)
- **공식 웹사이트**: [https://nanalab.kr](https://nanalab.kr)
- **서비스명**: Smart GIF Studio

---

## 📄 라이선스 (License)

Copyright © 2026 **NanaLab**. All rights reserved.