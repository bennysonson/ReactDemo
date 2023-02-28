import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message'

function App() {
  return (
    <div className="App">
      {/* <Greet name='Benson'> 
        <p>child 1</p>
        <p>child 2</p>
      </Greet>
      <Greet name="Benny"></Greet>
      <Welcome name='Benson'></Welcome> */}
      <Message/>
    </div>
  );
}

export default App;
