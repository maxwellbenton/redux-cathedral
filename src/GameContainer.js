
import { connect } from 'react-redux'
import { switchPlayer, toggleTile, selectPiece, placePiece, returnPiece } from './actions'
import Game from './Game'

const mapStateToProps = state => {
  return {
    ...state
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleTileClick: (tileData) => {
      dispatch(switchPlayer())
      dispatch(toggleTile(tileData))
    },
    handlePieceSelection: (pieceData) => {
      dispatch(selectPiece(pieceData))
    },
    handlePiecePlacement: (pieceData) => {
      dispatch(placePiece(pieceData))
    },
    handlePieceReturn: (pieceData) => {
      dispatch(returnPiece(pieceData))
    }
  }
}

const GameContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Game)

export default GameContainer
