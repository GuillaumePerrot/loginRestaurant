import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

Client : Boolean = false;
Serveur : Boolean = false;
Manager : Boolean = false;

  constructor() { }

  ngOnInit(): void {
    
    if (localStorage.getItem("role") == 'Client') {
      this.Client = true;
    }
    if (localStorage.getItem("role") == 'Serveur') {
      this.Serveur = true;
    }
    if (localStorage.getItem("role") == 'Manager') {
      this.Manager = true;
    }
        
      }
    
  }


