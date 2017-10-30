import React, {Component} from 'react'

class Game extends Component {

  constructor() {
    super()
    this.onTileClick = this.onTileClick.bind(this)
    this.handleMouseOver = this.handleMouseOver.bind(this)
    this.handleMouseOut = this.handleMouseOut.bind(this)
  }

  renderBoard() {
    let nb = []
    let tileSize = 30
    this.props.gameInfo.tiles.forEach((row,m) => {
      row.forEach((tile,n) => {
        nb.push(<div key={`${m},${n}`} id={`${m},${n}`} style={{position: 'absolute', width: tileSize, height: tileSize, top:m*tileSize, left: n*tileSize, backgroundColor: tile.color }} onClick={this.onTileClick} onMouseEnter={this.handleMouseOver} onMouseLeave={(event) => this.handleMouseOut(event, tile.color)}/>)
      })
    })
    return nb
  }

  handleMouseOver = (event) => {
    debugger
    event.target.style.backgroundColor = "#AAA"
  }
  handleMouseOut = (event, color) => {
    console.log(this.props.pieceData.pieces[this.props.pieceData.selectedPiece[0]][this.props.pieceData.selectedPiece[1]].shape)
    event.target.style.backgroundColor = color
  }

  onTileClick(event) {
    let tilePos = {position: event.target.id.split(',').map(t => parseInt(t,10))}
    if (this.props.gameInfo.availableTiles.reduce((a,b) => a.concat(b)).map(tile => `${tile.position}`).includes(`${tilePos.position}`)) {
      this.props.handleTileClick({...tilePos, color: this.props.playerInfo.players[this.props.playerInfo.player].color})
    }
  }

  render() {
    console.log(this.props)

    return(
        <div style={{position: 'absolute', left: '50%', width: '500px', height: '500px', display: 'block', margin: 'auto'}}>
          <div style={{width: '85%', height:'85%', display: 'block', margin: 'auto', position: 'relative', left: '-50%', top: '5vh', backgroundColor: '#DDD'}}>
            <div>Player {this.props.player}</div>

            <div style={{position: 'absolute', left: '10%', width: '100%'}}>

              {this.renderBoard()}

            </div>
          </div>
        </div>
    )
  }
}

export default Game
