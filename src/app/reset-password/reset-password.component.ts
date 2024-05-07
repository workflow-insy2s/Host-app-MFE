import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { KeycloakServiceService } from '../keycloak-service.service';
import Swal from 'sweetalert2';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit{
  ngOnInit(): void {
    console.log('succes')
      }
      constructor(private router: Router, private keycloakService: KeycloakServiceService ) {}
      email:any = ''
      password:any =''

      resetPassword(email: string , password:string){
        this.keycloakService.resetPassword(email,password).subscribe(
          
          
          response =>{
             // Traitez la réponse ici
             console.log('Réponse de l\'API:', response);
             Swal.fire('Mot de passe changé avec succès', '', 'success');

             this.router.navigate(['/']);
          },
          error => {
            // Gérez l'erreur ici
            console.log('Échec de la modification du mot de passe');
            Swal.fire('Erreur', 'Échec de la modification du mot de passe', 'error');


          }
          );
      }

}
