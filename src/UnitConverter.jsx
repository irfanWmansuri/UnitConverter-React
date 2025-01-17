import { useState } from 'react'
import './style.css'

function App() {
 const [firstValue, setFirstValue] = useState(1);
 const [secondValue, setSecondValue] = useState(100);
 const [isValue, setIsValue] = useState();



 const selectValue = (e)=> {
  e.preventDefault();

  if(e.target.name == "firstValue"){
    setFirstValue(e.target.value);
  }else{
    setSecondValue(e.target.value);
  }
 }

 const ConvertValue = ()=> {

  const value = 1;
  switch (value) {
    case "1":
      
      break;
  
  }
 }

const selectOnFocus = (e)=>{
  e.target.select();
}

  return (
    <>
      <div className="unitwrapper">
      <h1>UnitConverter</h1>
      <div className="unitbox">
      <div className="leftsec">
        <input type="number" name='firstValue' value={firstValue} onFocus={selectOnFocus} onChange={selectValue} />
        <select>
          <option value="Centimeter">Centimeter</option>
          <option value="Meter" selected={1}>Meter</option>
          <option value="Kilometer">Kilometer</option>
        </select>
      </div>
      =
      <div className="rightsec">
        <input type="number" value={secondValue} onChange={selectValue} onFocus={selectOnFocus} />
        <select>
          <option value="Centimeter" selected={100}>Centimeter</option>
          <option value="Meter">Meter</option>
          <option value="Kilometer">Kilometer</option>
        </select>
      </div>
      </div>
      </div>
    </>
  )
}

export default App
