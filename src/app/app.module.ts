import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ProfileCardComponent } from './components/profile-card/profile-card.component';
import { LoginComponent } from './auth/login/login.component';
import { DeveloperDirectoryComponent } from './pages/developer-directory/developer-directory.component';
import { Developer } from './models/developer.model';
import { CommunityMemberComponent } from './pages/community-member/community-member.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    ProfileCardComponent,
    LoginComponent,
    DeveloperDirectoryComponent,
    CommunityMemberComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

