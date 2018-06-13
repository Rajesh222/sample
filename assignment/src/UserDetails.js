import React, { Component } from 'react';

class UserDetails extends Component {
  handleChange() {}
  render() {
      console.log(this.props)
    return (
      <div className="container">
        <div className="row top-buffer">
            <div className="col-xs-3 col-xs-offset-3 lbl">
                Name
            </div>
            <div className="col-xs-4">
                <input type='text' value= {this.props.userData.name} onChange={()=> this.handleChange()}/>
            </div>
        </div>
        <div className="row top-buffer">
            <div className="col-xs-3 col-xs-offset-3 lbl">  
                Type Of Contract
            </div>
            <div className="col-xs-4 radio-button">
                <div className="col-xs-4">
                    <input type="radio" onChange={()=> this.handleChange()} checked={'Consultant' === this.props.userData.typeOfContract}/> <label>Consultant</label>
                </div>
                <div className="col-xs-4">
                    
                    <input type="radio" onChange={()=> this.handleChange()} checked={'Permanent' === this.props.userData.typeOfContract}/> <label>Permanent</label>
                </div>
            </div>
        </div>
        <div className="row top-buffer">
            <div className="col-xs-3 col-xs-offset-3 lbl">
                Country of residence
            </div>
            <div className="col-xs-4">
                <select className="selectpicker" value={this.props.userData.country}>
                    <option>United Kingdom</option>
                    <option>USA</option>
                    <option>India</option>
                </select>

            </div>
        </div>
      </div>
    );
  }
}

export default UserDetails;
