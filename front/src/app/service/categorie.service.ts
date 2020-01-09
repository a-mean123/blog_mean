import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {
  private _cat = 'http://localhost:3000/categories';

  constructor( private http: HttpClient ) { }



  // Add new Categorie

addCati(cat){


return this.http.post<any>(this._cat, cat);


}


// get all categories



getAllCat(){
  return this.http.get<any>(this._cat);

}



// delete categorie

deleteCa(id) {

    return this.http.delete<any>(this._cat + '/' + id );

}





}
