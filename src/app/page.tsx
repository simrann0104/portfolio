"use client";

import Image from "next/image";
import { Navbar } from "@/components/navbar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Linkedin, Mail, Download, ExternalLink, GraduationCap, Code2, Cpu, Brain, Database, Wrench, MapPin, Award } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { cn } from "@/lib/utils";

export default function Home() {
  const pfp = PlaceHolderImages.find(img => img.id === "profile-photo");
  const kizashiImg = PlaceHolderImages.find(img => img.id === "project-kizashi");
  const pehchaanImg = PlaceHolderImages.find(img => img.id === "project-pehchaan");
  const addictionImg = PlaceHolderImages.find(img => img.id === "project-addiction");
  const segmentationImg = PlaceHolderImages.find(img => img.id === "project-segmentation");

  const skills = {
    languages: ["Java", "Python", "R", "C++", "PHP", "JavaScript"],
    frameworks: ["NumPy", "Pandas", "Scikit-learn", "Seaborn", "XGBoost", "Statsmodels", "TensorFlow"],
    fullstack: ["React.js", "Node.js", "Express.js", "Next.js", "FastAPI"],
    databases: ["MongoDB", "MySQL", "MS-SQL"],
    tools: ["Jupyter Notebook", "Tableau", "Excel", "Git", "Postman", "VS Code", "Google Colab"],
    core: ["Data Structures & Algorithms", "DBMS", "Machine Learning", "Data Analytics", "Operating Systems"],
    soft: ["Analytical Thinking", "Problem Solving", "Team Collaboration", "Adaptability", "Leadership"]
  };

  const experience = [
    {
      company: "Prodigy InfoTech",
      role: "Machine Learning Intern",
      period: "Feb 2026 - Mar 2026",
      description: [
        "Worked on structured machine learning tasks involving data preprocessing, model training, and performance evaluation.",
        "Utilized Python libraries including NumPy, Pandas, and Scikit-learn to build and test basic predictive models.",
        "Strengthened understanding of end-to-end ML workflows and applied concepts to real-world datasets."
      ],
      tech: ["Scikit-learn", "Pandas", "NumPy", "Matplotlib"]
    },
    {
      company: "Unified Mentor",
      role: "Data Science Intern",
      period: "Dec 2024",
      description: [
        "Optimized datasets of 50k+ records, improving model training efficiency by 15%.",
        "Leveraged Python libraries including NumPy, Pandas, and Scikit-learn to develop and deploy robust Machine Learning models.",
        "Translated complex data analysis into actionable business insights to drive strategic decision-making processes."
      ],
      tech: ["Scikit-learn", "Seaborn", "Matplotlib", "Tableau"]
    }
  ];

  const projects = [
    {
      title: "Pehchaan",
      subtitle: "Voter ID Verification System",
      description: "Engineered backend architecture for a MERN-based Voter Verification System, integrating a Machine Learning model for identity validation using attributes such as Aadhaar and address.",
      tech: ["MongoDB", "Express", "React", "Node", "Axios", "Machine Learning"],
      image: pehchaanImg?.imageUrl,
      hint: pehchaanImg?.imageHint
    },
    {
      title: "KIZASHI",
      subtitle: "AI-Based Behavioural Analytics System",
      description: "Developed a MERN-based behavioural analytics platform integrated with Machine Learning models to detect behavioural drift and predict productivity risks using BDI modelling.",
      tech: ["MongoDB", "Express", "Python", "FastAPI", "React", "Node", "Scikit-learn"],
      image: kizashiImg?.imageUrl,
      hint: kizashiImg?.imageHint
    },
    {
      title: "Addiction Risk Prediction",
      subtitle: "Behavioral Analytics & Classification",
      description: "Developed multiclass classification models using Random Forest and XGBoost to predict behavioral addiction patterns. Applied SHAP to interpret model predictions and identify key contributing features.",
      tech: ["Python", "Scikit-learn", "XGBoost", "Random Forest", "SHAP"],
      image: addictionImg?.imageUrl,
      hint: addictionImg?.imageHint
    },
    {
      title: "Customer Segmentation Classification",
      subtitle: "K-Means Clustering Analysis",
      description: "Engineered a data-driven customer segmentation model using K-Means to uncover distinct behavioral cohorts and translate patterns into actionable business insights.",
      tech: ["R", "Clustering", "Tableau"],
      image: segmentationImg?.imageUrl,
      hint: segmentationImg?.imageHint
    }
  ];

  const education = [
    {
      degree: "Master of Computer Applications",
      school: "Lovely Professional University",
      period: "2025 - Present",
      location: "Punjab, India",
      score: "CGPA: 8.20"
    },
    {
      degree: "Bachelor of Computer Applications",
      school: "Lovely Professional University",
      period: "2022 - 2025",
      location: "Punjab, India",
      score: "CGPA: 8.05"
    },
    {
      degree: "Intermediate (Science)",
      school: "Khalsa Model Senior Secondary School",
      period: "2021 - 2022",
      location: "Kolkata, West Bengal",
      score: "Percentage: 73.6%"
    }
  ];

  const certificates = [
    { title: "Introduction to Generative AI Studio", issuer: "Simplilearn", date: "FEB 2026" },
    { title: "Java Course - Fundamentals", issuer: "Scaler", date: "FEB 2026" },
    { title: "RDBMS Introduction", issuer: "IBM", date: "AUG 2025" },
    { title: "ML & Data Analytics", issuer: "Infosys Springboard", date: "JUN 2025" },
    { title: "R Programming", issuer: "Coursera", date: "JUL 2024" },
    { title: "Crash Course on Python", issuer: "Google", date: "APR 2024" },
    { title: "HTML, CSS & JS", issuer: "John Hopkins University", date: "AUG 2023" }
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
                Hi, I'm <br />
                <span className="text-primary glow-text">Simran Kaur</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
                Developer passionate about intelligent and scalable applications.
              </p>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20" asChild>
                <a href="#projects">View My Work</a>
              </Button>
              <Button size="lg" variant="outline" className="border-white/10 hover:bg-white/5" asChild>
                <a 
                  href="/Simran%20Kaur%20-%20Backend%20Dev.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Download className="mr-2 h-4 w-4" /> Resume
                </a>
              </Button>
              <div className="flex items-center gap-4 ml-2">
                <a href="https://linkedin.com/in/simrankaur2004" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                  <Linkedin className="h-6 w-6" />
                </a>
                <a href="https://github.com/simrann0104" target="_blank" className="text-muted-foreground hover:text-primary transition-colors">
                  <Github className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>

          <div className="flex justify-center items-center relative">
            <div className="relative w-80 h-80 md:w-96 md:h-96">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-[40px] animate-pulse" />
              <div className="absolute inset-0 border-2 border-primary/20 rounded-full animate-[spin_10s_linear_infinite]" />
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/10 shadow-2xl animate-float">
                <Image
                  src={pfp?.imageUrl || "/hehehehe.jpg"}
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

      {/* Education Section (Zig Zag) */}
      <section id="education" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Education</h2>
            <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
          </div>

          <div className="relative">
            {/* Center Line for Desktop */}
            <div className="absolute left-1/2 -translate-x-1/2 h-full w-px bg-white/10 hidden md:block" />

            <div className="space-y-12 relative">
              {education.map((edu, idx) => (
                <div key={idx} className={cn(
                  "flex flex-col md:flex-row items-center",
                  idx % 2 === 0 ? "md:justify-end" : "md:justify-start"
                )}>
                  {/* Dot on line for Desktop */}
                  <div className="absolute left-1/2 -translate-x-1/2 h-4 w-4 rounded-full bg-background border-2 border-primary shadow-[0_0_8px_rgba(147,104,227,0.5)] hidden md:block z-10" />

                  <Card className={cn(
                    "glass border-white/5 p-8 w-full md:w-[45%] hover:border-primary/30 transition-all group relative",
                    idx % 2 === 0 ? "md:ml-auto" : "md:mr-auto"
                  )}>
                    <div className="space-y-4">
                      <div className="flex flex-wrap items-center justify-between gap-4">
                        <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">{edu.degree}</h3>
                        <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                          {edu.period}
                        </Badge>
                      </div>
                      
                      <div className="flex flex-col gap-2 text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <GraduationCap className="h-4 w-4 text-primary" /> 
                          <span className="text-sm font-medium">{edu.school}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-secondary" /> 
                          <span className="text-sm">{edu.location}</span>
                        </div>
                      </div>

                      <div className="pt-4 border-t border-white/5">
                        <Badge className="bg-secondary/10 text-secondary border-secondary/20 font-bold px-3 py-1">
                          {edu.score}
                        </Badge>
                      </div>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 bg-card/10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-5xl font-bold">Experience</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </div>

          <div className="grid gap-8 max-w-4xl mx-auto">
            {experience.map((exp, idx) => (
              <Card key={idx} className="glass border-white/5 p-6 hover:border-primary/30 transition-all group">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">{exp.company}</h3>
                    <p className="text-secondary font-medium">{exp.role}</p>
                  </div>
                  <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20 w-fit">
                    {exp.period}
                  </Badge>
                </div>
                <ul className="space-y-3 mb-6">
                  {exp.description.map((item, i) => (
                    <li key={i} className="text-muted-foreground text-sm flex gap-3">
                      <span className="text-primary mt-1">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map(t => (
                    <Badge key={t} variant="outline" className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                      {t}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Matrix */}
      <section id="skills" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-5xl font-bold">Technical Stack</h2>
            <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <SkillCard title="Languages" items={skills.languages} icon={<Code2 className="text-primary" />} />
            <SkillCard title="ML & Analysis" items={skills.frameworks} icon={<Brain className="text-secondary" />} />
            <SkillCard title="Development" items={skills.fullstack} icon={<Cpu className="text-primary" />} />
            <SkillCard title="Databases" items={skills.databases} icon={<Database className="text-secondary" />} />
            <SkillCard title="Tools & Platforms" items={skills.tools} icon={<Wrench className="text-primary" />} />
            <SkillCard title="Core CS" items={skills.core} icon={<Brain className="text-secondary" />} />
          </div>
        </div>
      </section>

      {/* Projects Showcase */}
      <section id="projects" className="py-24 bg-card/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-5xl font-bold">Featured Work</h2>
              <p className="text-muted-foreground max-w-xl text-lg">
                Backend engineering meets machine learning for smarter digital solutions
              </p>
            </div>
            <Button variant="link" className="text-primary group" asChild>
              <a href="https://github.com/simrann0104" target="_blank" rel="noopener noreferrer">
                View All Projects <ExternalLink className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>

          <div className="grid gap-12">
            {projects.map((project, idx) => (
              <div key={project.title} className={cn(
                "group grid lg:grid-cols-2 gap-8 items-center rounded-3xl overflow-hidden border border-white/5 bg-card/40 p-4 md:p-8 hover:bg-card/60 transition-colors",
                idx % 2 !== 0 && "lg:flex-row-reverse"
              )}>
                <div className="relative aspect-video rounded-2xl overflow-hidden">
                  <Image
                    src={project.image || "https://placehold.co/800x600"}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    data-ai-hint={project.hint || "data visualization"}
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

      {/* Certificates Vault */}
      <section id="certificates" className="py-24 bg-card/10">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12">Certifications</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {certificates.map((cert, idx) => (
              <CertCard key={idx} title={cert.title} issuer={cert.issuer} date={cert.date} />
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Achievements</h2>
            <div className="w-16 h-1 bg-primary mx-auto rounded-full" />
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
             <Card className="glass border-white/5 flex flex-col items-center justify-center p-8 text-center bg-primary/5 hover:border-primary/30 transition-all">
              <Award className="h-12 w-12 text-primary mb-4" />
              <h3 className="font-headline text-xl font-bold mb-2">Top 10% Performance</h3>
              <p className="text-sm text-muted-foreground">Recognized for academic excellence and nation-level competition participation at Lovely Professional University.</p>
            </Card>
            <Card className="glass border-white/5 flex flex-col items-center justify-center p-8 text-center bg-secondary/5 hover:border-secondary/30 transition-all">
              <Cpu className="h-12 w-12 text-secondary mb-4" />
              <h3 className="font-headline text-xl font-bold mb-2">EY Techathon 6.0</h3>
              <p className="text-sm text-muted-foreground">Competed and demonstrated innovative problem-solving in a nation-level tech challenge.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Portal */}
      <section id="contact" className="py-24 px-6 border-t border-white/5">
        <div className="max-w-3xl mx-auto text-center space-y-12">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold">Let's Connect & <span className="text-primary glow-text">Build.</span></h2>
            <p className="text-muted-foreground text-lg">
              Open to opportunities in Data Science, ML Engineering, and Full Stack roles. 
              Available for <span className="text-foreground font-semibold">global projects</span> from Kolkata, India.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <a href="mailto:54321jit93@gmail.com" className="flex flex-col items-center p-6 rounded-2xl glass border-white/5 hover:border-primary/50 transition-all hover:-translate-y-1 group">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <span className="text-sm font-medium text-muted-foreground">Email</span>
            </a>
            <a href="https://linkedin.com/in/simrankaur2004" target="_blank" className="flex flex-col items-center p-6 rounded-2xl glass border-white/5 hover:border-primary/50 transition-all hover:-translate-y-1 group">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Linkedin className="h-6 w-6 text-primary" />
              </div>
              <span className="text-sm font-medium text-muted-foreground">LinkedIn</span>
            </a>
            <a href="https://github.com/simrann0104" target="_blank" className="flex flex-col items-center p-6 rounded-2xl glass border-white/5 hover:border-primary/50 transition-all hover:-translate-y-1 group">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <Github className="h-6 w-6 text-primary" />
              </div>
              <span className="text-sm font-medium text-muted-foreground">GitHub</span>
            </a>
          </div>

          <div className="pt-12 text-muted-foreground text-sm flex items-center justify-center gap-2">
            <span className="flex items-center gap-2">
              <MapPin className="h-3 w-3" /> Kolkata, India
            </span>
            <span className="mx-2">•</span>
            <span>© 2026 Simran Kaur</span>
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
