export default function (state = {}, action: { type: string; payload: any }) {
  switch (action.type) {
    case "TOGGLE_LOADING":
      return {
        ...state,
        loading: action.payload,
      };
    case "SWITCH_CURRENT":
      return {
        ...state,
        currentHour: action.payload,
      };
    default:
      return state;
  }
}