export default function IssueItem({ issue, onDelete }) {
  return (
    <li className="issue-item">
      <div>
        <div className="issue-head">
          <span className={`badge badge-${issue.severity}`}>{issue.severity}</span>
          <span className="issue-cat">{issue.category}</span>
        </div>
        <h3>{issue.building}</h3>
        {issue.location && <p className="muted">{issue.location}</p>}
        <p>{issue.description}</p>
      </div>
      <button type="button" className="btn btn-ghost" onClick={() => onDelete(issue.id)}>
        Delete
      </button>
    </li>
  );
}
