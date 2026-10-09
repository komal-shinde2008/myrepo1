
import SectionPage from "./SectionPage";

export default function Reports() {
  return (
    <SectionPage
      title="Medical Reports"
      description="Review uploaded reports and their review status."
      items={[
        { title: "Blood test report", detail: "Sneha Patil · Demo report", status: "Pending" },
        { title: "Health checkup report", detail: "Rahul Kulkarni · Demo report", status: "Reviewed" },
      ]}
    />
  );
}