import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContactForm from "./component/contactForm/contact";
import AboutSection from "./component/aboutSection/AboutSection";
import Dashboard from "./component/dashboard/dashboard";
import ProjectShowcase from "./component/ProjShow/ProjectShowcases";
import Footer from "./component/Footer/footer";
import { AdminDashboard } from "/Users/mollenmist/Desktop/Navneet-_kushPortfolio/Admin/src/components/AdminDashboard.jsx"; // Import Admin Dashboard

function App() {
  return (
    <Router>
      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <Dashboard />
              <AboutSection />
              <ProjectShowcase />
              <ContactForm />
              <Footer />
            </>
          }
        />

        {/* Admin Dashboard */}
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
