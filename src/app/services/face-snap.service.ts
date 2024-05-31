import { FaceSnap } from './../models/face-snap.models';
import { Injectable } from "@angular/core";

@Injectable({
  providedIn : 'root'
})
export class FaceSnapService {

  faceSnaps : FaceSnap[] = [
    {
      id : 1,
      title : 'Croatia',
      description : `The other Croatia, that of the interior, is similar to the countries of Central Europe, with its share of adventures through the ages but which has left invaluable cultural riches. Croatia is indeed dotted with ancient architecture, of all styles and periods, which will leave travelers dazzled. There are Roman remains, Baroque buildings, Gothic-style Renaissance architecture, Romanesque ruins and Venetian buildings.`,
      imageUrl : '../assets/images/image5.jpg',
      createdDate: new Date(),
      location : "Croatia",
      snaps : 560

    },
    {
      id : 2,
      title : 'Sicily',
      description : `Sicily, once called the island of the sun, deserves its name. The beaches, bordered by a clear sea, are, depending on the location, overlooked by cliffs and breathtaking landscapes or made up of long stretches of fine sand or pebbles: they will always delight summer visitors.`,
      imageUrl : '../assets/images/image6.jpg',
      createdDate: new Date(),
      location : "Italy",
      snaps : 620

    },
    {
      id : 3,
      title : 'Canary Islands',
      description : `The island of Lanzarote, considered the northernmost of the inhabited islands of the Canary Islands, has so much to offer its visitors, despite its lunar land appearance. Indeed, whether you are passionate about adventure and sporting activities, looking for peace and quiet or even nature lovers, you will find settings on the island that are conducive to your aspirations.`,
      imageUrl : '../assets/images/image4.jpg',
      createdDate: new Date(),
      location : "Spanie",
      snaps : 830

    },
    {
      id : 4,
      title: 'Crete',
      description: `The island of Crete, located on the southern border of Europe, is a legendary destination for fans of Greek mythology and ancient stories. But thanks to its magnificent sandy beaches, lovers of sun holidays and beach relaxation will not be disappointed either. With these multiple facets, the island of Crete offers visitors the opportunity to spend an unforgettable vacation.`,
      imageUrl: '../assets/images/image3.jpg',
      createdDate: new Date(),
      location : "Greece",
      snaps: 725
    },
    {
      id : 5,
      title: 'Budapest',
      description: `Budapest, the Hungarian capital, owes its name to the association of the two names of the cities located on either side of the banks of the Danube: Buda and Pest. A dream destination for lovers of urban tourism and a must to visit in Hungary, Budapest is attractive thanks to its many sites not to be missed such as the famous "Chain Bridge", the Buda Castle, the Parliament or even Sinner's Bastion.`,
      imageUrl: '../assets/images/image2.jpg',
      createdDate: new Date(),
      location : "Hungarie",
      snaps: 501
    },
    {
      id : 6,
      title : 'Slovakia',
      description : `Slovakia, although landlocked between the countries of Central Europe, has several assets which will not leave lovers of majestic mountains indifferent. These are multi-faceted attractions.`,
      imageUrl : '../assets/images/image7.jpg',
      createdDate: new Date(),
      location : "Slovakia",
      snaps : 502

    }
  ];

  getAllFaceSnap() : FaceSnap[] {
    return this.faceSnaps;
  }

  getFaceSnapById(faceSnapId : number):FaceSnap{
    const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
    if(!faceSnap){
      throw new Error('FaceSnap not found');
    }else{
      return faceSnap;
    }
  }

  snapGetFaceSnapById(faceSnapId : number, snapType : 'snap' | 'unsnap'):void{
    const faceSnap = this.getFaceSnapById(faceSnapId);
    snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;

  }
}
