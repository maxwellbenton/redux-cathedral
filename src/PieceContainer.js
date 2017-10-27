import { connect } from 'react-redux'
import { selectPiece } from './actions'
import PlayerPieceView from './PlayerPieceView'

const mapStateToProps = state => {
  return {
    currentPlayer: state.playerInfo.player,
    player: 1,
    players: state.playerInfo.players,
    pieceData: state.pieceData
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handlePieceSelection: (pieceData) => {
      dispatch(selectPiece(pieceData))
    }
  }
}

const PieceContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PlayerPieceView)

export default PieceContainer
