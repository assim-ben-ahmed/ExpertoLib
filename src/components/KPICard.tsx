import { TrendingUp, TrendingDown } from "lucide-react";

interface KPICardProps {
  label: string;
  value: string;
  change: string;
  trend: "up" | "down";
  delay?: number;
}

export function KPICard({ label, value, change, trend, delay = 0 }: KPICardProps) {
  return (
    <div className="glass-card rounded-xl p-5 animate-fade-up hover:shadow-md transition-shadow" style={{ animationDelay: `${delay}ms` }}>
      <p className="text-sm text-muted-foreground mb-1">{label}</p>
      <div className="flex items-end justify-between">
        <p className="text-2xl font-bold text-foreground">{value}</p>
        <span className={`flex items-center gap-1 text-xs font-medium px-2 py-0.5 rounded-full ${trend === "up" ? "bg-success/10 text-success" : "bg-accent/10 text-accent"}`}>
          {trend === "up" ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
          {change}
        </span>
      </div>
    </div>
  );
}
