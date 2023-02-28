import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message'
import Counter from './components/Counter'

function App() {
  return (
    <div className="App">
      <Greet name='Benson' hiddenName='BennyBoo'> 
      </Greet>
      {/* <Greet name="Benny"></Greet> */}
      {/* <Welcome name='Benson'></Welcome> */}
      {/* <Message/> */}
      <Counter></Counter>
    </div>
  );
}

export default App;
