import { useState } from 'react';
import IssueForm from './IssueForm.jsx';
import IssueList from './IssueList.jsx';
import { initialIssues } from '../data/issues.js';

// SIS-2: list of accessibility reports kept in React state (mock data, no backend)
export default function IssueBoard() {
  const [issues, setIssues] = useState(initialIssues);
  const [query, setQuery] = useState('');

  function addIssue(data) {
    setIssues([{ ...data, id: Date.now() }, ...issues]);
  }

  function deleteIssue(id) {
    setIssues(issues.filter((i) => i.id !== id));
  }

  const q = query.trim().toLowerCase();
  const visible = issues.filter((i) =>
    `${i.building} ${i.location} ${i.category} ${i.description}`.toLowerCase().includes(q),
  );

  return (
    <section className="section" id="issues">
      <h2>Campus accessibility reports</h2>
      <IssueForm onAdd={addIssue} />

      <div className="board-bar">
        <input
          className="filter"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Filter by building, type or text…"
        />
        <span className="muted">
          {visible.length} of {issues.length} reports
        </span>
      </div>

      <IssueList
        issues={visible}
        onDelete={deleteIssue}
        emptyText={
          issues.length === 0
            ? 'No reports yet — the campus looks barrier-free! Add the first one above.'
            : 'No reports match your filter.'
        }
      />
    </section>
  );
}
