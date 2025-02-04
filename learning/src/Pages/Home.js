import React from 'react'
import Content from '../components/content'
import TopicBox from '../components/TopicBox';
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
        </div>
    )
}

