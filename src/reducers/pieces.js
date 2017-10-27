const pieceData = (state = {
    pieces: originalPieceSet(),
    selectedPiece: ["player0","basilica"],
    orientation: 0
  }, action) => {
  switch (action.type) {
    case 'SELECT_PIECE':
      return { ...state,
        selectedPiece: action.pieceData
      };
    case 'PLACE_PIECE':
      debugger
      return {...state,
        pieces: state.pieces//state.pieces['action.pieceData.player']['action.pieceData.pieceName']
      }
    case 'RETURN_PIECE':
        debugger
        return {...state,
          pieces: state.pieces//state.pieces['action.pieceData.player']['action.pieceData.pieceName']
        }
    case 'ROTATE_PIECE':
        debugger
        return {...state,
          orientation: action.orientation//state.pieces['action.pieceData.player']['action.pieceData.pieceName']
        }
    default:
      return state
  }
}

export default pieceData

const originalPieceSet = () => {
        let b = {
        'player0': {
          "basilica": {shape:[[0,0],[0,-1],[-1,0],[0,1],[1,0],[2,0]], towers: [[0,0]]}
        },

        'player1': {
          "house": {shape:[[0,0]], towers: []},
          "house2": {shape:[[0,0]], towers: []},
          "rowhouse": {shape:[[0,0],[1,0]], towers: []},
          "rowhouse2": {shape:[[0,0],[1,0]], towers: []},
          "tenement": {shape:[[0,0],[1,0],[1,1]], towers: []},
          "tenement2": {shape:[[0,0],[1,0],[1,1]], towers: []},
          "bridge": {shape:[[0,0],[-1,0],[1,0]], towers: []},
          "plaza": {shape:[[0,0],[0,1],[1,0],[1,1]], towers: []},
          "school": {shape:[[0,0],[1,0],[0,-1],[-1,-1]], towers: []},
          "courthouse": {shape:[[0,0],[0,-1],[1,0],[0,1]], towers: [[0,0]]},
          "museum": {shape:[[0,0],[0,-1],[1,-1],[0,1],[1,1]], towers: [[0,-1],[0,1]]},
          "hospital": {shape:[[0,0],[0,-1],[-1,0],[1,0],[0,1]], towers: [[0,0]]},
          "mall": {shape:[[0,0],[1,-1],[1,0],[0,1],[-1,1]], towers: [[1,0],[0,1]]},
          "university": {shape:[[0,0],[0,-1],[-1,0],[0,1],[1,-1]], towers: [[1,-1]]}
        },

        'player2': {
          "workshop": {shape:[[0,0]], towers: []},
          "workshop2": {shape:[[0,0]], towers: []},
          "forge": {shape:[[0,0],[1,0]], towers: []},
          "forge2": {shape:[[0,0],[1,0]], towers: []},
          "sawmill": {shape:[[0,0],[1,0],[1,-1]], towers: []},
          "sawmill2": {shape:[[0,0],[1,0],[1,-1]], towers: []},
          "railbridge": {shape:[[0,0],[-1,0],[1,0]], towers: []},
          "lumberyard": {shape:[[0,0],[0,1],[1,0],[1,1]], towers: []},
          "warehouse": {shape:[[0,0],[1,0],[0,1],[-1,1]], towers: []},
          "foundry": {shape:[[0,0],[0,-1],[1,0],[0,1]], towers: [[0,0]]},
          "factory": {shape:[[0,0],[0,-1],[1,-1],[0,1],[1,1]], towers: [[0,-1],[0,1]]},
          "coalplant": {shape:[[0,0],[0,-1],[-1,0],[1,0],[0,1]], towers: [[0,0]]},
          "ironworks": {shape:[[0,0],[-1,-1],[0,-1],[1,0],[1,1]], towers: [[0,-1],[1,0]]},
          "refinery": {shape:[[0,0],[0,-1],[-1,0],[0,1],[1,1]], towers: [[1,1]]}
        }
        }
        return b

}
