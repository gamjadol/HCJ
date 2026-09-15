# 📄 Smart Doc Compressor - 문서 파일 용량 압축 웹 앱

**Smart Doc Compressor**는 PDF, PPT, DOC, HWP 등 주요 문서 파일의 용량을 쉽고 빠르게 줄여주는 웹 애플리케이션입니다.  
드래그 앤 드롭을 통한 간편한 파일 업로드, 파일별 개별 진행 상황(Progress Bar) 모니터링, 다운로드 기능을 제공합니다.

---

## 📌 주요 기능 (Key Features)

- 🔗 **브랜드 로고 연동**: 화면 좌측 상단 로고(`logo.png`) 클릭 시 외부 서비스(`https://nanalab.kr`)로 이동
- 🏷️ **타이틀 표시**: 화면 우측 상단 서비스 이름(`Smart Doc Compressor`) 표기
- 📂 **다양한 업로드 방식 지원**:
  - 화면 중앙 "Upload or Drop your file!" 영역으로 **드래그 앤 드롭** 업로드
  - **파일 선택 버튼**을 통한 로컬 파일 업로드
- 📑 **지원 파일 포맷 명시**: PDF, PPT, DOC, HWP 지원 및 시각적 포맷 배지/아이콘 제공
- 📊 **실시간 개별 프로그레스 바**:
  - 업로드된 파일별 독립적인 압축 진행 상태(%) 실시간 기록
- 📥 **압축 파일 다운로드**:
  - 압축 완료(100%) 시 다운로드 버튼 자동 활성화
  - 다운로드 시 `compressed_원본파일명` 형식으로 자동 저장

---

## 📂 프로젝트 구조 (Directory Structure)

```text
📁 smart-doc-compressor/
├── 📄 README.md        # 프로젝트 안내 문서
├── 📄 index.html       # 메인 웹앱 코드 (HTML/CSS/JS)
└── 🖼️ logo.png         # 좌측 상단 로고 이미지 파일