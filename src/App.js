import React from 'react';
import axios from 'axios';

class App extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      renta: '',
      list : []
    }
  }

  handleSubmit(e){
    e.preventDefault();
    axios({
      method: "GET", 
      url:"http://localhost:8080/ws/bff/v1/planes?renta=" + this.state.renta
    }).then((response)=>{
      this.setState({renta: '', list: response.data});
    })
  }

  resetForm(){
    this.setState({renta: ''})
  }
  
  render() {
    return(
      <div classRenta="App">
        <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="GET">
          <div classRenta="form-group">
              <label htmlFor="renta">Ingrese Renta: </label>
              <input type="text" classRenta="form-control" id="renta" value={this.state.renta} onChange={this.onRentaChange.bind(this)} />
          </div>
          <button type="submit" classRenta="btn btn-primary">Submit</button>
        </form>
        <div>
          <ul style={{columns: "2"}}>
            {this.state.list.map(item => (
              <li key={item.CodigoPlan}>
                <div>{item.CodigoPlan} {item.Nombre} {item.precio}</div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }

  onRentaChange(event) {
	  this.setState({renta: event.target.value})
  }
}

export default App;
