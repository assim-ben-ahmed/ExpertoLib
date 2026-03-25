import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { ExpertCard } from "@/components/ExpertCard";
import { CalendarSelector } from "@/components/CalendarSelector";
import { mockExperts } from "@/data/mock";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MapPin, Search, Sparkles } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function BookAppointment() {
  const [search, setSearch] = useState("");
  const [selectedExpert, setSelectedExpert] = useState<string | null>(null);
  const [selectedSlot, setSelectedSlot] = useState<{ day: string; time: string } | null>(null);
  const navigate = useNavigate();

  const expert = mockExperts.find((e) => e.id === selectedExpert);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">Book an Expertise</h1>
        <p className="text-muted-foreground mb-8">Find and book a certified automotive expert near you.</p>

        {/* Location Search */}
        <div className="glass-card rounded-xl p-4 mb-8 animate-fade-up">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="flex-1 relative">
              <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Enter your location or address..." value={search} onChange={(e) => setSearch(e.target.value)}
                className="pl-9 h-11" />
            </div>
            <Button className="bg-primary hover:bg-navy-light text-primary-foreground h-11 gap-2 shrink-0">
              <Search className="h-4 w-4" /> Search Experts
            </Button>
          </div>
        </div>

        {/* AI recommendation banner */}
        <div className="flex items-center gap-2 mb-6 text-sm text-muted-foreground animate-fade-up" style={{ animationDelay: "100ms" }}>
          <Sparkles className="h-4 w-4 text-accent" />
          <span>Experts are ranked by <span className="text-accent font-medium">AI matching</span> based on your vehicle type and damage assessment.</span>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* Expert list */}
          <div className="lg:col-span-2 space-y-4">
            <h2 className="text-lg font-semibold">Available Experts</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {mockExperts.map((exp, i) => (
                <ExpertCard key={exp.id} expert={exp} onSelect={setSelectedExpert} delay={i * 100} />
              ))}
            </div>
          </div>

          {/* Calendar */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold">
              {expert ? `Schedule with ${expert.name}` : "Select an expert first"}
            </h2>
            {expert ? (
              <>
                <CalendarSelector onSelect={(day, time) => setSelectedSlot({ day, time })} />
                {selectedSlot && (
                  <Button onClick={() => navigate("/appointment/1")}
                    className="w-full bg-accent hover:bg-orange-light text-accent-foreground font-semibold h-11 mt-4 animate-fade-up">
                    Confirm Booking — {selectedSlot.day} at {selectedSlot.time}
                  </Button>
                )}
              </>
            ) : (
              <div className="glass-card rounded-xl p-8 text-center text-muted-foreground">
                <p className="text-sm">Select an expert from the list to view available time slots.</p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
