import {Action} from "@ngrx/store";

export enum sidebarActionsType {
  close = '[SIDEBAR] close',
  toggle = '[SIDEBAR] toggle',
}

export class SidebarCloseAction implements Action {
  readonly type = sidebarActionsType.close;
}

export class SidebarToggleAction implements Action {
  readonly type = sidebarActionsType.toggle;
}

export type SidebarActions = SidebarCloseAction | SidebarToggleAction;
