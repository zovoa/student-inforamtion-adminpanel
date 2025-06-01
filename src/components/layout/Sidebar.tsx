import React from 'react';
import { GraduationCap, Users, BookOpen, Calendar, FilePlus, Settings, ChevronDown, ChevronUp } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
}

interface SidebarItem {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  href?: string;
  subItems?: { label: string; href: string }[];
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
  const [expandedItems, setExpandedItems] = React.useState<Record<string, boolean>>({
    'Students': true
  });

  const toggleExpand = (label: string) => {
    setExpandedItems(prev => ({
      ...prev,
      [label]: !prev[label]
    }));
  };

  const sidebarItems: SidebarItem[] = [
    { 
      icon: <GraduationCap size={20} />, 
      label: 'Students', 
      active: true,
      subItems: [
        { label: 'All Students', href: '#all-students' },
        { label: 'Add New', href: '#add-student' },
        { label: 'Enrollment', href: '#enrollment' }
      ]
    },
    { 
      icon: <Users size={20} />, 
      label: 'Parents', 
      subItems: [
        { label: 'Parent Directory', href: '#parent-directory' },
        { label: 'Communications', href: '#parent-communications' }
      ]
    },
    { 
      icon: <BookOpen size={20} />, 
      label: 'Academics',
      subItems: [
        { label: 'Grades', href: '#grades' },
        { label: 'Courses', href: '#courses' },
        { label: 'Report Cards', href: '#report-cards' }
      ]
    },
    { 
      icon: <Calendar size={20} />, 
      label: 'Attendance',
      href: '#attendance'
    },
    { 
      icon: <FilePlus size={20} />, 
      label: 'Documents',
      href: '#documents'
    },
    { 
      icon: <Settings size={20} />, 
      label: 'Settings',
      href: '#settings'
    }
  ];

  return (
    <aside 
      className={`fixed inset-y-0 left-0 z-40 w-64 bg-indigo-900 text-white transition-transform duration-300 ease-in-out transform ${
        isOpen ? 'translate-x-0' : '-translate-x-full'
      } lg:translate-x-0`}
    >
      <div className="flex flex-col h-full">
        <div className="flex items-center justify-center h-16 border-b border-indigo-800">
          <h2 className="text-xl font-bold">SIS Dashboard</h2>
        </div>
        <nav className="flex-1 overflow-y-auto pt-4 pb-4">
          <ul className="space-y-1 px-2">
            {sidebarItems.map((item) => (
              <li key={item.label}>
                {item.subItems ? (
                  <div className="space-y-1">
                    <button
                      className={`w-full flex items-center justify-between px-4 py-2.5 text-sm font-medium rounded-md transition-colors duration-200 ${
                        item.active
                          ? 'bg-indigo-800 text-white'
                          : 'text-indigo-100 hover:bg-indigo-800 hover:text-white'
                      }`}
                      onClick={() => toggleExpand(item.label)}
                    >
                      <span className="flex items-center">
                        <span className="mr-3">{item.icon}</span>
                        {item.label}
                      </span>
                      {expandedItems[item.label] ? (
                        <ChevronUp size={16} />
                      ) : (
                        <ChevronDown size={16} />
                      )}
                    </button>
                    {expandedItems[item.label] && (
                      <ul className="pl-10 space-y-1">
                        {item.subItems.map((subItem) => (
                          <li key={subItem.label}>
                            <a
                              href={subItem.href}
                              className="block py-2 px-3 text-sm text-indigo-100 hover:bg-indigo-800 hover:text-white rounded-md"
                            >
                              {subItem.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ) : (
                  <a
                    href={item.href}
                    className={`flex items-center px-4 py-2.5 text-sm font-medium rounded-md transition-colors duration-200 ${
                      item.active
                        ? 'bg-indigo-800 text-white'
                        : 'text-indigo-100 hover:bg-indigo-800 hover:text-white'
                    }`}
                  >
                    <span className="mr-3">{item.icon}</span>
                    {item.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </nav>
        <div className="p-4 border-t border-indigo-800">
          <div className="flex items-center">
            <div className="h-8 w-8 rounded-full bg-indigo-700 flex items-center justify-center">
              <span className="text-xs font-semibold">AD</span>
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium">Admin User</p>
              <p className="text-xs text-indigo-200">admin@school.edu</p>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;