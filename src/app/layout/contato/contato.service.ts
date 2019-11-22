import { Contato } from './contato';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class ContatoService {

  private collection: string = 'contatos';

  constructor(private db: AngularFirestore) { }

  list(): Promise<any> {
    
    return new Promise<any>((resolve, reject) => {
      this.db.collection(this.collection)
        .snapshotChanges()
        .subscribe(res => {
          resolve(res.map(m => {
            return { id: m.payload.doc.id, ...m.payload.doc.data() };
          }));
        },
          err => {
            reject(err)
          });

    });
  }

  get(id: string): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.db.collection(this.collection).doc(id).get().toPromise().then(
        res => {
          resolve({ id: id, ...res.data() });
        }
      ).catch(
        err => {
          reject(err);
        }
      );
    });
  }

  save(contato: Contato) {
    if (contato.id !== undefined) {
      return this.db.doc(`${this.collection}/${contato.id}`).update(contato);
    } else {
      return this.db.collection(this.collection).add({ ...contato });
    }
  }

  delete(contato: Contato) {
    return this.db.doc(`${this.collection}/${contato.id}`).delete();
  }

}
