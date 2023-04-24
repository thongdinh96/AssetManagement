export interface CryptoOrder {
  id?: number;
  coinName: string;
  amount: number;
  buyPrice: number;
  buyDate: Date;
  sellPrice: number;
  sellDate: Date;
}
