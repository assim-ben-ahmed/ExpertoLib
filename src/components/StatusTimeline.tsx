import { CheckCircle2, Circle, Clock } from "lucide-react";

interface TimelineItem {
  step: string;
  status: "completed" | "current" | "upcoming";
  date: string;
}

export function StatusTimeline({ items }: { items: TimelineItem[] }) {
  return (
    <div className="space-y-0">
      {items.map((item, i) => (
        <div key={i} className="flex gap-3 animate-fade-up" style={{ animationDelay: `${i * 80}ms` }}>
          <div className="flex flex-col items-center">
            {item.status === "completed" ? (
              <CheckCircle2 className="h-5 w-5 text-success shrink-0" />
            ) : item.status === "current" ? (
              <Clock className="h-5 w-5 text-accent shrink-0 animate-pulse-soft" />
            ) : (
              <Circle className="h-5 w-5 text-muted-foreground/40 shrink-0" />
            )}
            {i < items.length - 1 && <div className={`w-0.5 h-8 ${item.status === "completed" ? "bg-success/30" : "bg-border"}`} />}
          </div>
          <div className="pb-6">
            <p className={`text-sm font-medium ${item.status === "current" ? "text-accent" : item.status === "completed" ? "text-foreground" : "text-muted-foreground"}`}>
              {item.step}
            </p>
            <p className="text-xs text-muted-foreground">{item.date}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
