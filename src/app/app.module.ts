import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResolverComponent } from './resolver/resolver.component';
import { TicketDashboardComponent } from './ticket-dashboard/ticket-dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { ShowStatusComponent } from './show-status/show-status.component';

const routes:Routes=[
  {path:'',component:ResolverComponent},
  {path:'ticket-status/:tid',component:TicketDashboardComponent}]

@NgModule({
  declarations: [
    AppComponent,
    ResolverComponent,
    TicketDashboardComponent,
    ShowStatusComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
