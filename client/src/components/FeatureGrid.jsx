import FeatureCard from './FeatureCard.jsx';
import { features } from '../data/features.js';

export default function FeatureGrid() {
  return (
    <section className="section" id="features">
      <h2>How it works</h2>
      <div className="feature-grid">
        {features.map((f) => (
          <FeatureCard key={f.id} icon={f.icon} title={f.title} text={f.text} />
        ))}
      </div>
    </section>
  );
}
