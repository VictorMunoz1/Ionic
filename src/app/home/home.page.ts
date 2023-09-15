import { Component,ElementRef,ViewChild} from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { IonTitle,AnimationController} from '@ionic/angular';
import type { Animation } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public alertButtons = ['OK'];
  public alertInputs = [
    {
      placeholder: 'Contraseña',
    },
    {
      placeholder: 'Repetir Contraseña',
    },
  ];
  //ViewChild(TipoComponente,{read:ElementRef}) nombre!:ElementRef<HTMLTipoObjetoElement>
  @ViewChild(IonTitle,{read:ElementRef}) titulo!:ElementRef<HTMLIonTitleElement>;
 
  constructor(private router: Router,private animationCtrl:AnimationController) { }
  private imagen!:Animation;
  private titul!:Animation;
  public mensaje = ""

  ngAfterViewInit() {
    this.titul = this.animationCtrl.create()
    .addElement(this.titulo.nativeElement)
    .duration(2500) 
    .iterations(Infinity)
    .fromTo('transform', 'translateX(0px)', 'translateX(100px)')
    .fromTo('opacity', '1', '0.2');
 
  }
  

  user = {
    usuario: "",
    password: ""
  }
  
  avatarPlay(){
    this.imagen.play();
    this.titul.play();
  }

  enviarInformacion() {
    if (this.user.usuario != "") {
      let navigationExtras: NavigationExtras = {
        state: { user: this.user }
      }
      this.router.navigate(['/alumno'], navigationExtras);
    } else {
      this.mensaje = "Debe ingresar sus credenciales";
    }
  }
  mostrarConsola() {
    console.log(this.user);
    if (this.user.usuario != "" && this.user.password != "") {
      this.mensaje = "Usuario Conectado";
    } else {
      this.mensaje = "Usuario y contraseña deben tener algun valor"
    }
  }

}