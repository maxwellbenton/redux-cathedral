import React, {Component} from 'react'

class Game extends Component {

  constructor() {
    super()
    this.onTileClick = this.onTileClick.bind(this)
    this.handleMouseOver = this.handleMouseOver.bind(this)
    this.handleMouseOut = this.handleMouseOut.bind(this)
    this.state = {
      overlayDivs: []
    }
  }

  renderBoard = () => {
    let nb = []
    let tileSize = 30
    this.props.gameInfo.tiles.forEach((row,m) => {
      row.forEach((tile,n) => {
        nb.push(<div key={`${m},${n}`} id={`${m},${n}`} ref={(div) => this[`t${m}${n}`] = div}style={{position: 'absolute', width: tileSize, height: tileSize, top:m*tileSize, left: n*tileSize, backgroundColor: tile.color }} onClick={this.onTileClick} onMouseEnter={this.handleMouseOver} onMouseLeave={(event) => this.handleMouseOut(event, tile.color)}/>)
      })
    })
    return nb
  }

  renderOverlay = () => {
    return this.state.overlayDivs
  }

  handleMouseOver = (event) => {
    let midP = event.target.id.split(',').map(p => parseInt(p))
    let refArray = this.props.pieceData.pieces[this.props.pieceData.selectedPiece[0]][this.props.pieceData.selectedPiece[1]].shape.map(t => t.map((p,i) => midP[i]+t[i]).join(""))
    if (refArray.some(e => e.includes('-') || e.length > 2)) { //add in check for player colors
      this.setState({
        overlayDivs: [<div key={`o${event.target.id}`} style={{position: 'absolute', width: event.target.style.width , height: event.target.style.height, top: event.target.style.top, left: event.target.style.left, backgroundColor: '#F22', pointerEvents: 'none' }}/>]
      })
    } else {
      let overlayDivs = refArray.map((tile,i) => <div key={`o${tile}`} style={{position: 'absolute', width: this[`t${tile}`].style.width , height: this[`t${tile}`].style.height, top:this[`t${tile}`].style.top, left: this[`t${tile}`].style.left, backgroundColor: '#DDD' , pointerEvents: 'none'}}/>)
      this.setState({
        overlayDivs: overlayDivs
      })
    }
    
  }
  handleMouseOut = (event, color) => {
    console.log(this.props.pieceData.pieces[this.props.pieceData.selectedPiece[0]][this.props.pieceData.selectedPiece[1]].shape)
    event.target.style.backgroundColor = color
  }

  handleRotateClick = () => {
    
  }
  onTileClick(event) {
    let tilePos = {position: event.target.id.split(',').map(t => parseInt(t,10))}
    if (this.props.gameInfo.availableTiles.reduce((a,b) => a.concat(b)).map(tile => `${tile.position}`).includes(`${tilePos.position}`)) {
      this.props.handleTileClick({...tilePos, color: this.props.playerInfo.players[this.props.playerInfo.player].color})
    }
  }

  render() {
    // console.log("overlay:")
    // console.log(this.state.overlayDivs)
    return(
        <div style={{position: 'absolute', left: '50%', width: '500px', height: '500px', display: 'block', margin: 'auto'}}>
          <div style={{width: '85%', height:'85%', display: 'block', margin: 'auto', position: 'relative', left: '-50%', top: '5vh', backgroundColor: '#DDD'}}>
            <div>Player {this.props.player}</div>
            <button onClick={this.handleRotateClick}>Rotate</button>

            <div style={{position: 'absolute', left: '10%', width: '100%'}}>

              {this.renderBoard()}
              {this.renderOverlay()}
            </div>
          </div>
        </div>
    )
  }
}

export default Game
