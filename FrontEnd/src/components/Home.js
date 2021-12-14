import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
        
        <div className="container">
          <input
          type="search"
          //value={name}
          //onChange={filter}
          className="input"
          placeholder="Barra de filtro"/>
            
            <p>Cras facilisis urna ornare ex volutpat, et
            convallis erat elementum. Ut aliquam, ipsum vitae
            gravida suscipit, metus dui bibendum est, eget rhoncus nibh
            metus nec massa. Maecenas hendrerit laoreet augue
            nec molestie. Cum sociis natoque penatibus et magnis
            dis parturient montes, nascetur ridiculus mus.</p>
    
            <p>Duis a turpis sed lacus dapibus elementum sed eu lectus.</p>
        </div>
    );
  }
}
 
export default Home;