import React from 'react';
import Axios from "axios";
import './App.css';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      cities:[]
    }
  }
  componentDidMount(){
    Axios.get("/api/locations?query=del&count=10").then(res=>{
      this.setState({
        cities:res.data.location_suggestions
      })
    })
  }
  render(){
    return (
      <div>
          {this.state.cities.map((val,i)=>{
            return(
              <p key={i}>{val.title}</p>
            )
          })}
      </div>
    );
  }
}

export default App;
