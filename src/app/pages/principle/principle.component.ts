import { Component } from '@angular/core';
import { HeroComponent } from "../../components/principle/hero/hero.component";
import { CompaniesComponent } from "../../components/principle/companies/companies.component";

@Component({
  selector: 'app-principle',
  standalone: true,
  imports: [
    HeroComponent,
    CompaniesComponent
],
  templateUrl: './principle.component.html',
  styleUrl: './principle.component.scss'
})
export class PrincipleComponent {

}
