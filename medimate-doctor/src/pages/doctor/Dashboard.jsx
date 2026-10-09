
import {
  Users,
  CalendarCheck,
  Clock3,
  FileText,
  ArrowUpRight,
  ArrowRight,
  Plus,
  MoreHorizontal,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const stats = [
  {
    label: "Total Patients",
    value: "1,284",
    change: "+12.5%",
    note: "vs. last month",
    icon: Users,
    color: "blue",
  },
  {
    label: "Today's Appointments",
    value: "24",
    change: "+4",
    note: "vs. yesterday",
    icon: CalendarCheck,
    color: "green",
  },
  {
    label: "Pending Reviews",
    value: "08",
    change: "Needs attention",
    note: "Reports to review",
    icon: Clock3,
    color: "orange",
  },
  {
    label: "Prescriptions",
    value: "156",
    change: "+8.2%",
    note: "this month",
    icon: FileText,
    color: "purple",
  },
];

const appointments = [
  { initials: "RK", name: "Rahul Kulkarni", type: "Follow-up", time: "09:00 AM", status: "Confirmed", color: "blue" },
  { initials: "SP", name: "Sneha Patil", type: "General checkup", time: "09:30 AM", status: "Waiting", color: "pink" },
  { initials: "AM", name: "Amit Mehta", type: "Consultation", time: "10:00 AM", status: "Confirmed", color: "green" },
  { initials: "PD", name: "Priya Deshmukh", type: "Follow-up", time: "10:30 AM", status: "Completed", color: "orange" },
];

const activities = [
  { title: "New patient registered", detail: "Rahul Kulkarni · Patient ID #1048", time: "10 min ago", icon: Users },
  { title: "Report uploaded", detail: "Blood test report · Sneha Patil", time: "35 min ago", icon: FileText },
  { title: "Prescription updated", detail: "Amit Mehta · Prescription #P208", time: "1 hour ago", icon: CalendarCheck },
];

export default function Dashboard() {
  const navigate = useNavigate();

  return (
    <div className="dashboard-page">
      <section className="welcome-row">
        <div>
          <p className="eyebrow">THURSDAY, OCTOBER 09</p>
          <h2>Good morning, Dr. Sharma <span>👋</span></h2>
          <p className="muted">Here's what's happening with your practice today.</p>
        </div>
        <button
          className="primary-button"
          onClick={() => navigate("/appointments")}
        >
          <Plus size={18} /> View Appointments
        </button>
      </section>

      <section className="stats-grid">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <article className="stat-card" key={stat.label}>
              <div className="stat-card-top">
                <span className={`stat-icon ${stat.color}`}><Icon size={21} /></span>
                <button
                  className="subtle-icon"
                  aria-label={`More about ${stat.label}`}
                  onClick={() => navigate(
                    stat.label === "Total Patients" ? "/patients" :
                    stat.label === "Today's Appointments" ? "/appointments" :
                    stat.label === "Pending Reviews" ? "/reports" : "/prescriptions"
                  )}
                >
                  <ArrowUpRight size={18} />
                </button>
              </div>
              <p className="stat-label">{stat.label}</p>
              <h3>{stat.value}</h3>
              <p className="stat-note">
                <span className={stat.color === "orange" ? "attention-text" : "positive-text"}>
                  {stat.change}
                </span>{" "}
                {stat.note}
              </p>
            </article>
          );
        })}
      </section>

      <section className="dashboard-grid">
        <article className="panel appointments-panel">
          <div className="panel-heading">
            <div>
              <h3>Today's Appointments</h3>
              <p className="muted">Your upcoming patient visits</p>
            </div>
            <button className="text-button" onClick={() => navigate("/appointments")}>
              View all <ArrowRight size={16} />
            </button>
          </div>

          <div className="table-scroll">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Patient</th>
                  <th>Appointment</th>
                  <th>Time</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {appointments.map((item) => (
                  <tr key={item.name}>
                    <td>
                      <div className="patient-cell">
                        <span className={`patient-avatar ${item.color}`}>{item.initials}</span>
                        <strong>{item.name}</strong>
                      </div>
                    </td>
                    <td>{item.type}</td>
                    <td className="time-cell">{item.time}</td>
                    <td>
                      <span className={`status-badge ${item.status.toLowerCase()}`}>
                        {item.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </article>

        <article className="panel activity-panel">
          <div className="panel-heading">
            <div>
              <h3>Recent Activity</h3>
              <p className="muted">Latest updates</p>
            </div>
            <MoreHorizontal size={21} className="muted" />
          </div>
          <div className="activity-list">
            {activities.map((activity) => {
              const Icon = activity.icon;
              return (
                <div className="activity-item" key={activity.title}>
                  <span className="activity-icon"><Icon size={18} /></span>
                  <div className="activity-copy">
                    <strong>{activity.title}</strong>
                    <p>{activity.detail}</p>
                    <span>{activity.time}</span>
                  </div>
                </div>
              );
            })}
          </div>
          <button className="activity-footer" onClick={() => navigate("/notifications")}>
            View all activity <ArrowRight size={16} />
          </button>
        </article>
      </section>

      <section className="bottom-banner">
        <div className="banner-icon"><CalendarCheck size={25} /></div>
        <div>
          <h3>Keep your patient records up to date</h3>
          <p>Review reports and update prescriptions after consultations.</p>
        </div>
        <button className="secondary-button" onClick={() => navigate("/patients")}>
          Manage Patients
        </button>
      </section>
    </div>
  );
}