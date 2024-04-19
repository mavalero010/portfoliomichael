import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { UntutorComponent } from './pages/projects/untutor/untutor.component';
export const routes: Routes = [
    //{path:'',component: LoginComponent},
    {path:'contacts',component: AppComponent},
    {path:'projects/untutor',component: UntutorComponent},
    //{path:'contactform',component: ContactformComponent},
    {path:'**',redirectTo:"", pathMatch:"full"},
];