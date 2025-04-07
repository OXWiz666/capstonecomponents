import { Suspense } from "react";
import { useRoutes, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import AppointmentPage from "./components/appointments/AppointmentPage";
import VaccinationDashboard from "./components/dashboard/VaccinationDashboard";
import AboutPage from "./components/about/AboutPage";
import FAQPage from "./components/faq/FAQPage";
import ContactPage from "./components/contact/ContactPage";
import ServicesPage from "./components/services/ServicesPage";
import ProfilePage from "./components/profile/ProfilePage";
import LoginForm from "./components/auth/LoginForm";
import RegisterForm from "./components/auth/RegisterForm";
import AnimalBiteTreatmentPage from "./components/AnimalBiteTreatment/AnimalBiteTreatmentPage";
import MedicalRecordsPage from "./components/medical-records/MedicalRecordsPage";
import { AuthProvider } from "./contexts/AuthContext";
import routes from "tempo-routes";

function App() {
  return (
    <AuthProvider>
      <Suspense fallback={<p>Loading...</p>}>
        <>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/appointments" element={<AppointmentPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route
              path="/services/vaccinations"
              element={<VaccinationDashboard />}
            />
            <Route
              path="/services/animal-bite"
              element={<AnimalBiteTreatmentPage />}
            />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/medical-records" element={<MedicalRecordsPage />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/register" element={<RegisterForm />} />
            {import.meta.env.VITE_TEMPO === "true" && (
              <Route path="/tempobook/*" />
            )}
          </Routes>
          {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}
        </>
      </Suspense>
    </AuthProvider>
  );
}

export default App;
