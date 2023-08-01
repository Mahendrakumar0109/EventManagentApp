import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomePageComponent } from './components/welcome-page/welcome-page.component';
import { FormComponent } from './form/form.component';
import { VendorRegistrationPageComponent } from './vendor-registration-page/vendor-registration-page.component';
import { ServicePageComponent } from './components/service-page/service-page.component';
import { QuotationDetailsComponent } from './components/quotation-details/quotation-details.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { FixedSideNavComponent } from './components/fixed-side-nav/fixed-side-nav.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HorizontalSlidingComponent } from './components/horizontal-sliding/horizontal-sliding.component';
import { InboxLayoutComponent } from './components/inbox-layout/inbox-layout.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { RegisterPageComponent } from './components/register-page/register-page.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { CardsPage1Component } from './components/cards-page1/cards-page1.component';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule } from '@angular/material/tabs';
import { MatStepperModule } from '@angular/material/stepper';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule, } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';
import { ChatbotComponent } from './components/chatbot/chatbot.component';
import { FormsModule } from '@angular/forms';
import { VendorListComponent } from './components/vendor-list/vendor-list.component';
import { CarrersPageComponent } from './componets/carrers-page/carrers-page.component';



@NgModule({
  declarations: [
    AppComponent,
    WelcomePageComponent,
    FormComponent,
    VendorRegistrationPageComponent,
    ServicePageComponent,
    QuotationDetailsComponent,
    MainPageComponent,
    FixedSideNavComponent,
    SideNavComponent,
    NavbarComponent,
    HorizontalSlidingComponent,
    InboxLayoutComponent,
    LoginPageComponent,
    RegisterPageComponent,
    ForgetPasswordComponent,
    HomePageComponent,
    CardsPage1Component,
    ChatbotComponent,
    VendorListComponent,
    CarrersPageComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatIconModule,
    MatBadgeModule,
    MatProgressSpinnerModule,
    MatToolbarModule,
    MatSidenavModule,
    MatMenuModule,
    MatListModule,
    MatDividerModule,
    MatGridListModule,
    MatExpansionModule,
    MatCardModule,
    MatTabsModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatCheckboxModule,
    MatRadioModule,
    MatDatepickerModule,
    MatTooltipModule,
    MatSnackBarModule,
    MatDialogModule,
    FormsModule
  

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
