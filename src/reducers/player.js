const player = (state = {
    player: 1,
    players: {
      1: {name: 'John', color: 'red'},
      2: {name: 'Mike', color: 'blue'},
    }

  }, action) => {
  switch (action.type) {
    case 'SWITCH_PLAYER':
      return { ...state,
        player: state.player + 1 > 2 ? 1 : state.player + 1
      };
    default:
      return state
  }
}

export default player
