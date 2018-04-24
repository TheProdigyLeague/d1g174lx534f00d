import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Redirect,
} from 'react-router-dom';
import apiServices from '../../services/apiServices';
import Item from './Item';


class FullInventory extends Component {
  constructor(props){
    super(props);
    this.state = {
      apiDataLoaded: false,
      apiData: null,
      fireRedirect: false
    }
  }
  componentDidMount(){
      apiServices.getAllInventory()
      .then(result => {
        this.setState({
          apiData: result.data.data,
          apiDataLoaded: true
        })
      })
      .catch(error => {
        console.log(`There was an error recieving the data from the backend in the componentDidMount for getAllInventory`, error);
      })
  }
  renderData(){
    const allItems = this.state.apiData.map((item, id) => <Item key={id} itemData={item} />)
    return(
      <div>
        {allItems}
      </div>
    )
  }
  render(){
    return(this.state.apiDataLoaded ? this.renderData() : `Oops, something went wrong here! My Bad!`)
  }
}

export default FullInventory;
