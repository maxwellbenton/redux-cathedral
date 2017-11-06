const gameBoard = (state = {
  tiles: originalTileSet(),
  availableTiles: originalTileSet()
}, action) => {
  switch (action.type) {
    case 'TOGGLE_TILE':
      
      return { ...state,
        tiles: state.tiles.map(row => {
          return row.map(tile => {
            if(tile.position[0] === action.tile.position[0] && tile.position[1] === action.tile.position[1]) {
              return {...tile, color: action.tile.color, player: action.tile.player}
            } else {
              return tile
            }
          })
        }
      ), availableTiles: state.availableTiles.map(row => {
        return row.filter(tile => !(tile.position[0] === action.tile.position[0] && tile.position[1] === action.tile.position[1]))
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
        color: `#AAA`,
        player: 0
      }
    }
  }
  return tiles
}
