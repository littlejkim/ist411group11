import React from "react";

class Produce extends React.Component {

    constructor(props) {
        super(props);
        this.handleFruits = this.handleFruits.bind(this);
        this.handleVegetables = this.handleVegetables.bind(this);
      }

    handleFruits(event) {
        event.preventDefault();
        this.props.history.push('/fruits');
    }

    handleVegetables(event) {
        event.preventDefault();
        this.props.history.push('/vegetables');
    }

    render() {
        return (
        <div>
            <form onSubmit={this.handleFruits}>
              <input type='submit' value='Fruits' />
            </form>
            <form onSubmit={this.handleVegetables}>
              <input type='submit' value='Vegetables' />
            </form>
        </div>
        );
    }
};

export default Produce;