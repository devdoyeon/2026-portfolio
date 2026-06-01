import { mergeCareerProjectDetails } from './careerProjectDetails';

export const personalInfo = {
  nameKo: '권도연',
  nameEn: 'Doyeon Kwon',
  email: 'devdoyeon@gmail.com',
  phone: '010-7715-9689',
  address: '서울시 종로구 창신동',
  birth: '2002.11.26',
  github: 'https://github.com/devdoyeon',
  blog: 'https://www.notion.so/Engineering-Blog-68cfaa38973f49fcb752259a811ef5eb',
  quote: '끝까지 파고들어\n완성합니다',
};

export const roles = {
  ai: {
    id: 'ai',
    path: '/ai',
    label: 'AI Developer',
    labelKo: 'AI 개발자',
    accentClass: 'btn-ai',
    tagline:
      '데이터 파이프라인부터 시각화·AI 기능까지, end-to-end로 설계합니다.',
    headline: '즐기는 AI Developer,\n권도연입니다.',
    quote: '즐기는 만큼\n끝까지 검증한다',
    bio: [
      '프론트엔드 개발 1년 2개월 동안 Mining Cloud AI 바우처 사업, 마크뷰 브랜드 네이밍(Elastic Search 기반), Annotation Tool 등 데이터·AI가 맞닿는 영역을 직접 구현했습니다. CSV/Zip 전처리, Partitioning 데이터셋, Nivo Chart 기반 상관·교차분석 시각화까지 학습용 데이터가 모델까지 이어지는 흐름을 이해하고 있습니다.',
      '데이터 라벨러·관리자와 직접 소통하며 Annotation Tool UX를 개선한 경험은, AI 제품을 “사용하는 사람” 관점에서 설계하는 저의 강점입니다. 생성형 AI 활용 인재양성 과정(2026)을 통해 최신 AI 스택을 확장하며, 데이터 품질과 사용자 경험을 동시에 높이는 AI 개발자로 성장하고 있습니다.',
    ],
    skillHighlight: [
      'Python',
      '데이터 전처리',
      'Nivo Chart',
      'Elastic Search',
      'AI 파이프라인',
    ],
    hashtags: [
      'Python',
      '데이터전처리',
      'NivoChart',
      'ElasticSearch',
      'GPT',
      'Annotation',
      'MiningCloud',
      '생성형AI',
    ],
    strengths: [
      {
        title: '지원 동기',
        body: '프론트 개발을 하며 Mining Cloud·Annotation·브랜드 네이밍 등 데이터와 AI가 만나는 지점에서 “모델까지 이어지는 경험”의 가치를 느꼈고, 데이터에서 인사이트를 만들어내는 AI 개발자가 되고자 합니다.',
      },
      {
        title: '직무 적합성',
        body: 'CSV/Zip 전처리·Partitioning 데이터셋·Nivo 시각화, Elastic Search 기반 브랜드 네이밍, 식별력 판단·GPT UI 등 AI/데이터 기능을 실서비스에 연동·개선한 경험이 있습니다.',
      },
      {
        title: '조직 적합성',
        body: '데이터 라벨러·운영자와 직접 소통하며 Tool UX를 개선했고, 백엔드·기획과 협업하며 필요한 영역을 빠르게 학습해 맡아왔습니다.',
      },
    ],
    goals: [
      '3개월: 생성형 AI 과정(2026) 수료 및 프로덕트 레벨 AI 기능 구현 역량 강화',
      '6개월: 데이터 파이프라인·모델 연동 경험을 바탕으로 팀 AI 워크플로우 개선 기여',
      '정보처리기사 취득 및 AI·ML 스택(Python, FastAPI) 심화 학습',
    ],
  },
  fullstack: {
    id: 'fullstack',
    path: '/full-stack',
    label: 'Full-Stack Developer',
    labelKo: '풀스택 개발자',
    accentClass: 'btn-fullstack',
    tagline:
      'React·Next.js로 서비스를 만들고, 백엔드·API까지 주도적으로 연결합니다.',
    headline: '즐기는 Full-Stack Developer,\n권도연입니다.',
    quote: '즐기는 만큼\n끝까지 연결한다',
    bio: [
      '마크클라우드에서 1년 2개월간 프론트엔드 개발자·팀장으로 재직하며, 회사 메인·Admin·마크그룹·마크픽·마크통·Annotation Tool 등 10개 이상의 프로젝트를 Develop & Maintain 했습니다. React.js에서 Next.js Migration, CRUD 자동화 Admin, 공통 컴포넌트 설계, 반응형 SCSS까지 사용자가 체감하는 품질을 책임졌습니다.',
      '백엔드가 맡을 수 있는 영역도 프론트에서 더 효율적이라 판단되면 주도적으로 처리했습니다. API 연동·데이터 처리·이미지 최적화·동적 폼 설계를 스스로 해결하며 팀 전체의 속도를 높였고, 비대면 바우처 공급기업 선정을 위한 소개자료 작성 등 기획·문서화까지 수행했습니다.',
    ],
    skillHighlight: [
      'React.js',
      'Next.js',
      'TypeScript',
      'CRUD·Admin',
      '반응형 UX',
    ],
    hashtags: [
      'React',
      'Nextjs',
      'TypeScript',
      'SCSS',
      'CRUD',
      'Admin',
      '반응형',
      'MarkPick',
      'MarkGroup',
    ],
    strengths: [
      {
        title: '지원 동기',
        body: '독학으로 프론트를 시작해 마크클라우드에서 10개 이상의 서비스를 Develop & Maintain 하며, “기획부터 사용자가 쓰는 화면까지” 책임지는 풀스택 개발자가 되고자 합니다.',
      },
      {
        title: '직무 적합성',
        body: 'React·Next Migration, Admin CRUD·Dashboard, CS·상표 출원 플로우, 공통 컴포넌트·동적 폼, API 연동·성능 최적화까지 end-to-end 웹 개발 경험이 있습니다.',
      },
      {
        title: '조직 적합성',
        body: '프론트엔드 팀장으로 로드맵·코드 리뷰·멘토링을 수행했고, 백엔드 업무도 효율적이면 직접 맡아 팀 속도를 높였습니다. 퇴사 후에도 단기 외주로 협력한 신뢰 관계가 있습니다.',
      },
    ],
    goals: [
      '3개월: TypeScript·Next.js 기반 서비스 아키텍처 역량 강화 및 기여',
      '6개월: 기획-개발-배포까지 주도 가능한 풀스택 포지션에서 제품 품질 향상',
      '정보처리기사 취득 및 사용자 경험 중심의 서비스 개선 지속',
    ],
  },
  devops: {
    id: 'devops',
    path: '/devops',
    label: 'DevOps Engineer',
    labelKo: 'DevOps 엔지니어',
    accentClass: 'btn-devops',
    tagline:
      '개발자의 입장을 아는 DevOps — 자동화·최적화로 배포와 운영의 간극을 줄입니다.',
    headline: '즐기는 DevOps,\n권도연입니다.',
    quote: '즐기는 만큼\n끝까지 자동화한다',
    bio: [
      '“개발자의 입장을 누구보다 잘 아는 DevOps”를 목표로, 프론트엔드 1년 2개월 경험 위에 인프라·컨테이너·배포 자동화 역량을 쌓고 있습니다. 팝업 수동 배포 → Admin CRUD 자동화, base64 이미지 → S3·form-data 파이프라인, 데이터 전처리·시각화 자동화 등 “반복·비효율을 없애는” 일을 실무에서 해왔습니다.',
      '2024.10 ~ 2025.04 하이미디어 AWS 하이브리드 클라우드 과정, WIARY 프로젝트(GitHub Actions CI + ArgoCD CD, EKS·RDS·CloudWatch)를 통해 CI/CD·컨테이너·모니터링을 학습·적용했습니다. 개발과 운영을 연결해 빠르고 안정적인 서비스 제공에 기여하는 DevOps 엔지니어로 성장 중입니다.',
    ],
    skillHighlight: ['CI/CD', 'Docker', 'Kubernetes', '자동화', 'AWS'],
    hashtags: [
      'CICD',
      'Docker',
      'Kubernetes',
      'GitHubActions',
      'ArgoCD',
      '자동화',
      'AWS',
      '모니터링',
    ],
    strengths: [
      {
        title: '지원 동기',
        body: '프론트 개발 중 배포·안정성의 중요성을 체감했고, CI/CD·컨테이너·배포 자동화로 개발-운영 간극을 줄이는 DevOps 엔지니어가 되고자 합니다.',
      },
      {
        title: '직무 적합성',
        body: '팝업 CRUD 자동화, S3 이미지 파이프라인, AI 데이터 전처리·시각화 등 자동화·최적화 경험을 DevOps 관점에서 확장하고 있습니다.',
      },
      {
        title: '조직 적합성',
        body: '백엔드·기획과 협업하며 필요 시 프론트에서 주도적으로 업무를 맡아 팀 효율을 높였고, 빠른 학습력으로 새 기술에 적응합니다.',
      },
    ],
    starCases: [
      {
        title: '팝업 자동화 시스템 (회사 메인 페이지)',
        situation:
          '팝업을 Static 방식으로 추가·삭제해야 해 수정마다 배포 부담이 컸습니다.',
        task: '관리자 작업을 최소화하는 팝업 관리 체계 설계',
        action: '자사 Admin Page에서 CRUD 가능한 팝업 자동화 시스템 개발',
        result: '운영·배포 없이 팝업 변경 가능, 운영 효율 대폭 향상',
      },
      {
        title: '이미지 처리 파이프라인 (마크그룹)',
        situation:
          '이미지 base64 Request/Response로 1MB당 약 6초 인코딩 오버헤드·성능 저하',
        task: '이미지 전송·저장 방식 개선 및 클라이언트 표시 유지',
        action:
          '특정 문자열 치환 + form-data POST → AWS S3 URL 변환 파이프라인 구축',
        result: '오버헤드 제거, 트래픽·렌더링 성능 개선, UX 유지',
      },
    ],
    goals: [
      '3개월: DevOps 스택 실무 적용 · 6개월: 자동화·모니터링 구축 기여',
      '정보처리기사 · 리눅스마스터 1급 · AWS DevOps 자격증 취득 목표',
    ],
  },
  cloud: {
    id: 'cloud',
    path: '/cloud',
    label: 'Cloud Engineer',
    labelKo: '클라우드 엔지니어',
    accentClass: 'btn-cloud',
    tagline: 'AWS 기반으로 안정적·확장 가능한 인프라를 설계하고 운영합니다.',
    headline: '즐기는 Cloud Engineer,\n권도연입니다.',
    quote: '즐기는 만큼\n끝까지 안정화한다',
    bio: [
      '마크그룹 서비스에서 AWS S3 기반 이미지 스토리지 파이프라인을 실무에 적용했고, 하이미디어 AWS 하이브리드 클라우드 구축·운영 엔지니어링 과정(2024.10~2025.04)을 수료했습니다. EC2, EKS, RDS, S3, VPC, Cognito, CloudWatch를 활용한 인프라 설계·구축 경험이 있습니다.',
      'WIARY 파이널 프로젝트(팀장)에서 ERD 설계·RDS 구축, EKS 클러스터, S3 정적·미디어 저장, VPC 네트워크 분리, CloudWatch 모니터링·로깅을 담당했습니다. 호텔 네트워크 세미 프로젝트(5망·방화벽·BIND9) 경험까지 더해, 클라우드와 온프레미스를 아우르는 인프라 엔지니어로 성장하고 있습니다.',
    ],
    skillHighlight: ['AWS', 'EKS', 'RDS', 'S3', 'VPC', 'CloudWatch'],
    hashtags: [
      'AWS',
      'EKS',
      'RDS',
      'S3',
      'VPC',
      'CloudWatch',
      'Docker',
      '인프라설계',
    ],
    strengths: [
      {
        title: '지원 동기',
        body: '마크그룹 S3 파이프라인 실무와 AWS 하이브리드 클라우드 과정을 통해, 확장 가능하고 안정적인 인프라로 서비스를 뒷받침하는 클라우드 엔지니어가 되고자 합니다.',
      },
      {
        title: '직무 적합성',
        body: 'WIARY에서 EC2·EKS·RDS·S3·VPC·Cognito·CloudWatch를 활용한 인프라 구축, ERD·RDS 설계, 호텔 5망·방화벽 경험으로 클라우드·네트워크 역량을 갖추었습니다.',
      },
      {
        title: '조직 적합성',
        body: '파이널·세미 프로젝트 팀장으로 기획·실행을 주도했고, 프론트 경험으로 개발팀과 인프라 요구사항을 원활히 소통합니다.',
      },
    ],
    goals: [
      '3개월: AWS 핵심 서비스(EC2, EKS, RDS, S3) 실무 적용 및 인프라 개선 기여',
      '6개월: 모니터링·로깅 체계 구축과 IaC 기반 운영 자동화 참여',
      'AWS Solutions Architect · DevOps Engineer 자격증 취득 목표',
    ],
  },
};

export const navSections = [
  { id: 'about', label: 'About Me' },
  { id: 'career', label: 'Career' },
  { id: 'projects', label: 'Personal Project' },
  { id: 'education', label: 'Education' },
  { id: 'skills', label: 'Skills' },
];

export const career = {
  company: {
    name: 'MarkCloud',
    emoji: '💼',
    role: 'Front-End Developer (Lead 2023.02 ~)',
    period: '2022.06 ~ 2023.08',
    description:
      '상표·IP 관련 자사 서비스(마크뷰, 마크픽, 마크그룹 등)를 개발하는 기업에서 React.js 기반 프론트엔드 개발자로 재직. 2023.02부터 프론트엔드 팀장으로 로드맵·아키텍처·코드 리뷰·멘토링·성능 최적화를 담당했습니다.',
    descriptionByRole: {
      ai: '상표·IP 데이터 가공(Annotation)과 AI 바우처(Mining Cloud), 브랜드 네이밍 등 AI·데이터가 핵심인 서비스를 프론트에서 구현·개선했습니다. 데이터 라벨러 피드백을 반영한 Tool UX 개선 경험이 있습니다.',
      fullstack:
        '10개 이상의 사내·대외 서비스를 Develop & Maintain 하며 React → Next Migration, Admin CRUD, CS·출원 플로우, Annotation Tool 등 end-to-end 웹 개발을 수행했습니다.',
      devops:
        '배포·운영 비효율(Static 팝업, base64 이미지)을 자동화·파이프라인으로 개선해 온 프론트엔드 팀장 출신으로, 개발자 관점의 DevOps를 지향합니다.',
      cloud:
        '마크그룹 AWS S3 이미지 파이프라인 등 클라우드 스토리지를 실무에 적용했고, 이후 AWS 하이브리드 클라우드 과정·WIARY 프로젝트로 인프라 역량을 확장했습니다.',
    },
  },
  projects: [
    {
      id: 'markcloud-outbound-2024',
      title: 'MarkCloud 외주 (퇴사 후 협력)',
      org: 'MarkCloud · 전 직장 요청',
      period: '2024.04.22 ~ 2024.04.26',
      workType: 'OUTBOUND',
      roles: ['fullstack', 'ai', 'devops'],
      tags: ['MarkView', 'GPT', '유료검색', '채널톡', 'UX개선'],
      summary:
        '퇴사 후 5일간 단기 외주 — 마크뷰 AI·유료검색 UX 개선 및 마크클라우드 전사 CS 연동',
      summaryByRole: {
        ai: '식별력 판단·GPT Loading/Timeout UI, 브랜드 네이밍 UI 이슈 등 마크뷰 AI·검색 UX 개선',
        fullstack:
          '유료검색 결과 페이지 상태 복원, 한/영 쿠키, 탭 호버, 이미지 업로드 모달 등 프론트 UX·API 연동',
        devops:
          '단기 외주이지만 운영 이슈(상태 복원·쿠키·필수값)를 빠르게 수정해 서비스 안정성에 기여',
      },
      highlights: [
        '【마크뷰】 식별력 판단 UI 및 API 연결',
        '【마크뷰】 GPT Loading UI · GPT Timeout UI',
        '【마크뷰】 유료검색 결과 페이지 초기화 & 뒤로가기 상태 기억',
        '【마크뷰】 한/영 페이지 정보 쿠키 저장',
        '【마크뷰】 결과 페이지 탭 호버 문제 수정',
        '【마크뷰】 브랜드 네이밍 지정상품 설명 한 칸 밀림 UI 수정',
        '【마크뷰】 유료검색 이미지 업로드 모달 완료 버튼 추가',
        '【마크뷰】 유료검색 미국 상세검색 필수값 제거',
        '【전사】 등록 가능성 전문가 의뢰 링크 변경 (마크통 → 마크픽)',
        '【마크클라우드】 FAQ 하단 지원팀 문의 → 채널톡 연결',
      ],
      highlightsByRole: {
        ai: [
          '식별력 판단 UI·API, GPT Loading/Timeout UX',
          '브랜드 네이밍 지정상품 표시 이슈 수정',
        ],
        fullstack: [
          '유료검색 SPA 상태·뒤로가기 복원, 한/영 쿠키',
          '이미지 업로드 모달·탭 호버·미국 검색 필수값 UX',
        ],
      },
    },
    {
      id: 'markcloud-main',
      title: '마크클라우드 회사 메인 페이지',
      org: 'MarkCloud',
      period: '2022.06 ~',
      workType: 'Maintain',
      roles: ['fullstack', 'devops'],
      tags: ['React', 'Next.js', 'Admin', '자동화'],
      summary:
        '회사 소개 페이지 유지보수, 팝업 자동화, React → Next.js Migration',
      summaryByRole: {
        fullstack:
          '디자인 리뉴얼 퍼블리싱, 팝업 CRUD 자동화(Admin 연동), React.js → Next.js Migration을 주도했습니다.',
        devops:
          'Static 팝업 배포 방식을 Admin CRUD 자동화로 전환해 배포 없이 운영 가능한 구조로 개선했습니다.',
      },
      highlights: [
        '리뉴얼 디자인 퍼블리싱 및 메인 페이지 Maintain',
        '팝업 Static 추가/삭제 불편 → Admin Page CRUD 팝업 자동화 제안·개발',
        'React.js에서 Next.js로 Migration 작업 진행',
      ],
      highlightsByRole: {
        devops: [
          '배포 의존 Static 팝업 → Admin 기반 CRUD 자동화로 운영 프로세스 개선',
          'React → Next.js Migration으로 빌드·배포 파이프라인 현대화 기여',
          '자사 Admin과 연동된 백오피스 자동화 경험',
        ],
      },
    },
    {
      id: 'annotation-image',
      title: 'AI 학습용 데이터 구축 Annotation Tool (07·11·13)',
      org: '한국지능정보사회진흥원 (NIPA)',
      period: '2022.06 ~',
      workType: 'Maintain',
      roles: ['ai', 'fullstack'],
      tags: ['react-leaflet', 'Image Crop', 'Annotation', 'Admin/Worker'],
      summary:
        'IP·상표 이미지 데이터 Crop/Labeling Annotation Tool — Admin·Worker Page 분리 운영',
      summaryByRole: {
        ai: '간판·해외상표·마크뷰 사용자 데이터 등 유형별 Crop/Labeling Tool 유지보수, 라벨러 피드백 반영 UX 개선',
        fullstack:
          'react-leaflet 기반 사각형·다각형 Crop, Admin(작업자·프로젝트·배당) / Worker(작업·진행도) Page 분리 개발',
      },
      highlights: [
        '07·11·13번 데이터 유형별 가공 화면 Maintain',
        '사업 종료 후 마크뷰(MarkView) 대표 서비스 Image Crop/Labeling Tool로 전환',
        'react-leaflet 사각형·다각형 Crop 기능 유지보수',
        'Admin Page(작업자·프로젝트·배당) / Worker Page(크롭·비엔나 태깅·진행도) 분리',
        '데이터 라벨러(Client) 불편 사항 직접 수렴 후 개선',
      ],
      highlightsByRole: {
        ai: [
          '다양한 상표 이미지 데이터셋 가공 워크플로우 이해',
          '라벨러·관리자 역할 분리로 데이터 품질·생산성 동시 고려',
          '실사용자 피드백 기반 Annotation UX 개선',
        ],
      },
    },
    {
      id: 'mining-cloud',
      title: 'Mining Cloud',
      org: '정보통신산업진흥원 AI 바우처 지원 사업',
      period: '2022.07 ~ 2022.08',
      workType: 'Develop',
      github: 'https://github.com/markcloud-FE-KDY/markcloud-mining-cloud',
      roles: ['ai', 'fullstack', 'devops'],
      tags: ['AI', 'CSV', 'Zip', 'Nivo Chart', '데이터셋'],
      summary:
        '마이데이터 기반 금융소외계층 대출 연체 예측 AI 솔루션 — 데이터 전처리~시각화',
      summaryByRole: {
        ai: '전처리·정규화·변수분석·AI 학습용 데이터셋 생성·모델 검증 스텝을 프론트에서 연결하는 AI 워크플로 UI 개발',
        devops:
          'multipart/form-data CSV 파이프라인, zip Partitioning 데이터셋 unZip·parse 자동화',
      },
      highlights: [
        'CSV multipart/form-data 전송 → 전처리·정규화 후 parse하여 Preview Table 표시',
        'AI 학습용 데이터셋: train/validation/test Partitioning .zip unZip·내부 CSV parsing',
        '상관분석·교차분석 수치 기반 Nivo Heatmap·Bar Chart 시각화',
        'html2canvas로 차트 이미지 다운로드',
      ],
      highlightsByRole: {
        ai: [
          '데이터 전처리 → 정규화 → 변수 분석·선택 → 학습 데이터셋 생성 → 검증까지 UI 플로우 구현',
          'Zip·CSV 대용량 파일 클라이언트 parsing·미리보기',
          'Nivo Chart로 분석 결과 시각화 및 리포트용 이미지 export',
        ],
        devops: [
          '반복 수작업 전처리를 웹 파이프라인으로 자동화',
          'Zip 배치 데이터셋 unpack·parse 일괄 처리',
        ],
      },
    },
    {
      id: 'admin',
      title: '사내 Admin Page',
      org: 'MarkCloud',
      period: '2022.09 ~',
      workType: 'Develop & Maintain',
      github: 'https://github.com/markcloud-FE-KDY/markcloud-admin-renewal',
      url: 'https://admin.markcloud.co.kr',
      roles: ['fullstack', 'devops', 'cloud'],
      tags: ['React', 'Dashboard', 'CRUD', 'Nivo Chart'],
      summary:
        '디자이너 없이 자체 리뉴얼한 Admin — Dashboard·다양한 관리 기능·통계 시각화',
      summaryByRole: {
        fullstack:
          '관리자 계정·팝업·상표 Q&A·서비스·상품·해외 데이터 캐시 관리 등 CRUD·Dashboard 전면 개발',
        devops: '하드코딩 백오피스 → API 기반 동적 Admin으로 운영·배포 효율화',
        cloud: '해외 데이터 캐시·서비스 관리 등 클라우드 연동 백오피스 기능',
      },
      highlights: [
        '기존 Admin 전체 디자인 리뉴얼(자체 진행) + Dashboard 추가',
        '관리자 계정·팝업·상표 Q&A·서비스·상품·해외 데이터 캐시 관리 개발',
        '가입자 통계·매출 현황 Nivo Chart 시각화 개발 중',
        '자동화 CRUD로 팝업·콘텐츠 하드코딩 방식 제거',
      ],
      highlightsByRole: {
        devops: [
          '운영 담당자가 직접 CRUD 가능한 백오피스로 배포 주기 단축',
          'API 기반 동적 데이터 처리로 서비스 관리 효율화',
        ],
      },
    },
    {
      id: 'text-annotation',
      title: '사내 Text Annotation Tool',
      org: 'MarkCloud · 마크뷰(MarkView)',
      period: '2022.12 ~ 2023.02',
      workType: 'Develop & Maintain',
      roles: ['ai', 'fullstack'],
      tags: ['HotKey', '텍스트 검수', 'Annotation'],
      summary: '마크뷰 텍스트 상표 데이터 가공 Tool — 키보드 중심 HotKey UX',
      highlights: [
        '텍스트 상표 데이터 검수·가공 Annotation Tool 개발',
        'HotKey로 키보드만 사용하는 빠른 텍스트 검수 환경 구축',
        'Client(데이터 라벨러) 작업 효율 향상에 초점',
      ],
      highlightsByRole: {
        ai: [
          '텍스트 데이터 라벨링 워크플로우 설계',
          'HotKey 기반 생산성·정확도 균형 UX',
        ],
      },
    },
    {
      id: 'markgroup',
      title: '마크그룹 (MarkGroup)',
      org: 'MarkCloud',
      period: '2022.12 ~',
      workType: 'Develop & Maintain',
      github: 'https://github.com/markcloud-FE-KDY/markcloud-markgroup',
      url: 'https://markcloud.co.kr/mark-group',
      roles: ['fullstack', 'devops', 'cloud'],
      tags: ['React', 'AWS S3', '그룹웨어', 'CRUD'],
      summary:
        '특허법률사무소 타겟 그룹웨어 — S3 이미지 파이프라인·비대면 바우처 선정',
      summaryByRole: {
        devops:
          'base64 이미지 → form-data + S3 URL 파이프라인으로 전송·렌더링 성능 최적화',
        cloud: 'AWS S3 기반 이미지 스토리지·URL 치환 아키텍처 실무 적용',
      },
      highlights: [
        '프로젝트 현황·주간 보고·공지·게시판·지식재산 관리 CRUD 개발',
        'base64 → 특정 문자열 치환 + form-data POST → S3 URL 변환',
        'URL 특수문자 치환·복원으로 API 오류 해결',
        '비대면 서비스 바우처 공급기업 소개자료 작성·선정',
      ],
      highlightsByRole: {
        cloud: [
          'AWS S3 URL 기반 이미지 서빙 구조',
          '클라이언트 UX 유지하며 스토리지·트래픽 최적화',
        ],
      },
    },
    {
      id: 'markpick',
      title: '마크픽 (MarkPick) — 상표 출원 대행',
      org: 'MarkCloud',
      period: '2023.03 ~',
      workType: 'Develop & Maintain',
      url: 'https://markpick.co.kr',
      roles: ['fullstack'],
      tags: ['React', '공통 컴포넌트', 'CS', '동적 폼'],
      summary:
        '상표 등록 대행·셀프 출원 — 겹치는 STEP 공통 컴포넌트화 및 CS 전 페이지 개발',
      highlights: [
        '상표 등록 대행 서비스 담당, STEP 1·2·3 공통 컴포넌트화',
        '메인·로그인·아이디/비밀번호 찾기·절차 소개·요금 안내 등 CS 페이지 개발',
        '카테고리 코드 API·동적 폼·유효성 검사·에러 처리로 UX·안정성 강화',
      ],
    },
    {
      id: 'markview-crop',
      title: '마크뷰 유료 검색 — 이미지 크롭',
      org: 'MarkCloud · 마크뷰',
      period: '2023.04 ~ 2023.05',
      workType: 'Maintain',
      roles: ['fullstack', 'ai'],
      tags: ['Canvas', '좌표 API', '이미지 검색'],
      summary:
        'canvas 화질 저하 해결 — 실제 크롭 대신 좌표 기반 API 검색으로 전환',
      highlights: [
        'Crop Effect는 canvas, 실제 크롭 대신 클릭 좌표를 API로 전달',
        '이미지 min/max 사이즈 비율 calculate 후 좌표 반영',
        '화질 저하 없이 이미지 검색 품질 유지',
      ],
    },
    {
      id: 'marktong',
      title: '마크통 소개 페이지',
      org: 'MarkCloud · 모바일 앱',
      period: '2023.05 ~',
      workType: 'Develop',
      roles: ['fullstack'],
      tags: ['반응형', 'SCSS', 'Scroll Animation'],
      summary: '마크통 모바일 앱 소개 랜딩 — 반응형·스크롤 인터랙션',
      highlights: [
        '소개 페이지 전체 단독 개발',
        '모바일·태블릿 반응형 SCSS',
        '스크롤 감지 요소 등장 인터랙션 퍼블리싱',
      ],
    },
    {
      id: 'brand-naming',
      title: '마크뷰 브랜드 네이밍',
      org: 'MarkCloud · 마크뷰',
      period: '2023.04 ~ 2023.05',
      workType: 'Develop',
      roles: ['ai', 'fullstack'],
      tags: ['AI', 'Elastic Search', '브랜드명'],
      summary: '키워드 기반 AI 브랜드명 생성 — Elastic Search 연동',
      summaryByRole: {
        ai: '키워드 → Elastic Search 브랜드명 생성 API 연동, 배경색 대비 글자색 헥사 계산',
      },
      highlights: [
        '키워드 입력 → Elastic Search 기반 브랜드 이름 생성',
        'backgroundColor·color 대비 계산으로 가독성 자동 조정',
        'AI 기반 네이밍 기능을 실서비스 UI에 통합',
      ],
    },
  ],
};

export const personalProjects = [
  {
    id: 'eraser',
    title: 'Eraser',
    subtitle: '개인정보 비식별화 · 보안 에이전트 (팀 프로젝트)',
    period: 'Team Project',
    category: 'academy',
    cardSummary: '손/얼굴/글자 탐지 → 비가역 비식별화 + 보안 리포트',
    docs: 'https://doyeonyou.notion.site/Eraser-3725796685d480e59d4ec127e506cc65?source=copy_link',
    githubs: [
      { label: 'GitHub (BE)', url: 'https://github.com/Ifiveteam/eraser-be' },
      { label: 'GitHub (FE)', url: 'https://github.com/Ifiveteam/eraser-fe' },
    ],
    docs: 'https://doyeonyou.notion.site/Eraser-3725796685d480e59d4ec127e506cc65?source=copy_link',
    summary:
      'SNS 이미지 공유로 인한 지문·홍채·개인정보(텍스트) 탈취 우려를 줄이기 위해, 이미지 업로드 시 LLM 오케스트레이션이 위험요소(손·얼굴·글자)를 판단하고 모듈을 조합해 비가역 보호 처리 + 리포트를 제공하는 보안 에이전트 서비스',
    tags: [
      'Python 3.11',
      'FastAPI',
      'Uvicorn',
      'uv',
      'ruff',
      'MediaPipe',
      'OpenCV',
      'EasyOCR',
      'Gemini',
      'VLM',
    ],
    color: '#7c3aed',
    detailOverview: [
      'AI 기술 고도화로 사진만으로 지문·홍채 등 변경 불가능한 생체 데이터가 탈취될 수 있다는 문제의식에서 출발한 프로젝트입니다.',
      'Eraser는 이미지 업로드 시 위험요소(손/얼굴/글자)를 점검하고, 필요한 모듈을 조합해 비식별화(비가역) 처리와 함께 보안 리포트를 제공하는 개인정보 보안 에이전트입니다.',
    ],
    sections: [
      {
        title: '타겟',
        items: [
          'SNS를 통해 일상을 공유하는 모든 사용자',
          '미디어 노출이 많은 인플루언서/연예인 및 엔터사 등',
        ],
      },
      {
        title: '기술 스택',
        items: [
          'Python 3.11',
          'FastAPI + Uvicorn',
          'uv(패키지 관리), ruff(린트)',
          'MediaPipe, OpenCV, EasyOCR',
          'VLM/LLM (Gemini)',
        ],
      },
      {
        title: '시스템 아키텍처',
        items: [
          '미니 프로젝트 특성에 맞춰 모듈형 모놀리식 구조로 구성',
          'LLM 라우팅 오케스트레이션으로 손/얼굴/글자 탐지를 분기하고 모듈을 선택·조합',
        ],
      },
      {
        title: '핵심 기능',
        items: [
          '이미지 업로드 → LLM 오케스트레이션이 위험요소 점검 후 모듈 실행',
          '지문/홍채/텍스트 3개 모듈로 구성된 보호 처리',
          '보호 처리 이미지 + 탐지 결과 + 에이전트 보안 리포트 제공',
        ],
      },
      {
        title: '담당 (권도연)',
        items: [
          '프론트엔드 구현',
          '에이전트 보안 리포트 작성/생성 플로우 설계',
        ],
      },
    ],
    highlights: [
      'LLM 라우팅 오케스트레이션: 손·얼굴·글자 탐지 분기 → 필요한 모듈을 조합 실행',
      '지문 탐지: MediaPipe 손끝 → 공간 계산으로 지문 영역 2차 산출 → 모호 시 VLM(Gemini)로 재확인 → OpenCV 인페인팅 마스킹',
      '홍채 탐지: MediaPipe FaceLandmarker로 얼굴/눈 추출, EAR로 눈감김 + yaw 보정 후 열린 눈만 홍채 영역 추출',
      '홍채 비식별화: 평균색 기반 + 주파수 영역 블렌딩(중간 주파수 패턴)으로 자연스러운 보정',
      '복원 방지: 프렉탈 노이즈 + PGD 스타일 미세 픽셀 교란으로 역연산 난이도 상승',
      '글자 탐지: EasyOCR로 텍스트/좌표 추출 → VLM(Gemini)로 좌표 보정 및 개인정보 여부 판별',
      '텍스트 비가역 처리: 원본 픽셀 제거 + bbox 주변색 단색 덮기',
      '처리 결과: 보호 처리 이미지 + 탐지 결과 + LLM 분석 리포트로 사용자 보안 인식 제고',
    ],
    highlightsByRole: {
      ai: [
        'LLM 라우팅 오케스트레이션으로 모듈(지문/홍채/텍스트) 선택·조합',
        'VLM(Gemini) 재확인/좌표 보정/개인정보 판별로 탐지 신뢰도 강화',
        '에이전트 보안 리포트: 탐지 결과를 바탕으로 위험 요소를 요약·설명하는 리포트 생성 플로우 구성',
      ],
      fullstack: [
        '프론트엔드: 이미지 업로드 → 결과/프리뷰/리포트 화면 플로우 구성',
        '프론트엔드: 탐지 결과·보안 위험도·전처리 완료 이미지·리포트(TXT) 확인/다운로드 UX 설계',
        '백엔드: 보호 처리 결과와 탐지 결과를 리포트로 연결하는 에이전트 리포팅 인터페이스 정리',
      ],
    },
    roles: ['ai', 'fullstack'],
  },
  {
    id: 'yeonyou-bot',
    title: '연유봇',
    subtitle: 'yeonyou-bot · Discord 커뮤니티 봇',
    period: 'Personal',
    category: 'personal',
    github: 'https://github.com/devdoyeon/yeonyou-bot',
    cardSummary: '역할/활동/연령/AFK/마크서버 제어 — 길드 전용 봇',
    summary:
      '지인들과 게임하는 개인 Discord 서버용 — Discord.js v14 단일 길드 봇. 모듈별 역할·활동통계·연령인증·잠수·마크 서버 제어',
    tags: ['discord.js', 'Node.js', 'SQLite', 'better-sqlite3', 'dotenv'],
    color: '#5865F2',
    detailOverview: [
      'Discord.js v14 기반의 단일 서버(Guild) 전용 커뮤니티 관리 봇입니다. 역할 부여, 활동 통계, 연령 인증, 잠수(AFK), 마인크래프트 서버 원격 제어 기능을 모듈별로 분리해 구현했습니다.',
      '명령 등록(getXxxCommands)과 이벤트 시스템(setupXxxSystem)을 분리하고, 모든 모듈이 단일 DB 인스턴스를 공유하는 구조로 설계했습니다.',
    ],
    sections: [
      {
        title: '기술 스택',
        items: [
          'Node.js',
          'discord.js v14',
          'SQLite(better-sqlite3) — activity.db',
          'dotenv + config/env.js 환경변수 검증',
          'Windows batch + child_process (마크 서버 제어)',
        ],
      },
      {
        title: '프로젝트 구조/패턴',
        items: [
          'index.js: Client 생성, DB 연결, 모듈 초기화, 슬래시 명령 일괄 등록',
          'config/env.js: .env 로드 + 필수값 누락 시 throw',
          'function/*.js: getXxxCommands() + setupXxxSystem(client, db, config) 패턴',
          '단일 DB 인스턴스를 모든 모듈이 공유 (users, reaction_roles, afk_users 등)',
        ],
      },
      {
        title: '실행 흐름',
        items: [
          'client.once(ready)에서 setupRole/activity/age/say/afk/minecraft 시스템 순차 초기화',
          'REST.put(applicationGuildCommands)로 길드 단위 슬래시 명령 일괄 등록(덮어쓰기)',
          '각 모듈이 interactionCreate/messageCreate/voiceStateUpdate 등 이벤트를 독립적으로 등록',
        ],
      },
      {
        title: '핵심 기능 모듈',
        items: [
          '역할 시스템(role.js): 반응 역할 지급/회수 + 신규 멤버 기본 역할 자동 부여',
          '활동 통계(activity.js): 메시지/음성 시간 추적, TOP10 랭킹, 72시간 비활성 유저',
          '연령 인증(age.js): 버튼 1회 선택으로 성인/미성년 역할 부여(재선택 조건 포함)',
          '잠수(AFK)(afk.js): 기간 잠수 역할, 30분 주기 만료 처리',
          '제작자 전용 전송(say.js): BOT_OWNER_ID만 /전송 실행 가능',
          '마크 서버(minecraftSV.js): on/off/status 버튼으로 Windows 로컬 서버 제어',
        ],
      },
      {
        title: '환경 변수/운영 포인트',
        items: [
          'DISCORD_TOKEN, DISCORD_CLIENT_ID, DISCORD_GUILD_ID 등 필수값을 env.js에서 검증',
          'Gateway Intents/Privileged Intent 설정 필요(Members, Message Content 등)',
          '단일 서버 전제 — 멀티 길드 지원 시 guildId/캐시 접근 로직 전반 수정 필요',
        ],
      },
    ],
    highlights: [
      'function/* 모듈 패턴 — getXxxCommands + setupXxxSystem, index.js에서 길드 슬래시 명령 일괄 등록',
      '역할: 이모지 반응 역할 부여/회수, 신규 멤버 기본 역할 자동 지급',
      '활동: 메시지·음성 시간 추적, TOP10 랭킹, 72시간 비활성 유저·새로고침 버튼',
      '연령 인증·잠수(AFK) 기간 역할, 제작자 전용 /전송',
      'Windows batch로 마인크래프트 서버 on/off·TCP 포트 상태 확인',
    ],
    highlightsByRole: {
      fullstack: [
        'Discord Gateway Intents·Partials 설계, interaction/button customId 분기',
        'better-sqlite3 단일 DB — users, reaction_roles, age_verify, afk_users 등 스키마',
        'config/env.js 필수 env 검증, 모듈 간 client·db 인스턴스 공유',
      ],
      devops: [
        '마크 서버 on.bat/off.bat — MINECRAFT_SERVER_PATH·25565 포트 프로세스 제어',
        'child_process spawn/exec, TCP 소켓으로 서버 기동·종료 상태 모니터링',
        '30분 주기 AFK 만료 스케줄, 음성 퇴장 시 리더보드 자동 갱신',
      ],
    },
    roles: ['fullstack', 'devops'],
  },
  {
    id: 'yeonyou-updater',
    title: 'YEONYOU Updater',
    subtitle: '연유네 모드 업데이터 · Electron 데스크톱 앱',
    period: 'Personal',
    category: 'personal',
    github: 'https://github.com/devdoyeon/yeonyou-mod-updater',
    cardSummary: 'GitHub Release로 모드 배포, Electron 앱 자동 동기화',
    summary:
      '연유네 마크 서버(NeoForge 1.21.1) — CurseForge 프로필 코드 없이 GitHub Release로 모드 배포, Electron 앱이 플레이어 mods 폴더 자동 동기화',
    tags: ['Electron', 'React', 'GitHub Releases', 'Octokit', 'NeoForge'],
    color: '#5CB85C',
    detailOverview: [
      'CurseForge 모드팩 운영 시 모드가 바뀔 때마다 새 프로필 코드를 재생성·공유해야 하는 불편을 없애기 위한 전용 모드 동기화 도구입니다.',
      '관리자는 CurseForge 인스턴스의 mods 폴더를 기준으로 GitHub Release + version.json으로 배포하고, 플레이어는 Electron 앱으로 로컬 mods 폴더를 서버 목록과 자동 동기화합니다.',
    ],
    sections: [
      {
        title: '해결하는 문제',
        items: [
          '모드팩 변경 시 CurseForge 공유 코드 재발급/재공유 부담 제거',
          '플레이어의 수동 모드 추가·삭제를 앱 동기화로 자동화',
          '서버 필수/개인 모드/삭제 대기를 2열 UI + 색상 규칙으로 구분',
        ],
      },
      {
        title: '시스템 개요',
        items: [
          '관리자: publish.js로 CurseForge mods 스캔 → GitHub Release(tag) 생성 → JAR 업로드 → public/version.json 갱신·push',
          '클라이언트: version.json fetch → 로컬 mods 스캔 → 선택/전체 동기화 → 다운로드 + targets 외 파일 삭제',
          '다운로드: downloadBaseUrl + encodeURIComponent(filename) 조합',
        ],
      },
      {
        title: '핵심 데이터(version.json)',
        items: [
          'version: v{timestamp} (Release tag)',
          'modList: 서버가 요구하는 JAR 파일명 목록',
          'downloadBaseUrl: Release asset 다운로드 URL prefix(끝에 / 포함)',
        ],
      },
      {
        title: '동기화 알고리즘',
        items: [
          '전체 자동 업데이트: serverMods 전체 + 기존 선택을 합친 targets로 동기화',
          '선택 동기화: selectedToInstall(우측 유지 목록)만 targets로 동기화',
          '삭제: targets에 없는 모든 파일을 mods 폴더에서 제거(비-JAR도 포함) → 폴더에 다른 파일 두지 않도록 주의',
        ],
      },
      {
        title: '클라이언트(Electron) UX',
        items: [
          '기본 경로: Windows .minecraft/mods 자동 설정 + 폴더 선택으로 변경 가능',
          '시작 모달: 전체 자동 업데이트/관리창 열기',
          '2열 UI: 서버 모드(파랑/초록) + 개인 모드(회색) + 삭제 대기(빨강)',
          '완료 모달: mods 폴더 열기 / 앱 종료',
        ],
      },
      {
        title: '관리자 배포(publish.js)',
        items: [
          'Octokit으로 Release 생성 및 asset 업로드(실패 시 1회 재시도)',
          '파일명 정규화(공백/특수문자 처리)로 Release URL 404 방지',
          'version.json 갱신 후 git add/commit/push로 SSOT 유지',
        ],
      },
      {
        title: '기술 스택/주의점',
        items: [
          'React + SCSS, Electron, axios, fs-extra, @octokit/rest',
          'Windows 중심(NSIS), 기본 경로는 vanilla .minecraft 기준(= CurseForge 인스턴스는 경로 변경 필요)',
          '보안: nodeIntegration 활성(현재 설정)으로 로컬 전용 도구 전제',
        ],
      },
    ],
    highlights: [
      '관리자 publish.js: CurseForge mods 스캔 → GitHub Release(tag) + JAR 업로드 → version.json push',
      '클라이언트: version.json fetch 후 axios로 JAR 다운로드·targets 외 파일 삭제',
      '2열 UI — 서버 필수(파랑/초록)·개인 모드(회색)·삭제 대기(빨강) 색상 구분',
      '전체 자동 업데이트 / 선택 동기화, Windows NSIS 설치 파일(electron-builder)',
      '배포 저장소 devdoyeon/YEONYOU-MOD-UPDATER 와 raw version.json 연동',
    ],
    highlightsByRole: {
      fullstack: [
        'Electron 41 + React 19 — IPC(get-default-path, select-folder), 2열 모드 관리 UI',
        'runInstall 알고리즘: serverMods 다운로드 + targets 기준 로컬 정리',
        'fs-extra·axios, CurseForge Instances/mods 경로 수동 지정 지원',
      ],
      devops: [
        'GitHub Release + Git Tag(v{timestamp}) 기반 모드 배포 파이프라인',
        'publish.js — 파일명 정규화, asset 업로드 재시도, git push 자동화',
        'version.json 단일 진실 공급원(SSOT) — downloadBaseUrl + modList',
      ],
    },
    roles: ['fullstack', 'devops'],
  },
  {
    id: 'dear-cho',
    title: 'DEAR CHO.',
    subtitle: '밴드 LUCY 조원상 팬페이지',
    period: 'Personal',
    category: 'personal',
    github: 'https://github.com/devdoyeon/dear-cho',
    url: 'https://www.dear-cho.site',
    cardSummary: '원페이지 스크롤 팬사이트 (모달/YouTube API/사클 임베드)',
    summary: '데이터 구조·API·콘텐츠 서빙까지 혼자 설계·구축한 풀스택 팬사이트',
    tags: ['React', 'YouTube API', 'SoundCloud'],
    color: '#7c3aed',
    detailOverview: [
      '조원상(밴드 LUCY) 팬페이지를 “한 페이지 안에서 스크롤로 섹션을 넘기며 감상”하도록 만든 React(CRA) 기반 정적 웹사이트입니다.',
      '앨범/참여곡/유튜브/사운드클라우드/SNS 정보를 하나의 화면 흐름으로 묶고, 스크롤 위치에 맞춰 애니메이션과 UI 상태(네비게이션 노출)를 전환합니다.',
    ],
    sections: [
      {
        title: '사용자 경험(원페이지 스크롤)',
        items: [
          '라우팅 없이 섹션을 한 번에 렌더링하고, 사용자는 스크롤로 탐색',
          'Main/Introduce/Album/Participation/Youtube/SoundCloud/SNS/Footer를 스토리텔링 흐름으로 구성',
          '스크롤 300px 이상에서 네비게이션 노출 등 UI 상태 전환',
        ],
      },
      {
        title: '핵심 UI 패턴',
        items: [
          '가로 리스트 + 클릭 모달: 앨범/참여곡 섹션에서 커버 클릭 시 상세 모달 표시',
          '정적 JSON + 인덱스 매칭: 커버 이미지 인덱스로 JSON 데이터(트랙리스트/크레딧/참여 파트) 접근',
          '모달 오픈 시 body scroll lock으로 감상 흐름 유지',
        ],
      },
      {
        title: '데이터 소스(정적 + 외부 API)',
        items: [
          '정적 JSON: 앨범/참여곡/사클 트랙/SNS 링크를 레포 내부 데이터로 관리',
          'YouTube Data API v3: 두 채널의 동영상 리스트를 API로 가져와 카드 형태로 노출',
          '환경변수: CRA 규칙(REACT_APP_*)로 API 키 주입',
        ],
      },
      {
        title: '스크롤 애니메이션 시스템',
        items: [
          'App에서 scrollY 상태를 추적해 하위 섹션 컴포넌트에 전달',
          '각 섹션에서 offsetTop 기준으로 animate 클래스 토글로 등장 애니메이션 구현',
          '실용적 DOM 기반 구현(섹션 진입 시점에 맞춘 UI 트리거)',
        ],
      },
      {
        title: '빌드/배포',
        items: [
          'CRA(react-scripts) 기반 정적 빌드',
          'GitHub Pages 배포 + 커스텀 도메인(dear-cho.site) 운영',
        ],
      },
    ],
    highlights: [
      'LUCY 앨범 JSON·React 상태 관리로 앨범 리스트·상세 모달',
      'YouTube API 비동기·캐싱 최적화',
      'SoundCloud iframe Embed로 로딩 성능 향상',
    ],
    highlightsByRole: {
      ai: ['JSON 데이터 모델링·최적화된 리스트 렌더링', '외부 API 비동기·캐싱'],
      fullstack: ['전체 시스템 단독 설계·개발·배포', 'API 연동·콘텐츠 서빙'],
    },
    roles: ['fullstack', 'ai'],
  },
  {
    id: 'hotel-network',
    title: '호텔 네트워크 구축',
    subtitle: '하이미디어 세미 프로젝트 · 팀장',
    period: 'Semi Project',
    category: 'academy',
    cardSummary: '5망 분리·방화벽·DMZ — 호텔 네트워크 설계',
    docs: 'https://doyeonyou.notion.site/1a15796685d4806aadeffa5b93159118?source=copy_link',
    summary: '5망 분리·Sophos UTM·BIND9·DMZ — 호텔 인프라 네트워크',
    tags: ['Network', 'Firewall', 'BIND9', 'DMZ'],
    color: '#0ea5e9',
    detailOverview: [
      '호텔은 고객·직원·관리 시스템이 복합적으로 연결되는 공간으로, 안정적인 네트워크 인프라가 서비스 품질과 운영 효율에 직결됩니다.',
      '본 프로젝트는 고객 개인정보 및 내부 데이터를 보호하기 위해 네트워크 분리·접근 제어·가용성을 기반으로 설계를 진행했습니다.',
    ],
    sections: [
      {
        title: '사용 스킬',
        items: ['GNS3', 'VMWare', 'Draw.io (네트워크 구조 설계)'],
      },
      {
        title: '프로젝트 목표',
        items: [
          '고객 인터넷 서비스 제공',
          '관리 시스템 및 직원팀 간 데이터 통신',
          '개인정보/내부 데이터 보호를 위한 보안 강화',
          '고객/직원 네트워크 분리',
        ],
      },
      {
        title: '문제 해결 사례 (이중화/통신 장애 대응)',
        items: [
          '목표: 망의 main SW 장애 시 bypass 목적의 이중화 구성',
          '시도: trunk/access 중복 적용 → 포트 중복 오류',
          '시도: HSRP + spanning-tree priority로 대체 main SW 구성 → SW 간 ping은 되나 PC 간 통신 실패',
          '시도: Static routing 적용 → main SW off 시 PC 통신 문제 지속',
          '시도: Primary HSRP + 포트별 수동 standby → 일부만 통신, 모든 PC 수동 등록 필요로 비효율',
          '해결: 각 SW에 VLAN(10/20/30) 등록 + trunk 연결 + root bridge로 루프 방지 → main off에도 부서/객실 통신 유지',
        ],
      },
      {
        title: '결과',
        items: [
          '객실망(User) → 직원망(Internal) 접근 불가 (분리/보안 정책 적용)',
          '직원망(Internal) → 관리자망(Admin) 접근 불가 (분리/보안 정책 적용)',
          '직원망(Internal) → 서버망(Server) 접근 가능 (업무 필요 최소 권한 접근)',
        ],
      },
    ],
    highlights: [
      '관리자·서버·DMZ·직원·객실 5개 네트워크 분리',
      'Sophos UTM 방화벽·망 간 접근 제한',
      '객실·투숙객 DB, BIND9 NS, DVWA DMZ 페이지',
    ],
    highlightsByRole: {
      cloud: ['망 분리·방화벽 정책으로 보안·가용성 설계', 'DMZ 웹·DB 구축'],
      devops: ['네트워크 세그멘테이션·접근 제어 자동화 관점 이해'],
    },
    roles: ['cloud', 'devops'],
  },
  {
    id: 'wiary',
    title: 'WIARY',
    subtitle: '하이미디어 파이널 · 팀장 · AWS Cloud',
    period: 'Final Project',
    category: 'academy',
    cardSummary: 'EKS 배포 파이프라인 (Actions→ECR→ArgoCD→EKS)',
    docs: 'https://doyeonyou.notion.site/1a55796685d4800b8c25c12c6da6519d?source=copy_link',
    github: 'https://github.com/AWS-Cloud-FinalProject',
    summary: 'FastAPI + React + GitHub Actions + ArgoCD + AWS(EKS·RDS·S3…)',
    tags: ['AWS', 'EKS', 'ArgoCD', 'FastAPI'],
    color: '#f97316',
    detailOverview: [
      'GitHub에 올린 애플리케이션을 자동으로 빌드·배포하고, AWS에서 안정적으로 운영하는 환경을 목표로 EKS 기반 인프라와 CI/CD를 구축한 팀 프로젝트입니다.',
      'Organization 단위로 프론트/백 레포지토리를 분리하고, 브랜치(develop/production/master) 전략을 적용해 배포 흐름을 명확히 했습니다.',
    ],
    sections: [
      {
        title: 'Skills',
        items: [
          'AWS (S3, RDS, ECR, IAM, EC2, VPC)',
          'Kubernetes (EKS)',
          'Docker',
          'Python',
          'CI/CD (GitHub Actions, ArgoCD)',
          'GitHub Organization (FE/BE/monitoring repo 분리, 브랜치 전략)',
        ],
      },
      {
        title: '역할',
        items: [
          '권도연: 프론트엔드, 백엔드(회원 CRUD), GitHub Actions, ArgoCD',
          '김용운: 백엔드(투두 CRUD), GitHub Actions, ArgoCD, 모니터링',
          '김남규: 백엔드(일기 CRUD), GitHub Actions, ArgoCD, VPN',
          '황재성: VPC',
        ],
      },
      {
        title: 'AWS 인프라 구성 (VPC/EKS)',
        items: [
          'VPC (CIDR 10.0.0.0/16) 기반 Public/Private Subnet 구성',
          'IGW, NAT Gateway, Route Table 설정으로 퍼블릭/프라이빗 트래픽 분리',
          'eksctl로 클러스터 생성 및 노드 그룹 스케일링 구성',
        ],
      },
      {
        title: 'EKS 기본 구성 (Ingress/Load Balancer)',
        items: [
          'AWS Load Balancer Controller(ALB) 설치로 서비스 외부 노출 자동화',
          'Ingress로 /api(백엔드), /(프론트) 라우팅 구성',
        ],
      },
      {
        title: 'CI/CD (GitHub Actions + ArgoCD)',
        items: [
          'GitHub Actions로 Docker build → ECR push 파이프라인 구성',
          'ArgoCD Application으로 K8s 매니페스트 기반 자동 Sync (prune/selfHeal)',
        ],
      },
      {
        title: 'AWS 연동 (RDS/S3/IAM)',
        items: [
          'RDS(MySQL) 구성 및 애플리케이션 DB 연결',
          'S3 버킷 구성 및 파일 저장 연동',
          'EKS 서비스 어카운트/IAM 정책으로 S3·RDS 접근 권한 부여',
        ],
      },
      {
        title: '최종 배포 흐름',
        items: [
          'GitHub → Actions(build) → ECR(image) → EKS(pods)',
          'ALB/Ingress → Backend → RDS/S3',
        ],
      },
    ],
    highlights: [
      'FastAPI 회원·일기·투두 CRUD',
      'GitHub Actions CI + ArgoCD CD',
      'EC2, EKS, RDS, S3, Cognito, VPC, CloudWatch',
      'ERD Cloud → RDS 구현',
    ],
    highlightsByRole: {
      cloud: ['EKS·RDS·S3·VPC·Cognito 풀 아키텍처', 'CloudWatch 모니터링·로깅'],
      devops: ['CI/CD 파이프라인 End-to-end', '컨테이너 기반 배포 자동화'],
      fullstack: ['React 칸반·캘린더 + FastAPI API'],
      ai: ['Python FastAPI 백엔드·데이터 모델 설계'],
    },
    roles: ['cloud', 'devops', 'fullstack', 'ai'],
  },
];

export const education = [
  { date: '2019.10.21', text: '서울특별시 용산구 소재 신광여자고등학교 중퇴' },
  { date: '2021.08.30', text: '고등학교 졸업 검정고시 합격' },
  {
    date: '2022.03.30 ~ 2022.06.19',
    text: '[K-Digital Training] 웹 서비스 기반 빅데이터 분석 및 개발자 양성 — 에이콘 아카데미 (조기 취업)',
    link: 'http://acornedu.co.kr/unemployed/edu_detail.jsp?seq=140',
  },
  {
    date: '2024.10.08 ~ 2025.04.04',
    text: '[산업구조변화대응] AWS 하이브리드 클라우드 구축 & 운영 엔지니어링(Docker) — 하이미디어 종로',
    link: 'https://www.himediaacademy.kr/Support/work_view/it/C405241620174247',
  },
  {
    date: '2026.05.15 ~ 2026.07.14',
    text: '심화_생성형 AI활용 인재양성과정 (조별멘토) — 하이미디어 강남',
    link: 'https://www.work24.go.kr/hr/a/a/3100/selectTracseDetl.do?tracseId=AIG20240000459066',
  },
];

export const skills = {
  '프로그래밍 언어': ['Python', 'JavaScript', 'TypeScript'],
  프론트엔드: ['HTML/CSS3', 'SCSS', 'React.js', 'Next.js', 'Vite'],
  백엔드: ['Node.js', 'FastAPI', 'Flask'],
  데이터베이스: ['MySQL', 'Oracle', 'MariaDB'],
  OS: ['Linux', 'Windows', 'macOS'],
  인프라: ['Docker', 'Kubernetes', 'AWS (EC2, S3, RDS)', 'NginX', 'Apache'],
  'CI/CD': [
    'GitHub Actions',
    'GitLab CI/CD',
    'Jenkins',
    'AWS CodePipeline',
    'ArgoCD',
  ],
  IDE: ['VSCode', 'WebStorm', 'PyCharm'],
  'AI Coding Agent': ['Cursor', 'Antigravity', 'Claude'],
  '형상 관리': ['GitHub', 'GitLab'],
  'AI / Data': [
    'CSV·Zip 전처리',
    'Nivo Chart',
    'Elastic Search',
    'react-leaflet',
    'Annotation Tool',
  ],
  '협업 도구': ['Figma', 'Notion', 'Jira', 'Slack'],
};

const skillOrderByRole = {
  ai: [
    '프로그래밍 언어',
    'AI Coding Agent',
    'AI / Data',
    '백엔드',
    '프론트엔드',
    '데이터베이스',
    '인프라',
    'CI/CD',
    '협업 도구',
  ],
  fullstack: [
    '프론트엔드',
    '프로그래밍 언어',
    'AI Coding Agent',
    '백엔드',
    '데이터베이스',
    '형상 관리',
    'IDE',
    '협업 도구',
    'CI/CD',
  ],
  devops: [
    '인프라',
    'CI/CD',
    'OS',
    '프로그래밍 언어',
    '형상 관리',
    'AI Coding Agent',
    '협업 도구',
    'IDE',
  ],
  cloud: [
    '인프라',
    'CI/CD',
    'OS',
    '데이터베이스',
    '백엔드',
    '형상 관리',
    'AI Coding Agent',
    '협업 도구',
  ],
};

/** 프로젝트·경력 항목을 직무별 문구로 병합 */
export function resolveRoleContent(item, roleId) {
  const roleDetail = item.detailByRole?.[roleId];
  return {
    summary: item.summaryByRole?.[roleId] ?? item.summary,
    highlights: item.highlightsByRole?.[roleId] ?? item.highlights,
    tags: item.tagsByRole?.[roleId] ?? item.tags,
    detailOverview:
      roleDetail?.detailOverview ?? item.detailOverview,
    sections: roleDetail?.sections ?? item.sections,
  };
}

export function getCareerForRole(roleId) {
  const companyDesc =
    career.company.descriptionByRole?.[roleId] ?? career.company.description;

  const projects = [...career.projects]
    .map(p => mergeCareerProjectDetails(p))
    .map(p => {
      const content = resolveRoleContent(p, roleId);
      return { ...p, ...content, _priority: p.roles.includes(roleId) ? 0 : 1 };
    })
    .sort((a, b) => a._priority - b._priority)
    .map(({ _priority, ...rest }) => rest);

  return {
    company: { ...career.company, description: companyDesc },
    projects,
  };
}

export function getPersonalProjectsForRole(roleId) {
  return [...personalProjects]
    .map(p => {
      const content = resolveRoleContent(p, roleId);
      return { ...p, ...content, _priority: p.roles.includes(roleId) ? 0 : 1 };
    })
    .sort((a, b) => a._priority - b._priority)
    .map(({ _priority, ...rest }) => rest);
}

export function getSkillsForRole(roleId) {
  const highlight = roles[roleId]?.skillHighlight || [];
  const order = skillOrderByRole[roleId] || Object.keys(skills);

  const entries = order
    .filter(key => skills[key])
    .map(key => [key, [...skills[key]]]);

  Object.keys(skills).forEach(key => {
    if (!order.includes(key)) entries.push([key, [...skills[key]]]);
  });

  if (roleId === 'cloud') {
    const infra = entries.find(([k]) => k === '인프라');
    if (infra) {
      infra[1] = [
        'AWS EC2',
        'AWS EKS',
        'AWS RDS',
        'AWS S3',
        'AWS VPC',
        'Cognito',
        'CloudWatch',
        'Docker',
        'Kubernetes',
        'NginX',
      ];
    }
  }

  if (roleId === 'devops') {
    const cicd = entries.find(([k]) => k === 'CI/CD');
    if (cicd) {
      cicd[1] = [
        'GitHub Actions',
        'GitLab CI/CD',
        'Jenkins',
        'ArgoCD',
        'AWS CodePipeline',
      ];
    }
  }

  if (roleId === 'fullstack') {
    return {
      ordered: Object.fromEntries(entries.filter(([k]) => k !== 'AI / Data')),
      highlight,
    };
  }

  if (roleId === 'devops' || roleId === 'cloud') {
    return {
      ordered: Object.fromEntries(entries.filter(([k]) => k !== 'AI / Data')),
      highlight,
    };
  }

  return { ordered: Object.fromEntries(entries), highlight };
}

export const careerWorkTypeFilters = [
  { id: 'all', label: '전체' },
  { id: 'Develop', label: 'Develop' },
  { id: 'Maintain', label: 'Maintain' },
  { id: 'Develop & Maintain', label: 'Develop & Maintain' },
  { id: 'OUTBOUND', label: 'OUTBOUND' },
];

export const personalProjectCategoryFilters = [
  { id: 'all', label: '전체' },
  { id: 'personal', label: '개인' },
  { id: 'academy', label: '학원' },
];

export const landingRoles = [
  {
    ...roles.ai,
    description: 'Mining Cloud·브랜드 네이밍·Annotation — 데이터→AI 워크플로',
  },
  {
    ...roles.fullstack,
    description: '10+ 사내 프로젝트 · React/Next · Admin·CS·출원 플로우',
  },
  {
    ...roles.cloud,
    description: 'AWS EKS·RDS·S3 · WIARY · S3 실무 · 네트워크',
  },
  {
    ...roles.devops,
    description: '자동화·CI/CD · 개발자 출신 DevOps · STAR 사례',
  },
];
