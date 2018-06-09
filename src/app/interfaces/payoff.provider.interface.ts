import { IWinTableRow } from '../models/win.table.row';

export interface IWinTableRowProvider {
  getWinTableRow() : IWinTableRow;
}
