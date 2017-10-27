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

export const addPlayer = () => {
  return {
    type: 'ADD_PLAYER'
  }
}

export const removePlayer = () => {
  return {
    type: 'REMOVE_PLAYER'
  }
}
