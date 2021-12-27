import axios from "axios";
import React, { Component } from "react";
import styled from "styled-components";
import ActivityLists from "./Lists/ActivityLists";
import ReunionsLists from "./Lists/ReunionLists"

const Styles = styled.div`
  .col-md-4 {
		display: inline;
	}
  .form-control mr-sm-2{
    border: 1px solid #d9d9d9;
    border-radius: 4px;
    box-sizing: border-box;
    padding: 10px;
    width: 100%;
  }
  .container{
    display: flex;
    flex-direction: row;
  }
  `

class Home extends Component {
  state= {
    activities: [],
    reunions: [],
    error: null
  };

  componentDidMount = async () => {
    const res = await axios.get('http://localhost:4000/actividades')
    //console.log("primer log: ", res.data.data[0].attributes)
    this.setState({
        activities : res.data.actividades
    });
    console.log("Log de actividades",this.state.activities)
    const aux = await axios.get('http://localhost:4000/reuniones')
    //console.log("primer log: ", res.data.data[0].attributes)
    this.setState({
      reunions : aux.data.reuniones
    });
    console.log("Log de reuniones",this.state.reunions)
  
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
          <div className="col-md-4">
            <input
              aria-label="Search"
              type="search"
              //value={name}
              //onChange={filter}
              className="input"
              placeholder="Buscador"/>
              
            </div>
          <div className="row">
            <div className="col-md-4">
            <h5>Reuniones</h5>
            <ReunionsLists lista ={this.state.reunions}/>
            </div>
            
            <div className="col-md-4">
              <h5>Actividades</h5>
              <ActivityLists lista ={this.state.activities}/>
            </div>
          </div>
        </div>
    );
  }
}
 
export default Home;