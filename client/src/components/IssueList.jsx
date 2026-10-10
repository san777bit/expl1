import IssueItem from './IssueItem.jsx';

export default function IssueList({ issues, onDelete, emptyText }) {
  if (issues.length === 0) {
    return <p className="empty">{emptyText}</p>;
  }

  return (
    <ul className="issue-list">
      {issues.map((issue) => (
        <IssueItem key={issue.id} issue={issue} onDelete={onDelete} />
      ))}
    </ul>
  );
}
