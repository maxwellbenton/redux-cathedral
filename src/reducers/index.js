import { combineReducers } from 'redux'
import player from './player'
import gameBoard from './gameBoard'
import pieceData from './pieces'


const tileGameApp = combineReducers({
  playerInfo: player,
  gameInfo: gameBoard,
  pieceData
})

export default tileGameApp
