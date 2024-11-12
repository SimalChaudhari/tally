import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Layout } from './components'; // Import the Layout component
import Home from './pages/Home/Home'; // Import the Home page

import './App.css'; // Make sure your Tailwind CSS is imported here

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Add more routes here as needed */}
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
