import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { mockExperts } from "@/data/mock";
import { Calendar, Clock, MapPin, Phone, FileText, CheckCircle2 } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function AppointmentConfirmation() {
  const navigate = useNavigate();
  const expert = mockExperts[0];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="max-w-3xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        {/* Success header */}
        <div className="text-center mb-8 animate-fade-up">
          <div className="w-16 h-16 rounded-full bg-success/10 flex items-center justify-center mx-auto mb-4">
            <CheckCircle2 className="h-8 w-8 text-success" />
          </div>
          <h1 className="text-2xl font-bold text-foreground">Appointment Confirmed</h1>
          <p className="text-muted-foreground mt-1">Your expertise appointment has been scheduled.</p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {/* Expert Info */}
          <div className="glass-card rounded-xl p-5 animate-fade-up" style={{ animationDelay: "100ms" }}>
            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">Expert Details</h3>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                {expert.avatar}
              </div>
              <div>
                <p className="font-semibold text-foreground">{expert.name}</p>
                <p className="text-sm text-muted-foreground">{expert.specialization}</p>
              </div>
            </div>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p className="flex items-center gap-2"><Phone className="h-4 w-4" /> +33 1 23 45 67 89</p>
              <p className="flex items-center gap-2"><FileText className="h-4 w-4" /> License #EXP-2847</p>
            </div>
          </div>

          {/* Appointment Details */}
          <div className="glass-card rounded-xl p-5 animate-fade-up" style={{ animationDelay: "200ms" }}>
            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">Appointment</h3>
            <div className="space-y-3 text-sm">
              <p className="flex items-center gap-2 text-foreground"><Calendar className="h-4 w-4 text-accent" /> Wednesday, March 26, 2026</p>
              <p className="flex items-center gap-2 text-foreground"><Clock className="h-4 w-4 text-accent" /> 14:00 - 15:00</p>
              <p className="flex items-center gap-2 text-foreground"><MapPin className="h-4 w-4 text-accent" /> 42 Rue de Rivoli, Paris 75004</p>
            </div>
          </div>
        </div>

        {/* Map placeholder */}
        <div className="glass-card rounded-xl overflow-hidden mt-6 animate-fade-up" style={{ animationDelay: "300ms" }}>
          <div className="bg-muted h-48 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-8 w-8 text-muted-foreground/40 mx-auto mb-2" />
              <p className="text-sm text-muted-foreground">Interactive map will be displayed here</p>
              <p className="text-xs text-muted-foreground/60">42 Rue de Rivoli, Paris 75004</p>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3 mt-6 animate-fade-up" style={{ animationDelay: "400ms" }}>
          <Button variant="outline" className="flex-1 h-11" onClick={() => navigate("/book")}>Modify Appointment</Button>
          <Button variant="outline" className="flex-1 h-11 text-destructive border-destructive/30 hover:bg-destructive/5">Cancel Appointment</Button>
          <Button className="flex-1 h-11 bg-primary hover:bg-navy-light text-primary-foreground" onClick={() => navigate("/dashboard")}>Back to Dashboard</Button>
        </div>
      </main>
    </div>
  );
}
