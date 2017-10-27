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

export const selectPiece = () => {
  return {
    type: 'SELECT_PIECE'
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
