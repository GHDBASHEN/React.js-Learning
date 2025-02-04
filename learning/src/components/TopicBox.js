import React from 'react';
import './topicsBox.css';
export default function TopicBox(props) {
    // const topic ="My Topic ";
    // const ID =20;
    // This is a {topic} and ID is {ID} and {alert("Hello")} this is a array {[10,20,"saman",10]}
  return (
    <div>
        <div className='topicBox'>
            <span className='text'>
                
                My favourite Food is {props.Food} and price is {props.price} 
            </span>
            <span> {props.children}</span>
        </div>
    </div>
  )
}

