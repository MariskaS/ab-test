export interface TabsItem {
  ariaLabel: string,
  ariaControls: string,
  id: string,
  name: string,
  active: boolean,
}

export interface TabsData {
  tableHeads: any[],
  tableData: any[],
  tableActions?: any[],
  tableFilter?: any[],
}
