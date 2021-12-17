import axios from "axios";
import React, { Component } from "react";

class Home extends Component {
  state= {
    activity: [],
    reunions: []
  };

  async componentDidMount(){
    this.getActivities();
  }

  getActivities = async () =>{
    const res= await axios.get('http://localhost:1337/api/activities-forms')
    this.setState({
      activity : res.data
    });
  }

  getReunions = async () =>{
    const res= await axios.get('http://localhost:1337/api/reunion-forms')
    this.setState({
      reunions : res.data
    });
  }

  render() {
    return (
        <div className="container">
          
          <div className="row">
            <div className="col-md-4">
              
            </div>
            <div className="col-md-4">
            <input
              type="search"
              //value={name}
              //onChange={filter}
              className="input"
              placeholder="Barra de filtro"/>
              
            </div>
            <div className="col-md-4">
            {this.state.activity.map( activities =>(
              <div className="card" key={activities.id}>
                <p>{activities.ResponsableActividad}</p>
                <p>{activities.ObjetivoEstr}</p>
                <p>{activities.TipoAct}</p>
                <p>{activities.ObjetivoAct}</p>
                <p>{activities.DescripcionAct}</p>
              </div>
            ))}
            </div>
          </div>
        </div>
    );
  }
}
 
export default Home;