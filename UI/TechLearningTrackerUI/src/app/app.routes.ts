import { Routes } from '@angular/router';
import { LearningComponent } from './components/learning/learning.component';
import { ProblemComponent } from './components/problem/problem.component';

export const routes: Routes = [
  { path: 'learning', loadComponent: () => import('./components/learning/learning.component').then((m) => m.LearningComponent) },
  { path: 'problem', loadComponent: () => import('./components/problem/problem.component').then((m) => m.ProblemComponent) },
  { path: '', redirectTo: '/learning', pathMatch: 'full' },
  { path: '**', redirectTo: '/learning' },
];
