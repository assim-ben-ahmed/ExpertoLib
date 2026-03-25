import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { AuthLayout } from "@/components/AuthLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Loader2 } from "lucide-react";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState<"owner" | "expert">("owner");
  const [loading, setLoading] = useState(false);
  const { signup } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await signup(name, email, password, role);
      navigate(role === "expert" ? "/expert" : "/dashboard");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout title="Create your account" subtitle="Get started with ExpertoLib today">
      <form onSubmit={handleSubmit} className="space-y-5 animate-fade-up">
        <div className="space-y-2">
          <Label htmlFor="name">Full Name</Label>
          <Input id="name" placeholder="Jean Martin" value={name} onChange={(e) => setName(e.target.value)} required className="h-11" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="you@example.com" value={email} onChange={(e) => setEmail(e.target.value)} required className="h-11" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <Input id="password" type="password" placeholder="Min. 8 characters" value={password} onChange={(e) => setPassword(e.target.value)} required className="h-11" />
        </div>
        <div className="space-y-2">
          <Label>I am a</Label>
          <div className="grid grid-cols-2 gap-3">
            {(["owner", "expert"] as const).map((r) => (
              <button key={r} type="button" onClick={() => setRole(r)}
                className={`p-3 rounded-lg border-2 text-sm font-medium transition-all ${role === r ? "border-accent bg-accent/10 text-accent" : "border-border text-muted-foreground hover:border-accent/30"}`}>
                {r === "owner" ? "🚗 Vehicle Owner" : "🔧 Expert"}
              </button>
            ))}
          </div>
        </div>
        <Button type="submit" disabled={loading} className="w-full h-11 bg-accent hover:bg-orange-light text-accent-foreground font-semibold">
          {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : "Create Account"}
        </Button>
        <p className="text-center text-sm text-muted-foreground">
          Already have an account?{" "}
          <Link to="/" className="text-accent font-medium hover:underline">Sign In</Link>
        </p>
      </form>
    </AuthLayout>
  );
}
