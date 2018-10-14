import React from 'react';

export default class Page404 extends React.Component {
  render() {
    return (
      <div id="main">
        <div class="fof">
          <h1>Error 404</h1>
          <h3>No match found for <code>{window.location.pathname}</code></h3>
          <a href="/" class="button3">กลับหน้าหลัก</a>
        </div>
      </div>
    );
  }
}