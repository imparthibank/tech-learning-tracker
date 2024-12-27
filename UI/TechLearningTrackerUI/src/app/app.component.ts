// import { Component } from '@angular/core';
// import { RouterModule } from '@angular/router';

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [RouterModule],
//   template: `
//     <nav class="navbar navbar-expand-lg navbar-light bg-light">
//       <a class="navbar-brand" href="#">TechLearningTracker</a>
//       <div class="collapse navbar-collapse">
//         <ul class="navbar-nav mr-auto">
//           <li class="nav-item">
//             <a class="nav-link" routerLink="/learning" routerLinkActive="active">Learning Items</a>
//           </li>
//           <li class="nav-item">
//             <a class="nav-link" routerLink="/problem" routerLinkActive="active">Problem Items</a>
//           </li>
//         </ul>
//       </div>
//     </nav>
//     <router-outlet></router-outlet>
//   `,
// })
// export class AppComponent {}

import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  template: `
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">TechLearningTracker</a>
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <a class="nav-link" routerLink="/learning" routerLinkActive="active">Learning Items</a>
          </li>
        </ul>
      </div>
    </nav>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {}