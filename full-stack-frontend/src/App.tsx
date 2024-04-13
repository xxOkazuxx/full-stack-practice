import { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0);
  const alertHander = () => {
    setCount(prev => prev + 1);
  }

  return (
    <>
      <h1 className="text-4xl font-bold underline">Full Stack Application is here!!</h1>
      <button className="btn btn-primary" onClick={alertHander}>Button: {count}</button>
    </>
  )
}

export default App
