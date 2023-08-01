import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VendorRegistrationPageComponent } from './vendor-registration-page/vendor-registration-page.component';
import { QuotationDetailsComponent } from './components/quotation-details/quotation-details.component';
import { InboxLayoutComponent } from './components/inbox-layout/inbox-layout.component';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { CarrersPageComponent } from './componets/carrers-page/carrers-page.component';

const routes: Routes = [
{path:'',component:WelcomePageComponent,pathMatch:'full'},
{path:'home-redirect',component:HomePageComponent},
  {path:'vendor-regist',component:VendorRegistrationPageComponent},
  {path:'vendor-quote',component:QuotationDetailsComponent},
  {path:'notification',component:InboxLayoutComponent},
  {path:'carrer',component:CarrersPageComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
