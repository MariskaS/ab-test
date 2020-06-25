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
