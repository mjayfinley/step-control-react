import React, {Component} from 'react'


export class CurrentNumber extends Component {

  render() {

    return (
      <div id="number">
        <p>{this.props.number}</p>
      </div>
    )
  }

}
