// app_admin/src/app/models/trip.ts

export interface Trip {
    _id: string;  // Internal primary key in MongoDB
    code: string;
    name: string;
    length: string;
    start: Date;
    resort: string;
    perPerson: string;
    image: string;
    description: string;
  }
  