import { combineReducers } from 'redux'
import player from './player'
import gameBoard from './gameBoard'


const tileGameApp = combineReducers({
  playerInfo: player,
  gameInfo: gameBoard
})

export default tileGameApp
