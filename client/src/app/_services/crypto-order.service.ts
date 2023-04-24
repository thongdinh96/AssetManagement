import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { getPaginatedResult, getPaginationHeaders } from './paginationHelper';
import { CryptoOrder } from '../_models/crypto-order';

@Injectable({
  providedIn: 'root',
})
export class CryptoOrderService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getCryptoOrders(pageNumber: number, pageSize: number) {
    let params = getPaginationHeaders(pageNumber, pageSize);

    return getPaginatedResult<CryptoOrder[]>(
      this.baseUrl + 'crypto-order',
      params,
      this.http
    );
  }
}
