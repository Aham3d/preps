import React from 'react'
import WorkDay from './WorkDay';
import Weekend from './Weekend';

function HomePage() {

  // const day = 6; 
  
  // if(day >= 1 && day <= 5) {
  //   return <WorkDay />
  // }
  // return <Weekend />

  let val = prompt("don't type 0");

  return (
    <div>
      <h1>zero check</h1>
      {
        val && <h2>no zero found!!</h2>
      }
    </div>
  )

}

export default HomePage