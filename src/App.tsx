import React from 'react';
import Layout from './components/layout/Layout';
import StudentList from './components/student/StudentList';
import StudentDetail from './components/student/StudentDetail';
import { ThemeProvider } from './contexts/ThemeContext';
import { StudentProvider } from './contexts/StudentContext';
import { useStudents } from './contexts/StudentContext';
import { BrowserRouter } from 'react-router-dom';

// Dashboard component that conditionally renders the student list or detail view
const Dashboard: React.FC = () => {
  const { selectedStudentId } = useStudents();
  
  return selectedStudentId ? <StudentDetail /> : <StudentList />;
};

function App() {
  return (
    <ThemeProvider>
    <StudentProvider>
      <BrowserRouter basename="/student-inforamtion-adminpanel">
        <Layout>
          <Dashboard />
        </Layout>
      </BrowserRouter>
    </StudentProvider>
  </ThemeProvider>
  );
}

export default App;