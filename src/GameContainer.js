import React, {Component} from 'react'
import { connect } from 'react-redux'
import { switchPlayer, addPlayer, removePlayer, toggleTile } from './actions'
import Game from './Game'

const mapStateToProps = state => {
  return {
    player: state.playerInfo.playerCount,
    playerCount: state.playerInfo.playerCount,
    players: state.playerInfo.players,
    game: state.gameInfo
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleSwitchClick: () => {
      dispatch(switchPlayer())
    },
    handleAddClick: () => {
      dispatch(addPlayer())
    },
    handleRemoveClick: () => {
      dispatch(removePlayer())
    },
    handleTileClick: (tileData) => {
      toggleTile({tileData})
    }
  }
}

const GameContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Game)

export default GameContainer
