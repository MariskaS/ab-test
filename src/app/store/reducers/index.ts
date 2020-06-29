import {ActionReducerMap, MetaReducer} from "@ngrx/store";
import {environment} from "../../../environments/environment";
import {FilterState, SidebarState} from "../../interfaces";
import {sidebarNode, sidebarReducer} from "../sidebar/sidebar.reducer";
import {filterNode, filterReducer} from "../filter/filter.reducer";

export interface State {
  [sidebarNode]: SidebarState,
  [filterNode]: FilterState,
}

export const reducers: ActionReducerMap<State> = {
  [sidebarNode]: sidebarReducer,
  [filterNode]: filterReducer,
};

export  const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
