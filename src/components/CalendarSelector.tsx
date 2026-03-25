import { useState } from "react";
import { timeSlots } from "@/data/mock";

const days = ["Mon 24", "Tue 25", "Wed 26", "Thu 27", "Fri 28"];

export function CalendarSelector({ onSelect }: { onSelect: (day: string, time: string) => void }) {
  const [selectedDay, setSelectedDay] = useState(days[0]);
  const [selectedTime, setSelectedTime] = useState("");

  // Mock some unavailable slots
  const unavailable = new Set(["09:30", "14:00", "16:00"]);

  return (
    <div className="space-y-4 animate-fade-up">
      <div className="flex gap-2 overflow-x-auto pb-2">
        {days.map((d) => (
          <button key={d} onClick={() => { setSelectedDay(d); setSelectedTime(""); }}
            className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-all ${selectedDay === d ? "bg-primary text-primary-foreground shadow-sm" : "bg-muted text-muted-foreground hover:bg-muted/80"}`}>
            {d}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-2">
        {timeSlots.map((t) => {
          const isUnavail = unavailable.has(t);
          const isSelected = selectedTime === t;
          return (
            <button key={t} disabled={isUnavail}
              onClick={() => { setSelectedTime(t); onSelect(selectedDay, t); }}
              className={`py-2 rounded-lg text-sm font-medium transition-all ${isUnavail ? "bg-muted/50 text-muted-foreground/40 cursor-not-allowed" : isSelected ? "bg-accent text-accent-foreground shadow-sm" : "bg-card border border-border text-foreground hover:border-accent/50"}`}>
              {t}
            </button>
          );
        })}
      </div>
    </div>
  );
}
