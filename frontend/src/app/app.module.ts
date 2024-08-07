import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    TasksComponent,
    LoginComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(
      withFetch()
    )
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
