import React from 'react';
import { AcademicRecord } from '../../types';
import { BookOpen, Clock } from 'lucide-react';

interface AcademicHistoryProps {
  academicRecord: AcademicRecord;
}

const AcademicHistory: React.FC<AcademicHistoryProps> = ({ academicRecord }) => {
  const getGradeColor = (grade: string) => {
    const firstChar = grade.charAt(0);
    switch (firstChar) {
      case 'A':
        return 'text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20';
      case 'B':
        return 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20';
      case 'C':
        return 'text-yellow-600 dark:text-yellow-400 bg-yellow-50 dark:bg-yellow-900/20';
      case 'D':
        return 'text-orange-600 dark:text-orange-400 bg-orange-50 dark:bg-orange-900/20';
      case 'F':
        return 'text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20';
      default:
        return 'text-gray-600 dark:text-gray-400 bg-gray-50 dark:bg-gray-800';
    }
  };

  const calculateGPA = (subjects: AcademicRecord['subjects']) => {
    const gradePoints = {
      'A+': 4.0, 'A': 4.0, 'A-': 3.7,
      'B+': 3.3, 'B': 3.0, 'B-': 2.7,
      'C+': 2.3, 'C': 2.0, 'C-': 1.7,
      'D+': 1.3, 'D': 1.0, 'D-': 0.7,
      'F': 0.0
    };

    const total = subjects.reduce((sum, subject) => {
      const gradeKey = subject.grade as keyof typeof gradePoints;
      return sum + (gradePoints[gradeKey] || 0);
    }, 0);

    return (total / subjects.length).toFixed(2);
  };

  const gpa = calculateGPA(academicRecord.subjects);

  return (
    <div className="space-y-8 animate-fadeIn">
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 flex items-center">
            <BookOpen size={20} className="mr-2 text-indigo-600 dark:text-indigo-400" />
            Academic Performance
          </h4>
          <div className="text-sm">
            <span className="text-gray-500 dark:text-gray-400">{academicRecord.term} {academicRecord.year}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
          <div className="col-span-3">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                <thead className="bg-gray-50 dark:bg-gray-800">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Subject
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Teacher
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Grade
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                      Score
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white dark:bg-gray-900 divide-y divide-gray-200 dark:divide-gray-700">
                  {academicRecord.subjects.map((subject, index) => (
                    <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-800/60 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                        {subject.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                        {subject.teacherName}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getGradeColor(subject.grade)}`}>
                          {subject.grade}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                        {subject.score}/100
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="col-span-1 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg p-4">
            <h5 className="font-medium text-gray-900 dark:text-white mb-4">Performance Summary</h5>
            
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Term GPA</p>
                <p className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">{gpa}</p>
              </div>
              
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Average Score</p>
                <p className="text-xl font-semibold text-indigo-600 dark:text-indigo-400">
                  {Math.round(academicRecord.subjects.reduce((acc, subject) => acc + subject.score, 0) / academicRecord.subjects.length)}%
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center">
          <Clock size={20} className="mr-2 text-indigo-600 dark:text-indigo-400" />
          <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100">
            Attendance
          </h4>
        </div>

        <div className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg p-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
            <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <p className="text-sm text-gray-500 dark:text-gray-400">Present</p>
              <p className="text-2xl font-bold text-green-600 dark:text-green-400">
                {academicRecord.attendance.present}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                {Math.round((academicRecord.attendance.present / academicRecord.attendance.total) * 100)}%
              </p>
            </div>
            
            <div className="p-3 bg-red-50 dark:bg-red-900/20 rounded-lg">
              <p className="text-sm text-gray-500 dark:text-gray-400">Absent</p>
              <p className="text-2xl font-bold text-red-600 dark:text-red-400">
                {academicRecord.attendance.absent}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                {Math.round((academicRecord.attendance.absent / academicRecord.attendance.total) * 100)}%
              </p>
            </div>
            
            <div className="p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
              <p className="text-sm text-gray-500 dark:text-gray-400">Late</p>
              <p className="text-2xl font-bold text-yellow-600 dark:text-yellow-400">
                {academicRecord.attendance.late}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                {Math.round((academicRecord.attendance.late / academicRecord.attendance.total) * 100)}%
              </p>
            </div>
            
            <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <p className="text-sm text-gray-500 dark:text-gray-400">Total Days</p>
              <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                {academicRecord.attendance.total}
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                100%
              </p>
            </div>
          </div>

          <div className="mt-4 h-4 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
            <div className="flex h-full">
              <div 
                className="bg-green-500" 
                style={{ width: `${(academicRecord.attendance.present / academicRecord.attendance.total) * 100}%` }}
              ></div>
              <div 
                className="bg-yellow-500" 
                style={{ width: `${(academicRecord.attendance.late / academicRecord.attendance.total) * 100}%` }}
              ></div>
              <div 
                className="bg-red-500" 
                style={{ width: `${(academicRecord.attendance.absent / academicRecord.attendance.total) * 100}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AcademicHistory;