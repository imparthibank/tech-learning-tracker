import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LearningComponent } from './components/learning/learning.component';
import { ProblemComponent } from './components/problem/problem.component';


const routes: Routes = [
  { path: 'learning', component: LearningComponent },
  { path: 'problem', component: ProblemComponent },
  { path: '', redirectTo: '/learning', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
