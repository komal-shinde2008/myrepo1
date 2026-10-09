
import SectionPage from "./SectionPage";

export default function Notifications() {
  return (
    <SectionPage
      title="Notifications"
      description="Recent alerts and updates for your practice."
      items={[
        { title: "New patient registered", detail: "A demo patient record was created.", status: "New" },
        { title: "Report awaiting review", detail: "A demo report needs attention.", status: "Pending" },
        { title: "Appointment reminder", detail: "An upcoming demo appointment.", status: "Reminder" },
      ]}
    />
  );
}