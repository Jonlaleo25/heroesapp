import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";
import { Heroe } from '../../interfaces/heroe.interfaces';
import { HeroesService} from '../../services/heroes.service';
import { Router, ActivatedRoute} from "@angular/router";
import { PARAMETERS } from '@angular/core/src/util/decorators';


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})
export class HeroeComponent implements OnInit {

   heroe:Heroe={
    nombre:"",
    bio:"",
    casa:"Marvel",
  }

  // poner una bandera para simuar

  nuevo : boolean = false;
  id:string ;


  constructor( private _heroesService : HeroesService,
               private router: Router,

               private activatedRoute:ActivatedRoute) {

                this.activatedRoute.params
                .subscribe(parametros =>{

                  console.log(parametros);
                  // hayq eu acordarse de donde proviene el id como se ingreso en el route
                  // {path:'heroe/:id', component: HeroeComponent},
                  this.id = parametros['id'];
                  if(this.id !== "nuevo"){

                    this._heroesService.getHeroe( this.id)
                    .subscribe( heroe => this.heroe = heroe )

                  }



                })
               }

  ngOnInit() {
  }

  guardar() {
    console.log(this.heroe);

          if( this.id == "nuevo"){

            // INSERTADO

            this._heroesService.nuevoHeroe(this.heroe)
            .subscribe(data => {
              console.log(data);
            this.router.navigate(['/heroe', data['name']]);
          }, error => console.log(error));
          console.log(this.heroe);

          }else{

            // ACTUALIZADO

              this._heroesService.actualizarHeroe(this.heroe, this.id)
              .subscribe(data => {
                console.log(data);
              // this.router.navigate(['/heroe', data['name']]);
                  }, error => console.log(error));
                  console.log(this.heroe);

          }
    }

  // GET
    agregarNuevo( forma:NgForm ){

      //alert("pasa")
      //this.guardar()
      this.router.navigate(['/heroe', 'nuevo']);
      //console.log(forma)
        //alert("pasa")
      forma.reset({
        casa:"Marvel"
      });

    }





}
