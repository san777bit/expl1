import { useState } from 'react';
import { categories, severities } from '../data/issues.js';

const emptyForm = {
  building: '',
  location: '',
  category: categories[0],
  severity: 'medium',
  description: '',
};

// Controlled form: every input value comes from state and changes via onChange
export default function IssueForm({ onAdd }) {
  const [form, setForm] = useState(emptyForm);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!form.building.trim() || !form.description.trim()) return;
    onAdd(form);
    setForm(emptyForm);
  }

  const canSubmit = form.building.trim() !== '' && form.description.trim() !== '';

  return (
    <form className="issue-form" onSubmit={handleSubmit}>
      <label>
        Building *
        <input name="building" value={form.building} onChange={handleChange} placeholder="e.g. IT building" />
      </label>
      <label>
        Exact place
        <input name="location" value={form.location} onChange={handleChange} placeholder="e.g. Floor 2, room 204" />
      </label>
      <label>
        Barrier type
        <select name="category" value={form.category} onChange={handleChange}>
          {categories.map((c) => (
            <option key={c} value={c}>{c}</option>
          ))}
        </select>
      </label>
      <label>
        Severity
        <select name="severity" value={form.severity} onChange={handleChange}>
          {severities.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </label>
      <label className="full">
        What is wrong? *
        <textarea name="description" value={form.description} onChange={handleChange} rows="2" />
      </label>
      <button type="submit" className="btn btn-accent full" disabled={!canSubmit}>
        Add report
      </button>
    </form>
  );
}
