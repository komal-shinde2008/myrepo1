import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import DoctorLayout from "./components/doctor/DoctorLayout.jsx";
import Dashboard from "./pages/doctor/Dashboard.jsx";
import Patients from "./pages/doctor/Patients.jsx";
import Appointments from "./pages/doctor/Appointments.jsx";
import Prescriptions from "./pages/doctor/Prescriptions.jsx";
import Reports from "./pages/doctor/Reports.jsx";
import Profile from "./pages/doctor/Profile.jsx";
import Notifications from "./pages/doctor/Notifications.jsx";

import "./styles/doctor.css";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DoctorLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="patients" element={<Patients />} />
          <Route path="appointments" element={<Appointments />} />
          <Route path="prescriptions" element={<Prescriptions />} />
          <Route path="reports" element={<Reports />} />
          <Route path="profile" element={<Profile />} />
          <Route path="notifications" element={<Notifications />} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}