import { FaceSnapService } from './../services/face-snap.service';
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

  constructor(private FaceSnapService : FaceSnapService){}
  ngOnInit(): void {
    this.buttonText  = "Oh Snap!";
  }

  onSnap(){
    if(this.buttonText === "Oh Snap!"){
      this.FaceSnapService.snapGetFaceSnapById(this.faceSnap.id,'snap');
      this.buttonText = "Oops, un Snap!";
    }else{
      this.FaceSnapService.snapGetFaceSnapById(this.faceSnap.id,'unsnap');
      this.buttonText = "Oh Snap!"
    }
  }
}
