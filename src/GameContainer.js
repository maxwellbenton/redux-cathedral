
import { connect } from 'react-redux'
import { switchPlayer, toggleTile } from './actions'
import Game from './Game'

const mapStateToProps = state => {
  return {
    player: state.playerInfo.player,
    players: state.playerInfo.players,
    game: state.gameInfo
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleTileClick: (tileData) => {
      dispatch(switchPlayer())
      dispatch(toggleTile(tileData))
    }
  }
}

const GameContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Game)

export default GameContainer
