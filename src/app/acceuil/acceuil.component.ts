import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.css']
})
export class AcceuilComponent implements OnInit {
 
  cheminImage : any = "C:\Users\IN-DF-004\Pictures\dossierAngularImage\redCorner1.jpg";
  constructor(private routeur : Router) { }

  ngOnInit(): void {
  }

}
