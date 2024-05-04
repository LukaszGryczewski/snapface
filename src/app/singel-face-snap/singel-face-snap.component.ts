import { FaceSnapService } from './../services/face-snap.service';
import { Component} from '@angular/core';
import { FaceSnap } from '../models/face-snap.models';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-singel-face-snap',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './singel-face-snap.component.html',
  styleUrl: './singel-face-snap.component.scss'
})
export class SingelFaceSnapComponent {
  faceSnap! : FaceSnap;

  buttonText!  : string;

  constructor(private FaceSnapService : FaceSnapService,
              private route : ActivatedRoute
             ){

             }
  ngOnInit(): void {
    this.buttonText  = "Oh Snap!";
    const facesnapId = +this.route.snapshot.params['id'];
    this.faceSnap = this.FaceSnapService.getFaceSnapById(facesnapId);
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
