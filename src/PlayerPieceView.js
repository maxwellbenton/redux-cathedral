import React, {Component} from 'react'

class PlayerPieceView extends Component {

  renderPieceList = () => {
    let set = this.props.pieceData.pieces[`player${this.props.player}`]
    let list = []
    
    for (var piece in set) {
      if (set.hasOwnProperty(piece)) {
        list.push(
          <div key={piece} id={piece} onClick={(this.handleClick)}>
          {piece}
          
          </div>)
      }
    }
    return list
  }
  
  handleClick = (event) => {
    if(this.props.currentPlayer === this.props.player) {
      debugger
      this.props.handlePieceSelection(event.target.id)
    }

  }
  render() {
    console.log(this.props.currentPlayer)
    console.log(this.props.player)
    let playerFloat = this.props.player === 1 ? 'left' : 'right'
    return(
        <div style={{width: '200px', height: '500px', backgroundColor: '#BBB'}}>
        {this.renderPieceList()}
        </div>
    )
  }
}

export default PlayerPieceView
