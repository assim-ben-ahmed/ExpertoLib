import { Navbar } from "@/components/Navbar";
import { KPICard } from "@/components/KPICard";
import { AppointmentCard } from "@/components/AppointmentCard";
import { StatusTimeline } from "@/components/StatusTimeline";
import { NotificationPanel } from "@/components/NotificationPanel";
import { mockKPIs, mockAppointments, mockTimeline } from "@/data/mock";
import { useAuth } from "@/contexts/AuthContext";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CalendarPlus, Sparkles } from "lucide-react";

export default function Dashboard() {
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-foreground">Welcome back, {user?.name?.split(" ")[0]} 👋</h1>
            <p className="text-muted-foreground mt-1">Here's what's happening with your cases today.</p>
          </div>
          <Link to="/book">
            <Button className="bg-accent hover:bg-orange-light text-accent-foreground font-semibold gap-2">
              <CalendarPlus className="h-4 w-4" /> Book Appointment
            </Button>
          </Link>
        </div>

        {/* KPIs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {mockKPIs.map((kpi, i) => (
            <KPICard key={kpi.label} {...kpi} delay={i * 100} />
          ))}
        </div>

        {/* AI Insight Banner */}
        <div className="glass-card rounded-xl p-4 mb-8 flex items-center gap-3 border-accent/20 animate-fade-up" style={{ animationDelay: "400ms" }}>
          <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
            <Sparkles className="h-5 w-5 text-accent" />
          </div>
          <div>
            <p className="text-sm font-medium text-foreground">AI Insight</p>
            <p className="text-xs text-muted-foreground">Based on current trends, we predict a 15% increase in appointment requests next week. Consider booking early.</p>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Appointments */}
          <div className="lg:col-span-2 space-y-4">
            <h2 className="text-lg font-semibold text-foreground">Upcoming Appointments</h2>
            <div className="space-y-3">
              {mockAppointments.map((apt, i) => (
                <AppointmentCard key={apt.id} apt={apt} delay={i * 100} />
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div>
              <h2 className="text-lg font-semibold text-foreground mb-3">Case Timeline</h2>
              <div className="glass-card rounded-xl p-4">
                <StatusTimeline items={mockTimeline} />
              </div>
            </div>
            <div>
              <h2 className="text-lg font-semibold text-foreground mb-3">Notifications</h2>
              <div className="glass-card rounded-xl p-4">
                <NotificationPanel />
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
