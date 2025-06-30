import { Routes } from '@angular/router';
import { RoueComponent } from './pages/roue/roue.component';
import { DesComponent } from './pages/des/des.component';

export const routes: Routes = [
  { path: 'roue', component: RoueComponent },
  { path: 'des', component: DesComponent },
  { path: '', redirectTo: 'roue', pathMatch: 'full' }
];
