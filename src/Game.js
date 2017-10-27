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
    return nb 
  }

  onTileClick(event) {
    let tilePos = {position: event.target.id.split(',').map(t => parseInt(t,10))}
    if (this.props.game.availableTiles.reduce((a,b) => a.concat(b)).map(tile => `${tile.position}`).includes(`${tilePos.position}`)) {
      
      this.props.handleTileClick({...tilePos, color: this.props.players[this.props.player].color})
    }
  }

  render() {
    return(
        <div style={{position: 'relative', width: '500px', height: '500px', display: 'block', margin: 'auto', backgroundColor: '#DDD'}}>
          <div style={{width: '85%', height:'85%', display: 'block', margin: 'auto', position: 'relative', top: '5vh', backgroundColor: 'white'}}>
            <div>Player {this.props.player}</div>
            
            <div style={{position: 'absolute'}}>
              {this.renderBoard()}
            </div>
          </div>
        </div>
    )
  }
}

export default Game
