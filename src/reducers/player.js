const player = (state = {
    player: 1,
    playerCount: 2,
    players: {
      player1: {color: 'red'},
      player2: {color: 'blue'},
      player3: {color: 'green'},
      player4: {color: 'grey'}
    }

  }, action) => {
  switch (action.type) {
    case 'SWITCH_PLAYER':
      return { ...state,
        player: state.player + 1 > state.playerCount ? 1 : state.player + 1
      };
    case 'ADD_PLAYER':
      return { ...state,
        playerCount: state.playerCount === 4 ? 4 : state.playerCount + 1
      };
    case 'REMOVE_PLAYER':
      return { ...state,
        playerCount: state.playerCount === 2 ? 2 : state.playerCount - 1
      };
    default:
      return state
  }
}

export default player
