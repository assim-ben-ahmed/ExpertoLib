import { Star, MapPin, Clock, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Expert {
  id: string;
  name: string;
  specialization: string;
  distance: string;
  rating: number;
  availability: string;
  avatar: string;
  aiRecommended: boolean;
}

export function ExpertCard({ expert, onSelect, delay = 0 }: { expert: Expert; onSelect: (id: string) => void; delay?: number }) {
  return (
    <div className="glass-card rounded-xl p-5 hover:shadow-md transition-all hover:-translate-y-0.5 animate-fade-up relative"
      style={{ animationDelay: `${delay}ms` }}>
      {expert.aiRecommended && (
        <div className="absolute -top-2 -right-2 bg-accent text-accent-foreground text-[10px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1 shadow-lg">
          <Sparkles className="h-3 w-3" /> AI Recommended
        </div>
      )}
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold shrink-0">
          {expert.avatar}
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-semibold text-foreground">{expert.name}</p>
          <p className="text-sm text-muted-foreground">{expert.specialization}</p>
          <div className="flex flex-wrap gap-3 mt-2 text-xs text-muted-foreground">
            <span className="flex items-center gap-1"><Star className="h-3.5 w-3.5 text-warning fill-warning" />{expert.rating}</span>
            <span className="flex items-center gap-1"><MapPin className="h-3.5 w-3.5" />{expert.distance}</span>
            <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" />{expert.availability}</span>
          </div>
        </div>
      </div>
      <Button onClick={() => onSelect(expert.id)} className="w-full mt-4 bg-accent hover:bg-orange-light text-accent-foreground font-medium h-9 text-sm">
        Book Appointment
      </Button>
    </div>
  );
}
