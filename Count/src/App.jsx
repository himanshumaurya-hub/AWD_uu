import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
      setCount(count + 1);
  };

  const decrement = () => {
      setCount(count - 1);
  };


    return (
        <div className='p-6'>
            <h2 className=' text-2xl font-bold'>{count}</h2>
            <br />
            <button className='border-2 p-2' onClick={increment} style={{ marginRight: '10px' }}>
                Increment
            </button>
            <button className='border-2 p-2' onClick={decrement}>
                Decrement
            </button>
        </div>
    );
}

export default App
