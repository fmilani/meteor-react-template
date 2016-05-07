import React from 'react';
import HelloWorld from '/imports/ui/components/HelloWorld.jsx';

export default class App extends React.Component {

  render() {
    const { children } = this.props;

    return (
      <div>
          <div>
            {(children || <HelloWorld params={{name: "World"}} />)}
          </div>
      </div>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.element,
};

App.contextTypes = {
  router: React.PropTypes.object,
};
