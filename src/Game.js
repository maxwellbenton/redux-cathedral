import React, {Component} from 'react'

class Game extends Component {

  constructor() {
    super()
    this.onTileClick = this.onTileClick.bind(this)
  }
  renderBoard() {
    let nb = []
    let tileSize = 30
    this.props.game.tiles.forEach((row,m) => {
      row.forEach((tile,n) => {
        nb.push(<div key={`${m},${n}`} id={`${m},${n}`} style={{position: 'absolute', width: tileSize, height: tileSize, top:m*tileSize, left: n*tileSize, backgroundColor: tile.color }} onClick={this.onTileClick}/>)
      })
    })
    console.log(nb)
    return nb
  }

  onTileClick() {
    console.log(this.props)
    debugger
    this.props.handleTileClick()
  }

  render() {
    console.log(this.props)
    return(
        <div style={{position: 'relative', width: '500px', height: '500px', display: 'block', margin: 'auto', backgroundColor: '#DDD'}}>
          <div style={{width: '85%', height:'85%', display: 'block', margin: 'auto', position: 'relative', top: '5vh', backgroundColor: 'white'}}>
            <button onClick={this.props.handleSwitchClick}>Switch</button>
            <button onClick={this.props.handleAddClick}>Add</button>
            <button onClick={this.props.handleRemoveClick}>Remove</button>
            <div>{this.props.player}</div>
            <div>{this.props.players}</div>
            <div style={{position: 'absolute'}}>
              {this.renderBoard()}
            </div>
          </div>

        </div>
    )
  }
}

export default Game
