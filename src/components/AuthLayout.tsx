import { ReactNode } from "react";
import logo from "@/assets/logo.png";

export function AuthLayout({ children, title, subtitle }: { children: ReactNode; title: string; subtitle: string }) {
  return (
    <div className="min-h-screen flex">
      {/* Left panel */}
      <div className="hidden lg:flex lg:w-1/2 gradient-navy flex-col justify-between p-12 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-accent blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-accent/50 blur-3xl" />
        </div>
        <div className="relative z-10">
          <img src={logo} alt="ExpertoLib" width={80} height={80} className="mb-6" />
          <h1 className="text-4xl font-bold text-primary-foreground mb-4">ExpertoLib</h1>
          <p className="text-primary-foreground/70 text-lg max-w-md">
            The leading platform connecting vehicle owners with certified automotive experts for post-accident assessments.
          </p>
        </div>
        <div className="relative z-10 space-y-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center">
              <span className="text-accent font-bold text-xl">AI</span>
            </div>
            <div>
              <p className="text-primary-foreground font-medium">Smart Scheduling</p>
              <p className="text-primary-foreground/60 text-sm">AI-powered expert matching</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center">
              <span className="text-accent font-bold">⚡</span>
            </div>
            <div>
              <p className="text-primary-foreground font-medium">Fast Processing</p>
              <p className="text-primary-foreground/60 text-sm">Average 2.4h response time</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right panel */}
      <div className="flex-1 flex items-center justify-center p-6 sm:p-12">
        <div className="w-full max-w-md space-y-8">
          <div className="lg:hidden flex items-center gap-3 mb-8">
            <img src={logo} alt="ExpertoLib" width={48} height={48} />
            <span className="text-2xl font-bold text-primary">ExpertoLib</span>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-foreground">{title}</h2>
            <p className="text-muted-foreground mt-1">{subtitle}</p>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}
