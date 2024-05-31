import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})

export class AboutComponent implements OnInit{

  constructor(private router :Router){

  }

  ngOnInit(): void {

  }
  onContinue():void{
    this.router.navigateByUrl("/about");
  }
}
