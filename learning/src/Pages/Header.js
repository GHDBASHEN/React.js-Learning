import React from 'react'

export default class Header extends React.Component {
    constructor(props) {
      super(props);
      this.state = {favoritecolor: "red"};
    }
    static getDerivedStateFromProps(props, state) { //before the render()
        return {favoritecolor: props.favcol };
      }
    render() {
      return (
        <h1>My Favorite Color is {this.state.favoritecolor}</h1>
      );
    }
  }