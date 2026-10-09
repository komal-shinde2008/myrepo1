
import { ArrowRight, Search } from "lucide-react";

export default function SectionPage({
  title,
  description,
  items = [],
}) {
  return (
    <div className="section-page">
      <div className="section-intro">
        <p className="eyebrow">MEDIMATE AI / DOCTOR WORKSPACE</p>
        <h2>{title}</h2>
        <p className="muted">{description}</p>
      </div>

      <div className="panel section-panel">
        <div className="section-toolbar">
          <label className="section-search">
            <Search size={17} />
            <input placeholder={`Search ${title.toLowerCase()}...`} />
          </label>
          <span className="record-count">{items.length} demo records</span>
        </div>

        {items.length > 0 ? (
          <div className="section-list">
            {items.map((item) => (
              <div className="section-list-item" key={item.title}>
                <div>
                  <strong>{item.title}</strong>
                  <p>{item.detail}</p>
                </div>
                <span className="section-item-status">{item.status}</span>
              </div>
            ))}
          </div>
        ) : (
          <div className="empty-state">
            <div className="empty-state-icon"><ArrowRight size={23} /></div>
            <h3>No records to display</h3>
            <p>Records will appear here when they are added to the system.</p>
          </div>
        )}
      </div>
    </div>
  );
}