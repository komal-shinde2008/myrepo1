
import SectionPage from "./SectionPage";

export default function Appointments() {
  return (
    <SectionPage
      title="Appointments"
      description="Review the appointment schedule and visit status."
      items={[
        { title: "Rahul Kulkarni · 09:00 AM", detail: "Follow-up consultation", status: "Confirmed" },
        { title: "Sneha Patil · 09:30 AM", detail: "General checkup", status: "Waiting" },
        { title: "Amit Mehta · 10:00 AM", detail: "Consultation", status: "Confirmed" },
      ]}
    />
  );
}