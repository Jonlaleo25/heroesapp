import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes:any[] = [];

  loading: boolean= true;

  constructor( private _heroeService:HeroesService) {

    this._heroeService.getHeroes()
    .subscribe( data  => {

      //console.log(data)
      // this.loading = false;
      setTimeout( () => {
                         this.loading = false;
                         this.heroes = data ;
                         }, 1000);




      // for( let key$ in data ){
      //   console.log( data[key$]);
      //   this.heroes.push( data [key$]);

      // }
    })
  }

  ngOnInit() {
  }


  borrarHeroe(key$:string){

    this._heroeService.borrarHeroe(key$)
        .subscribe( data =>{

          console.log(data);

          if(data ){
            console.error(data);
          }else {
            // todo bien

            delete this.heroes[key$]
          }

        })

  }

}
