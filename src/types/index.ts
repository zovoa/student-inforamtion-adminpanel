export interface Student {
  id: string;
  firstName: string;
  lastName: string;
  photoUrl: string;
  dateOfBirth: string;
  gender: 'Male' | 'Female' | 'Other';
  studentId: string;
  email: string;
  phone: string;
  address: string;
  enrollmentDate: string;
  currentClass: string;
  currentSection: string;
}

export interface AcademicRecord {
  id: string;
  studentId: string;
  term: string;
  year: string;
  subjects: Subject[];
  attendance: Attendance;
}

export interface Subject {
  name: string;
  grade: string;
  score: number;
  teacherName: string;
}

export interface Attendance {
  present: number;
  absent: number;
  late: number;
  total: number;
}

export interface Guardian {
  id: string;
  studentId: string;
  relation: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  isEmergencyContact: boolean;
}

export interface HealthRecord {
  id: string;
  studentId: string;
  bloodType: string;
  allergies: string[];
  medicalConditions: string[];
  medications: string[];
  notes: string;
}

export interface Document {
  id: string;
  studentId: string;
  name: string;
  type: string;
  uploadDate: string;
  fileUrl: string;
}

export type SortDirection = 'asc' | 'desc';

export interface SortConfig {
  key: string;
  direction: SortDirection;
}

export type Theme = 'light' | 'dark';