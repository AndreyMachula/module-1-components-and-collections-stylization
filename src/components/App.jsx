import PaintingList from './PaintingList';
import Section from './Section';
import paintings from './paintings.json';

const App = () => {
  return (
    <div>
      <Section title="Топ недели">
        <PaintingList items={paintings} />
      </Section>
      <Section />
    </div>
  );
};

export default App;
