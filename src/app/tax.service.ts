import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { environment } from '../environments/environment';
import { TaxResult } from './models/tax-result';

@Injectable({
  providedIn: 'root'
})
export class TaxService {
  private apiUrl = environment.apiUrl + '/tax';

  constructor(private http: HttpClient) {}

  async calculateTax(income: number): Promise<TaxResult> {
    const response = await firstValueFrom(
        this.http.get<TaxResult>(`${this.apiUrl}/${income}`)
    );

    return response;
  }
}
