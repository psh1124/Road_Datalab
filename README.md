# Road_Datalab

**Road_Datalab** 프로젝트는 교통 데이터 시각화 및 관리 웹 애플리케이션입니다.  
사용자는 페어 선택과 랭크 선택을 통해 CSV 데이터를 로드하고, 지도와 레이더 차트로 정보를 확인할 수 있습니다.

---

## 주요 기능

- CSV 데이터 로드 및 표시
- 페어 선택(Pair 1~3)에 따른 데이터 필터링
- 랭크 선택에 따른 레이더 차트 시각화
- iframe을 통한 지도 표시
- UI 개선 및 반응형 디자인 적용

---

## 프로젝트 구조
``` bash
Road_Datalab/
├─ home/ # 홈 페이지 관련 HTML/CSS/JS
├─ login/ # 로그인 페이지 관련 HTML/CSS/JS
├─ find/ # 검색 및 선택 기능 관련 페이지
├─ function/ # CSV 처리, 레이더 차트, 지도 등 기능 JS
├─ node_modules/ # 설치된 Node.js 모듈
├─ p=1.csv # 데이터 파일 1
├─ p=2.csv # 데이터 파일 2
├─ p=3.csv # 데이터 파일 3
├─ package.json # Node.js 패키지 설정
├─ package-lock.json # 패키지 잠금 파일
├─ README.md # 프로젝트 설명
└─ finalproject_workspace.code-workspace # VSCode 워크스페이스 설정
```
---

## 사용 기술

- HTML / CSS / JavaScript
- CSV 데이터 처리
- React 없이 순수 JS 기반 UI 구현
- VSCode 워크스페이스 관리

---

## 설치 및 실행 방법

1. 프로젝트 클론
```bash
git clone https://github.com/psh1124/Road_Datalab.git
cd Road_Datalab
Node.js 환경에서 의존성 설치 (필요 시)
```

2. Node.js 환경에서 의존성 설치 (필요 시)
```bash
npm install
```

3. 개발 서버 실행
```bash
npm run dev
```

※ VS Code 에 Live Server로 하면 iFrame이 안나옴...

---

## 업데이트 내역

- **UI 개선**: 버튼 및 선택 요소 개선
- **CSV 기능 개선**: CSV 로드 및 표시 기능 개선
- **iframe 지도 표시 속도 개선**: 로딩시간 단축
- **프로젝트 구조 최신화**
- **실행 안내 변경**: VSCode Live Server -> Vite

---

---