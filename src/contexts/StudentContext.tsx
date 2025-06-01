import React, { createContext, useContext, useState, useCallback } from 'react';
import { 
  Student, 
  AcademicRecord, 
  Guardian, 
  HealthRecord, 
  Document,
  SortConfig 
} from '../types';
import { 
  students as initialStudents, 
  academicRecords as initialAcademicRecords,
  guardians as initialGuardians,
  healthRecords as initialHealthRecords,
  documents as initialDocuments
} from '../data/mockData';

interface StudentContextType {
  students: Student[];
  academicRecords: AcademicRecord[];
  guardians: Guardian[];
  healthRecords: HealthRecord[];
  documents: Document[];
  selectedStudentId: string | null;
  filteredStudents: Student[];
  sortConfig: SortConfig | null;
  searchQuery: string;
  classFilter: string;
  sectionFilter: string;
  setSelectedStudentId: (id: string | null) => void;
  setSearchQuery: (query: string) => void;
  setClassFilter: (classFilter: string) => void;
  setSectionFilter: (sectionFilter: string) => void;
  setSortConfig: (config: SortConfig | null) => void;
  getStudentById: (id: string) => Student | undefined;
  getAcademicRecordByStudentId: (id: string) => AcademicRecord | undefined;
  getGuardiansByStudentId: (id: string) => Guardian[];
  getHealthRecordByStudentId: (id: string) => HealthRecord | undefined;
  getDocumentsByStudentId: (id: string) => Document[];
  addStudent: (student: Student) => void;
  updateStudent: (student: Student) => void;
  deleteStudent: (id: string) => void;
}

const StudentContext = createContext<StudentContextType | undefined>(undefined);

export const StudentProvider: React.FC<{ children: React.ReactNode }> = ({ 
  children 
}) => {
  const [students, setStudents] = useState<Student[]>(initialStudents);
  const [academicRecords, setAcademicRecords] = useState<AcademicRecord[]>(initialAcademicRecords);
  const [guardians, setGuardians] = useState<Guardian[]>(initialGuardians);
  const [healthRecords, setHealthRecords] = useState<HealthRecord[]>(initialHealthRecords);
  const [documents, setDocuments] = useState<Document[]>(initialDocuments);
  const [selectedStudentId, setSelectedStudentId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [classFilter, setClassFilter] = useState('');
  const [sectionFilter, setSectionFilter] = useState('');
  const [sortConfig, setSortConfig] = useState<SortConfig | null>(null);

  // Get filtered and sorted students based on search query and filters
  const filteredStudents = React.useMemo(() => {
    let result = [...students];

    // Apply search
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        student => 
          student.firstName.toLowerCase().includes(query) ||
          student.lastName.toLowerCase().includes(query) ||
          student.studentId.toLowerCase().includes(query)
      );
    }

    // Apply class filter
    if (classFilter) {
      result = result.filter(student => student.currentClass === classFilter);
    }

    // Apply section filter
    if (sectionFilter) {
      result = result.filter(student => student.currentSection === sectionFilter);
    }

    // Apply sorting
    if (sortConfig !== null) {
      result.sort((a, b) => {
        // Type assertion to access dynamic properties
        const aValue = a[sortConfig.key as keyof Student];
        const bValue = b[sortConfig.key as keyof Student];
        
        if (aValue < bValue) {
          return sortConfig.direction === 'asc' ? -1 : 1;
        }
        if (aValue > bValue) {
          return sortConfig.direction === 'asc' ? 1 : -1;
        }
        return 0;
      });
    }

    return result;
  }, [students, searchQuery, classFilter, sectionFilter, sortConfig]);

  const getStudentById = useCallback(
    (id: string) => students.find(student => student.id === id),
    [students]
  );

  const getAcademicRecordByStudentId = useCallback(
    (id: string) => academicRecords.find(record => record.studentId === id),
    [academicRecords]
  );

  const getGuardiansByStudentId = useCallback(
    (id: string) => guardians.filter(guardian => guardian.studentId === id),
    [guardians]
  );

  const getHealthRecordByStudentId = useCallback(
    (id: string) => healthRecords.find(record => record.studentId === id),
    [healthRecords]
  );

  const getDocumentsByStudentId = useCallback(
    (id: string) => documents.filter(doc => doc.studentId === id),
    [documents]
  );

  const addStudent = useCallback((student: Student) => {
    setStudents(prev => [...prev, student]);
  }, []);

  const updateStudent = useCallback((updatedStudent: Student) => {
    setStudents(prev => prev.map(student => 
      student.id === updatedStudent.id ? updatedStudent : student
    ));
  }, []);

  const deleteStudent = useCallback((id: string) => {
    setStudents(prev => prev.filter(student => student.id !== id));
  }, []);

  return (
    <StudentContext.Provider
      value={{
        students,
        academicRecords,
        guardians,
        healthRecords,
        documents,
        selectedStudentId,
        filteredStudents,
        sortConfig,
        searchQuery,
        classFilter,
        sectionFilter,
        setSelectedStudentId,
        setSearchQuery,
        setClassFilter,
        setSectionFilter,
        setSortConfig,
        getStudentById,
        getAcademicRecordByStudentId,
        getGuardiansByStudentId,
        getHealthRecordByStudentId,
        getDocumentsByStudentId,
        addStudent,
        updateStudent,
        deleteStudent
      }}
    >
      {children}
    </StudentContext.Provider>
  );
};

export const useStudents = (): StudentContextType => {
  const context = useContext(StudentContext);
  if (context === undefined) {
    throw new Error('useStudents must be used within a StudentProvider');
  }
  return context;
};