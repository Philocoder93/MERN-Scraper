import React, {Component} from 'react'

class DataRow extends Component {
  componentDidMount() {
    console.log(this.props)
  }
  render() {
    return(
      <div>
        <h6>
          {this.props.data[1][0]}
        </h6>
        <h6>
          {this.props.data[1][1]}
        </h6>
        <h6>
          {this.props.data[1][2]}
        </h6>
        <h6>
          {this.props.data[1][3]}
        </h6>
        <h6>
          {this.props.data[1][4]}
        </h6>
      </div>
    )
  }
}
export default DataRow
