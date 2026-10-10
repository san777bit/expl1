import { useState } from 'react';

// TSIS-2 widget: data comes in through props, the selection lives in state
export default function BarrierTagPicker({ title, tags }) {
  const [selected, setSelected] = useState([]);

  function toggle(tag) {
    if (selected.includes(tag)) {
      setSelected(selected.filter((t) => t !== tag));
    } else {
      setSelected([...selected, tag]);
    }
  }

  return (
    <section className="section" id="barriers">
      <h2>{title}</h2>
      <div className="tags">
        {tags.map((tag) => (
          <button
            key={tag}
            type="button"
            className={selected.includes(tag) ? 'tag tag-on' : 'tag'}
            onClick={() => toggle(tag)}
          >
            {tag}
          </button>
        ))}
      </div>
      <p className="muted">
        {selected.length === 0
          ? 'Nothing selected yet — tap the barriers you met this week.'
          : `You met ${selected.length} barrier type(s): ${selected.join(', ')}`}
      </p>
      {selected.length > 0 && (
        <button type="button" className="btn btn-ghost" onClick={() => setSelected([])}>
          Clear
        </button>
      )}
    </section>
  );
}
