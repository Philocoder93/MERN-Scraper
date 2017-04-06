import React, {Component} from 'react'
import DataRow from './DataRow'

class DataSheet extends Component {
  render() {
    let rowNodes = this.props.dataObject.map((row, index) => {
      return(
        <DataRow
          key={index}
          data={row}
        />
      )
    })
    return(
      <div>
        {rowNodes}
      </div>
    )
  }
}
export default DataSheet
