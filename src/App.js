import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message'
import Counter from './components/Counter'
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import UserGreeting from './components/UserGreeting';
import NameList from './components/NameList';

function App() {
  return (
    <div className="App">
      {/* <Greet name='Benson' hiddenName='BennyBoo'> 
      </Greet> */}
      {/* <Greet name="Benny"></Greet> */}
      {/* <Welcome name='Benson'></Welcome> */}
      {/* <Message/> */}
      {/* <Counter></Counter> */}
      {/* <FunctionClick></FunctionClick>
      <ClassClick></ClassClick> */}
      {/* <EventBind></EventBind> */}
      {/* <UserGreeting></UserGreeting> */}
      <NameList></NameList>
    </div>
  );
}

export default App;
