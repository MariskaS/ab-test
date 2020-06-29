import {FilterState} from "../../interfaces";
import {FilterActions, filterActionsType} from "./filter.actions";

export const filterNode = 'filter';

const initialState: FilterState = {
  open: false
}

export const filterReducer = (state = initialState, action: FilterActions) => {
  switch (action.type) {
    case filterActionsType.close:
      return {
        ...state,
        open: false
      }
    case filterActionsType.toggle:
      return {
        ...state,
        open: !state.open
      }
    default:
      return state;
  }
}
