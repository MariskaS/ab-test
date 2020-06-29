import {createFeatureSelector, createSelector} from "@ngrx/store";
import {filterNode} from "./filter.reducer";
import {FilterState} from "../../interfaces";

export const selectFilterFeature = createFeatureSelector<FilterState>(filterNode);

export const selectFilterOpen = createSelector(
  selectFilterFeature,
  (state: FilterState): boolean => state.open
)
