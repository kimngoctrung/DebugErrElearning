const initialState = {
  arrListID: [],
};

export const GetIDCoures = (state = initialState, action) => {
  switch (action.type) {
    case "LAY_MA_DANH_MUC": {
      return { ...state, arrListID: action.coures };
    }

    default:
      return state;
  }
};
