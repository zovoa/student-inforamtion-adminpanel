import React, { useState } from 'react';
import { Document } from '../../types';
import { 
  File, 
  FileText, 
  FileImage, 
  FilePlus, 
  FileUp, 
  Calendar, 
  Download, 
  Trash2 
} from 'lucide-react';
import Button from '../ui/Button';

interface DocumentListProps {
  documents: Document[];
}

const DocumentList: React.FC<DocumentListProps> = ({ documents }) => {
  const [isUploading, setIsUploading] = useState(false);

  const getIconByType = (type: string) => {
    switch(type.toLowerCase()) {
      case 'identification':
        return <FileText size={20} className="text-indigo-500" />;
      case 'medical':
        return <FileText size={20} className="text-red-500" />;
      case 'academic':
        return <FileText size={20} className="text-blue-500" />;
      default:
        return <File size={20} className="text-gray-500" />;
    }
  };

  const handleUpload = () => {
    setIsUploading(true);
    // In a real application, this would trigger a file upload process
    setTimeout(() => setIsUploading(false), 1500);
  };

  return (
    <div className="space-y-6 animate-fadeIn">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white flex items-center">
          <File size={20} className="mr-2 text-indigo-600 dark:text-indigo-400" />
          Student Documents
        </h3>
        <Button
          variant="primary"
          size="sm"
          icon={<FilePlus size={16} />}
          onClick={handleUpload}
          disabled={isUploading}
        >
          {isUploading ? 'Uploading...' : 'Upload Document'}
        </Button>
      </div>

      {isUploading && (
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800 rounded-lg p-4 mb-4 flex items-center">
          <FileUp size={20} className="mr-2 text-blue-600 dark:text-blue-400 animate-bounce" />
          <div className="flex-1">
            <div className="flex justify-between items-center mb-1">
              <span className="text-blue-800 dark:text-blue-300 font-medium">Uploading document...</span>
              <span className="text-blue-800 dark:text-blue-300 text-sm">67%</span>
            </div>
            <div className="w-full bg-blue-200 dark:bg-blue-700 rounded-full h-2">
              <div className="bg-blue-600 dark:bg-blue-400 h-2 rounded-full" style={{ width: '67%' }}></div>
            </div>
          </div>
        </div>
      )}

      <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
        {documents.length > 0 ? (
          <div className="divide-y divide-gray-200 dark:divide-gray-700">
            {documents.map((document) => (
              <div 
                key={document.id} 
                className="p-4 hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors flex items-center"
              >
                <div className="mr-4">
                  {getIconByType(document.type)}
                </div>
                <div className="flex-1">
                  <h4 className="text-gray-900 dark:text-white font-medium">{document.name}</h4>
                  <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mt-1">
                    <span className="flex items-center">
                      <Calendar size={14} className="mr-1" />
                      Uploaded on {new Date(document.uploadDate).toLocaleDateString()}
                    </span>
                    <span className="mx-2">•</span>
                    <span>{document.type}</span>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    icon={<Download size={16} />}
                    aria-label="Download document"
                  />
                  <Button
                    variant="ghost"
                    size="sm"
                    icon={<Trash2 size={16} className="text-red-500 hover:text-red-700" />}
                    aria-label="Delete document"
                  />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="p-8 text-center">
            <div className="mx-auto w-12 h-12 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center mb-4">
              <File size={24} className="text-gray-500" />
            </div>
            <h3 className="text-gray-900 dark:text-white font-medium mb-1">No documents</h3>
            <p className="text-gray-500 dark:text-gray-400 mb-4">
              Upload student documents such as birth certificates, report cards, or ID cards
            </p>
            <Button
              variant="outline"
              size="sm"
              icon={<FilePlus size={16} />}
              onClick={handleUpload}
            >
              Upload First Document
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default DocumentList;