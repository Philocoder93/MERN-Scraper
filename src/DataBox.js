import React, {Component} from 'react'
import axios from 'axios'
import DataSheet from './DataSheet'

class DataBox extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
  }
  loadDataFromServer(url) {
    axios.get(url)
      .then(res => {
        console.log(res.data.results)
        console.log(this.state.data)
        this.setState({data: this.state.data.concat([res.data.results])})
      })
  }
  componentDidMount() {
    console.log('mounted here')
    console.log(this.props.urls)
    this.props.urls.forEach((url) => {
      this.loadDataFromServer(url)
    })
  }
  render() {
    let dataNodes = this.state.data.map((data, index)=> {
      return(
        <DataSheet
          dataObject={data}
          key={index}
        />
      )
    })
    return(
      <div>
        <h1>{this.state.data}</h1>
        {dataNodes}
      </div>
    )
  }
}
export default DataBox
