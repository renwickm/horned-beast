import React from 'react';

class Main extends React.Component {

  // constructor(props){
  //   super(props);
  // }

  render () {
    return (
      <main>
        <h2>{this.props.title}</h2>
      </main>
    )
  }
}

export default Main;