import { CategorieService } from './../../service/categorie.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categorie',
  templateUrl: './categorie.component.html',
  styleUrls: ['./categorie.component.css']
})
export class CategorieComponent implements OnInit {



  categorie = {};
  categories : any;

  constructor( private _cat: CategorieService ) { }

  ngOnInit() {

    this._cat.getAllCat().subscribe(

      res=>{

          this.categories = res;
      },
      err=>{

          console.log(err);
      }



    );

  }


  addCat() {

   this._cat.addCati(this.categorie).subscribe(

    res=>{
      console.log(res);
      this.ngOnInit();
    },
    err=>{
      console.log(err);
    }

    );


  }


deleteCat(id){

  this._cat.deleteCa(id).subscribe(

    res=>{
      this.ngOnInit();
    },
    err=>{
      console.log(err);
    }


  );

}







}
