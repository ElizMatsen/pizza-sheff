import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LayoutComponent} from './layout/layout.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'units',
    pathMatch: 'full'
  },
  {
    path: '',
    component: LayoutComponent,
    children: [

    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
