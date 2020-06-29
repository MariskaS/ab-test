export interface MainNavigationItem {
  url: string,
  name: string,
}

export interface TabsItem {
  ariaLabel: string,
  ariaControls: string,
  id: string,
  name: string,
  active: boolean,
}

export interface TabsData {
  tableData: any[],
  tableActions?: any[],
  tableFilter?: any[],
}

export interface SidebarState {
  open: boolean
}

export interface FilterState {
  open: boolean
}
