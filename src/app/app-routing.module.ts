import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UntutorComponent } from './pages/projects/untutor/untutor.component';
import { UnisophosComponent } from './pages/projects/unisophos/unisophos.component';
import { LandingComponent } from './landing/landing.component';

const routes: Routes = [
  {path:'',component: LandingComponent},
  {path:'projects/untutor',component: UntutorComponent},
  {path:'projects/unisophos',component: UnisophosComponent},
  //{path:'contactform',component: ContactformComponent},
  {path:'**',redirectTo:"", pathMatch:"full"},
];;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
