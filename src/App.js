import './App.css';
import { SplitScreen } from './SplitScreen';

const LeftHandComponent = ({ name }) => (
  <h1 style={{ backgroundColor: 'teal' }}>{name}</h1>
);

const RightHandComponent = ({ message }) => (
  <h1 style={{ backgroundColor: "yellowgreen" }}>{message}</h1>
);

function App() {
  return (
    <SplitScreen
      leftWeight={1}
      rigtWeight={3}
    >
      <LeftHandComponent name="Tilo" />
      <RightHandComponent message="you rock" />
    </SplitScreen>
  );
}

export default App;
