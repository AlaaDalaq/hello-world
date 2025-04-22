import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Weather from './Weather';
import Login from './Login';
import Register from './Register';  // Import Register page
import Education from './Education';
import ProtectedRoute from './Route';  // Ensure correct import
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Routes>
            {/* Public Route for Login */}
            <Route path="/login" element={<Login />} />
            
            {/* Public Route for Register */}
            <Route path="/register" element={<Register />} />

            {/* Protected Routes */}
            <Route
              path="/weather"
              element={<ProtectedRoute element={Weather} />}
            />
            <Route
              path="/education"
              element={<ProtectedRoute element={Education} />}
            />

            {/* Default route - Redirect to login if no route is matched */}
            <Route path="/" element={<Navigate to="/login" />} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;
