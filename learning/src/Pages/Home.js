import React from 'react'
import Content from '../components/content'
import TopicBox from '../components/TopicBox';
import Car from '../Pages/car';
import {Football,Football1} from '../components/Football';
import Goal from '../components/Goal';
export default function Home() {
    return (
        <div>

            <h1>
                This is Home Page
            </h1>
            <Content />
            <TopicBox Food="Kottu" price="200">
                <span>This is children</span>
            </TopicBox>
            <TopicBox Food="Pizza" price="1500">
                <span>
                    <button>Click me</button>
                </span>
            </TopicBox>
            <TopicBox Food="Burger" />
            <Car />
            <Football />
            <Football1 />
            <Goal isGoal={true} />
        </div>
    )
}

