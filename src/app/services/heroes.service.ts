import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http'
import { Heroe } from '../interfaces/heroe.interfaces';
import 'rxjs/Rx'

 //import 'Rxjs-compat';
//import { filter, map } from 'rxjs/operators';
//import { map } from 'rxjs/operators';
//import 'rxjs/add/operator/map';
//import {map} from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})

export class HeroesService {

  heroesURL:string = "https://heroesapp-bfef6.firebaseio.com/heroes.json"
  heroeURL : string ="https://heroesapp-bfef6.firebaseio.com/heroes/";
  constructor( private http:HttpClient) { }

// POST
  nuevoHeroe (heroe:Heroe){

    // Se convierte el string perfecto de JSON a string
    const body = JSON.stringify( heroe );
    // definicion del encabezado
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });



    return this.http.post( this.heroesURL,body, {headers}  )
    .map(res=>{

      return res;

    })


  }

     //Put


     actualizarHeroe (heroe:Heroe, key$:string){

      // Se convierte el string perfecto de JSON a string
      let body = JSON.stringify( heroe );
      // definicion del encabezado
      let headers = new HttpHeaders({
        'Content-Type': 'application/json'
      });

       // crea con la url osea concatena con el parametro para qeu sea dinamico
      let url =  `${ this.heroeURL }/${ key$}.json`


      return this.http.put( url ,body, {headers}  )
      .map(res=>{
        return res;

      })


    }

  getHeroe( key$:string) {

    let url = `${this.heroeURL}/${ key$}.json`;
    return this.http.get( url )
    .map( res =>{
         return res;
    })
  }

// obtener todos los registros del  firbase
  getHeroes( ) {


    return this.http.get( this.heroesURL )
    .map( res =>{
         return res;
    })
  }

  borrarHeroe( key$:string){

    let url= `${ this.heroeURL}/${ key$ }.json`;
    return this.http.delete( url)
               .map( res => {
                 console.log(res);
                 return res;
               })

  }




}
