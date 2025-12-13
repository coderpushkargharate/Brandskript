export interface Booking {
  _id?: string;
  fullName: string;
  email: string;
  phoneNumber: string;
  occupation: string;
  weight: number;
  height: number;
  age: number;
  condition: string;
  selectedDate: string;
  timeSlot: string;
  createdAt?: string;
}
