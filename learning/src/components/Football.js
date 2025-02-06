import React from 'react'

 

export  const Football1 =() =>{
    const shoot1 = (a) => {
      alert(a);
    }
  
    return (
      <button onClick={()=>shoot1("Goal")}>Take the shot!</button>
    );
  }

 export const Football = () => {
    const shoot = () => {
        alert("Great Shot!");
      }
    
      return (
        <button onClick={shoot}>Take the shot!</button>
      );


  }
