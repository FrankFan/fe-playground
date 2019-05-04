import React from 'react';
import './style.scss';

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const isProduction = process.env.NODE_ENV === 'production';
    const prefix = isProduction ? '/fe-playground' : '';
    return (
      <div className="HomePage">
        <h1>FE Playground</h1>
        <ul>
          <li>
            <a href={`${prefix}/page-js.html`}>JavaScript</a>
          </li>
          <li>
            <a href={`${prefix}/page-css.html`}>CSS</a>
          </li>
        </ul>
      </div>
    );
  }
}
