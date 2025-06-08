import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeveloperDirectoryComponent } from './pages/developer-directory/developer-directory.component';
import { CommunityMemberComponent } from './pages/community-member/community-member.component';
import { AuthGuard } from './auth/auth.guard';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';

const routes: Routes = [
  { path: 'developer-directory', component: DeveloperDirectoryComponent, canActivate: [AuthGuard] },
  { path: 'developer-directory/:role', component: DeveloperDirectoryComponent, canActivate: [AuthGuard] },
  { path: 'community-member/:id', component: CommunityMemberComponent },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: 'developer-directory', pathMatch: 'full' },
  { path: '**', redirectTo: 'login' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
