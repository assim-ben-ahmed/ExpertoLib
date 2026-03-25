import { Navbar } from "@/components/Navbar";
import { KPICard } from "@/components/KPICard";
import { mockExpertAgenda } from "@/data/mock";
import { Sparkles, MapPin, Clock, User, Car, TrendingUp, Navigation } from "lucide-react";

const expertKPIs = [
  { label: "Today's Appointments", value: "4", change: "+1", trend: "up" as const },
  { label: "Pending Reports", value: "3", change: "-2", trend: "down" as const },
  { label: "This Week", value: "18", change: "+5", trend: "up" as const },
  { label: "Revenue (Month)", value: "€8,420", change: "+12%", trend: "up" as const },
];

const workloadPrediction = [
  { day: "Mon", load: 85 },
  { day: "Tue", load: 70 },
  { day: "Wed", load: 95 },
  { day: "Thu", load: 60 },
  { day: "Fri", load: 45 },
];

export default function ExpertDashboard() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl font-bold text-foreground">Expert Dashboard</h1>
          <p className="text-muted-foreground mt-1">Manage your daily agenda and cases.</p>
        </div>

        {/* KPIs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {expertKPIs.map((kpi, i) => (
            <KPICard key={kpi.label} {...kpi} delay={i * 100} />
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Daily Agenda */}
          <div className="lg:col-span-2 space-y-4">
            <h2 className="text-lg font-semibold">Today's Agenda</h2>
            <div className="space-y-3">
              {mockExpertAgenda.map((item, i) => (
                <div key={i} className="glass-card rounded-xl p-4 flex items-center gap-4 hover:shadow-md transition-all animate-fade-up"
                  style={{ animationDelay: `${i * 100}ms` }}>
                  <div className="w-16 text-center shrink-0">
                    <p className="text-lg font-bold text-accent">{item.time}</p>
                  </div>
                  <div className="w-px h-10 bg-border shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-foreground flex items-center gap-2">
                      <User className="h-4 w-4 text-muted-foreground" />{item.client}
                    </p>
                    <div className="flex flex-wrap gap-3 mt-1 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1"><Car className="h-3 w-3" />{item.vehicle}</span>
                      <span className="flex items-center gap-1"><MapPin className="h-3 w-3" />{item.location}</span>
                    </div>
                  </div>
                  <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-accent/10 text-accent shrink-0">{item.type}</span>
                </div>
              ))}
            </div>

            {/* Route Optimization */}
            <div className="glass-card rounded-xl p-5 mt-6 animate-fade-up" style={{ animationDelay: "500ms" }}>
              <div className="flex items-center gap-2 mb-3">
                <Navigation className="h-5 w-5 text-accent" />
                <h3 className="font-semibold text-foreground">AI Route Optimization</h3>
              </div>
              <div className="bg-muted rounded-lg h-40 flex items-center justify-center mb-3">
                <div className="text-center">
                  <MapPin className="h-6 w-6 text-muted-foreground/40 mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground">Optimized route map</p>
                </div>
              </div>
              <div className="flex items-center gap-4 text-sm">
                <span className="flex items-center gap-1 text-success"><Clock className="h-4 w-4" /> Save 35 min</span>
                <span className="flex items-center gap-1 text-muted-foreground"><MapPin className="h-4 w-4" /> 28 km total</span>
                <span className="flex items-center gap-1 text-accent"><Sparkles className="h-4 w-4" /> AI optimized</span>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Workload Prediction */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <TrendingUp className="h-5 w-5 text-accent" />
                <h2 className="text-lg font-semibold">Workload Prediction</h2>
              </div>
              <div className="glass-card rounded-xl p-4">
                <div className="space-y-3">
                  {workloadPrediction.map((d, i) => (
                    <div key={d.day} className="animate-fade-up" style={{ animationDelay: `${i * 80}ms` }}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-muted-foreground">{d.day}</span>
                        <span className={`font-medium ${d.load > 80 ? "text-destructive" : d.load > 60 ? "text-warning" : "text-success"}`}>{d.load}%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div className={`h-full rounded-full transition-all duration-700 ${d.load > 80 ? "bg-destructive" : d.load > 60 ? "bg-warning" : "bg-success"}`}
                          style={{ width: `${d.load}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
                  <Sparkles className="h-3 w-3 text-accent" />
                  <span>AI-predicted based on historical data</span>
                </div>
              </div>
            </div>

            {/* Assigned Cases */}
            <div>
              <h2 className="text-lg font-semibold mb-3">Assigned Cases</h2>
              <div className="glass-card rounded-xl p-4 space-y-3">
                {[
                  { ref: "#2847", client: "Jean Martin", status: "In Progress", urgent: true },
                  { ref: "#2848", client: "Marie Leroy", status: "Pending Review", urgent: false },
                  { ref: "#2849", client: "Luc Bernard", status: "Scheduled", urgent: false },
                ].map((c, i) => (
                  <div key={c.ref} className="flex items-center justify-between py-2 border-b border-border last:border-0 animate-fade-up"
                    style={{ animationDelay: `${i * 80}ms` }}>
                    <div>
                      <p className="text-sm font-medium text-foreground">{c.ref} — {c.client}</p>
                      <p className="text-xs text-muted-foreground">{c.status}</p>
                    </div>
                    {c.urgent && <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-destructive/10 text-destructive">Urgent</span>}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
