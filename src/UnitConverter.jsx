import { useState } from 'react'
import './style.css'

function App() {
  const [firstValue, setFirstValue] = useState(1);
  const [secondValue, setSecondValue] = useState(100);
  const [firstUnit, setFirstUnit] = useState('Meter');
  const [secondUnit, setSecondUnit] = useState('CentiMeter')
  
  const selectOnFocus = (e) => {
    e.target.select();
  }

  const selectValue = (e) => {
    e.preventDefault();
    setFirstValue(e.target.value)
    ConvertValue(e.target.value, firstUnit, secondUnit)
  }

  const handleFirstUnitChange = (e) => {
    setFirstUnit(e.target.value);
    ConvertValue(firstValue, e.target.value, secondUnit);
  };
  

  const handleSecondUnitChange = (e) => {
    setSecondUnit(e.target.value);
    ConvertValue(firstValue, firstUnit, e.target.value);
  };

  const ConvertValue = (value, fromUnit, toUnit) => {
    let convertedValue;
    console.log(fromUnit, toUnit);
    switch (`${fromUnit}-${toUnit}`) {
      case 'MilliMeter-CentiMeter':
        convertedValue = value / 10;
          break;
      case 'CentiMeter-MilliMeter':
        convertedValue = value * 10;
          break;
      case 'Meter-CentiMeter':
        convertedValue = value * 100;
        break;
      case 'CentiMeter-Meter':
        convertedValue = value / 100;
        break;
        case 'MilliMeter-Meter':
        convertedValue = value / 1000;
        break;
      case 'Meter-MilliMeter':
        convertedValue = value * 1000;
        break;
      case 'Meter-KiloMeter':
        convertedValue = value / 1000;
        break;
      case 'KiloMeter-Meter':
        convertedValue = value * 1000;
        break;
      case 'CentiMeter-KiloMeter':
        convertedValue = value / 100000;
        break;
      case 'KiloMeter-CentiMeter':
        convertedValue = value * 100000;
        break;
      case 'MilliMeter-KiloMeter':
        convertedValue = value * 1000000;
        break;
      case 'KiloMeter-MilliMeter':
        convertedValue = value / 1000000;
        break;
      default:
        convertedValue = value;
    }

    setSecondValue(convertedValue);
  };

  return (
    <>
      <div className="unitwrapper">
        <h1>UnitConverter</h1>
        <p><span>Result: </span>{`${firstValue} ${firstUnit} is equal to ${secondValue} ${secondUnit}`}</p>
        <div className="unitbox">
          <div className="leftsec">
            <input type="number" name='firstValue' value={firstValue} onFocus={selectOnFocus} onChange={selectValue} />
            <select value={firstUnit} onChange={handleFirstUnitChange}>
              <option value="MilliMeter">MilliMeter</option>
              <option value="CentiMeter">CentiMeter</option>
              <option value="Meter">Meter</option>
              <option value="KiloMeter">KiloMeter</option>
            </select>
          </div>
          =
          <div className="rightsec">
            <input type="number" name='secondValue' value={secondValue} onFocus={selectOnFocus} onChange={selectValue} />
            <select value={secondUnit} onChange={handleSecondUnitChange}>
              <option value="MilliMeter">MilliMeter</option>
              <option value="CentiMeter">CentiMeter</option>
              <option value="Meter">Meter</option>
              <option value="KiloMeter">KiloMeter</option>
            </select>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
