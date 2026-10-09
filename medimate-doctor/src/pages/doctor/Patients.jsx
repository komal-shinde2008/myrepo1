
import SectionPage from "./SectionPage";

export default function Patients() {
  return (
    <SectionPage
      title="Patients"
      description="View and manage your registered patients."
      items={[
        { title: "Rahul Kulkarni", detail: "Patient ID: P1048 · Follow-up", status: "Active" },
        { title: "Sneha Patil", detail: "Patient ID: P1049 · General checkup", status: "Active" },
        { title: "Amit Mehta", detail: "Patient ID: P1050 · Consultation", status: "Active" },
      ]}
    />
  );
}