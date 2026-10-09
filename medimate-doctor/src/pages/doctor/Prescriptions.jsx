
import SectionPage from "./SectionPage";

export default function Prescriptions() {
  return (
    <SectionPage
      title="Prescriptions"
      description="Review prescription records. Medication examples are demo data only."
      items={[
        { title: "Prescription #P208", detail: "Amit Mehta · Demo record", status: "Draft" },
        { title: "Prescription #P207", detail: "Sneha Patil · Demo record", status: "Reviewed" },
      ]}
    />
  );
}