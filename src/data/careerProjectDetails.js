/**
 * 경력 프로젝트 모달용 상세 본문 (카드 요약과 분리)
 * getCareerForRole에서 id 기준으로 병합됩니다.
 */
export const careerProjectDetails = {
  'markcloud-outbound-2024': {
    detailOverview: [
      '2023년 8월 퇴사 후, 전 직장 MarkCloud에서 단기 외주(5일)로 재협력했습니다. 마크뷰(MarkView) AI·유료검색 UX 이슈와 마크클라우드 전사 CS 연동을 집중 처리했으며, 기존 코드베이스·배포 환경을 이미 알고 있어 빠르게 온보딩 없이 실서비스 패치가 가능했습니다.',
      '식별력 판단·GPT 응답 UI, 유료검색 SPA 상태 복원, 한/영 쿠키, 이미지 업로드 모달, 미국 상세검색 필수값 등 사용자·운영에서 제기된 이슈를 프론트 단에서 해결했습니다. 백엔드 API 스펙에 맞춰 연동·예외 처리·로딩/타임아웃 UX까지 한 번에 정리했습니다.',
    ],
    sections: [
      {
        title: '프로젝트 배경 · 협업',
        items: [
          '퇴사 후 전 직장 요청으로 2024.04.22 ~ 04.26 (5일) 단기 OUTBOUND',
          '마크뷰·마크픽·마크통·마크클라우드 메인 등 기존 담당 서비스 코드베이스 재활용',
          '기획·운영·CS 팀에서 전달된 긴급·개선 항목을 우선순위별로 일괄 처리',
          '배포·검수 일정에 맞춰 핫픽스 단위로 커밋·반영',
        ],
      },
      {
        title: '마크뷰 — AI · 식별력 · GPT',
        items: [
          '【식별력 판단】 판단 UI 컴포넌트 및 백엔드 API 연결 — 결과 표시·에러 상태 처리',
          '【GPT】 Loading UI — 응답 대기 중 사용자 이탈 방지용 스피너·문구·비활성 처리',
          '【GPT】 Timeout UI — 장시간 미응답 시 재시도·안내 메시지·요청 취소 플로우',
          '【브랜드 네이밍】 지정상품 설명 영역 한 칸 밀림 레이아웃 버그 수정',
        ],
      },
      {
        title: '마크뷰 — 유료검색 · UX',
        items: [
          '유료검색 결과 페이지: 새로고침·뒤로가기 시 검색 조건·탭·스크롤 상태 복원 (SPA 상태 관리)',
          '한/영 페이지 전환 시 사용자 선택·검색 컨텍스트 쿠키 저장·복원',
          '결과 페이지 탭 호버 시 스타일·포커스 깨짐 현상 수정',
          '유료검색 이미지 업로드 모달에 완료 버튼 추가 — 업로드 완료 전 닫힘 방지',
          '미국 상세검색 불필요 필수값 제거 — 입력 부담·이탈률 개선',
        ],
      },
      {
        title: '전사 · 마크클라우드',
        items: [
          '등록 가능성 전문가 의뢰 링크: 마크통 → 마크픽 서비스로 변경 (크로스 서비스 라우팅)',
          'FAQ 하단 「지원팀 문의」 → 채널톡(Channel Talk) 연동으로 CS 응대 채널 통일',
        ],
      },
      {
        title: '기술 · 성과',
        items: [
          'React 기반 마크뷰 프론트, REST API 연동, 쿠키·sessionStorage·URL 쿼리 상태 설계',
          '단기간 다수 이슈 처리로 서비스 안정성·CS 문의 감소에 기여',
          '퇴사 후에도 신뢰 관계 유지 — 이후에도 기술 자문·단기 협력 가능성 확보',
        ],
      },
    ],
    detailByRole: {
      ai: {
        detailOverview: [
          '단기 외주 기간 중 AI·검색 관련 UX에 집중했습니다. 식별력 판단 API 연동, GPT Loading/Timeout 처리, 브랜드 네이밍 UI 버그 수정 등 모델·API 응답을 사용자가 이해하기 쉬운 화면으로 만드는 작업이었습니다.',
        ],
        sections: [
          {
            title: 'AI · 데이터 UX',
            items: [
              '식별력 판단: API 요청·응답 매핑, 로딩·실패·빈 결과 UI',
              'GPT: 비동기 응답 대기·타임아웃·재시도 UX 패턴 적용',
              '브랜드 네이밍 지정상품 설명 레이아웃 — AI 결과와 함께 보이는 텍스트 정렬 수정',
              '유료검색 이미지 업로드 — AI·이미지 검색 플로우 상 모달 완료 조건 명확화',
            ],
          },
        ],
      },
    },
  },

  'markcloud-main': {
    detailOverview: [
      'MarkCloud 회사 소개 메인 페이지는 입사 직후부터 담당한 장기 Maintain 프로젝트입니다. 디자인 리뉴얼 퍼블리싱, 이벤트·공지 팝업 운영, React.js → Next.js Migration까지 회사 대표 얼굴이 되는 페이지의 품질·운영 효율을 책임졌습니다.',
      '가장 큰 개선은 팝업을 Static HTML/코드 배포 방식에서 자사 Admin Page CRUD 자동화로 전환한 것입니다. 운영팀이 개발자 없이 팝업을 등록·수정·노출 기간 설정할 수 있게 되어, 배포 주기·CS 대응 비용이 크게 줄었습니다.',
    ],
    sections: [
      {
        title: '프로젝트 개요',
        items: [
          '기간: 2022.06 ~ (퇴사 시점까지 지속 Maintain)',
          '역할: 프론트엔드 단독·주도 — 퍼블리싱, 기능 개발, Migration',
          '대상: markcloud.co.kr 회사 소개·채용·서비스 안내 메인',
        ],
      },
      {
        title: 'Maintain · 퍼블리싱',
        items: [
          '디자인 리뉴얼 시안에 맞춘 전체 섹션 퍼블리싱·반응형 대응',
          '배너·공지·이벤트 영역 정기 업데이트 및 크로스 브라우저 점검',
          '접근성·SEO 메타·오픈그래프 등 마케팅 요청 반영',
          '레거시 컴포넌트 정리 및 SCSS 구조 정돈',
        ],
      },
      {
        title: '팝업 자동화 (DevOps 관점 핵심)',
        items: [
          '기존: 팝업 추가·삭제·문구 변경마다 소스 수정 → 빌드 → 배포 필요',
          '개선: Admin Page에서 팝업 CRUD — 제목, 이미지, 링크, 노출 기간, 순서 관리',
          'API 연동으로 메인 페이지가 Admin 데이터를 fetch하여 동적 렌더링',
          '운영 담당자가 배포 없이 실시간에 가깝게 팝업 변경 가능',
          'STAR 사례: 배포 부담 제거 → 운영 효율 대폭 향상',
        ],
      },
      {
        title: 'React.js → Next.js Migration',
        items: [
          'CSR React 앱을 Next.js로 이전 — 라우팅·빌드 파이프라인 변경',
          '페이지 단위 코드 분할·SSR/SSG 검토 (회사 정책에 맞게 적용)',
          '환경 변수·배포 스크립트 정리로 이후 서비스 Migration 레퍼런스 역할',
          '기존 Admin·API 연동 로직 유지하며 점진적 마이그레이션',
        ],
      },
      {
        title: '기술 스택 · 성과',
        items: [
          'React.js / Next.js, SCSS, REST API, 자사 Admin 연동',
          '프론트 팀장으로서 메인·Admin 팝업 모듈 설계 가이드 제공',
          '회사 첫 인상을 결정하는 페이지의 안정적 운영 체계 구축',
        ],
      },
    ],
    detailByRole: {
      devops: {
        detailOverview: [
          '개발자 관점의 DevOps 사례로, Static 팝업 배포 의존을 Admin CRUD 자동화로 바꿔 운영·배포 간극을 줄였습니다. React → Next Migration으로 빌드·배포 파이프라인 현대화에도 기여했습니다.',
        ],
      },
    },
  },

  'annotation-image': {
    detailOverview: [
      '한국지능정보사회진흥원(NIPA) IP·상표 이미지 학습 데이터 구축 사업의 Annotation Tool(07·11·13번 데이터 유형)을 프론트에서 개발·유지보수했습니다. react-leaflet 기반 지도/이미지 위 사각형·다각형 Crop, Admin(관리자)·Worker(작업자) Page 분리 구조로 대규모 라벨링 운영을 지원했습니다.',
      '사업 종료 후에도 동일 Tool을 마크뷰(MarkView) 대표 서비스의 Image Crop/Labeling 기능으로 전환·확장하여, 간판·해외상표·사용자 업로드 데이터 등 다양한 유형의 상표 이미지 가공에 재사용했습니다. 데이터 라벨러(Client)와 직접 소통하며 Hotkey·진행도·배당 UI를 지속 개선했습니다.',
    ],
    sections: [
      {
        title: '프로젝트 · 도메인',
        items: [
          '발주: 한국지능정보사회진흥원 (NIPA) — AI 학습용 IP·상표 이미지 데이터셋',
          '데이터 유형: 07·11·13번 등 유형별 가공 화면·규칙 상이',
          '이후 마크뷰 서비스 내 Image Crop/Labeling Tool로 통합·운영',
        ],
      },
      {
        title: 'Admin Page (관리자)',
        items: [
          '작업자 계정·권한·프로젝트 생성·할당(배당) 관리',
          '프로젝트별 진행률·완료율·품질 지표 Dashboard',
          '작업 단위·배치 생성 및 Worker에게 작업 분배',
          '검수·반려·재작업 플로우 UI',
        ],
      },
      {
        title: 'Worker Page (작업자)',
        items: [
          'react-leaflet: 이미지/타일 위 사각형·다각형 Crop 영역 지정',
          'Crop 좌표·메타데이터 저장 — 백엔드 학습 포맷에 맞게 전송',
          '비엔나 분류 등 도메인별 태깅·라벨 입력 UI',
          '개인 진행도·남은 작업량 표시로 생산성 관리',
          '키보드 단축키·일괄 처리로 반복 작업 시간 단축',
        ],
      },
      {
        title: 'UX · 협업',
        items: [
          '데이터 라벨러(Client) 불편 사항 직접 인터뷰·피드백 반영',
          '잘못된 Crop·되돌리기·확대/축소 등 실무 워크플로우 최적화',
          '대용량 이미지·다건 작업 시 성능·로딩 UX 개선',
          'Admin/Worker 역할 분리로 권한·실수 방지',
        ],
      },
      {
        title: '기술 스택',
        items: [
          'React, react-leaflet, Image Crop/Canvas, REST API',
          'SCSS, 반응형(작업자 모니터 환경 기준) 레이아웃',
          '상태 관리: 작업 큐·Crop 좌표·저장 상태 동기화',
        ],
      },
    ],
    detailByRole: {
      ai: {
        detailOverview: [
          'AI 학습 데이터 품질은 라벨링 Tool UX에 직결됩니다. 다양한 상표 이미지(간판, 해외상표, 사용자 데이터) 가공 규칙을 이해하고, 라벨러가 빠르고 정확하게 작업할 수 있는 Annotation 환경을 설계·개선했습니다.',
        ],
      },
    },
  },

  'mining-cloud': {
    detailOverview: [
      '정보통신산업진흥원 AI 바우처 지원 사업 「Mining Cloud」는 마이데이터 기반 금융소외계층 대출 연체 예측 AI 솔루션입니다. 프론트엔드에서 CSV 업로드부터 전처리·정규화·변수 분석·학습용 데이터셋 생성·모델 검증 스텝까지 이어지는 end-to-end 워크플로 UI를 구현했습니다.',
      'multipart/form-data로 대용량 CSV를 전송·파싱해 Preview Table을 보여주고, train/validation/test로 Partitioning된 .zip 데이터셋을 unZip·내부 CSV parsing했습니다. Nivo Chart로 상관분석·교차분석 Heatmap·Bar Chart를 시각화하고 html2canvas로 리포트용 이미지 다운로드를 지원했습니다.',
    ],
    sections: [
      {
        title: '사업 · 목적',
        items: [
          '발주: 정보통신산업진흥원 — AI 바우처 (금융·마이데이터 도메인)',
          '목표: 대출 연체 예측 모델 학습을 위한 데이터 파이프라인·시각화',
          'GitHub: markcloud-FE-KDY/markcloud-mining-cloud (팀 저장소 기여)',
        ],
      },
      {
        title: '데이터 전처리 파이프라인',
        items: [
          'CSV 파일 multipart/form-data 업로드 → 서버/클라이언트 parse',
          '전처리·정규화 옵션 적용 후 Preview Table 실시간 표시',
          '결측치·이상치 처리 결과 확인 UI',
          '변수 선택·Feature Engineering 단계 화면',
        ],
      },
      {
        title: '학습 데이터셋 · Zip 처리',
        items: [
          'train / validation / test Partitioning 구조의 .zip 업로드',
          '클라이언트 unZip 후 내부 CSV 일괄 parsing',
          '데이터셋 버전·분할 비율 검증 표시',
          'AI 학습용 최종 데이터셋 export·다운로드 연동',
        ],
      },
      {
        title: '분석 · 시각화',
        items: [
          '상관분석·교차분석 수치 → Nivo Heatmap·Bar Chart',
          '차트 인터랙션·툴팁·범례 커스터마이징',
          'html2canvas로 차트 이미지 PNG 다운로드 (보고서·발표용)',
          '분석 단계별 스텝 UI — 사용자가 파이프라인 위치를 명확히 인지',
        ],
      },
      {
        title: '기술 · 성과',
        items: [
          'React, Nivo, JSZip/unzip, PapaParse 등 CSV·Zip 처리',
          '대용량 파일 업로드 진행률·에러 핸들링',
          '데이터 과학자·기획자가 코드 없이 파이프라인을 돌릴 수 있는 UX',
          '이후 Annotation·Mining Cloud 경험이 AI Developer 포트폴리오 핵심 근거',
        ],
      },
    ],
    detailByRole: {
      ai: {
        detailOverview: [
          '모델 학습 전 단계(전처리 → 정규화 → 변수 분석 → 데이터셋 생성 → 검증)를 UI로 연결해, 비개발자도 AI 워크플로를 이해·실행할 수 있게 했습니다. Zip·CSV 대용량 처리와 Nivo 시각화로 데이터→인사이트 흐름을 완성했습니다.',
        ],
      },
      devops: {
        detailOverview: [
          '반복 수작업 전처리·데이터셋 unpack을 웹 파이프라인으로 자동화했습니다. multipart 업로드·배치 parse·일괄 export는 이후 DevOps에서 말하는 「파이프라인 as Product」 관점의 초기 경험입니다.',
        ],
      },
    },
  },

  'admin': {
    detailOverview: [
      'MarkCloud 사내 Admin Page(admin.markcloud.co.kr)는 디자이너 없이 프론트 팀이 전면 리뉴얼·기능 확장한 백오피스입니다. Dashboard, 관리자 계정, 팝업, 상표 Q&A, 서비스·상품, 해외 데이터 캐시 등 운영에 필요한 CRUD를 API 기반으로 구현했습니다.',
      '가입자 통계·매출 현황을 Nivo Chart로 시각화하는 Dashboard를 추가했고, 메인 페이지 팝업 자동화·각 서비스 콘텐츠 관리가 Admin 한곳에서 이루어지도록 설계했습니다. 하드코딩·Static 배포에 의존하던 운영 방식을 제거한 것이 핵심 성과입니다.',
    ],
    sections: [
      {
        title: '프로젝트 개요',
        items: [
          '기간: 2022.09 ~ Develop & Maintain',
          'URL: https://admin.markcloud.co.kr',
          'GitHub: markcloud-FE-KDY/markcloud-admin-renewal',
          '역할: UI/UX 리뉴얼, Dashboard, 전 기능 CRUD 개발',
        ],
      },
      {
        title: '리뉴얼 · Dashboard',
        items: [
          '기존 Admin 전체 디자인을 자체 기획·시안 없이 프론트 주도로 리뉴얼',
          '가입자 통계·매출·서비스별 지표 Dashboard',
          'Nivo Chart — Line, Bar 등 시계열·비교 차트',
          '권한별 메뉴·라우트 분리 (슈퍼관리자·운영자)',
        ],
      },
      {
        title: '관리 기능 (CRUD)',
        items: [
          '관리자 계정 생성·수정·권한·비밀번호 정책',
          '메인·서비스 팝업 — 이미지, 기간, 링크, 노출 순서',
          '상표 Q&A, FAQ, 공지 콘텐츠',
          '서비스·상품(요금제) 메타데이터',
          '해외 상표·데이터 캐시 갱신·조회',
          '공통 테이블·폼·필터·페이지네이션 컴포넌트화',
        ],
      },
      {
        title: '운영 · DevOps 관점',
        items: [
          'API 기반 동적 데이터 — 배포 없이 콘텐츠·팝업 변경',
          'Validation·에러 메시지·낙관적 UI로 운영 실수 방지',
          '메인 페이지·마크픽 등 프론트 서비스와 동일 API 스펙 공유',
          '운영 담당자 교육·매뉴얼 수준의 직관적 UX',
        ],
      },
      {
        title: '기술 스택',
        items: [
          'React, SCSS, REST API, Nivo Chart',
          '재사용 Admin 컴포넌트 (Table, Form, Modal, Upload)',
          '이미지 업로드·에디터 연동',
        ],
      },
    ],
  },

  'text-annotation': {
    detailOverview: [
      '마크뷰(MarkView) 텍스트 상표 데이터 검수·가공을 위한 사내 Text Annotation Tool을 2022.12 ~ 2023.02에 개발·유지보수했습니다. 이미지 Annotation과 달리 텍스트 라인 단위 검수에 최적화했으며, HotKey 중심 UX로 마우스 없이 키보드만으로 빠른 검수가 가능하도록 설계했습니다.',
      '데이터 라벨러(Client)의 작업 속도·정확도가 KPI이므로, 단축키 매핑·포커스 이동·일괄 승인/반려·다음 항목 자동 로드 등 반복 작업을 줄이는 인터랙션에 집중했습니다.',
    ],
    sections: [
      {
        title: '프로젝트 개요',
        items: [
          '기간: 2022.12 ~ 2023.02',
          '대상: 마크뷰 텍스트 상표 메타·라벨 데이터',
          '유형: Develop & Maintain',
        ],
      },
      {
        title: '핵심 기능',
        items: [
          '텍스트 라인·필드별 검수·수정·태깅 UI',
          'HotKey: 다음/이전, 승인, 반려, 저장, 포커스 이동 등 전 기능 키보드 매핑',
          '작업 큐·진행률·남은 건수 표시',
          '검수 이력·되돌리기(Undo) 지원',
          'Admin에서 작업 배당 → Worker 화면에 로드',
        ],
      },
      {
        title: 'UX · 성과',
        items: [
          '라벨러 인터뷰 기반 단축키 커스터마이징 검토',
          '마우스 의존도 감소 → 시간당 처리 건수 향상',
          '이미지 Tool과 동일한 Admin/Worker 분리 패턴 재사용',
        ],
      },
      {
        title: '기술 스택',
        items: [
          'React, 전역/로컬 HotKey 이벤트 핸들링',
          'REST API, 실시간 저장·충돌 방지',
        ],
      },
    ],
    detailByRole: {
      ai: {
        detailOverview: [
          '텍스트 라벨링 품질은 모델 성능에 직결됩니다. HotKey 기반 고속 검수 환경과 명확한 작업 상태(승인/반려/보류) UI로 데이터 생산성과 정확도 균형을 맞췄습니다.',
        ],
      },
    },
  },

  'markgroup': {
    detailOverview: [
      '마크그룹(MarkGroup)은 특허법률사무소·IP 실무자를 위한 그룹웨어 서비스입니다(markcloud.co.kr/mark-group). 프로젝트 현황, 주간 보고, 공지, 게시판, 지식재산 관리 등 CRUD를 React로 구현했고, 이미지 처리 파이프라인 개선이 대표적인 기술 성과입니다.',
      '기존 base64 Request/Response 방식은 1MB당 약 6초 인코딩 오버헤드로 성능·UX에 치명적이었습니다. 특정 문자열 치환 + form-data POST → AWS S3 URL 변환 파이프라인을 구축하고, URL 특수문자 치환·복원으로 API 오류를 해결했습니다. 비대면 서비스 바우처 공급기업 선정을 위한 소개자료 작성에도 참여했습니다.',
    ],
    sections: [
      {
        title: '서비스 · 도메인',
        items: [
          '타겟: 특허법률사무소·IP 담당자 그룹웨어',
          '기간: 2022.12 ~ Develop & Maintain',
          'GitHub: markcloud-FE-KDY/markcloud-markgroup',
          'URL: https://markcloud.co.kr/mark-group',
        ],
      },
      {
        title: '기능 개발 (CRUD)',
        items: [
          '프로젝트 현황·칸반/리스트 뷰',
          '주간 보고 작성·조회·댓글',
          '공지사항·게시판 (첨부파일·이미지)',
          '지식재산(특허·상표) 메타 관리',
          '권한·조직·멤버 관리 연동',
        ],
      },
      {
        title: '이미지 파이프라인 (S3)',
        items: [
          'Before: 이미지 base64 인코딩 → API body — 1MB당 ~6초, 메모리·트래픽 부담',
          'After: 클라이언트 form-data POST → 백엔드 S3 업로드 → URL 반환',
          '특정 문자열 치환으로 URL 내 예약문자·특수문자 API 오류 방지',
          '표시 시 치환 복원으로 기존 UX(미리보기·에디터) 유지',
          '렌더링·업로드 속도 개선, 모바일·저사양 환경 체감 성능 향상',
        ],
      },
      {
        title: '사업 · 기타',
        items: [
          '비대면 서비스 바우처 공급기업 선정 — 소개자료·기능 설명 문서 작성',
          '마크클라우드 B2B 영업·제안 지원',
        ],
      },
      {
        title: '기술 스택',
        items: [
          'React, SCSS, REST API, AWS S3 (presigned URL / 업로드 연동)',
          'form-data, File API, 이미지 리사이즈(필요 시)',
        ],
      },
    ],
    detailByRole: {
      cloud: {
        detailOverview: [
          'AWS S3 기반 객체 스토리지로 이미지 서빙 구조를 전환했습니다. 클라이언트 UX를 유지하면서 트래픽·스토리지 비용·응답 시간을 개선한 실무 클라우드 적용 사례입니다.',
        ],
      },
      devops: {
        detailOverview: [
          'base64 → S3 URL 파이프라인은 데이터 전송·저장 방식 최적화의 대표 사례입니다. 인코딩 오버헤드 제거, API 안정성·특수문자 처리까지 포함한 end-to-end 개선입니다.',
        ],
      },
    },
  },

  'markpick': {
    detailOverview: [
      '마크픽(MarkPick, markpick.co.kr)은 상표 등록 대행·셀프 출원 서비스입니다. 2023.03부터 상표 등록 대행 플로우(STEP 1·2·3)를 담당하며, 겹치는 단계 UI를 공통 컴포넌트로 추출해 유지보수성을 높였습니다. 메인, 로그인, 아이디/비밀번호 찾기, 절차 소개, 요금 안내 등 CS(Customer Service) 성격의 전 페이지를 개발했습니다.',
      '카테고리 코드 API 연동, 동적 폼(상품/류별 입력), 유효성 검사, 에러 메시지·로딩 상태 처리로 출원 이탈을 줄이는 UX에 집중했습니다. 상표 출원이라는 규제·도메인 지식이 필요한 영역에서 기획·운영·법무 피드백을 반영하며 프론트를 주도했습니다.',
    ],
    sections: [
      {
        title: '프로젝트 개요',
        items: [
          '기간: 2023.03 ~ Develop & Maintain',
          'URL: https://markpick.co.kr',
          '역할: 대행 플로우·CS 페이지 프론트 주도',
        ],
      },
      {
        title: '상표 등록 대행 (STEP)',
        items: [
          'STEP 1·2·3 공통 레이아웃·헤더·진행 바 컴포넌트화',
          '출원인·상표 이미지·지정상품·류 분류 입력',
          '카테고리 코드 API — 동적 옵션·종속 셀렉트',
          '단계별 Validation — 필수값·형식·파일 크기',
          '임시 저장·이어하기·결제 전 요약 화면',
        ],
      },
      {
        title: 'CS · 마케팅 페이지',
        items: [
          '메인 랜딩·서비스 소개',
          '로그인·회원가입·아이디/비밀번호 찾기',
          '출원 절차·요금·FAQ 안내',
          '반응형 SCSS, SEO·전환율 고려한 CTA 배치',
        ],
      },
      {
        title: '기술 · UX',
        items: [
          'React, 공통 Form/Input/Select/Upload 컴포넌트',
          'API 에러 코드별 사용자 메시지 매핑',
          '동적 폼 스키마 — 류·상품 수에 따른 필드 추가/제거',
          '접근성·모바일 출원 신청 시나리오 대응',
        ],
      },
      {
        title: '성과',
        items: [
          '중복 코드 제거로 STEP 수정 시 한 곳만 변경',
          'CS 페이지 일괄 구축으로 마크픽 서비스 런칭·운영 지원',
          '마크뷰·마크통과 크로스 링크(전문가 의뢰 등) 연동 경험',
        ],
      },
    ],
  },

  'markview-crop': {
    detailOverview: [
      '마크뷰 유료 검색의 이미지 크롭 기능 Maintain 프로젝트(2023.04 ~ 05)입니다. 초기에는 canvas로 실제 픽셀 크롭을 수행했으나, 리사이즈·인코딩 과정에서 화질 저하가 발생해 검색 품질에 영향을 주었습니다.',
      '해결: Crop UI는 canvas로 사용자에게 시각적 Effect만 제공하고, 실제 검색에는 클릭·드래그 좌표만 API로 전달합니다. 원본 해상도 이미지에 min/max 비율을 계산해 좌표를 정규화함으로써 화질 손실 없이 이미지 유사도 검색 품질을 유지했습니다.',
    ],
    sections: [
      {
        title: '문제 정의',
        items: [
          'canvas 기반 실제 크롭 → 재인코딩 → 화질 저하',
          '상표 이미지 검색은 픽셀 품질이 결과 정확도에 직결',
          '사용자는 크롭 영역을 보고 싶지만, 서버에는 원본+좌표가 필요',
        ],
      },
      {
        title: '해결 방안',
        items: [
          'UI: canvas overlay로 Crop 영역 하이라이트 (Effect only)',
          'API: 클릭·드래그 bounding box 좌표 전송',
          '이미지 naturalWidth/Height 대비 비율 calculate 후 정규화',
          '다양한 업로드 이미지 비율·min/max size 대응',
        ],
      },
      {
        title: '구현 · 테스트',
        items: [
          '좌표 drift·해상도 변경 시 재계산 로직',
          '모바일 터치 드래그 지원',
          '검색 API 스펙에 맞는 좌표 포맷 협의·연동',
          'QA: 동일 이미지 crop 전후 검색 결과 비교',
        ],
      },
      {
        title: '기술 · 성과',
        items: [
          'HTML5 Canvas, React, REST API',
          '화질 유지 + UX 유지 동시 달성',
          '이미지 검색·AI 유료검색 플로우의 핵심 입력 품질 개선',
        ],
      },
    ],
  },

  'marktong': {
    detailOverview: [
      '마크통(MarkTong) 모바일 앱 소개 랜딩 페이지를 2023.05부터 단독 Develop했습니다. 앱 스토어 연동 전 사용자에게 서비스 가치·기능·다운로드 경로를 안내하는 마케팅 페이지로, 모바일·태블릿·데스크톱 반응형 SCSS와 스크롤 기반 등장 인터랙션을 적용했습니다.',
      '디자인 시안을 받아 섹션별 퍼블리싱, 스크롤 감지(Intersection Observer 또는 scroll 이벤트)로 요소 fade/slide 인 애니메이션, CTA 버튼·스크린샷 갤러리 등을 구현했습니다.',
    ],
    sections: [
      {
        title: '프로젝트 개요',
        items: [
          '기간: 2023.05 ~',
          '유형: Develop (소개 랜딩 단독)',
          '대상: 마크통 모바일 앱 (상표·IP 관련 앱)',
        ],
      },
      {
        title: '구현 내용',
        items: [
          '히어로·기능 소개·스크린샷·다운로드 CTA 섹션',
          '모바일 퍼스트 반응형 SCSS (breakpoints)',
          '스크롤 감지 요소 등장 인터랙션 (fade, translate)',
          '앱 스토어·플레이 스토어 링크·QR(요청 시)',
          '경량 번들·이미지 lazy load',
        ],
      },
      {
        title: '기술 스택',
        items: [
          'React, SCSS, Scroll Animation',
          '반응형 typography·spacing 시스템',
        ],
      },
    ],
  },

  'brand-naming': {
    detailOverview: [
      '마크뷰 브랜드 네이밍 기능(2023.04 ~ 05)은 사용자가 키워드를 입력하면 Elastic Search 기반으로 AI·규칙 혼합 브랜드명 후보를 생성하는 실서비스 기능입니다. 프론트에서 API 연동, 결과 리스트·선택 UI, 배경색 대비에 따른 글자색(hex) 자동 계산으로 가독성을 보장했습니다.',
      '지정상품 설명·네이밍 결과 카드 레이아웃, 로딩·에러 상태, 외주 기간 중 발생한 UI 밀림 이슈 수정까지 담당했습니다. Elastic Search·GPT 계열 API와 맞닿는 마크뷰 AI 기능군의 일부입니다.',
    ],
    sections: [
      {
        title: '기능 설명',
        items: [
          '키워드·업종·선호 스타일 입력 폼',
          'Elastic Search 기반 브랜드명 생성 API 호출',
          '결과 리스트·즐겨찾기·복사·재생성',
          'backgroundColor 수신 시 luminance 계산 → color(hex) 자동 설정',
          '지정상품·상표 류 연동 설명 UI',
        ],
      },
      {
        title: 'UI · UX',
        items: [
          '카드형 결과 — 브랜드명·설명·색상 미리보기',
          '대비 부족 시 WCAG에 가까운 readable color 적용',
          '로딩·빈 결과·API 오류 안내',
          '외주(2024): 지정상품 설명 한 칸 밀림 레이아웃 수정',
        ],
      },
      {
        title: '기술 · 연계',
        items: [
          'React, REST API, Elastic Search (백엔드 연동)',
          '색상 대비: RGB → relative luminance → 전경색 선택',
          '마크뷰 유료검색·식별력·GPT 기능과 동일 플랫폼',
        ],
      },
      {
        title: '성과',
        items: [
          'AI 네이밍을 실서비스 UI에 안정적으로 통합',
          '가독성 자동 처리로 디자이너 없이도 일관된 결과 카드',
          'AI Developer 포트폴리오 — ES·검색·생성 UI 경험',
        ],
      },
    ],
    detailByRole: {
      ai: {
        detailOverview: [
          '키워드 → Elastic Search → 브랜드명 후보 생성 파이프라인의 사용자-facing 레이어를 구현했습니다. 검색·생성 API 연동과 시각적 가독성(색상 대비)까지 AI 결과를 「쓸 수 있는 UI」로 만드는 것이 목표였습니다.',
        ],
      },
    },
  },
};

/** 경력 프로젝트 배열에 상세 데이터 병합 */
export function mergeCareerProjectDetails(project) {
  const detail = careerProjectDetails[project.id];
  if (!detail) return project;
  return {
    ...project,
    detailOverview: detail.detailOverview ?? project.detailOverview,
    sections: detail.sections ?? project.sections,
    detailByRole: {
      ...project.detailByRole,
      ...detail.detailByRole,
    },
  };
}
