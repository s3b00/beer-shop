import { Component } from "react";
import BeerList from "./components/BeerList.js"
import NavBar from "./components/NavigationBar.js"
import SortTools from "./components/SortTools.js"

class App extends Component {
  componentDidMount() {
    this.fetchBeers()
  }

  fetchBeers = () => {
    fetch('https://api.punkapi.com/v2/beers?page=1&per_page=80')
      .then(response => response.json())
      .then(result => {
        this.initialData = result;
        this.setState({beers: this.initialData})})
      .catch(e => console.log(e));
  }

  updateData(config) {
    this.setState(config);
  }

  state = { 
    beers: [],
    filter: ''
  }
  
  render() {
    return(
        <div className="container">
          <NavBar term={this.state.filter}
            data={this.initialData}
            update={this.updateData.bind(this)} />

          <h3 className="text-center mt-3">Сортировка</h3>
          <SortTools data={this.state.beers} 
            update={this.updateData.bind(this)} />

          <div className="mt-3 d-flex justify-content-between flex-wrap m-auto">
            <BeerList beers={this.state.beers}/>
          </div> 
        </div>
    )
  }
}

export default App