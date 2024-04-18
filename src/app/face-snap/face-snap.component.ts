import { FaceSnap } from './../models/face-snap.models';
import { Component , OnInit, Input} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent {
  @Input() faceSnap! : FaceSnap;

  /*title!       : string;
  description! : string;
  createDate!  : Date;
  snap!        : number;
  imageUrl!    : string;*/
  buttonText!  : string;

  ngOnInit(): void {
    /*this.title       = "Lukasz";
    this.description = "Developer / Analyste";
    this.createDate  = new Date();
    this.snap        = 6;
    this.imageUrl    = '/assets/images/Jizo.jpg';*/
    this.buttonText  = "Oh Snap!";

  }

  onSnap(){
    if(this.buttonText === "Oh Snap!"){
      this.faceSnap.snaps++;
      this.buttonText = "Oops, un Snap!";
    }else{
      this.faceSnap.snaps--;
      this.buttonText = "Oh Snap!"
    }
  }
}
