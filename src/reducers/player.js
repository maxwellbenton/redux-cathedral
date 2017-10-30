const player = (state = {
    player: 0,
    players: {
      0: {name: 'Basilica', color: '#DDD'},
      1: {name: 'John', color: 'red'},
      2: {name: 'Mike', color: 'blue'},
    }

  }, action) => {
  switch (action.type) {
    case 'SWITCH_PLAYER':
      return { ...state,
        player: state.player === 0 ? 2 : state.player + 1 > 2 ? 1 : state.player + 1
      };
    default:
      return state
  }
}

export default player
