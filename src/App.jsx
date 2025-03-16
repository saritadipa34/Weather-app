import { useEffect } from "react";
import { useState } from "react";


const App=()=>{
  const [weatherData, setWeatherData]=useState([])

useEffect(()=>{
  const getData=async()=>{
    try{
      const city="london"
      const apiKey="6081d1b8f05c40ab3af7d357dcaf3128"
    const response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
  const data= await response.json()
  console.log(data)
  } catch (error){
console.log(error)
  }
 }
getData();
},[])

  return(
    <div className="w-[320px] h-[360px] flex flex-col  items-center gap-10 px-[50px] py-4 bg-blue-300">
      <input
     className="h-[40px] w-full block m-0 mx-auto rounded-[30px] bg-white"
    />
     <div>
      <i className="fa-solid text-yellow-500 fa-sun text-3xl"></i>
      <i className="fa-solid fa-cloud text-3xl text-white"></i>
      </div>
      <div className="">
        <div className="h-[50px] w-full pr-[10px] flex justify-between">
      <i className="fa-solid fa-street-view h-20 text-5xl text-white"></i>
      <h1 className="text-5xl">Citddy</h1>
      </div>
      <h2 className="text-2xl text-center my-4">24.32cel </h2>
      <p className="text-md">Min; 24.32 Cel | Max: 24.52 Cel</p>
    </div>
    </div>
  )
}
export default App;