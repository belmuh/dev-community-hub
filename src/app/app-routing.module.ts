import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeveloperDirectoryComponent } from './pages/developer-directory/developer-directory.component';
import { CommunityMemberComponent } from './pages/community-member/community-member.component';
import { AuthGuard } from './auth/auth.guard';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { DevelopersPageComponent } from './pages/developers-page/developers-page.component';

const routes: Routes = [
  {
    path: 'developers',
    component: DevelopersPageComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'developers/:id',
    component: DevelopersPageComponent,
    canActivate: [AuthGuard]
  },
  { path: 'community-member/:id', component: CommunityMemberComponent },
  { path: '', redirectTo: 'developers', pathMatch: 'full' },
  { path: '**', redirectTo: 'developers' } // 404 fallback
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
