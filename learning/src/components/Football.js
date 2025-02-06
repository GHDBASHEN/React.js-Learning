import React from 'react'

 

export  const Football1 =() =>{
    const shoot1 = (a,b) => {
      alert(b.type);
    }
  
    return (
      <button onClick={(event)=>shoot1("Goal",event)}>Take the shot!</button>
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
