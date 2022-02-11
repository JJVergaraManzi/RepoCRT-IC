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
    clases:[],
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
    const aux1 = await axios.get('http://localhost:4000/clases')
    this.setState({
      clases : aux1.data.clases
    });
    console.log("Log de clases",this.state.clases)
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
            <div className="d-flex flex-row">
              <ActivityLists lista ={this.state.activities}/>
            </div>
        </div>
    );
  }
}
 
export default Home;