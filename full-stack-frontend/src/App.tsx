import { useState } from "react";
import Form from "./components/Form";
import DropDown from "./components/DropDown";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="flex justify-center m-10">
        <h1 className="text-4xl font-bold underline">
          Full Stack Application is here!!
        </h1>
      </div>
      <div className="flex justify-center">
        <button className="btn btn-primary" onClick={() => setCount(count + 1)}>
          Button: {count}
        </button>
      </div>
      <Form />
      <DropDown />
    </>
  );
};

export default App;
