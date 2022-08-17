import React from 'react';

class Footer extends React.Component {

  // constructor(props){
  //   super(props);
  // }

  render () {
    return (
      <footer>
        <h3>{this.props.title}</h3>
      </footer>
    )
  }
}

export default Footer;