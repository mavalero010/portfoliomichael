import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UntutorComponent } from './pages/projects/untutor/untutor.component';
import { UnisophosComponent } from './pages/projects/unisophos/unisophos.component';
import { MenuComponent } from './menu/menu.component';
import { MyprofileComponent } from './content/myprofile/myprofile.component';
import { LandingComponent } from './landing/landing.component';
import { AboutmeComponent } from './content/aboutme/aboutme.component';
import { PortfolioComponent } from './content/portfolio/portfolio.component';
import { EducationComponent } from './content/education/education.component';
import { SkillsComponent } from './content/skills/skills.component';
import { ContactmeComponent } from './content/contactme/contactme.component';

@NgModule({
  declarations: [
    AppComponent,
    UntutorComponent,
    UnisophosComponent,
    MenuComponent,
    MyprofileComponent,
    LandingComponent,
    AboutmeComponent,
    PortfolioComponent,
    EducationComponent,
    SkillsComponent,
    ContactmeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
