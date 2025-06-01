import { 
  Student, 
  AcademicRecord, 
  Guardian, 
  HealthRecord, 
  Document 
} from '../types';

export const students: Student[] = [
  {
    id: '1',
    firstName: 'John',
    lastName: 'Smith',
    photoUrl: 'https://images.pexels.com/photos/1462980/pexels-photo-1462980.jpeg?auto=compress&cs=tinysrgb&w=600',
    dateOfBirth: '2007-04-12',
    gender: 'Male',
    studentId: 'ST001',
    email: 'john.smith@school.edu',
    phone: '(555) 123-4567',
    address: '123 Main St, Anytown, CA 90210',
    enrollmentDate: '2020-09-01',
    currentClass: '10',
    currentSection: 'A'
  },
  {
    id: '2',
    firstName: 'Emma',
    lastName: 'Johnson',
    photoUrl: 'https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=600',
    dateOfBirth: '2008-07-23',
    gender: 'Female',
    studentId: 'ST002',
    email: 'emma.johnson@school.edu',
    phone: '(555) 234-5678',
    address: '456 Oak Ave, Anytown, CA 90210',
    enrollmentDate: '2020-09-01',
    currentClass: '9',
    currentSection: 'B'
  },
  {
    id: '3',
    firstName: 'Michael',
    lastName: 'Williams',
    photoUrl: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=600',
    dateOfBirth: '2007-11-05',
    gender: 'Male',
    studentId: 'ST003',
    email: 'michael.williams@school.edu',
    phone: '(555) 345-6789',
    address: '789 Pine Rd, Anytown, CA 90210',
    enrollmentDate: '2021-09-01',
    currentClass: '10',
    currentSection: 'A'
  },
  {
    id: '4',
    firstName: 'Sophia',
    lastName: 'Brown',
    photoUrl: 'https://images.pexels.com/photos/3754438/pexels-photo-3754438.jpeg?auto=compress&cs=tinysrgb&w=600',
    dateOfBirth: '2008-02-18',
    gender: 'Female',
    studentId: 'ST004',
    email: 'sophia.brown@school.edu',
    phone: '(555) 456-7890',
    address: '101 Maple Dr, Anytown, CA 90210',
    enrollmentDate: '2021-09-01',
    currentClass: '9',
    currentSection: 'C'
  },
  {
    id: '5',
    firstName: 'James',
    lastName: 'Davis',
    photoUrl: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=600',
    dateOfBirth: '2007-09-30',
    gender: 'Male',
    studentId: 'ST005',
    email: 'james.davis@school.edu',
    phone: '(555) 567-8901',
    address: '202 Cedar Ln, Anytown, CA 90210',
    enrollmentDate: '2020-09-01',
    currentClass: '10',
    currentSection: 'B'
  }
];

export const academicRecords: AcademicRecord[] = [
  {
    id: '1',
    studentId: '1',
    term: 'Fall',
    year: '2023',
    subjects: [
      { name: 'Mathematics', grade: 'A', score: 92, teacherName: 'Ms. Anderson' },
      { name: 'English', grade: 'B+', score: 87, teacherName: 'Mr. Roberts' },
      { name: 'Science', grade: 'A-', score: 90, teacherName: 'Dr. Miller' },
      { name: 'History', grade: 'B', score: 85, teacherName: 'Mrs. Thompson' }
    ],
    attendance: {
      present: 85,
      absent: 3,
      late: 2,
      total: 90
    }
  },
  {
    id: '2',
    studentId: '2',
    term: 'Fall',
    year: '2023',
    subjects: [
      { name: 'Mathematics', grade: 'B', score: 85, teacherName: 'Ms. Anderson' },
      { name: 'English', grade: 'A', score: 94, teacherName: 'Mr. Roberts' },
      { name: 'Science', grade: 'B+', score: 88, teacherName: 'Dr. Miller' },
      { name: 'History', grade: 'A-', score: 90, teacherName: 'Mrs. Thompson' }
    ],
    attendance: {
      present: 87,
      absent: 2,
      late: 1,
      total: 90
    }
  },
  {
    id: '3',
    studentId: '3',
    term: 'Fall',
    year: '2023',
    subjects: [
      { name: 'Mathematics', grade: 'A-', score: 91, teacherName: 'Ms. Anderson' },
      { name: 'English', grade: 'B', score: 84, teacherName: 'Mr. Roberts' },
      { name: 'Science', grade: 'A', score: 95, teacherName: 'Dr. Miller' },
      { name: 'History', grade: 'B+', score: 88, teacherName: 'Mrs. Thompson' }
    ],
    attendance: {
      present: 80,
      absent: 5,
      late: 5,
      total: 90
    }
  },
  {
    id: '4',
    studentId: '4',
    term: 'Fall',
    year: '2023',
    subjects: [
      { name: 'Mathematics', grade: 'B+', score: 87, teacherName: 'Ms. Anderson' },
      { name: 'English', grade: 'A', score: 93, teacherName: 'Mr. Roberts' },
      { name: 'Science', grade: 'B', score: 85, teacherName: 'Dr. Miller' },
      { name: 'History', grade: 'A-', score: 90, teacherName: 'Mrs. Thompson' }
    ],
    attendance: {
      present: 88,
      absent: 1,
      late: 1,
      total: 90
    }
  },
  {
    id: '5',
    studentId: '5',
    term: 'Fall',
    year: '2023',
    subjects: [
      { name: 'Mathematics', grade: 'A', score: 95, teacherName: 'Ms. Anderson' },
      { name: 'English', grade: 'B+', score: 88, teacherName: 'Mr. Roberts' },
      { name: 'Science', grade: 'A-', score: 91, teacherName: 'Dr. Miller' },
      { name: 'History', grade: 'B', score: 84, teacherName: 'Mrs. Thompson' }
    ],
    attendance: {
      present: 84,
      absent: 4,
      late: 2,
      total: 90
    }
  }
];

export const guardians: Guardian[] = [
  {
    id: '1',
    studentId: '1',
    relation: 'Father',
    firstName: 'Robert',
    lastName: 'Smith',
    email: 'robert.smith@email.com',
    phone: '(555) 123-9876',
    address: '123 Main St, Anytown, CA 90210',
    isEmergencyContact: true
  },
  {
    id: '2',
    studentId: '1',
    relation: 'Mother',
    firstName: 'Sarah',
    lastName: 'Smith',
    email: 'sarah.smith@email.com',
    phone: '(555) 123-8765',
    address: '123 Main St, Anytown, CA 90210',
    isEmergencyContact: false
  },
  {
    id: '3',
    studentId: '2',
    relation: 'Mother',
    firstName: 'Jennifer',
    lastName: 'Johnson',
    email: 'jennifer.johnson@email.com',
    phone: '(555) 234-9876',
    address: '456 Oak Ave, Anytown, CA 90210',
    isEmergencyContact: true
  },
  {
    id: '4',
    studentId: '3',
    relation: 'Father',
    firstName: 'David',
    lastName: 'Williams',
    email: 'david.williams@email.com',
    phone: '(555) 345-9876',
    address: '789 Pine Rd, Anytown, CA 90210',
    isEmergencyContact: true
  },
  {
    id: '5',
    studentId: '4',
    relation: 'Mother',
    firstName: 'Emily',
    lastName: 'Brown',
    email: 'emily.brown@email.com',
    phone: '(555) 456-9876',
    address: '101 Maple Dr, Anytown, CA 90210',
    isEmergencyContact: true
  },
  {
    id: '6',
    studentId: '5',
    relation: 'Father',
    firstName: 'Thomas',
    lastName: 'Davis',
    email: 'thomas.davis@email.com',
    phone: '(555) 567-9876',
    address: '202 Cedar Ln, Anytown, CA 90210',
    isEmergencyContact: true
  }
];

export const healthRecords: HealthRecord[] = [
  {
    id: '1',
    studentId: '1',
    bloodType: 'O+',
    allergies: ['Peanuts', 'Penicillin'],
    medicalConditions: ['Asthma'],
    medications: ['Albuterol'],
    notes: 'Mild asthma, requires inhaler during physical activities.'
  },
  {
    id: '2',
    studentId: '2',
    bloodType: 'A+',
    allergies: ['None'],
    medicalConditions: ['None'],
    medications: [],
    notes: 'No significant medical conditions.'
  },
  {
    id: '3',
    studentId: '3',
    bloodType: 'B-',
    allergies: ['Shellfish'],
    medicalConditions: ['ADHD'],
    medications: ['Adderall'],
    notes: 'Takes medication daily before school.'
  },
  {
    id: '4',
    studentId: '4',
    bloodType: 'AB+',
    allergies: ['Dust', 'Pollen'],
    medicalConditions: ['Seasonal allergies'],
    medications: ['Cetirizine'],
    notes: 'May need antihistamines during spring season.'
  },
  {
    id: '5',
    studentId: '5',
    bloodType: 'A-',
    allergies: ['Latex'],
    medicalConditions: ['Diabetes Type 1'],
    medications: ['Insulin'],
    notes: 'Requires blood sugar monitoring, has emergency insulin in nurse\'s office.'
  }
];

export const documents: Document[] = [
  {
    id: '1',
    studentId: '1',
    name: 'Birth Certificate',
    type: 'Identification',
    uploadDate: '2020-08-15',
    fileUrl: '/documents/birth-certificate-1.pdf'
  },
  {
    id: '2',
    studentId: '1',
    name: 'Immunization Records',
    type: 'Medical',
    uploadDate: '2020-08-15',
    fileUrl: '/documents/immunization-1.pdf'
  },
  {
    id: '3',
    studentId: '2',
    name: 'Birth Certificate',
    type: 'Identification',
    uploadDate: '2020-08-10',
    fileUrl: '/documents/birth-certificate-2.pdf'
  },
  {
    id: '4',
    studentId: '3',
    name: 'Previous School Records',
    type: 'Academic',
    uploadDate: '2021-08-20',
    fileUrl: '/documents/previous-records-3.pdf'
  },
  {
    id: '5',
    studentId: '4',
    name: 'Birth Certificate',
    type: 'Identification',
    uploadDate: '2021-08-15',
    fileUrl: '/documents/birth-certificate-4.pdf'
  },
  {
    id: '6',
    studentId: '5',
    name: 'Medical Exemption',
    type: 'Medical',
    uploadDate: '2020-08-25',
    fileUrl: '/documents/medical-exemption-5.pdf'
  }
];