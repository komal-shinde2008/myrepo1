
import { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import {
  Activity,
  LayoutDashboard,
  Users,
  CalendarDays,
  FileText,
  BarChart3,
  Bell,
  UserRound,
  Menu,
  X
} from "lucide-react";

const navItems = [
  { label: "Dashboard", path: "/", icon: LayoutDashboard },
  { label: "Patients", path: "/patients", icon: Users },
  { label: "Appointments", path: "/appointments", icon: CalendarDays },
  { label: "Prescriptions", path: "/prescriptions", icon: FileText },
  { label: "Reports", path: "/reports", icon: BarChart3 },
  { label: "Notifications", path: "/notifications", icon: Bell },
  { label: "Profile", path: "/profile", icon: UserRound }
];

export default function DoctorLayout() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app-shell">
      <aside className={`sidebar ${menuOpen ? "sidebar-open" : ""}`}>
        <div className="brand">
          <Activity size={28} />
          <span>MediMate AI</span>
          <button className="mobile-close" onClick={() => setMenuOpen(false)}>
            <X size={20} />
          </button>
        </div>

        <p className="nav-heading">WORKSPACE</p>

        <nav className="side-nav">
          {navItems.map(({ label, path, icon: Icon }) => (
            <NavLink
              key={path}
              to={path}
              end={path === "/"}
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
              onClick={() => setMenuOpen(false)}
            >
              <Icon size={19} />
              <span>{label}</span>
            </NavLink>
          ))}
        </nav>

        <div className="sidebar-footer">
          <div className="doctor-avatar">AS</div>
          <div>
            <strong>Dr. A. Sharma</strong>
            <small>Doctor Account</small>
          </div>
        </div>
      </aside>

      {menuOpen && (
        <button
          className="sidebar-backdrop"
          aria-label="Close navigation"
          onClick={() => setMenuOpen(false)}
        />
      )}

      <main className="main-area">
        <header className="topbar">
          <button
            className="mobile-menu"
            aria-label="Open navigation"
            onClick={() => setMenuOpen(true)}
          >
            <Menu size={23} />
          </button>
          <div>
            <strong>Doctor Portal</strong>
            <p>Smart healthcare management</p>
          </div>
          <NavLink className="topbar-notification" to="/notifications">
            <Bell size={20} />
          </NavLink>
        </header>

        <section className="page-content">
          <Outlet />
        </section>
      </main>
    </div>
  );
}