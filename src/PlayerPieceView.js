import React, {Component} from 'react'

class PlayerPieceView extends Component {

  renderPieceList = () => {
    let set = this.props.pieceData.pieces[`player${this.props.player}`]
    let list = []
    for (var piece in set) {
      if (set.hasOwnProperty(piece)) {
        list.push(
          <div key={piece} id={piece} onClick={this.handleClick}>
          <div>{piece}</div>
          <div></div><div></div><div></div>
          <div></div><div></div><div></div>
          <div></div><div></div><div></div>
          <div>{set[piece].shape.map(s => `[${s}]`)}</div>
          </div>)
      }
    }
    return list
  }
  handleClick = (event) => {
    if(this.props.currentPlayer === this.props.player) {
      this.props.handlePieceSelection(event.target.id)
    }

  }
  render() {

    let playerFloat = this.props.player === 1 ? 'left' : 'right'
    return(
        <div style={{width: '200px', height: '500px', backgroundColor: '#BBB', float: playerFloat, margin: 0}}>
        {this.renderPieceList()}
        </div>
    )
  }
}

export default PlayerPieceView
