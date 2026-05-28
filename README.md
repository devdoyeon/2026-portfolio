# devdoyeon.site — Portfolio

권도연의 직무별 포트폴리오 (React + Vite + SCSS)

## Routes

| Path | Description |
|------|-------------|
| `/` | 랜딩 — 4개 직무 선택 |
| `/ai` | AI Developer |
| `/full-stack` | Full-Stack Developer |
| `/cloud` | Cloud Engineer |
| `/devops` | DevOps Engineer |

## Scripts

```bash
npm install
npm run dev      # 개발 서버
npm run build    # 프로덕션 빌드
npm run scss     # SCSS → src/style/css 컴파일
```

## 프로필 사진

증명사진을 `public/images/profile.jpg`에 넣은 뒤 `AboutMe.jsx`의 placeholder를 `<img src="/images/profile.jpg" alt="권도연 프로필" />`로 교체하면 됩니다.

## 구조

```
src/
  App.jsx / App.scss   # 스타일 일괄 import
  components/          # JSX만 (스타일 없음)
  pages/
  data/
  style/               # camelCase SCSS 파셜
    style.scss         # CSS 변수·테마
    common.scss
    header.scss, aboutMe.scss, ...
    css/               # npm run scss 출력
```
