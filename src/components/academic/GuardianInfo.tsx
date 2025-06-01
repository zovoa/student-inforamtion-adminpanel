import React from 'react';
import { Guardian } from '../../types';
import { Mail, Phone, Home, MessageCircle, AlertCircle } from 'lucide-react';
import Button from '../ui/Button';

interface GuardianInfoProps {
  guardians: Guardian[];
}

const GuardianInfo: React.FC<GuardianInfoProps> = ({ guardians }) => {
  if (!guardians.length) {
    return (
      <div className="text-center py-12">
        <p className="text-gray-500 dark:text-gray-400">No guardian information available</p>
      </div>
    );
  }

  return (
    <div className="space-y-6 animate-fadeIn">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          Guardians & Emergency Contacts
        </h3>
        <Button variant="outline" size="sm">
          Add Guardian
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {guardians.map((guardian) => (
          <div
            key={guardian.id}
            className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-sm overflow-hidden"
          >
            <div className="p-5">
              <div className="flex justify-between">
                <div>
                  <div className="flex items-center">
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                      {guardian.firstName} {guardian.lastName}
                    </h4>
                    {guardian.isEmergencyContact && (
                      <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200">
                        <AlertCircle size={12} className="mr-1" />
                        Emergency Contact
                      </span>
                    )}
                  </div>
                  <p className="text-indigo-600 dark:text-indigo-400 mt-0.5">
                    {guardian.relation}
                  </p>
                </div>
              </div>

              <div className="mt-4 space-y-3">
                <div className="flex items-center text-gray-700 dark:text-gray-300">
                  <Mail size={18} className="mr-3 text-gray-400" />
                  <a 
                    href={`mailto:${guardian.email}`}
                    className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                  >
                    {guardian.email}
                  </a>
                </div>

                <div className="flex items-center text-gray-700 dark:text-gray-300">
                  <Phone size={18} className="mr-3 text-gray-400" />
                  <a 
                    href={`tel:${guardian.phone}`}
                    className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                  >
                    {guardian.phone}
                  </a>
                </div>

                <div className="flex items-start text-gray-700 dark:text-gray-300">
                  <Home size={18} className="mr-3 text-gray-400 mt-1" />
                  <span>{guardian.address}</span>
                </div>
              </div>

              <div className="mt-6 flex space-x-3">
                <Button
                  variant="outline"
                  size="sm"
                  icon={<MessageCircle size={16} />}
                  className="flex-1"
                >
                  Send Message
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1"
                >
                  Edit
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GuardianInfo;