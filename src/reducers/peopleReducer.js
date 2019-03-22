const initialState ={
  headHunders: null,
}

export default (state = initialState, action) => {
    switch (action.type) {
      case "fetchRecordsSuccess":
        return {
            ...state,
            headHunders: action.payload
        };
      default:
        return state;
    }
  };