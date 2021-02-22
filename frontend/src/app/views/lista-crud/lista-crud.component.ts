import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-crud',
  templateUrl: './lista-crud.component.html',
  styleUrls: ['./lista-crud.component.css']
})
export class ListaCrudComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navnovaturma(): void {
    this.router.navigate(["/lista/create"])
  }

}
