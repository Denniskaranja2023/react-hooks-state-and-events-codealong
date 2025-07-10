
import react, {useState} from "react";  //import state

function Toggle() {
  const[isOn, setIsOn]= useState(false)  //initialize state

  function handleClick(){
    setIsOn((isOn)=> !isOn)
  }
  const color= isOn? "red": "white";

  return <button style={{background:color}} onClick={handleClick}>{isOn? "ON": "OFF"}</button>;       // use state vaiable in component
}

export default Toggle;
