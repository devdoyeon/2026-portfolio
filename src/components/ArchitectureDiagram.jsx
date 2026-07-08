// 프로젝트 시스템 아키텍처 SVG 다이어그램 — ClickMe·Eraser의 실제 코드 구조 기반
// 다크 테마 + 카테고리 색(agent/llm/graph/db/tool)으로 AI 엔지니어링 흐름을 시각화

function Box({ x, y, w, h, kind = 'default', title, lines = [] }) {
  const hasLines = lines.length > 0;
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx="8" className={`arch-node arch-node--${kind}`} />
      <text
        x={x + w / 2}
        y={hasLines ? y + 20 : y + h / 2 + 4}
        className="arch-title"
        textAnchor="middle"
      >
        {title}
      </text>
      {lines.map((line, i) => (
        <text key={i} x={x + 12} y={y + 38 + i * 16} className="arch-sub" textAnchor="start">
          {line}
        </text>
      ))}
    </g>
  );
}

function Arrow({ x1, y1, x2, y2, dashed = false, label }) {
  return (
    <g>
      <line
        x1={x1}
        y1={y1}
        x2={x2}
        y2={y2}
        className={`arch-arrow ${dashed ? 'arch-arrow--dashed' : ''}`.trim()}
        markerEnd="url(#arch-arrowhead)"
      />
      {label && (
        <text x={(x1 + x2) / 2} y={(y1 + y2) / 2 - 5} className="arch-label" textAnchor="middle">
          {label}
        </text>
      )}
    </g>
  );
}

function Defs() {
  return (
    <defs>
      <marker
        id="arch-arrowhead"
        markerWidth="10"
        markerHeight="10"
        refX="7.5"
        refY="4"
        orient="auto"
        markerUnits="userSpaceOnUse"
      >
        <path d="M0,0 L8,4 L0,8 Z" className="arch-arrowhead" />
      </marker>
    </defs>
  );
}

function Legend({ x, y, items }) {
  return (
    <g transform={`translate(${x}, ${y})`}>
      {items.map((it, i) => (
        <g key={it.label} transform={`translate(${i * 118}, 0)`}>
          <rect width="12" height="12" rx="3" className={`arch-node arch-node--${it.kind}`} />
          <text x="18" y="10" className="arch-legend">
            {it.label}
          </text>
        </g>
      ))}
    </g>
  );
}

function ClickMeDiagram() {
  return (
    <svg viewBox="0 0 900 680" className="arch-svg" role="img" aria-label="ClickMe 시스템 아키텍처">
      <Defs />

      {/* Zone 1 — 채팅 오케스트레이션 */}
      <text x="20" y="24" className="arch-zone">01 · 채팅 오케스트레이션 (SSE)</text>
      <Box x={40} y={36} w={120} h={40} title="사용자" />
      <Arrow x1={160} y1={56} x2={232} y2={56} />
      <Box x={232} y={36} w={190} h={40} kind="default" title="FastAPI /api/chat" />
      <Arrow x1={327} y1={76} x2={327} y2={104} />
      <Box
        x={150}
        y={104}
        w={600}
        h={52}
        kind="agent"
        title="Deep Agent"
        lines={['deepagents · create_deep_agent + CHAT_POLICY (프롬프트+docstring 라우팅)']}
      />
      <Arrow x1={450} y1={156} x2={450} y2={182} />

      <Box x={40} y={188} w={150} h={40} kind="tool" title="ask_simulation" />
      <Box x={205} y={188} w={155} h={40} kind="tool" title="ask_management" />
      <Box x={375} y={188} w={150} h={40} kind="tool" title="ask_generator" />
      <Box x={540} y={188} w={200} h={40} kind="tool" title="ask_general_knowledge" />
      <Box
        x={755}
        y={188}
        w={110}
        h={52}
        kind="tool"
        title="run_* 위젯"
        lines={['시뮬·생성·개선']}
      />
      {/* agent → tools */}
      <Arrow x1={200} y1={162} x2={115} y2={188} dashed />
      <Arrow x1={330} y1={162} x2={282} y2={188} dashed />
      <Arrow x1={520} y1={162} x2={450} y2={188} dashed />
      <Arrow x1={620} y1={162} x2={640} y2={188} dashed />

      {/* Zone 2 — 도메인 (헥사고날) */}
      <text x="20" y="278" className="arch-zone">02 · 도메인 (DDD · 헥사고날)</text>
      <Box
        x={40}
        y={290}
        w={195}
        h={78}
        kind="graph"
        title="Simulation"
        lines={['contracts · adapters', 'service · graph', 'wiring (mock↔real)']}
      />
      <Box
        x={250}
        y={290}
        w={195}
        h={78}
        kind="graph"
        title="Management"
        lines={['ReAct RAG 그래프', 'HITL interrupt', 'wiring (mock↔real)']}
      />
      <Box
        x={460}
        y={290}
        w={185}
        h={78}
        kind="default"
        title="Generator"
        lines={['schemas · adapters', 'service · graph']}
      />
      <Box
        x={660}
        y={290}
        w={200}
        h={78}
        kind="default"
        title="Chat"
        lines={['llm · retriever', 'report']}
      />
      {/* tools → domains */}
      <Arrow x1={115} y1={228} x2={130} y2={290} dashed />
      <Arrow x1={282} y1={228} x2={340} y2={290} dashed />
      <Arrow x1={450} y1={228} x2={540} y2={290} dashed />
      <Arrow x1={640} y1={228} x2={750} y2={290} dashed />

      {/* Zone 3 — 엔진 강조 */}
      <text x="20" y="410" className="arch-zone">03 · 핵심 엔진</text>

      {/* 시뮬 엔진 */}
      <Box
        x={40}
        y={424}
        w={405}
        h={44}
        kind="graph"
        title="시뮬 엔진 · LangGraph (map-reduce)"
        lines={['interpret_ad → load_panel → Send×N react → aggregate']}
      />
      <Arrow x1={242} y1={468} x2={242} y2={494} />
      <Box
        x={40}
        y={494}
        w={405}
        h={58}
        kind="llm"
        title="SSR 임베딩 스코어링  (no LLM · 결정론)"
        lines={['OpenAI embed → 앵커 코사인 → softmax 분포', '4대 KPI를 스칼라 아닌 분포로 (mean·p10·p90)']}
      />

      {/* RAG */}
      <Box
        x={470}
        y={424}
        w={200}
        h={58}
        kind="default"
        title="CLIO 일반지식 RAG"
        lines={['pgvector 코사인 top-k', '근거 게이트(<0.35)']}
      />
      <Box
        x={685}
        y={424}
        w={175}
        h={58}
        kind="default"
        title="Management RAG"
        lines={['벡터 + GIN 키워드', 'RRF → CRAG-lite']}
      />
      <Arrow x1={570} y1={482} x2={620} y2={520} />
      <Arrow x1={772} y1={482} x2={720} y2={520} />
      <Box x={585} y={520} w={190} h={38} kind="db" title="PostgreSQL + pgvector" />

      <Legend
        x={40}
        y={624}
        items={[
          { kind: 'agent', label: 'Deep Agent' },
          { kind: 'tool', label: '@tool 위임' },
          { kind: 'graph', label: 'LangGraph' },
          { kind: 'llm', label: 'LLM·임베딩' },
          { kind: 'db', label: 'DB' },
        ]}
      />
    </svg>
  );
}

function EraserDiagram() {
  return (
    <svg viewBox="0 0 820 486" className="arch-svg" role="img" aria-label="Eraser 시스템 아키텍처">
      <Defs />

      <Box x={312} y={16} w={196} h={46} title="이미지 업로드" lines={['POST /process']} />
      <Arrow x1={410} y1={62} x2={410} y2={80} />
      <Box x={282} y={80} w={256} h={34} title="전처리 · 검증 + EXIF/GPS 제거" />
      <Arrow x1={410} y1={114} x2={410} y2={132} />
      <Box
        x={200}
        y={132}
        w={420}
        h={50}
        kind="llm"
        title="Gemini Function Calling 라우팅"
        lines={['RiskAssessment { fingerprint, iris, ocr }  · 실패 시 전부 실행']}
      />
      <Arrow x1={410} y1={182} x2={410} y2={210} />

      {/* 3 모듈 — 순차 이미지 체이닝(가로 화살표로 표현) */}
      <Box
        x={20}
        y={210}
        w={245}
        h={104}
        kind="graph"
        title="지문"
        lines={[
          '1 · MediaPipe 손끝 검출',
          '2 · 기하 필터(손바닥 법선)',
          '3 · VLM 재확인 (애매건)',
          '4 · Stability AI Inpaint',
        ]}
      />
      <Box
        x={288}
        y={210}
        w={245}
        h={104}
        kind="graph"
        title="홍채"
        lines={[
          'FaceLandmarker + EAR·yaw',
          '주파수 블렌딩(mag+phase)',
          '프랙탈 노이즈 + PGD',
          'IrisCode 해밍 ≥ 0.32 검증',
        ]}
      />
      <Box
        x={556}
        y={210}
        w={245}
        h={104}
        kind="graph"
        title="텍스트 (OCR)"
        lines={[
          'EasyOCR (ko/en)',
          '라인 그룹핑',
          'Gemini PII 판별 · bbox',
          '단색 / 모자이크',
        ]}
      />
      <Arrow x1={265} y1={262} x2={288} y2={262} />
      <Arrow x1={533} y1={262} x2={556} y2={262} />

      <Arrow x1={410} y1={314} x2={410} y2={334} />
      <Box
        x={250}
        y={334}
        w={320}
        h={44}
        kind="db"
        title="schema.py 통일 계약"
        lines={['ModuleResult · BoundingBox (모듈형 모놀리식)']}
      />
      <Arrow x1={410} y1={378} x2={410} y2={398} />
      <Box x={250} y={398} w={320} h={36} kind="llm" title="Gemini 보안 리포트 → JSON 응답" />

      <Legend
        x={302}
        y={462}
        items={[
          { kind: 'llm', label: 'LLM·VLM' },
          { kind: 'graph', label: '모듈' },
        ]}
      />
    </svg>
  );
}

// --- ClickMe 서비스 파이프라인 (광고 전주기: 집행 전 → 집행 후 → IMPROVE 루프) ---
const PIPELINE_STEPS = [
  { n: 1, title: '광고 생성', desc: '상품정보 입력 → AI 시안 3종', color: '#7c3aed', col: 'L', row: 0 },
  { n: 2, title: '시뮬레이션', desc: '가상 페르소나 반응 → 4대 KPI 분포', color: '#2563eb', col: 'L', row: 1 },
  { n: 3, title: '개선 생성', desc: '시뮬 피드백 → IMPROVE 재생성', color: '#7c3aed', col: 'L', row: 2 },
  { n: 4, title: '사용자 승인', desc: '생성 결과 검토 → 시안 확정', color: '#2563eb', col: 'L', row: 3 },
  { n: 5, title: '광고 업로드', desc: 'Meta Ads 캠페인 생성 (PAUSED)', color: '#10b981', col: 'L', row: 4 },
  { n: 6, title: '광고 운영', desc: '캠페인 활성화 → 실시간 성과 추적', color: '#10b981', col: 'R', row: 4 },
  { n: 7, title: '이상 감지', desc: '기대 vs 실측 편차 감지', color: '#f59e0b', col: 'R', row: 3 },
  { n: 8, title: 'AI 진단', desc: '결정론 분석 → AI 에이전트 진단', color: '#f97316', col: 'R', row: 2 },
  { n: 9, title: '개선 권고', desc: 'ActionProposal → 승인 요청', color: '#ef4444', col: 'R', row: 1 },
  { n: 10, title: '다시 광고 생성', desc: 'IMPROVE 모드로 새 시안', color: '#7c3aed', col: 'R', row: 0 },
];

const PIPE_W = 290;
const PIPE_HEAD = 32;
const PIPE_H = 78;
const pipeX = (col) => (col === 'L' ? 20 : 670);
const pipeY = (row) => 60 + row * 112;

function StageBox({ step }) {
  const x = pipeX(step.col);
  const y = pipeY(step.row);
  const r = 8;
  const header = `M${x} ${y + r} A${r} ${r} 0 0 1 ${x + r} ${y} L${x + PIPE_W - r} ${y} A${r} ${r} 0 0 1 ${x + PIPE_W} ${y + r} L${x + PIPE_W} ${y + PIPE_HEAD} L${x} ${y + PIPE_HEAD} Z`;
  return (
    <g>
      <rect x={x} y={y} width={PIPE_W} height={PIPE_H} rx={r} className="pipe-box" style={{ stroke: step.color }} />
      <path d={header} fill={step.color} />
      <text x={x + 16} y={y + 21} className="pipe-title">{step.title}</text>
      <circle cx={x + PIPE_W - 18} cy={y + 16} r="10" fill="rgba(255,255,255,0.28)" />
      <text x={x + PIPE_W - 18} y={y + 20} className="pipe-num" textAnchor="middle">{step.n}</text>
      <text x={x + 16} y={y + PIPE_HEAD + 24} className="pipe-desc">{step.desc}</text>
    </g>
  );
}

function PipeMarker({ id, color }) {
  return (
    <marker id={id} markerWidth="8" markerHeight="8" refX="6" refY="3" orient="auto" markerUnits="userSpaceOnUse">
      <path d="M0,0 L6,3 L0,6 Z" fill={color} />
    </marker>
  );
}

function PipelineDiagram() {
  const cxL = 20 + PIPE_W / 2;
  const cxR = 670 + PIPE_W / 2;
  return (
    <svg viewBox="0 0 980 624" className="arch-svg" role="img" aria-label="ClickMe 서비스 파이프라인">
      <defs>
        <PipeMarker id="pipe-gray" color="#8b949e" />
        <PipeMarker id="pipe-red" color="#ef4444" />
        <PipeMarker id="pipe-green" color="#10b981" />
      </defs>

      {/* 좌열 흐름 (아래로) */}
      {[0, 1, 2, 3].map((i) => (
        <line
          key={`l${i}`}
          x1={cxL}
          y1={pipeY(i) + PIPE_H}
          x2={cxL}
          y2={pipeY(i + 1)}
          className="pipe-flowline"
          markerEnd="url(#pipe-gray)"
        />
      ))}
      {/* 우열 흐름 (위로: ⑥→⑩) */}
      {[4, 3, 2, 1].map((r) => (
        <line
          key={`r${r}`}
          x1={cxR}
          y1={pipeY(r)}
          x2={cxR}
          y2={pipeY(r - 1) + PIPE_H}
          className="pipe-flowline"
          markerEnd="url(#pipe-gray)"
        />
      ))}

      {/* 상단 IMPROVE 루프 (⑩ → ①) */}
      <polyline
        points={`${cxR},60 ${cxR},30 ${cxL},30 ${cxL},60`}
        className="pipe-loop"
        markerEnd="url(#pipe-red)"
      />
      <text x="490" y="24" className="pipe-loop-label" textAnchor="middle">
        개선 피드백 루프 — IMPROVE 모드
      </text>

      {/* 하단 집행 시작 (⑤ → ⑥) */}
      <polyline
        points={`${cxL},${pipeY(4) + PIPE_H} ${cxL},606 ${cxR},606 ${cxR},${pipeY(4) + PIPE_H}`}
        className="pipe-flow"
        markerEnd="url(#pipe-green)"
      />
      <text x="490" y="600" className="pipe-flow-label" textAnchor="middle">
        광고 집행 시작
      </text>

      {/* 중앙 로고 */}
      <ellipse cx="490" cy="300" rx="150" ry="74" className="pipe-ellipse" />
      <text x="490" y="298" className="pipe-logo" textAnchor="middle">Click Me</text>
      <text x="490" y="324" className="pipe-logo-sub" textAnchor="middle">광고 All-In-One 플랫폼</text>

      {/* 좌/우 단계 박스 */}
      {PIPELINE_STEPS.map((s) => (
        <StageBox key={s.n} step={s} />
      ))}

      {/* 구간 라벨 */}
      <text x={cxL} y="52" className="pipe-phase" textAnchor="middle">집행 전 단계</text>
      <text x={cxR} y="52" className="pipe-phase" textAnchor="middle">집행 후 단계</text>
    </svg>
  );
}

function DiagramBlock({ title, children }) {
  return (
    <div className="architecture">
      <h4 className="architecture__title">{title}</h4>
      <div className="architecture__scroll">{children}</div>
    </div>
  );
}

export default function ArchitectureDiagram({ id }) {
  if (id === 'clickme') {
    return (
      <>
        <DiagramBlock title="시스템 아키텍처">
          <ClickMeDiagram />
        </DiagramBlock>
        <DiagramBlock title="서비스 파이프라인 · 광고 전주기">
          <PipelineDiagram />
        </DiagramBlock>
      </>
    );
  }
  if (id === 'eraser') {
    return (
      <DiagramBlock title="시스템 아키텍처">
        <EraserDiagram />
      </DiagramBlock>
    );
  }
  return null;
}
