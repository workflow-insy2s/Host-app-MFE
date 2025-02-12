import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { loadRemoteModule } from '@angular-architects/module-federation';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { VerificationCodeComponent } from './verification-code/verification-code.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

export const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:AuthComponent},
 
  {path:'forgetPasswordComponent',component:ForgetPasswordComponent},
  {path:'verificationCodeComponent',component:VerificationCodeComponent},
  {path:'resetPasswordComponent',component:ResetPasswordComponent},

  {
      path:'mfe1',
      loadChildren:()=>{
          return loadRemoteModule({
              type:'module',
              remoteEntry:"http://localhost:4001/remoteEntry.js",
              exposedModule:"./OrderModule"
          }).then(m=>m.OrderModule).catch(e=>console.log(e));
      }
  },
  {
      path:'mfe-rule',
      loadChildren:()=>{
          return loadRemoteModule({
              type:'module',
              remoteEntry:"http://localhost:4002/remoteEntry.js",
              exposedModule:"./RuleModule"
          }).then(m=>m.RuleModule).catch(e=>console.log(e));
      }
  },
  {
      path:'mfe-user',
      loadChildren:()=>{
          return loadRemoteModule({
              type:'module',
              remoteEntry:"http://localhost:4004/remoteEntry.js",
              exposedModule:"./RuleModule"
          }).then(m=>m.RuleModule).catch(e=>console.log(e));
      }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
