import { useState } from 'react';
// import Loading from './components/Loading';

const App = () => {
  const [count, setCount] = useState(0);
  const alertHander = () => {
    setCount(prev => prev + 1);
  }

  return (
    <>
      <div className='flex justify-center m-10'>
        <h1 className="text-4xl font-bold underline">Full Stack Application is here!!</h1>
      </div >
      <div className='flex justify-center'>
        <button className="btn btn-primary" onClick={alertHander}>Button: {count}</button>
      </div>
      {/* <Loading /> */}
    </>
  )
}

export default App
