import React from 'react';
import {render} from 'react-dom';
import HeaderComponent from './HeaderComponent.jsx'
import CommentsListComponent from './CommentsListComponent.jsx'

class App extends React.Component {
  render () {
    return (
      <div>
        <HeaderComponent />
        <CommentsListComponent />
      </div>
    );
  }
}

render(<App/>, document.getElementById('app'));
