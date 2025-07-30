import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TaxService } from './tax.service';
import { TaxResult } from './models/tax-result';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {
  income = 0;
  result?: TaxResult;
  error: string | null = null;

  constructor(private taxService: TaxService) {}

  async calculateTax() {
    try {
      this.error = null;
      this.result = await this.taxService.calculateTax(this.income);
    } catch (err) {
      this.error = 'Error calculating tax.';
    }
  }
}
