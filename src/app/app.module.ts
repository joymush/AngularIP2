import { GoalService } from './goal-service/goal.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { GoalDetailComponent } from './goal-detail/goal-detail.component';
import { GoalFormComponent } from './goal-form/goal-form.component';
import { GoalComponent } from './goal/goal.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { DateCountPipe } from './date-count.pipe';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Routes } from '@angular/router';

const routes: Routes = [
  { path: 'goals', component: GoalComponent},
  { path: 'about', component: AboutComponent},
  { path:'**', component:NotFoundComponent},
  { path: '', redirectTo:"/goals", pathMatch:"full"},

];
@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    GoalDetailComponent,
    GoalFormComponent,
    GoalComponent,
    NavbarComponent,
    NotFoundComponent,
    DateCountPipe,




  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  
  ],
  providers: [GoalService],
  bootstrap: [AppComponent]
})
export class AppModule { }
