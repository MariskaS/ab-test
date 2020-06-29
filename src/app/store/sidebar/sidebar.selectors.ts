import {createFeatureSelector, createSelector} from "@ngrx/store";
import {sidebarNode} from "./sidebar.reducer";
import {SidebarState} from "../../interfaces";

export const selectSidebarFeature = createFeatureSelector<SidebarState>(sidebarNode);

export const selectSidebarOpen = createSelector(
  selectSidebarFeature,
  (state: SidebarState): boolean => state.open
)
