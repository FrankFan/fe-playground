import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router';
import './index.scss';

import routesConfig from '../../routesConfig';

class Home extends React.Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
  };

  renderLinks() {
    const currentPath = this.props.location.pathname.substr(1);

    return (
      <ul className="Link-List">
        {routesConfig.map(({ path, title }, index) => (
          <li key={index}>
            <Link to={path} replace={path === currentPath}>
              {title}
            </Link>
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="sidebar">
        <h1>catalog</h1>
        {this.renderLinks()}
      </div>
    );
  }
}

export default withRouter(Home);
