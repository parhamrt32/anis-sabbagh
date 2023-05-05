import { Injectable } from '@angular/core';
import { Storage , ref , listAll ,getDownloadURL , getMetadata} from '@angular/fire/storage';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  imagesPromises : Promise<string>[] = []

  constructor( private storage: Storage ) { }

  // getImage(category: string, brand?: string): any {
  //   const reference = ref(this.storage, `${category}/`);
  //   return from(listAll(reference).then(ref => {
  //     console.log(ref);
  //     const promises = ref.items.map(itemRef => {
  //       const downloadURLPromise = getDownloadURL(itemRef).then(url => url.replace("https://firebasestorage.googleapis.com/v0/b/anis-sabbagh.appspot.com","https://ik.imagekit.io/9nftpp6fp"))
  //       return Promise.all([downloadURLPromise]).then( url => {
  //       const image = new Image()
  //       image.src = url.toString()
  //       image.onload = () => {


  //         return({
  //           url : url.toString(),
  //           width : image.width,
  //           height : image.height
  //         });


  //       }

  //       } )
  //     }   );

  //     return Promise.all(promises);
  //   }));
  // }

  getImage(category: string, brand?: string): any {
    const reference = ref(this.storage, `${category}/`);
    return from(listAll(reference).then(ref => {
      console.log(ref);
      const promises = ref.items.map(itemRef => {
        return  getDownloadURL(itemRef).then(url => url.replace("https://firebasestorage.googleapis.com/v0/b/anis-sabbagh.appspot.com","https://ik.imagekit.io/9nftpp6fp"))

      });

      return Promise.all(promises);
    }))
  }



}
