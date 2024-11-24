import { useCallback, useState } from 'react';
import './App.css';
import ChildComponents from './components/ChildComponents';
import ExpensiveComponent from './components/ExpensiveComponent';

function App() {


  const [count, setCount] = useState(0);

  // const handleClick = useCallback(() => {
  //   setCount(count+1)
  // },[count]);
  
  return (
    <div className="App">
      {/* <div>
        Count Value is : {count}
      </div>
      <br></br>
      <div>
        <button onClick={handleClick}>
          Increment
        </button>
      </div>
      <br></br>
      <div>
      <ChildComponents btnname = "ClickMe" compfunc = {handleClick}/>
      </div> */}
      <ExpensiveComponent/>
     
    </div>
  );
}

export default App;
