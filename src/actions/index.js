export const toggleTile = (payload) => {
  return {
 type: 'TOGGLE_TILE',
 tile: payload //{position: [x,y], color: playerColor
 }
}

export const switchPlayer = () => {
  //
  return {
    type: 'SWITCH_PLAYER',
  }
}

export const selectPiece = (pieceData) => {
  return {
    type: 'SELECT_PIECE',
    pieceData
  }
}

export const placePiece = () => {
  return {
    type: 'PLACE_PIECE'
  }
}

export const returnPiece = () => {
  return {
    type: 'RETURN_PIECE'
  }
}
export const rotatePiece = () => {
  return {
    type: 'ROTATE_PIECE'
  }
}
