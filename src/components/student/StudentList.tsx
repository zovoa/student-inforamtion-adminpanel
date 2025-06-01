import React, { useState } from 'react';
import { useStudents } from '../../contexts/StudentContext';
import StudentCard from './StudentCard';
import StudentFilters from './StudentFilters';
import { PlusCircle, RefreshCw, ArrowUpDown } from 'lucide-react';
import Button from '../ui/Button';
import { SortConfig, SortDirection, Student } from '../../types';

const StudentList: React.FC = () => {
  const {
    filteredStudents,
    setSelectedStudentId,
    sortConfig,
    setSortConfig
  } = useStudents();

  const [loading, setLoading] = useState(false);
  const [draggingId, setDraggingId] = useState<string | null>(null);

  const handleSort = (key: string) => {
    let direction: SortDirection = 'asc';

    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === 'asc'
    ) {
      direction = 'desc';
    }

    setSortConfig({ key, direction });
  };

  const handleDragStart = (e: React.DragEvent, studentId: string) => {
    e.dataTransfer.setData('text/plain', studentId);
    setDraggingId(studentId);
  };

  const handleDragEnd = () => {
    setDraggingId(null);
  };

  const refreshData = () => {
    setLoading(true);
    // Simulate refresh
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          Student Directory
        </h2>
        <div className="flex flex-wrap gap-2">
          <Button 
            variant="outline"
            icon={<RefreshCw size={16} className={loading ? 'animate-spin' : ''} />}
            onClick={refreshData}
          >
            Refresh
          </Button>
          <Button 
            variant="primary"
            icon={<PlusCircle size={16} />}
          >
            Add Student
          </Button>
        </div>
      </div>

      <StudentFilters />

      <div className="flex items-center justify-between mb-4">
        <div className="text-sm text-gray-500 dark:text-gray-400">
          Showing <span className="font-medium">{filteredStudents.length}</span> students
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-600 dark:text-gray-300">Sort by:</span>
          <div className="relative">
            <select 
              className="appearance-none bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md pl-3 pr-8 py-1.5 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              value={sortConfig?.key || ''}
              onChange={(e) => handleSort(e.target.value)}
            >
              <option value="">Default</option>
              <option value="lastName">Name</option>
              <option value="currentClass">Class</option>
              <option value="enrollmentDate">Enrollment Date</option>
            </select>
            <ArrowUpDown size={14} className="absolute right-2.5 top-1/2 transform -translate-y-1/2 text-gray-500" />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
        {filteredStudents.map((student) => (
          <div
            key={student.id}
            className={`h-full transition-transform duration-200 ${
              draggingId === student.id ? 'scale-95 opacity-50' : ''
            }`}
            draggable
            onDragStart={(e) => handleDragStart(e, student.id)}
            onDragEnd={handleDragEnd}
          >
            <StudentCard
              student={student}
              onClick={(id) => setSelectedStudentId(id)}
            />
          </div>
        ))}

        {filteredStudents.length === 0 && (
          <div className="col-span-full py-12 flex flex-col items-center justify-center text-gray-500 dark:text-gray-400">
            <p className="text-lg">No students match your filters</p>
            <p className="text-sm mt-2">Try adjusting your search or filters</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default StudentList;