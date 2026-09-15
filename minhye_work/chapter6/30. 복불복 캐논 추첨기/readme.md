# 🚀 복불복 캐논 추첨기 (Cannon Marble Lottery)

> **"나만 아니면 돼!"**  
> 장애물을 지나 가장 마지막까지 버티고 떨어진 **최후의 1인**이 당첨되는 흥미진진한 복불복 대포 구슬 추첨 웹 앱입니다.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

---

## ✨ 주요 기능

- 📝 **손쉬운 참가자 입력**: 줄바꿈(`Enter`) 또는 쉼표(`,`)로 여러 명의 참가자 이름을 한 번에 입력할 수 있습니다.
- 🎯 **대포 발사 애니메이션**: 참가자의 이름이 적힌 구슬들이 차례대로 대포에서 발사됩니다.
- ⚙️ **실시간 2D 물리 엔진**: Canvas API를 활용하여 장애물(핀)과 벽면에 무작위로 튕기는 구슬 물리 효과를 구현했습니다.
- 🏆 **최후의 생존자 당첨 방식**: 가장 마지막으로 바닥(Finish Line)에 떨어진 구슬을 자동으로 감지하여 최종 당첨자로 선정합니다.
- 📊 **순위 및 결과 리포트**: 당첨자 안내 모달과 함께 전체 참가자들의 낙하 순서를 한눈에 확인할 수 있습니다.
- 🎨 **밝고 화사한 파스텔 UI**: 어떤 환경에서도 보기 좋은 깔끔하고 경쾌한 디자이너 톤앤매너를 제공합니다.

---

## 🎮 게임 규칙

1. 참가자 목록에 추첨할 사람들의 이름을 입력합니다. (최소 2인 이상)
2. **[🎯 대포 발사!]** 버튼을 누르면 대포에서 구슬이 연쇄 발사됩니다.
3. 장애물을 거쳐 **가장 마지막에 골인 지점(Finish Line)에 도착한 사람**이 당첨자가 됩니다!

---

## 🛠️ 기술 스택 (Tech Stack)

| 구분 | 기술 스택 | 설명 |
| :--- | :--- | :--- |
| **Frontend** | `HTML5` | 웹 앱 구조 및 Canvas 레이아웃 정의 |
| **Styling** | `CSS3` | Flexbox, CSS Grid, Glassmorphism, 모던 반응형 디자인 |
| **Logic/Physics** | `JavaScript (ES6+)` | Canvas 2D Context API, 2D 충돌 물리 연산 (`requestAnimationFrame`) |
| **Dependencies** | **None** | 별도의 라이브러리 설치 없이 단일 파일로 동작 |

---

## 🚀 실행 방법

본 프로젝트는 단일 HTML 파일로 구성되어 있어 별도의 서버 설치나 빌드 과정이 필요하지 않습니다.

1. 이 저장소를 클론(Clone)하거나 `index.html` 파일을 다운로드합니다.
   ```bash
   git clone https://github.com/your-username/cannon-marble-lottery.git