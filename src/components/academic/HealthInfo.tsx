import React from 'react';
import { HealthRecord } from '../../types';
import { HeartPulse, Pill, Droplets, Plus, AlertCircle } from 'lucide-react';
import Button from '../ui/Button';

interface HealthInfoProps {
  healthRecord: HealthRecord;
}

const HealthInfo: React.FC<HealthInfoProps> = ({ healthRecord }) => {
  return (
    <div className="space-y-6 animate-fadeIn">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center">
          <HeartPulse size={20} className="mr-2 text-red-500" />
          Health Information
        </h3>
        <Button
          variant="outline"
          size="sm"
          icon={<Plus size={16} />}
        >
          Add Record
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="col-span-1">
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 h-full">
            <h4 className="font-medium text-gray-900 dark:text-white mb-3 flex items-center">
              <Droplets size={18} className="mr-2 text-red-500" />
              Blood Type
            </h4>
            <div className="flex items-center justify-center h-20">
              <span className="text-3xl font-bold text-red-600 dark:text-red-400">
                {healthRecord.bloodType}
              </span>
            </div>
          </div>
        </div>

        <div className="col-span-3">
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 h-full">
            <h4 className="font-medium text-gray-900 dark:text-white mb-3">Allergies</h4>
            <div className="flex flex-wrap gap-2">
              {healthRecord.allergies.length > 0 ? (
                healthRecord.allergies.map((allergy, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-medium bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300"
                  >
                    <AlertCircle size={14} className="mr-1" />
                    {allergy}
                  </span>
                ))
              ) : (
                <p className="text-gray-500 dark:text-gray-400">No known allergies</p>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div>
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 h-full">
            <h4 className="font-medium text-gray-900 dark:text-white mb-3">Medical Conditions</h4>
            <div className="space-y-2">
              {healthRecord.medicalConditions.length > 0 ? (
                healthRecord.medicalConditions.map((condition, index) => (
                  <div
                    key={index}
                    className="p-2 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-100 dark:border-yellow-800/30 rounded-md text-yellow-800 dark:text-yellow-200"
                  >
                    {condition}
                  </div>
                ))
              ) : (
                <p className="text-gray-500 dark:text-gray-400">No medical conditions</p>
              )}
            </div>
          </div>
        </div>

        <div>
          <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 h-full">
            <h4 className="font-medium text-gray-900 dark:text-white mb-3 flex items-center">
              <Pill size={18} className="mr-2 text-blue-500" />
              Medications
            </h4>
            <div className="space-y-2">
              {healthRecord.medications.length > 0 ? (
                healthRecord.medications.map((medication, index) => (
                  <div
                    key={index}
                    className="p-2 bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800/30 rounded-md text-blue-800 dark:text-blue-200"
                  >
                    {medication}
                  </div>
                ))
              ) : (
                <p className="text-gray-500 dark:text-gray-400">No current medications</p>
              )}
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4">
          <h4 className="font-medium text-gray-900 dark:text-white mb-3">Additional Notes</h4>
          <div className="p-3 bg-gray-50 dark:bg-gray-900 rounded-md">
            <p className="text-gray-700 dark:text-gray-300">
              {healthRecord.notes || "No additional notes."}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HealthInfo;