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

  buttonText!  : string;

  ngOnInit(): void {
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
