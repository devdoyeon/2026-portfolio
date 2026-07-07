export default function HashTag({ label, size = 'md', className = '', highlighted = false }) {
  const text = String(label).replace(/^#/, '');

  return (
    <span className={`hashtag ${size === 'lg' ? 'hashtag--lg' : ''} ${size === 'sm' ? 'hashtag--sm' : ''} ${className}`.trim()}>
      {text}
      {highlighted && <span className="sr-only"> (주력 기술)</span>}
    </span>
  );
}

export function HashTagList({ tags, size = 'md', className = '', ariaLabel }) {
  if (!tags?.length) return null;

  return (
    <div
      className={`hashtag-list ${className}`.trim()}
      role={ariaLabel ? 'group' : undefined}
      aria-label={ariaLabel}
    >
      {tags.map((tag) => (
        <HashTag key={tag} label={tag} size={size} />
      ))}
    </div>
  );
}
