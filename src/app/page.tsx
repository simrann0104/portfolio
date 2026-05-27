import Image from "next/image";
import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Mail, Download, ExternalLink, Award, GraduationCap, Code2, Cpu, Brain, Database, Wrench, Calendar, MapPin } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { RecruiterPitchTool } from "@/components/recruiter-pitch-tool";
import { cn } from "@/lib/utils";

export default function Home() {
  const pfp = PlaceHolderImages.find(img => img.id === "profile-photo");
  const kizashiImg = PlaceHolderImages.find(img => img.id === "project-kizashi");
  const pehchaanImg = PlaceHolderImages.find(img => img.id === "project-pehchaan");

  const skills = {
    languages: ["Java", "Python", "JavaScript"],
    ml: ["TensorFlow", "Scikit-learn", "Pandas", "NumPy", "FastAPI"],
    fullstack: ["React.js", "Node.js", "Express.js", "Next.js"],
    databases: ["MongoDB", "MySQL", "MS-SQL"],
    tools: ["Git", "GitHub", "Postman", "JWT", "REST APIs"]
  };

  const projects = [
    {
      title: "KIZASHI",
      subtitle: "AI-Based Behavioural Analytics System",
      description: "Developed a MERN-based behavioural analytics platform integrated with Machine Learning models to detect behavioural drift and predict productivity risks. Performed data preprocessing, feature engineering, and predictive analysis using BDI modelling.",
      tech: ["MongoDB", "Express", "Python", "FastAPI", "React", "Node", "Scikit-learn"],
      image: kizashiImg?.imageUrl
    },
    {
      title: "Pehchaan",
      subtitle: "Voter ID Verification System",
      description: "Engineered backend architecture for a MERN-based Voter Verification System, integrating a Machine Learning model for identity validation using attributes such as Aadhaar and address. Optimized MongoDB queries and managed data modeling.",
      tech: ["MongoDB", "Express", "React", "Node", "Axios", "Machine Learning"],
      image: pehchaanImg?.imageUrl
    }
  ];

  const education = [
    {
      degree: "Master of Computer Applications",
      school: "Lovely Professional University",
      period: "2025 - Present",
      location: "Phagwara, Punjab",
      score: "CGPA: 8.20"
    },
    {
      degree: "Bachelor of Computer Applications",
      school: "Lovely Professional University",
      period: "2022 - 2025",
      location: "Phagwara, Punjab",
      score: "CGPA: 8.05"
    },
    {
      degree: "Intermediate (Science)",
      school: "Khalsa Model Senior Secondary School",
      period: "2021 - 2022",
      location: "Kolkata, West Bengal",
      score: "CGPA: 7.36"
    }
  ];

  return (
    <main className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section id="hero" className="pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <Badge variant="outline" className="border-primary/50 text-primary px-4 py-1">
                Data Science & Full Stack Developer
              </Badge>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                Bridging <span className="text-primary glow-text">Data</span> & <br />
                <span className="text-secondary glow-text">Engineering.</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
                I’m Simran Kaur, building AI-powered systems, scalable backend architectures, and intelligent digital experiences.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20">
                View Projects
              </Button>
              <Button size="lg" variant="outline" className="border-white/10 hover:bg-white/5">
                <Download className="mr-2 h-4 w-4" /> Download Resume
              </Button>
              <div className="flex items-center gap-4 ml-2">
                <a href="https://linkedin.com/in/simrankaur2004" className="text-muted-foreground hover:text-primary transition-colors">
                  <Linkedin className="h-6 w-6" />
                </a>
                <a href="https://github.com/simrann0104" className="text-muted-foreground hover:text-primary transition-colors">
                  <Github className="h-6 w-6" />
                </a>
              </div>
            </div>
            
            <div className="max-w-md pt-4">
              <RecruiterPitchTool />
            </div>
          </div>

          <div className="flex justify-center items-center relative">
            <div className="relative w-80 h-80 md:w-96 md:h-96">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-[40px] animate-pulse" />
              <div className="absolute inset-0 border-2 border-primary/20 rounded-full animate-[spin_10s_linear_infinite]" />
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/10 shadow-2xl animate-float">
                <Image
                  src={pfp?.imageUrl || "https://placehold.co/400x400"}
                  alt="Simran Kaur"
                  fill
                  className="object-cover"
                  data-ai-hint="professional woman"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Matrix */}
      <section id="skills" className="py-24 bg-card/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-5xl font-bold">Technical Proficiency</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <SkillCard title="Languages" items={skills.languages} icon={<Code2 className="text-primary" />} />
            <SkillCard title="AI / ML" items={skills.ml} icon={<Brain className="text-secondary" />} />
            <SkillCard title="Full Stack" items={skills.fullstack} icon={<Cpu className="text-primary" />} />
            <SkillCard title="Databases" items={skills.databases} icon={<Database className="text-secondary" />} />
            <SkillCard title="Tools & APIs" items={skills.tools} icon={<Wrench className="text-primary" />} />
            <Card className="glass border-white/5 flex flex-col items-center justify-center p-8 text-center bg-primary/5">
              <Award className="h-12 w-12 text-primary mb-4" />
              <h3 className="font-headline text-xl font-bold mb-2">Dean's List Recognition</h3>
              <p className="text-sm text-muted-foreground">Awarded for being among the Top 10% academic performers at LPU.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Showcase */}
      <section id="projects" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-5xl font-bold">Featured Projects</h2>
              <p className="text-muted-foreground max-w-xl text-lg">
                Complex systems combining scalable architecture with intelligent machine learning workflows.
              </p>
            </div>
            <Button variant="link" className="text-primary group">
              View all on GitHub <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          <div className="grid gap-12">
            {projects.map((project, idx) => (
              <div key={project.title} className={cn(
                "group grid lg:grid-cols-2 gap-8 items-center rounded-3xl overflow-hidden border border-white/5 bg-card/40 p-4 md:p-8",
                idx % 2 !== 0 && "lg:direction-rtl"
              )}>
                <div className="relative aspect-video rounded-2xl overflow-hidden">
                  <Image
                    src={project.image || "https://placehold.co/800x600"}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    data-ai-hint="dashboard"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                </div>
                <div className={cn("space-y-6", idx % 2 !== 0 ? "lg:pr-12" : "lg:pl-12")}>
                  <div className="space-y-2">
                    <h3 className="text-3xl font-bold group-hover:text-primary transition-colors">{project.title}</h3>
                    <p className="text-secondary font-medium tracking-wide uppercase text-xs">{project.subtitle}</p>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map(t => (
                      <Badge key={t} variant="secondary" className="bg-primary/10 border-primary/20 text-primary">
                        {t}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Timeline */}
      <section id="education" className="py-24 bg-card/20">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Educational Journey</h2>
            <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
          </div>

          <div className="relative border-l border-white/10 pl-8 space-y-12">
            {education.map((edu, idx) => (
              <div key={idx} className="relative">
                <div className="absolute -left-[41px] top-0 h-6 w-6 rounded-full bg-background border-4 border-primary shadow-[0_0_10px_rgba(147,104,227,0.5)]" />
                <div className="space-y-2">
                  <div className="flex flex-wrap items-center justify-between gap-4">
                    <h3 className="text-xl font-bold text-foreground">{edu.degree}</h3>
                    <span className="text-sm font-medium px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                      {edu.period}
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-x-6 gap-y-2 text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <GraduationCap className="h-4 w-4" /> {edu.school}
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" /> {edu.location}
                    </div>
                  </div>
                  <Badge className="bg-secondary/10 text-secondary border-secondary/20 font-bold">
                    {edu.score}
                  </Badge>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificates Vault */}
      <section id="certificates" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12">Certifications</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <CertCard title="Generative AI Studio" issuer="Simplilearn" date="2026" />
            <CertCard title="RDBMS Introduction" issuer="IBM" date="2025" />
            <CertCard title="Python Crash Course" issuer="Google" date="2024" />
            <CertCard title="Web Dev (HTML/CSS/JS)" issuer="Coursera" date="2023" />
          </div>
        </div>
      </section>

      {/* Contact Portal */}
      <section id="contact" className="py-24 px-6 border-t border-white/5">
        <div className="max-w-3xl mx-auto text-center space-y-12">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold">Let's Create Something <span className="text-primary glow-text">Next.</span></h2>
            <p className="text-muted-foreground text-lg">
              Currently open to opportunities in ML Engineering and Full Stack roles. 
              Based in <span className="text-foreground font-semibold">Kolkata, West Bengal</span>.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-4">
            <a href="mailto:54321jit93@gmail.com" className="flex flex-col items-center p-6 rounded-2xl glass border-white/5 hover:border-primary/50 transition-all hover:-translate-y-1 group">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <span className="text-sm font-medium text-muted-foreground">Email</span>
              <span className="text-xs truncate w-full mt-1">54321jit93@gmail.com</span>
            </a>
            <a href="https://linkedin.com/in/simrankaur2004" target="_blank" className="flex flex-col items-center p-6 rounded-2xl glass border-white/5 hover:border-primary/50 transition-all hover:-translate-y-1 group">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Linkedin className="h-6 w-6 text-primary" />
              </div>
              <span className="text-sm font-medium text-muted-foreground">LinkedIn</span>
              <span className="text-xs mt-1">simrankaur2004</span>
            </a>
            <a href="https://github.com/simrann0104" target="_blank" className="flex flex-col items-center p-6 rounded-2xl glass border-white/5 hover:border-primary/50 transition-all hover:-translate-y-1 group">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Github className="h-6 w-6 text-primary" />
              </div>
              <span className="text-sm font-medium text-muted-foreground">GitHub</span>
              <span className="text-xs mt-1">simrann0104</span>
            </a>
          </div>

          <div className="pt-12 text-muted-foreground text-sm flex items-center justify-center gap-2">
            <span className="flex items-center gap-2">
              <MapPin className="h-3 w-3" /> Kolkata, India
            </span>
            <span className="mx-2">•</span>
            <span>© 2024 Simran Kaur</span>
          </div>
        </div>
      </section>
    </main>
  );
}

function SkillCard({ title, items, icon }: { title: string; items: string[]; icon: React.ReactNode }) {
  return (
    <Card className="glass border-white/5 group hover:border-primary/30 transition-all duration-300">
      <CardContent className="p-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-2 rounded-lg bg-white/5 group-hover:bg-primary/10 transition-colors">
            {icon}
          </div>
          <h3 className="font-headline font-bold text-lg">{title}</h3>
        </div>
        <div className="flex flex-wrap gap-2">
          {items.map(item => (
            <Badge key={item} variant="outline" className="border-white/10 text-muted-foreground group-hover:text-foreground transition-colors">
              {item}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

function CertCard({ title, issuer, date }: { title: string; issuer: string; date: string }) {
  return (
    <div className="glass p-5 rounded-2xl border-white/5 hover:border-primary/20 transition-all group">
      <div className="flex justify-between items-start mb-4">
        <Award className="h-8 w-8 text-secondary group-hover:scale-110 transition-transform" />
        <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground">{date}</span>
      </div>
      <h4 className="font-bold text-sm mb-1 leading-snug">{title}</h4>
      <p className="text-xs text-primary font-medium">{issuer}</p>
    </div>
  );
}
