import axios from "axios";
import React, { Component } from "react";
import ActivityLists from "./Lists/ActivityLists";

class Home extends Component {
  state= {
    activities: [],
    reunions: [],
    error: null
  };

  componentDidMount = async () => {
    const res = await axios.get('http://localhost:1337/api/activities-forms')
    //console.log("primer log: ", res.data.data[0].attributes)
    this.setState({
        activities : res.data.data
    });
    const aux = await axios.get('http://localhost:1337/api/reunion-forms')
    //console.log("primer log: ", res.data.data[0].attributes)
    this.setState({
      reunions : res.data.data
    });
    console.log("primer log",this.state.activities)
    console.log("segundo log",this.state.reunions)
  
  };

  /*getActivities = async () =>{
    const res= await axios.get('http://localhost:1337/api/activities-forms')
    this.setState({
      activities : res.data
    });
  }

  getReunions = async () =>{
    const res= await axios.get('http://localhost:1337/api/reunion-forms')
    this.setState({
      reunions : res.data
    });
  }*/

  render() {
    return (
        <div className="container">
          <div >
            <input
              type="search"
              //value={name}
              //onChange={filter}
              className="input"
              placeholder="Buscador"/>
              
            </div>
          <div className="row">
            <div className="col-md-8">
              
            </div>
            
            <div className="col-md-8">
              <h5>Actividades</h5>
              <ActivityLists lista ={this.state.activities}/>
            </div>
          </div>
        </div>
    );
  }
}
 
export default Home;