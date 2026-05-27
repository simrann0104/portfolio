
"use client";

import { useState } from "react";
import { generateRecruiterPitch } from "@/ai/flows/generate-recruiter-pitch-flow";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Sparkles, Copy, Check, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export function RecruiterPitchTool() {
  const [company, setCompany] = useState("");
  const [loading, setLoading] = useState(false);
  const [pitch, setPitch] = useState("");
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const handleGenerate = async () => {
    setLoading(true);
    try {
      const result = await generateRecruiterPitch({
        targetCompany: company,
        simranName: "Simran Kaur",
        specialization: "Data Science & Full Stack Developer with expertise in ML, behavioral analytics, and scalable AI systems.",
        keySkills: ["Python", "Java", "R", "SQL", "Scikit-learn", "FastAPI", "Tableau", "Next.js"],
        projects: [
          {
            title: "Addiction Risk Prediction",
            description: "Built classification models (XGBoost/Random Forest) to predict behavioral risk patterns.",
            techStack: ["Python", "XGBoost", "Scikit-learn"]
          },
          {
            title: "KIZASHI",
            description: "AI-based behavioral analytics system for productivity risk prediction.",
            techStack: ["MERN", "FastAPI", "Python"]
          }
        ],
        achievements: ["Top 10% academic performer at LPU", "EY Techathon 6.0 Participant"],
        educationSummary: "MCA Candidate at LPU with 8.20 CGPA"
      });
      setPitch(result.pitch);
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to generate pitch. Please try again."
      });
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(pitch);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Card className="glass border-primary/20 overflow-hidden relative">
      <div className="absolute top-0 right-0 p-4">
        <Sparkles className="h-6 w-6 text-primary animate-pulse" />
      </div>
      <CardHeader>
        <CardTitle className="font-headline text-xl">Recruiter Pitch Generator</CardTitle>
        <CardDescription>Generate a personalized intro for a specific company.</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex gap-2">
          <Input 
            placeholder="Target Company (e.g. Google, Meta)" 
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            className="bg-background/50 border-white/10"
          />
          <Button onClick={handleGenerate} disabled={loading} className="shrink-0 bg-primary hover:bg-primary/90 text-white">
            {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : "Generate"}
          </Button>
        </div>
        
        {pitch && (
          <div className="mt-4 p-4 rounded-lg bg-background/50 border border-white/5 relative group">
            <p className="text-sm leading-relaxed italic text-muted-foreground pr-8">
              "{pitch}"
            </p>
            <Button 
              size="icon" 
              variant="ghost" 
              className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
              onClick={handleCopy}
            >
              {copied ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
