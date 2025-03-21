import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ProgressPlanning from './pages/ProgressPlanning';
import Competition from './pages/Competition';
import AIRecommendations from './pages/AiRecommendations';
import AppLayout from './components/AppLayout';
import Auth from './pages/Auth';
import ProtectedRoute from './ProtectedRoute.js';
import '@progress/kendo-theme-material/dist/material-aqua-dark.css';

const App = () => {
  return (
    <Routes>
      <Route path="/auth" element={<Auth />} />
      <Route 
        path="/" 
        element={
          <AppLayout>
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          </AppLayout>
        } 
      />
      <Route 
        path="/progress-planning" 
        element={
          <AppLayout>
            <ProtectedRoute>
              <ProgressPlanning />
            </ProtectedRoute>
          </AppLayout>
        } 
      />
      <Route 
        path="/competition" 
        element={
          <AppLayout>
            <ProtectedRoute>
              <Competition />
            </ProtectedRoute>
          </AppLayout>
        } 
      />
      <Route 
        path="/ai-recommendations" 
        element={
          <AppLayout>
            <ProtectedRoute>
              <AIRecommendations />
            </ProtectedRoute>
          </AppLayout>
        } 
      />
    </Routes>
  );
};

export default App;
