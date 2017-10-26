const gameBoard = (state = {
  tiles: originalTileSet(),
  availableTiles: originalTileSet()
}, action) => {
  switch (action.type) {
    case 'TOGGLE_TILE':
      return { ...state,
        tiles: state.tiles.map(tile => {
          if(tile.position === action.tile.position) {
            return action.tile
          } else {
            return tile
          }
        })
      };
    default:
      return state
  }
}

export default gameBoard

const originalTileSet = () => {
  let tiles = []
  for (let m = 0; m < 10; m++) {
    tiles[m] = []
    for (let n = 0; n < 10; n++) {
      tiles[m][n] = {
        position: [m, n],
        color: `#${m}${n}${m}`,
        player: 0
      }
    }
  }
  return tiles
}
