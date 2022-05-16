import React, { useState } from 'react';

export default function Form() {
  const [stops, setStops] = useState({
    0: {
      name: '',
      al1: '',
      al2: '',
      city: '',
      state: '',
      zip: ''
    },
    1: {
      name: '',
      al1: '',
      al2: '',
      city: '',
      state: '',
      zip: ''
    }
  });

  const [stopCount, setStopCount] = useState(1);

  // const updateStop = (num, property) => {
  //   stops[num][property] = document.getElementById(`form-${num}-${property}`)
  //   return (
  //     <div >
  //     </div>
  //   )
  // }

  const buildStops = () => {
      return Object.keys(stops).map((stop) => {
        return (
          <div >
            <form className={`form-${parseInt(stop)}`} >
              <label >Stop {parseInt(stop)}: </label>
              <input className={`form-${parseInt(stop)}-name`}  id={`form-${parseInt(stop)}-name`}  placeholder='Site Name'      onChange={() => updateStop(1, 'name')} ></input>
              <input className={`form-${parseInt(stop)}-al1`}   id={`form-${parseInt(stop)}-al1`}   placeholder='Address Line 1' onChange={() => updateStop(1, 'al1')} ></input>
              <input className={`form-${parseInt(stop)}-al2`}   id={`form-${parseInt(stop)}-al2`}   placeholder='Address Line 2' onChange={() => updateStop(1, 'al2')} ></input>
              <input className={`form-${parseInt(stop)}-city`}  id={`form-${parseInt(stop)}-city`}  placeholder='City'           onChange={() => updateStop(1, 'city')} ></input>
              <input className={`form-${parseInt(stop)}-state`} id={`form-${parseInt(stop)}-state`} placeholder='State'          onChange={() => updateStop(1, 'state')} ></input>
              <input className={`form-${parseInt(stop)}-zip`}   id={`form-${parseInt(stop)}-zip`}   placeholder='Zip'            onChange={() => updateStop(1, 'zip')} ></input>
              <button onClick={() => removeStop(parseInt(stop))  } >Remove Stop</button>
            </form>
          </div>
        )
      })
  }

  const addStop = () => {
    let newStop = {
      name: '',
      al1: '',
      al2: '',
      city: '',
      state: '',
      zip: ''
    }

    stops[stopCount + 1] = newStop;
    setStopCount(stopCount + 1);
    setStops(stops);
    buildStops();
  }

  const removeStop = (num) => {
    if (num === Object.keys(stops).length - 1) {
      delete stops[num];
      setStopCount(stopCount - 1);
      setStops(stops);
      buildStops();
    } else {
      Object.keys(stops).forEach((stop, index) => {
        if (index === num) {
          Object.keys(stops).slice(index).forEach((key) => {
            if (stops[parseInt(key) + 1]) {
              stops[parseInt(key)] = stops[parseInt(key) + 1];
            }
          })
        }
      })
      setStopCount(stopCount - 1);
      setStops(stops);
      buildStops();
    }
  }

  return (
    <div className='form' >
        Origin Info
        {buildStops()}
        <button onClick={() => addStop()} >Add Stop</button>
        <div >
          <button >Calculate</button>
        </div>
    </div>
  )
}