import { mockNotifications } from "@/data/mock";
import { Bell, FileText, Shield } from "lucide-react";

const icons = [Bell, FileText, Shield];

export function NotificationPanel() {
  return (
    <div className="space-y-3">
      {mockNotifications.map((n, i) => {
        const Icon = icons[i % icons.length];
        return (
          <div key={n.id} className={`flex gap-3 p-3 rounded-lg transition-colors animate-fade-up ${n.read ? "bg-transparent" : "bg-accent/5"}`}
            style={{ animationDelay: `${i * 100}ms` }}>
            <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${n.read ? "bg-muted" : "bg-accent/10"}`}>
              <Icon className={`h-4 w-4 ${n.read ? "text-muted-foreground" : "text-accent"}`} />
            </div>
            <div className="min-w-0">
              <p className={`text-sm font-medium ${n.read ? "text-muted-foreground" : "text-foreground"}`}>{n.title}</p>
              <p className="text-xs text-muted-foreground truncate">{n.message}</p>
              <p className="text-xs text-muted-foreground/60 mt-0.5">{n.time}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
