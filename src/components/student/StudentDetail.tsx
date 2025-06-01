import React, { useState } from 'react';
import { 
  ArrowLeft, 
  UserCircle,
  BookOpen,
  Users,
  Heart,
  File,
  ChevronRight
} from 'lucide-react';
import { useStudents } from '../../contexts/StudentContext';
import Avatar from '../ui/Avatar';
import Button from '../ui/Button';
import AcademicHistory from '../academic/AcademicHistory';
import GuardianInfo from '../academic/GuardianInfo';
import HealthInfo from '../academic/HealthInfo';
import DocumentList from '../academic/DocumentList';

const StudentDetail: React.FC = () => {
  const { 
    selectedStudentId, 
    setSelectedStudentId, 
    getStudentById,
    getAcademicRecordByStudentId,
    getGuardiansByStudentId,
    getHealthRecordByStudentId,
    getDocumentsByStudentId
  } = useStudents();

  const [activeTab, setActiveTab] = useState<'profile' | 'academics' | 'guardians' | 'health' | 'documents'>('profile');
  
  if (!selectedStudentId) return null;
  
  const student = getStudentById(selectedStudentId);
  
  if (!student) return (
    <div className="flex flex-col items-center justify-center h-full">
      <p className="text-gray-500">Student not found</p>
      <Button 
        variant="outline" 
        onClick={() => setSelectedStudentId(null)}
        className="mt-4"
      >
        Back to List
      </Button>
    </div>
  );
  
  const academicRecord = getAcademicRecordByStudentId(selectedStudentId);
  const guardians = getGuardiansByStudentId(selectedStudentId);
  const healthRecord = getHealthRecordByStudentId(selectedStudentId);
  const documents = getDocumentsByStudentId(selectedStudentId);

  const calculateAge = (dateOfBirth: string) => {
    const dob = new Date(dateOfBirth);
    const today = new Date();
    let age = today.getFullYear() - dob.getFullYear();
    const monthDiff = today.getMonth() - dob.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
      age--;
    }
    return age;
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
      <div className="bg-gradient-to-r from-indigo-600 to-blue-500 text-white p-6">
        <div className="flex items-center mb-4">
          <Button
            variant="ghost"
            onClick={() => setSelectedStudentId(null)}
            className="text-white hover:bg-white/20 mr-2"
            icon={<ArrowLeft size={20} />}
            aria-label="Back to student list"
          >
            Back
          </Button>
          <h2 className="text-2xl font-bold">Student Profile</h2>
        </div>

        <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
          <div className="flex-shrink-0">
            <div className="relative group">
              <Avatar 
                src={student.photoUrl} 
                alt={`${student.firstName} ${student.lastName}`} 
                size="xl"
                className="h-32 w-32 border-4 border-white shadow-lg group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 rounded-full cursor-pointer">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button variant="ghost" className="text-white p-1">
                    <UserCircle size={24} />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center md:text-left">
            <h3 className="text-3xl font-bold">
              {student.firstName} {student.lastName}
            </h3>
            <p className="text-blue-100">Student ID: {student.studentId} • Class {student.currentClass}{student.currentSection}</p>
            <div className="mt-3 flex flex-wrap justify-center md:justify-start gap-3">
              <div className="bg-white/10 backdrop-blur-sm px-4 py-1.5 rounded-full">
                {student.gender} • Age {calculateAge(student.dateOfBirth)}
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-4 py-1.5 rounded-full">
                Enrolled: {new Date(student.enrollmentDate).toLocaleDateString()}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex overflow-x-auto border-b border-gray-200 dark:border-gray-700">
        <button
          onClick={() => setActiveTab('profile')}
          className={`px-6 py-3 font-medium text-sm flex items-center whitespace-nowrap ${
            activeTab === 'profile'
              ? 'border-b-2 border-indigo-600 text-indigo-600 dark:text-indigo-400 dark:border-indigo-400'
              : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200'
          }`}
        >
          <UserCircle size={18} className="mr-2" />
          Profile
        </button>
        <button
          onClick={() => setActiveTab('academics')}
          className={`px-6 py-3 font-medium text-sm flex items-center whitespace-nowrap ${
            activeTab === 'academics'
              ? 'border-b-2 border-indigo-600 text-indigo-600 dark:text-indigo-400 dark:border-indigo-400'
              : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200'
          }`}
        >
          <BookOpen size={18} className="mr-2" />
          Academics
        </button>
        <button
          onClick={() => setActiveTab('guardians')}
          className={`px-6 py-3 font-medium text-sm flex items-center whitespace-nowrap ${
            activeTab === 'guardians'
              ? 'border-b-2 border-indigo-600 text-indigo-600 dark:text-indigo-400 dark:border-indigo-400'
              : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200'
          }`}
        >
          <Users size={18} className="mr-2" />
          Guardians
        </button>
        <button
          onClick={() => setActiveTab('health')}
          className={`px-6 py-3 font-medium text-sm flex items-center whitespace-nowrap ${
            activeTab === 'health'
              ? 'border-b-2 border-indigo-600 text-indigo-600 dark:text-indigo-400 dark:border-indigo-400'
              : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200'
          }`}
        >
          <Heart size={18} className="mr-2" />
          Health
        </button>
        <button
          onClick={() => setActiveTab('documents')}
          className={`px-6 py-3 font-medium text-sm flex items-center whitespace-nowrap ${
            activeTab === 'documents'
              ? 'border-b-2 border-indigo-600 text-indigo-600 dark:text-indigo-400 dark:border-indigo-400'
              : 'text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200'
          }`}
        >
          <File size={18} className="mr-2" />
          Documents
        </button>
      </div>

      {/* Tab content */}
      <div className="p-6">
        {activeTab === 'profile' && (
          <div className="space-y-8 animate-fadeIn">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Personal Information</h4>
                <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4 space-y-3">
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Full Name</p>
                    <p className="font-medium text-gray-900 dark:text-gray-100">{student.firstName} {student.lastName}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Date of Birth</p>
                    <p className="font-medium text-gray-900 dark:text-gray-100">
                      {new Date(student.dateOfBirth).toLocaleDateString()} (Age {calculateAge(student.dateOfBirth)})
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Gender</p>
                    <p className="font-medium text-gray-900 dark:text-gray-100">{student.gender}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Student ID</p>
                    <p className="font-medium text-gray-900 dark:text-gray-100">{student.studentId}</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Contact Information</h4>
                <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4 space-y-3">
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                    <p className="font-medium text-gray-900 dark:text-gray-100">{student.email}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Phone</p>
                    <p className="font-medium text-gray-900 dark:text-gray-100">{student.phone}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Address</p>
                    <p className="font-medium text-gray-900 dark:text-gray-100">{student.address}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Enrollment Information</h4>
              <div className="bg-gray-50 dark:bg-gray-900 rounded-lg p-4 space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Enrollment Date</p>
                    <p className="font-medium text-gray-900 dark:text-gray-100">
                      {new Date(student.enrollmentDate).toLocaleDateString()}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Current Class</p>
                    <p className="font-medium text-gray-900 dark:text-gray-100">Class {student.currentClass}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Current Section</p>
                    <p className="font-medium text-gray-900 dark:text-gray-100">Section {student.currentSection}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-end space-x-4">
              <Button 
                variant="outline" 
                icon={<Pencil size={16} />}
              >
                Edit Profile
              </Button>
            </div>
          </div>
        )}

        {activeTab === 'academics' && academicRecord && (
          <AcademicHistory academicRecord={academicRecord} />
        )}

        {activeTab === 'guardians' && (
          <GuardianInfo guardians={guardians} />
        )}

        {activeTab === 'health' && healthRecord && (
          <HealthInfo healthRecord={healthRecord} />
        )}

        {activeTab === 'documents' && (
          <DocumentList documents={documents} />
        )}
      </div>
    </div>
  );
};

export default StudentDetail;