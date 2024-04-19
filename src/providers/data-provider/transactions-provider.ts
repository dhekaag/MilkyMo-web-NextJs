export interface ITransactionsInterface {
  status: boolean;
  statusCode: number;
  count: number;
  total: number;
  data: IDataTransactionsInterface[];
}

export interface IDataTransactionsInterface {
  _id: string;
  transaction_id: string;
  user_id: string;
  user_name: string;
  time: string;
  milk_volume: number;
  admin_id: string;
  createdAt: Date;
  updatedAt: Date;
  __v: number;
}
