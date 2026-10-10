// CSE8603 | Bidaulet Sanzhar | 080327554084 | niche-18
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import FeatureGrid from './components/FeatureGrid.jsx';
import BarrierTagPicker from './components/BarrierTagPicker.jsx';
import IssueBoard from './components/IssueBoard.jsx';
import Footer from './components/Footer.jsx';
import { categories } from './data/issues.js';

export default function App() {
  return (
    <>
      <Header />
      <main className="container">
        <Hero />
        <FeatureGrid />
        <BarrierTagPicker title="Which barriers did you meet this week?" tags={categories} />
        <IssueBoard />
      </main>
      <Footer />
    </>
  );
}
