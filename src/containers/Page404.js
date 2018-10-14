import React from 'react';
import {Link} from 'react-router-dom';

export default class Page404 extends React.Component {
  render() {
    return (
      <div id="main">
        <div class="fof">
          <h1>Error 404</h1>
          <h3>No match found for <code>{window.location.pathname}</code></h3>
          <div class="button3"><Link to="/" className="back404page">กลับหน้าหลัก</Link></div>
        </div>
      </div>
    );
  }
}