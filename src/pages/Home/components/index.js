import React from 'react';
import './style.scss';

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="HomePage">
        <h1>FE Playground</h1>
        <ul>
          <li>
            <a href="/fe-playground/page-js.html">JavaScript</a>
          </li>
          <li>
            <a href="/fe-playground/page-css.html">CSS</a>
          </li>
        </ul>
      </div>
    );
  }
}
