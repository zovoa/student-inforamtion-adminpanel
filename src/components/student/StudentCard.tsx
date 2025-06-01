import React, { useState } from 'react';
import { Mail, Phone, Calendar, Pencil, Trash2, CheckCircle } from 'lucide-react';
import { Student } from '../../types';
import Avatar from '../ui/Avatar';
import Card, { CardHeader, CardContent, CardFooter } from '../ui/Card';
import Button from '../ui/Button';

interface StudentCardProps {
  student: Student;
  onClick: (id: string) => void;
  onDelete?: (id: string) => void;
  onEdit?: (student: Student) => void;
}

const StudentCard: React.FC<StudentCardProps> = ({
  student,
  onClick,
  onDelete,
  onEdit,
}) => {
  const [isFlipped, setIsFlipped] = useState(false);
  
  const handleCardClick = (e: React.MouseEvent) => {
    // Don't trigger card click when clicking on buttons
    if ((e.target as HTMLElement).closest('button')) return;
    onClick(student.id);
  };

  const handleCardFlip = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsFlipped(!isFlipped);
  };

  const handleDelete = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onDelete) onDelete(student.id);
  };

  const handleEdit = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (onEdit) onEdit(student);
  };

  return (
    <div className="perspective-1000 h-full" onClick={handleCardClick}>
      <div 
        className={`relative w-full h-full transition-transform duration-500 transform-style-preserve-3d ${
          isFlipped ? 'rotate-y-180' : ''
        }`}
      >
        {/* Front of card */}
        <Card 
          className="absolute inset-0 w-full h-full transform-style-preserve-3d backface-hidden"
        >
          <CardHeader className="flex flex-col items-center py-6">
            <Avatar src={student.photoUrl} alt={`${student.firstName} ${student.lastName}`} size="xl" />
            <h3 className="mt-3 text-xl font-semibold text-gray-800 dark:text-white">
              {student.firstName} {student.lastName}
            </h3>
            <div className="mt-1 text-sm text-gray-600 dark:text-gray-300">
              ID: {student.studentId} • Class {student.currentClass}{student.currentSection}
            </div>
            <button
              onClick={handleCardFlip}
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              aria-label="Flip card"
            >
              <Pencil size={16} />
            </button>
          </CardHeader>

          <CardContent>
            <div className="space-y-2 text-sm">
              <div className="flex items-center text-gray-700 dark:text-gray-300">
                <Mail size={16} className="mr-2 text-gray-500" />
                <span className="truncate">{student.email}</span>
              </div>
              <div className="flex items-center text-gray-700 dark:text-gray-300">
                <Phone size={16} className="mr-2 text-gray-500" />
                <span>{student.phone}</span>
              </div>
              <div className="flex items-center text-gray-700 dark:text-gray-300">
                <Calendar size={16} className="mr-2 text-gray-500" />
                <span>
                  Born: {new Date(student.dateOfBirth).toLocaleDateString()}
                </span>
              </div>
            </div>
          </CardContent>

          <CardFooter className="flex justify-between">
            <Button 
              variant="primary" 
              size="sm" 
              onClick={(e) => {
                e.stopPropagation();
                onClick(student.id);
              }}
            >
              View Details
            </Button>
          </CardFooter>
        </Card>

        {/* Back of card */}
        <Card 
          className="absolute inset-0 w-full h-full transform-style-preserve-3d backface-hidden rotate-y-180"
        >
          <CardHeader className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">Quick Actions</h3>
            <button
              onClick={handleCardFlip}
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
              aria-label="Flip card back"
            >
              <CheckCircle size={16} />
            </button>
          </CardHeader>

          <CardContent className="space-y-4">
            <div>
              <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Student Information</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Enrollment Date: {new Date(student.enrollmentDate).toLocaleDateString()}
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Gender: {student.gender}
              </p>
            </div>
            
            <div>
              <h4 className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Address</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {student.address}
              </p>
            </div>
          </CardContent>

          <CardFooter className="flex justify-between">
            <Button 
              variant="outline" 
              size="sm"
              onClick={handleEdit}
              icon={<Pencil size={16} />}
            >
              Edit
            </Button>
            <Button 
              variant="danger" 
              size="sm"
              onClick={handleDelete}
              icon={<Trash2 size={16} />}
            >
              Delete
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default StudentCard;