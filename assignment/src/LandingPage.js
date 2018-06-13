import React, { Component } from 'react';
import UserDetails from './UserDetails';
class LandingPage extends Component {
    constructor(props){
        super(props);
        this.state ={
            showLandingPage: true,
            userData: {
              name:'',
              typeOfContract:'',
              country:''
            }
        }
    }
    handleClick() {
        // fetch(someUrl).then((req,res) =>{
        //   this.setState({userData: res.userData,showLandingPage: false});
        // })
        // .catch(err) {
        //   console.log(er)
        // }
        const userData = {
          name:'Amela',
          typeOfContract:'Consultant',
          country:'United Kingdom'
        }
        this.setState({showLandingPage: false, userData});
    }
  render() {
    return (
      <div className="container main">
       {this.state.showLandingPage && 
        <button className="btn user-button col-xs-offset-6" onClick={()=> this.handleClick()}>Show User Details</button>}
        {!this.state.showLandingPage && 
        <UserDetails userData={this.state.userData}/>}
        
      </div>
    );
  }
}

export default LandingPage;
