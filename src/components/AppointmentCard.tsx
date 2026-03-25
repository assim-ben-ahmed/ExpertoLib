import { Calendar, Clock, Car } from "lucide-react";
import { Link } from "react-router-dom";

interface Appointment {
  id: string;
  expert: string;
  date: string;
  time: string;
  status: "confirmed" | "pending" | "completed";
  vehicle: string;
  type: string;
}

const statusStyles = {
  confirmed: "bg-success/10 text-success",
  pending: "bg-warning/10 text-warning",
  completed: "bg-muted text-muted-foreground",
};

export function AppointmentCard({ apt, delay = 0 }: { apt: Appointment; delay?: number }) {
  return (
    <Link to={`/appointment/${apt.id}`}
      className="glass-card rounded-xl p-4 block hover:shadow-md transition-all hover:-translate-y-0.5 animate-fade-up"
      style={{ animationDelay: `${delay}ms` }}>
      <div className="flex items-start justify-between mb-3">
        <div>
          <p className="font-semibold text-foreground">{apt.expert}</p>
          <p className="text-xs text-muted-foreground">{apt.type}</p>
        </div>
        <span className={`text-xs font-medium px-2.5 py-1 rounded-full capitalize ${statusStyles[apt.status]}`}>
          {apt.status}
        </span>
      </div>
      <div className="flex flex-wrap gap-3 text-xs text-muted-foreground">
        <span className="flex items-center gap-1"><Calendar className="h-3.5 w-3.5" />{apt.date}</span>
        <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" />{apt.time}</span>
        <span className="flex items-center gap-1"><Car className="h-3.5 w-3.5" />{apt.vehicle}</span>
      </div>
    </Link>
  );
}
