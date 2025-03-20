import React, { Component } from 'react';
import './App.css';
import '@progress/kendo-theme-material/dist/material-lime-dark.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProgressPlanning from './pages/ProgressPlanning';
import Competition from './pages/Competition';
import AppLayout from './components/AppLayout';
import AIRecommendations from './pages/AiRecommendations';


class App extends Component {
    render() {
        return (
          <Router>
          <AppLayout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/progress-planning" element={<ProgressPlanning />} />
              <Route path="/competition" element={<Competition />} />
              <Route path="/ai-recommendations" element={<AIRecommendations />} />
            </Routes>
          </AppLayout>
        </Router>
        );
    }
}

export default App;