import { FaceSnapService } from './../services/face-snap.service';
import { Component,Input, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap.models';
import { CommonModule } from '@angular/common';
import { FaceSnapComponent } from '../face-snap/face-snap.component';


@Component({
  selector: 'app-face-snap-list',
  standalone: true,
  imports: [CommonModule,FaceSnapComponent],
  templateUrl: './face-snap-list.component.html',
  styleUrl: './face-snap-list.component.scss'
})
export class FaceSnapListComponent implements OnInit{
  faceSnaps! : FaceSnap[];

  constructor(private FaceSnapService : FaceSnapService){}

  ngOnInit(){
    this.faceSnaps = this.FaceSnapService.getAllFaceSnap();
  }
}
