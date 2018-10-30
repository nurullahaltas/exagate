import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { MaterialsModule } from './modules/materials/materials.module'
import { FormsModule } from '@angular/forms';
import { ReportPageComponent } from './report-page/report-page.component';
import { RouterModule } from '@angular/router';

import { CurrencyService } from './services/currency.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { CanvasComponent } from './canvas/canvas.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    ReportPageComponent,
    CanvasComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialsModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    RouterModule.forRoot(
      [
      { path: '', redirectTo: '/login', pathMatch: 'full' },
      { path: 'report', component: ReportPageComponent },
      { path: 'login', component: LoginPageComponent }
      ])
  ],
  exports: [
    MaterialsModule
  ],
  providers: [CurrencyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
