import { useEffect, useState } from "react";

const Home = ({history,setHistory}) => {
  const [count, setCount] = useState(()=>{
    const savedCount = localStorage.getItem('count-history')

    return savedCount ? JSON.parse(savedCount) : 0
  });
  useEffect(() => {
    localStorage.setItem("count-history",JSON.stringify(count))
  }, [count])
  
  const [step, setStep] = useState(()=>{
    const savedStep = localStorage.getItem("step-history");

    return savedStep ? JSON.parse(savedStep) : 1
  })
   useEffect(() => {
     localStorage.setItem("step-history", JSON.stringify(step));
   }, [step]);
  const positiveNegative = ()=>{
     if(count===0)
     {
        return '+ Neutral'
     }
     else if(count>0)
     {
        return '+ Positive'
     }
     else{
        return '- Negative'
     }
  }
  return (
    <div className="">
      <h2 className="flex justify-center font-bold text-[40px]">Counter Dashboard</h2>
      <p className="flex justify-center">
        A Simple Counter With Useful Controls and History Tracking
      </p>
      <div className="flex flex-col m-15 p-30 bg-gray-400 justify-center items-center rounded-2xl">
        <h3 className="">Current count</h3>
        <h1 className="text-6xl font-bold my-4 text-blue-600">{count}</h1>
        <h3>{positiveNegative()}</h3>
        <div className="flex gap-4">
          <button
            className="flex h-20 w-40 font-bold justify-center items-center bg-green-600 text-[30px] rounded-3xl"
            onClick={() => {
              const newCount = count + step;
              const historyItem = {
                previous: count,
                current: newCount,
                operation: "+",
              };
              setHistory([...history, historyItem]);
              setCount(newCount);
            }}
          >
            <h1 className="">+</h1>
          </button>
          <button
            
            onClick={() => {
              setCount(0);
            }}
          >
            Reset
          </button>
          <button
            className="flex h-20 w-40 font-bold justify-center items-center bg-red-600 text-[30px] rounded-3xl"
            onClick={() => {
              const newCount = count - step;
              const historyItem = {
                previous: count,
                current: newCount,
                operation: "-",
              };
              setHistory([...history, historyItem]);
              setCount(newCount);
            }}
          >
            <h1 className=" ">-</h1>
          </button>
        </div>
        <div>
          <input
            className="mt-8 bg-black rounded-[5px]"
            value={step}
            type="number"
            placeholder="Enter step"
            onChange={(props) => {
              const newStep = Number(props.target.value);
              if (newStep >= 0) {
                setStep(newStep);
              }
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
