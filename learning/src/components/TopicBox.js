import React from 'react';
import './topicsBox.css';
export default function TopicBox() {
    const topic ="My Topic ";
    const ID =20;
  return (
    <div>
        <div className='topicBox'>
            <span className='text'>
                This is a {topic} and ID is {ID} and {alert("Hello")} this is a array {[10,20,"saman",10]}
            </span>
        </div>
    </div>
  )
}

