import { useEffect } from "react";
import { useState } from "react";


const App=()=>{
  const [weatherData, setWeatherData]=useState(null)
  const [showData,setShowData]=useState("")
  const [background,setBackground]=useState("url('https://th.bing.com/th?id=OIP.pm5txpFQRH3-Y5_BvaSMawHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2')")
  const [error,setError]=useState("")


const handleInput=(e)=>{
const inputValue=e.target.value;
setShowData(inputValue.toLowerCase())
console.log(inputValue)
console.log(weatherData)
}

useEffect(()=>{
  
  if(showData === "") return;

  const getData=async()=>{
    try{
      const apiKey="6081d1b8f05c40ab3af7d357dcaf3128"
    const response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${showData}&appid=${apiKey}`)
  const data= await response.json()

  if(data.cod === 200){
  setWeatherData(data)
  } else{
  setError("Not Found") 
  }

 
  console.log(data)
  } catch (error){
    setWeatherData(null)
  setError(error.message)
  console.log(error)
  }
 }
getData();

},[showData])

useEffect(()=>{
    if(!weatherData) return;
  const weatherCondition=weatherData?.weather?.[0]?.main;
  const getBackground=(weatherCondition)=>{
            switch (weatherCondition){
            case "Clouds":
            return "url('https://th.bing.com/th/id/OIP._WBQtcrpwA8MFXaKMW8d8QHaJ7?w=127&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7')";
            case "Haze":
            return "url('https://th.bing.com/th/id/OIP.7S6zAqdZ3aqXpk7FxYf36AHaE7?w=251&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7')";
            case "Rain":
            return "url('https://th.bing.com/th/id/OIP.Xf5Pa5vJ8WdLE1zC24qbhQHaHa?w=153&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7')";
            case "Clear":
            return "url('data:image/jpeg;base64,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')";
            case "Smokey":
            return "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcOPYgCaq6-8iP_y90eaXPSrhZ2Cj27i_Qzg&s')";
            default:
             return "url('https://th.bing.com/th?id=OIP.JEDZR8i_ZtmjGhrnUC2YawHaNA&w=188&h=331&c=8&rs=1&qlt=90&o=6&dpr=1.5&pid=3.1&rm=2')";
    }
  }
  const newBackground= getBackground(weatherCondition);
  setBackground(newBackground);
  console.log("bg")
  },[weatherData]);

  useEffect(()=>{
if(error){
  setBackground("url('https://th.bing.com/th/id/OIP.yJGfiCEzzc-7lvFxWDVgVwHaFx?w=172&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7')")
}
  },[error])


  return(
    <div className="w-[320px] h-[360px] flex flex-col break-words items-center gap-10 px-[50px] py-4" 
      style={{
      backgroundImage:`${background}`,
      backgroundSize:"cover",
      backgroundPosition:"center",
      backgroundRepeat:"no-repeat",
    }}
    >
      <h1 className="text-3xl [200px] text-white rounded-lg bg-blue-200 p-2">Weather App</h1>
      { !error &&  <input
     className="h-[40px] w-full border outline-0 px-4 block m-0 mx-auto rounded-[30px] bg-white"
    onChange={handleInput}
    /> }


{ weatherData?.name  &&  !error &&
      (<div>
        <div className="h-[50px] w-full pr-[10px] flex justify-between">
      <i className="fa-solid fa-street-view h-20 text-5xl text-white"></i>
      <h1 className="text-3xl mr-2">{weatherData?.name} </h1>
      </div>
      
    <h2 className="text-xl text-center my-2 text-white">
    Temperature: {(weatherData?.main?.temp - 273.15).toFixed(2)}ºC
  </h2>

      <p className="text-md text-white text-center px-4">Max: {(weatherData?.main?.temp_max-273.15).toFixed(2)}°C </p>
        <p className="text-md text-center text-white px-4"> Min: {(weatherData?.main?.temp_min -273.15).toFixed(2)}°C </p>
    </div>

)  }
{ error &&  <p className="text-red-600 p-1 mt-[210px]  text-2xl">{error}</p> }

    </div>
  )
}
export default App;