import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Reservation } from '../model/reservation';

@Injectable({
  providedIn: 'root'
})
export class ReservationService {

  constructor(private http : HttpClient) { }

  getAllReservation() {
    return this.http.get<Reservation[]>('http://localhost:8080/reservation/all').pipe()
  }

  getyIdReservation(idReservation : number) {
    return this.http.get<Reservation>('http://localhost:8080/reservation/' + idReservation).pipe()
  }

  delete(idReservation : number) {
    return this.http.delete<Boolean>('http://localhost:8080/reservation/delete/' + idReservation).pipe()
  }

  createReservation(reservation : Reservation) {
    return this.http.post<Reservation>('http://localhost:8080/reservation', reservation).pipe()
  }

}
