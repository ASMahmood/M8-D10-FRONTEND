export default function (state = {}, action: { type: string; payload: any }) {
  switch (action.type) {
    case "POPULATE_FORECAST":
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
}
