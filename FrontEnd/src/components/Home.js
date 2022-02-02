import axios from "axios";
import React, { Component } from "react";
import ActivityLists from "./Lists/ActivityLists";
import ReunionsLists from "./Lists/ReunionLists"
import Scheduler from "./Scheduler/Scheduler";
//import Opciones from "./searchFilter/Opciones";



class Home extends Component {
  state= {
    activities: [],
    reunions: [],
    error: null,
  };

  componentDidMount = async () => {
    const res = await axios.get('http://localhost:4000/actividades')
    this.setState({
        activities : res.data.actividades
    });
    console.log("Log de actividades",this.state.activities)
    const aux = await axios.get('http://localhost:4000/reuniones')
    this.setState({
      reunions : aux.data.reuniones
    });
    console.log("Log de reuniones",this.state.reunions)
  
  };

  render() {
    return (
        <div >
          <div>
            <Scheduler/>
            <div className="d-flex flex-row">
              <ReunionsLists lista ={this.state.reunions}/>
            </div>
          </div>
          <div>
            <div className="d-flex flex-row">
              <ActivityLists lista ={this.state.activities}/>
            </div>
          </div>
        </div>
    );
  }
}
 
export default Home;