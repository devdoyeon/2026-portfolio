// 정량 성과를 "숫자 + 라벨" 칩으로 노출 — 카드/헤더에서 모달을 열지 않아도 바로 보이도록
export default function StatChips({ stats, className = '' }) {
  if (!stats?.length) return null;

  return (
    <dl className={`stat-chips ${className}`.trim()}>
      {stats.map(({ value, label }) => (
        <div key={label} className="stat-chips__item">
          <dt className="stat-chips__value">{value}</dt>
          <dd className="stat-chips__label">{label}</dd>
        </div>
      ))}
    </dl>
  );
}
