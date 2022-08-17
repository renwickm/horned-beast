import React from 'react';

class Header extends React.Component {


  // constructor(props){
  //   super(props);

  // }

  render () {
    return (
      <Header>
        <h1>{this.props.title}</h1>
      </Header>
    )
  } 

}

export default Header;