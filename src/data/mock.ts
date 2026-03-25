export const mockExperts = [
  { id: "1", name: "Dr. Marc Dupont", specialization: "Collision Damage Assessment", distance: "2.3 km", rating: 4.9, availability: "Today, 14:00", avatar: "MD", aiRecommended: true },
  { id: "2", name: "Sophie Laurent", specialization: "Bodywork & Paint Expert", distance: "4.1 km", rating: 4.7, availability: "Tomorrow, 09:00", avatar: "SL", aiRecommended: false },
  { id: "3", name: "Pierre Moreau", specialization: "Mechanical & Engine Expert", distance: "5.8 km", rating: 4.8, availability: "Today, 16:30", avatar: "PM", aiRecommended: true },
  { id: "4", name: "Claire Dubois", specialization: "Insurance Compliance Expert", distance: "3.5 km", rating: 4.6, availability: "Wed, 10:00", avatar: "CD", aiRecommended: false },
];

export const mockAppointments = [
  { id: "1", expert: "Dr. Marc Dupont", date: "2026-03-26", time: "14:00", status: "confirmed" as const, vehicle: "Peugeot 308 - AB-123-CD", type: "Collision Assessment" },
  { id: "2", expert: "Sophie Laurent", date: "2026-03-28", time: "09:00", status: "pending" as const, vehicle: "Renault Clio - EF-456-GH", type: "Bodywork Inspection" },
  { id: "3", expert: "Pierre Moreau", date: "2026-03-30", time: "11:00", status: "completed" as const, vehicle: "BMW 320d - IJ-789-KL", type: "Engine Diagnostic" },
];

export const mockNotifications = [
  { id: "1", title: "Appointment Confirmed", message: "Your appointment with Dr. Dupont is confirmed for March 26.", time: "2h ago", read: false },
  { id: "2", title: "Report Ready", message: "Your vehicle expertise report is now available.", time: "5h ago", read: false },
  { id: "3", title: "Insurance Update", message: "AXA has approved your claim #2847.", time: "1d ago", read: true },
];

export const mockKPIs = [
  { label: "Appointments This Week", value: "12", change: "+3", trend: "up" as const },
  { label: "Cases Completed", value: "48", change: "+8", trend: "up" as const },
  { label: "Avg. Response Time", value: "2.4h", change: "-0.5h", trend: "down" as const },
  { label: "Satisfaction Rate", value: "97%", change: "+2%", trend: "up" as const },
];

export const mockTimeline = [
  { step: "Accident Reported", status: "completed" as const, date: "Mar 20" },
  { step: "Expert Assigned", status: "completed" as const, date: "Mar 21" },
  { step: "Appointment Scheduled", status: "completed" as const, date: "Mar 22" },
  { step: "Expertise In Progress", status: "current" as const, date: "Mar 26" },
  { step: "Report Generation", status: "upcoming" as const, date: "Mar 28" },
  { step: "Insurance Review", status: "upcoming" as const, date: "Mar 30" },
];

export const mockExpertAgenda = [
  { time: "08:00", client: "Jean Martin", vehicle: "Peugeot 308", type: "Collision", location: "Paris 15e" },
  { time: "10:30", client: "Marie Leroy", vehicle: "Citroën C3", type: "Bodywork", location: "Paris 12e" },
  { time: "14:00", client: "Luc Bernard", vehicle: "VW Golf", type: "Engine", location: "Boulogne" },
  { time: "16:30", client: "Anne Petit", vehicle: "BMW X1", type: "Insurance", location: "Neuilly" },
];

export const timeSlots = [
  "08:00", "08:30", "09:00", "09:30", "10:00", "10:30",
  "11:00", "11:30", "13:00", "13:30", "14:00", "14:30",
  "15:00", "15:30", "16:00", "16:30", "17:00",
];
