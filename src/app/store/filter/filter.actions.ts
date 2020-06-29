import {Action} from "@ngrx/store";

export enum filterActionsType {
  close = '[FILTER] close',
  toggle = '[FILTER] toggle',
}

export class FilterCloseAction implements Action {
  readonly type = filterActionsType.close;
}

export class FilterToggleAction implements Action {
  readonly type = filterActionsType.toggle;
}

export type FilterActions = FilterCloseAction | FilterToggleAction;
