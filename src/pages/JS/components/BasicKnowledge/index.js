import React from 'react';
import './index.scss';

export default class BasicKnowledge extends React.Component {
  constructor(props) {
    super(props);
  }

  onClick = () => {
    console.log('test');
  }

  testKeys = () => {
    const arr = [1,2,3,4,5];
    return arr.map((item, index) => {
      return <li key={index}>{item}</li>
    });
  }

  testRef = () => {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" ref={ input => this.input = input } />
        <button type="submit">Submit</button>
      </form>
    );
  }

  handleSubmit = () => {
    console.log(`Input value ${this.input.value}`);
  }

  render() {
    return (
      <div className="BasicKnowledge">
        <div className="title">
          <h1 onClick={this.onClick}>Test</h1>
        </div>
        <div className="content">
          <ul>
            { this.testKeys() }
          </ul>
        </div>
        { this.testRef() }
      </div>
    );
  }
}
