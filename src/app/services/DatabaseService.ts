import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Database } from '@app/interfaces/DatabaseInterface'

@Injectable()
export class DatabaseService {
    db: Observable<Database[]>;

    constructor(private firestore: AngularFirestore) {
        //this.db = this.firestore.collection('foody').valueChanges();
        this.db = this.firestore.collection('foody').valueChanges();
    }

    getDataBase() {
            return this.db;
    }
}