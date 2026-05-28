export default function HashTag({ label, size = 'md', className = '' }) {
  const text = String(label).replace(/^#/, '');

  return (
    <span className={`hashtag ${size === 'lg' ? 'hashtag--lg' : ''} ${size === 'sm' ? 'hashtag--sm' : ''} ${className}`.trim()}>
      {text}
    </span>
  );
}

export function HashTagList({ tags, size = 'md', className = '' }) {
  if (!tags?.length) return null;

  return (
    <div className={`hashtag-list ${className}`.trim()}>
      {tags.map((tag) => (
        <HashTag key={tag} label={tag} size={size} />
      ))}
    </div>
  );
}
