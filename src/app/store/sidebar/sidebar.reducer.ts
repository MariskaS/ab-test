import {SidebarState} from "../../interfaces";
import {SidebarActions, sidebarActionsType} from "./sidebar.actions";

export const sidebarNode = 'sidebar';

const initialState: SidebarState = {
  open: false
}

export const sidebarReducer = (state = initialState, action: SidebarActions) => {
  switch (action.type) {
    case sidebarActionsType.close:
      return {
        ...state,
        open: false
      }
    case sidebarActionsType.toggle:
      return {
        ...state,
        open: !state.open
      }
    default:
      return state;
  }
}
