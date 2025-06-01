import React from 'react';
import { Filter, X } from 'lucide-react';
import { useStudents } from '../../contexts/StudentContext';

const StudentFilters: React.FC = () => {
  const { 
    students,
    classFilter, 
    setClassFilter,
    sectionFilter,
    setSectionFilter
  } = useStudents();

  // Get unique classes and sections from students data
  const uniqueClasses = React.useMemo(() => {
    const classes = new Set(students.map(student => student.currentClass));
    return Array.from(classes).sort();
  }, [students]);

  const uniqueSections = React.useMemo(() => {
    const sections = new Set(students.map(student => student.currentSection));
    return Array.from(sections).sort();
  }, [students]);

  const resetFilters = () => {
    setClassFilter('');
    setSectionFilter('');
  };

  const hasActiveFilters = classFilter || sectionFilter;

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 transition-all duration-300">
      <div className="flex flex-wrap items-center gap-4">
        <div className="flex items-center">
          <Filter size={18} className="mr-2 text-gray-500 dark:text-gray-400" />
          <h3 className="font-medium text-gray-700 dark:text-gray-300">Filters</h3>
        </div>
        
        <div className="flex flex-wrap gap-4 flex-grow">
          <div>
            <label htmlFor="class-filter" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Class
            </label>
            <select
              id="class-filter"
              value={classFilter}
              onChange={(e) => setClassFilter(e.target.value)}
              className="bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 text-sm rounded-md focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2 min-w-[120px]"
            >
              <option value="">All Classes</option>
              {uniqueClasses.map((classValue) => (
                <option key={classValue} value={classValue}>
                  Class {classValue}
                </option>
              ))}
            </select>
          </div>
          
          <div>
            <label htmlFor="section-filter" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Section
            </label>
            <select
              id="section-filter"
              value={sectionFilter}
              onChange={(e) => setSectionFilter(e.target.value)}
              className="bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 text-sm rounded-md focus:ring-indigo-500 focus:border-indigo-500 block w-full p-2 min-w-[120px]"
            >
              <option value="">All Sections</option>
              {uniqueSections.map((section) => (
                <option key={section} value={section}>
                  Section {section}
                </option>
              ))}
            </select>
          </div>
        </div>
        
        {hasActiveFilters && (
          <button 
            onClick={resetFilters}
            className="flex items-center text-sm text-red-600 dark:text-red-400 hover:text-red-800 dark:hover:text-red-300"
          >
            <X size={16} className="mr-1" />
            Clear filters
          </button>
        )}
      </div>
      
      {hasActiveFilters && (
        <div className="mt-3 pt-3 border-t border-gray-200 dark:border-gray-700">
          <h4 className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-2">Active filters:</h4>
          <div className="flex flex-wrap gap-2">
            {classFilter && (
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200">
                Class: {classFilter}
                <button 
                  onClick={() => setClassFilter('')}
                  className="ml-1 text-indigo-600 dark:text-indigo-300 hover:text-indigo-800 dark:hover:text-indigo-100"
                >
                  <X size={14} />
                </button>
              </span>
            )}
            
            {sectionFilter && (
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                Section: {sectionFilter}
                <button 
                  onClick={() => setSectionFilter('')}
                  className="ml-1 text-blue-600 dark:text-blue-300 hover:text-blue-800 dark:hover:text-blue-100"
                >
                  <X size={14} />
                </button>
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default StudentFilters;