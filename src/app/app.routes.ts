import { Routes } from '@angular/router';
import { PrincipleComponent } from './pages/principle/principle.component';

export const routes: Routes = [
    { path: '', redirectTo: 'principle', pathMatch: 'full' },
    { path: 'principle', component: PrincipleComponent },
];
