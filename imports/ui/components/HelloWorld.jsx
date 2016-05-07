import React from 'react';

export default class HelloWorld extends React.Component {

  render() {
    const { name } = this.props.params;
    return (
      <div>
        <h3>Hello {name}!</h3>
      </div>
    );
  }
}

HelloWorld.propTypes = {
  params: React.PropTypes.object,
};
