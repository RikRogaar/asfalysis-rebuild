import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-companies',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './companies.component.html',
  styleUrl: './companies.component.scss'
})
export class CompaniesComponent {
  public readonly companies: Company[] = [
    { name: 'Facebook', logo: 'test.svg' },
    { name: 'Disney', logo: 'test-2.svg' },
  ];
}

interface Company {
  name: string;
  logo: string;
}