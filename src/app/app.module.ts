import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DietComponent } from './diet/diet.component';
import { DietDetailComponent } from './diet/diet-detail/diet-detail.component';
import { ProfileComponent } from './profile/profile.component';
import { ConvertPipe } from './pipe/convert.pipe';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    LoginComponent,
    HomeComponent,
    CadastroComponent,
    DietComponent,
    DietDetailComponent,
    ProfileComponent,
    ConvertPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
