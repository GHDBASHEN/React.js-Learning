import React from 'react'

export default class Van extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            brand: "Ford",
            model: "Mustang",
            color: "red",
            year: 1964
        };
    }

    render() {
        return (
            <div>
                <h1>My {this.state.brand}</h1>
                <p>
                    It is a {this.state.color} and&nbsp;
                    {this.state.model}
                    from {this.state.year}.
                </p>
            </div>
        );
    }
}