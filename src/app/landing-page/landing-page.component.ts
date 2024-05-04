import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
//import { Router } from 'express';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent implements OnInit{
  constructor(private router : Router){

  }

  ngOnInit(): void {

  }

  onContinue():void{
    this.router.navigateByUrl("/facesnaps")
  }
}
