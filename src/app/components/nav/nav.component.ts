import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

enum NavLinks {
  Principle = 'Principle',
  Insurer = 'Insurer',
  Insurances = 'Insurances',
  Contact = 'Contact'
}

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {
  public isOpen = false;
  public selectedSection = NavLinks.Principle;
  public sections = Object.values(NavLinks);
  
  public toggleNav() {
    this.isOpen = !this.isOpen;
  }
} 

