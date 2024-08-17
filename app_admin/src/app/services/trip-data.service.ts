// app_admin/src/app/services/trip-data.service.ts

import { Inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Trip } from '../models/trip';
import { User } from '../models/user'; // Import User model
import { AuthResponse } from '../models/auth-response'; // Import AuthResponse model
import { BROWSER_STORAGE } from '../storage'; // Import BROWSER_STORAGE for accessing local storage

@Injectable({
  providedIn: 'root'
})
export class TripDataService {
  // Define the base URL for API endpoints
  baseUrl = 'http://localhost:3000/api';
  url = this.baseUrl + '/trips'; // URL for the trips endpoint

  constructor(
    private http: HttpClient,
    @Inject(BROWSER_STORAGE) private storage: Storage // Inject the Storage provider
  ) {}

  // Method to get all trips
  getTrips(): Observable<Trip[]> {
    return this.http.get<Trip[]>(this.url);
  }

  // Method to add a new trip
  addTrip(formData: Trip): Observable<Trip> {
    return this.http.post<Trip>(this.url, formData);
  }

  // Method to get a specific trip by its code
  getTrip(tripCode: string): Observable<Trip[]> {
    // console.log('Inside TripDataService::getTrips');
    return this.http.get<Trip[]>(this.url + '/' + tripCode);
  }

  // Method to update a specific trip
  updateTrip(formData: Trip): Observable<Trip> {
    // console.log('Inside TripDataService::addTrips');
    return this.http.put<Trip>(this.url + '/' + formData.code, formData);
  }

  // Method to handle login, calls the /login endpoint and returns a JWT
  login(user: User, passwd: string): Observable<AuthResponse> {
    // console.log('Inside TripDataService::login');
    return this.handleAuthAPICall('login', user, passwd);
  }

  // Method to handle registration, calls the /register endpoint, creates a user, and returns a JWT
  register(user: User, passwd: string): Observable<AuthResponse> {
    // console.log('Inside TripDataService::register');
    return this.handleAuthAPICall('register', user, passwd);
  }

  // Helper method to process both login and register methods
  handleAuthAPICall(endpoint: string, user: User, passwd: string): Observable<AuthResponse> {
    // console.log('Inside TripDataService::handleAuthAPICall');
    let formData = {
      name: user.name,
      email: user.email,
      password: passwd
    };
    return this.http.post<AuthResponse>(this.baseUrl + '/' + endpoint, formData);
  }
}
