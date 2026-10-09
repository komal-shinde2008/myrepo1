
import SectionPage from "./SectionPage";

export default function Profile() {
  return (
    <SectionPage
      title="My Profile"
      description="Doctor account information. These are example details."
      items={[
        { title: "Dr. A. Sharma", detail: "General Physician", status: "Demo" },
        { title: "Email", detail: "doctor@example.com", status: "Demo" },
        { title: "Department", detail: "General Medicine", status: "Demo" },
      ]}
    />
  );
}