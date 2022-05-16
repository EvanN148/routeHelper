import React, { useState } from 'react';

export default function Form() {
  const customers = {
    types: {
      'FSAN': 0, 
      'FSND': 1, 
      'CUST': 1, 
      'VEND': 1,
      '3PBH': 1
    }
  }
  
  const [loads, setLoads] = useState({
    1: {
      1: {
        name: '',
        type: ''
      },
      2: {
        name: '',
        type: ''
      }
    }
  })

  const buildRows = (load) => {
    return Object.keys(load).map((stop) => {
      return (
        <div >
          <form className={`form-${parseInt(stop)}`} >
            <label >Stop {parseInt(stop)}: </label>
            <input className={`form-${parseInt(stop)}-name`}  id={`form-${parseInt(stop)}-name`}  placeholder='Customer Name' ></input>
            <input className={`form-${parseInt(stop)}-ctst`}   id={`form-${parseInt(stop)}-ctst`}   placeholder='City/State code' ></input>
            <select className={`form-${parseInt(stop)}-type`}   id={`form-${parseInt(stop)}-type`} placeholder='Stop Type' >
              <option value='Type' >Type</option>
              {Object.keys(customers.types).map((type) => { return (<option value={type} >{type}</option>) })}
            </select>
            <input className={`form-${parseInt(stop)}-hub`}  id={`form-${parseInt(stop)}-hub`}  placeholder='Hub Miles' ></input>
            <button >down</button>
            <button >up</button>
            <button >delete</button>
          </form>
        </div>
      )
    })
  }

  const moveRow = (row, dir) => {
    if (dir === 'up') {
      let swapWith = row - 1; document.getElementById(`form-${row - 1}`).value

    } else {

    }
  }


  return (
    <div className='form' >
      ALPHA
      {Object.keys(loads).map((load) => {
        return (
          <div >
            <span >Load Id: <input className='load-id' ></input></span>
            {buildRows(loads[load])}
          </div>
        )
      })}
      <button >update</button> 
    </div>
  )
}