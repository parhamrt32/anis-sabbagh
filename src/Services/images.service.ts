import { Injectable } from '@angular/core';
import { Storage , ref , listAll ,getDownloadURL} from '@angular/fire/storage';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {

  imagesPromises : Promise<string>[] = []

  constructor( private storage: Storage ) { }

  getImage(category: string, brand?: string): Observable<string[]> {
    const reference = ref(this.storage, `${category}/`);
    return from(listAll(reference).then(ref => {
      const promises = ref.items.map(itemRef => getDownloadURL(itemRef));
      return Promise.all(promises);
    }));
  }





}
