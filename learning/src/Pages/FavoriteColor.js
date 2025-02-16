import React, {useState} from 'react';

export default  function FavoriteColor() {
    const[color,setColor] = useState("Red");

  return (
    <>
    <div>My favourite is {color} </div>
    <button type="button" onClick={() => setColor("Blue")}>Change to Blue</button></>
  )
}

