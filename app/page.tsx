"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  Github,
  Linkedin,
  ExternalLink,
  ChevronRight,
  Brain,
  Code,
  Database,
  Briefcase,
  GraduationCap,
  Users,
  FileText,
  Award,
  Activity,
  Leaf,
  ShieldAlert,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import ParticleBackground from "../components/particle-background"

const experience = [
  {
    role: "Software Development Engineer",
    org: "AugurAI",
    period: "Sept 2025 - Present",
    points: [
      "Built a production-ready Agentic AI chatbot integrating Vision-Language Models (VLMs) into autonomous defect detection loops.",
      "Owned end-to-end computer vision infrastructure — from camera configuration and annotation pipelines to iterative model training.",
      "Established the company's CI/CD pipeline from scratch, automating binary compilation and OTA software delivery to industrial client terminals.",
    ],
  },
]

const internships = [
  {
    role: "AI Analyst Intern",
    org: "Office Hub Tech (Zoho Partner)",
    period: "Aug 2025 - Nov 2025",
    points: [
      "Conceptualized and built an LLM-powered analytics application for Zoho Marketplace, automating metric extraction and insight generation.",
      "Pitched directly to the CEO and delivered a full knowledge transfer to the internal team.",
    ],
  },
  {
    role: "Machine Learning Developer Intern",
    org: "Ministry of Education",
    period: "Oct 2024 - Jan 2025",
    points: [
      "Analyzed global innovation metrics to support strategic planning decisions.",
      "Resolved critical bugs improving stability and UX of government-facing web platforms.",
    ],
  },
]

const leadership = [
  {
    role: "Chairperson, IEEE Student Branch",
    org: "SRM IST Trichy",
    period: "Jan 2025 - Nov 2025",
    points: [
      "Directed chapter-wide initiatives spanning conferences, technical workshops, and hackathons.",
      "Drove student engagement with applied research and emerging technologies.",
    ],
  },
  {
    role: "Founder & President, FOSS Society",
    org: "SRM IST Trichy",
    period: "Nov 2023 - Oct 2025",
    points: [
      "Founded and led a research-oriented open-source community.",
      "Organized 3+ technical workshops and 8+ AI/ML events across the institution.",
    ],
  },
  {
    role: "Member, Cyber Physical Systems Research Team",
    org: "SRM IST Trichy",
    period: "Feb 2023 - May 2026",
    points: [
      "Contributed to active research over three years.",
      "Resulting in 3 published papers and 2 manuscripts currently under review across AI and systems domains.",
    ],
  },
]

const projects = [
  {
    icon: Activity,
    color: "text-purple-500",
    title: "Atrial Fibrillation Prediction",
    period: "Jun 2025 - Apr 2026",
    description:
      "Developing an arrhythmia prediction model leveraging Self-Supervised Learning as a dual encoder for higher reliability and precision.",
    tags: ["Python", "PyTorch", "Computer Vision", "Time Series", "Docker"],
    link: null,
  },
  {
    icon: Leaf,
    color: "text-cyan-500",
    title: "Plant Disease Diagnosis & Agricultural Chatbot",
    period: "Dec 2024 - Apr 2025",
    description:
      "Leaf-based disease diagnosis plus a chatbot powered by the Grok API for agricultural assistance. Deployed on HuggingFace and published as open source on Zenodo.",
    tags: ["MobileNetV2", "Computer Vision", "Gradio", "Python", "Docker"],
    link: "https://doi.org/10.5281/zenodo.15283721",
  },
  {
    icon: ShieldAlert,
    color: "text-purple-500",
    title: "NSFW Content Detection",
    period: "Aug 2024 - Nov 2024",
    description:
      "Comparative analysis of 10 models including EfficientNet, ResNet, and MobileNet, optimizing accuracy (63%–94%) for real-time content moderation apps.",
    tags: ["TensorFlow", "PyTorch", "Deep Learning"],
    link: "https://github.com/rayeanpatric/nsfw_detection",
  },
]

const firstAuthorPubs = [
  {
    title:
      "Dual-Encoder Self-Supervised Learning for Morphology-Rhythm ECG Representation and Arrhythmia Classification",
    authors: "Rayean Patric, Balaji Ganesh R, Deebalakshmi R.",
    venue: "Submitted, Jun 2026",
    contribution:
      "Conceptualization, architectural framework, implementation, project oversight and manuscript preparation.",
    status: "Under Review",
    link: null,
  },
]

const coAuthorPubs = [
  {
    title: "From Qubit Encoding to Quantum Advantage: Exploring Frontiers of QML",
    authors: "Balaji Ganesh R, Rayean Patric, Helda Dhanam, et al.",
    venue: "Submitted, Feb 2026",
    contribution: "Conceptualization, architectural framework, paper structure and review.",
    status: "Under Review",
    link: null,
  },
  {
    title:
      "Review of Various Integrative Approaches to Cardiovascular Disease and COVID-19: Biomarkers, AI, and Natural Treatments",
    authors: "Balaji Ganesh R, Deebalakshmi R, Rayean Patric, et al.",
    venue: "Cureus J Comput Sci — doi: 10.7759/s44389-024-00191-w",
    contribution: "Conceptualization, end-to-end implementation, SDG-aligned research design.",
    status: "Published",
    link: "https://www.cureusjournals.com/articles/191-review-of-various-integrative-approaches-to-cardiovascular-disease-and-covid-19-biomarkers-ai-and-natural-treatments#!/",
  },
  {
    title: "Comprehensive Analysis of YOLO Models for Deployment in Precision Agriculture",
    authors: "Balaji Ganesh R, Yoga Vignesh, Rayean Patric, et al.",
    venue: "International Journal of Computers and Their Applications (IJCA), Vol. 32, No. 2, June 2025, p. 92",
    contribution: "Implementation and manuscript drafting.",
    status: "Published",
    link: "https://isca-hq.org/Documents/Journal/Archive/2025/2025volume3202/2025volume320201.pdf",
  },
  {
    title: "Intelligent Vehicle Management System Using IoT",
    authors: "N. Saranya, S. S. Priya, Rayean Patric.",
    venue: "2024 5th ICESC, Coimbatore — doi: 10.1109/ICESC60852.2024.10689810",
    contribution: "Conceptualization, architecture design, simulation, and project oversight.",
    status: "Published",
    link: "https://ieeexplore.ieee.org/document/10689810/",
  },
]

const certifications = [
  "Python Developer — Google",
  "CUDA Toolkit — Nvidia DLI",
  "Jetson Nano Specialization — Nvidia DLI",
  "ML Specialization — DeepLearning.AI",
  "Building Transformer-based NLP — Nvidia DLI",
]

const achievements = [
  "1st Prize — Spectrum'25 24 Hrs Hackathon at VIT Chennai",
  "5+ projects completed, 3 research papers published, 2 under review",
  "Organized and led 8+ events and workshops under FOSS Society & IEEE",
  "10+ certifications in Python, SQL, Docker, and ML",
  "25% Merit Scholarship — SRM Institute of Science and Technology",
]

export default function Page() {

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Global animated particle background */}
      <ParticleBackground />

      {/* All page content sits above the particle layer */}
      <div className="relative z-10">
        {/* Floating Navigation */}
        <nav className="w-full z-50 bg-black/80 backdrop-blur-md">
        <div className="container px-4 md:px-6 mx-auto h-16 flex items-center justify-between">
          <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500">
            RP
          </span>
          <div className="hidden md:flex gap-2 lg:gap-4">
            {["About", "Experience", "Projects", "Publications", "Contact"].map((item) => (
              <Button
                key={item}
                variant="ghost"
                className="text-sm hover:text-purple-500 transition-colors"
                onClick={() => document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: "smooth" })}
              >
                {item}
              </Button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section with Particle Background */}
      <section className="py-24 md:py-32 relative h-screen flex items-center justify-center overflow-hidden" id="home">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-02-21%20at%2011.26.56%20PM-vef2xMiLRMLO70pBdflcUshRNs7eHT.jpeg"
            alt="Background"
            fill
            className="object-cover opacity-10"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/70"></div>
        </div>

        <div className="container px-4 md:px-6 mx-auto relative z-10 grid lg:grid-cols-2 gap-8 items-center">
          <div className="text-center lg:text-left">
            <div className="mb-6 inline-flex flex-wrap gap-4">
              <Badge variant="outline" className="text-purple-500 border-purple-500">
                AI Systems Engineer
              </Badge>
              <Badge variant="outline" className="text-purple-500 border-purple-500">
                Researcher
              </Badge>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500">
              Rayean Patric F
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              AI Systems Engineer & Researcher | SDE @ AugurAI
            </p>
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Link href="https://github.com/rayeanpatric" target="_blank">
                <Button
                  variant="outline"
                  size="lg"
                  className="gap-2 hover:bg-purple-500 hover:text-white transition-all"
                >
                  <Github className="w-5 h-5" />
                  GitHub
                </Button>
              </Link>
              <Link href="https://linkedin.com/in/rayeanpatric" target="_blank">
                <Button variant="outline" size="lg" className="gap-2 hover:bg-cyan-500 hover:text-white transition-all">
                  <Linkedin className="w-5 h-5" />
                  LinkedIn
                </Button>
              </Link>
            </div>
          </div>

          <div className="relative w-64 h-64 mx-auto lg:w-96 lg:h-96">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 animate-pulse"></div>
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-02-21%20at%2011.26.56%20PM(1)-nwHOGt5dcczSTzyHbeXdQtNT8wNwna.jpeg"
              alt="Profile"
              width={384}
              height={384}
              className="rounded-full object-cover p-2 relative z-10"
              priority
            />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 md:py-28 bg-black/50" id="about">
        <div className="container px-4 md:px-6 mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">About Me</h2>
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <div className="space-y-6">
              <p className="text-gray-300 leading-relaxed">
                AI systems engineer and researcher with a strong foundation in machine learning, computer vision, and
                autonomous systems. Published across domains including precision agriculture and biomedical AI (3
                published, 2 under review), with active research in self-supervised learning for ECG arrhythmia
                classification.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Proven engineering depth through production deployments — agentic AI pipelines, LLM-powered
                applications, and end-to-end MLOps infrastructure. Complemented by leadership as IEEE Student Branch
                Chairperson and founder of an open-source research community.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold mb-2">Education</h3>
                  <p className="text-sm text-gray-400">B.Tech in Computer Science (AI &amp; ML)</p>
                  <p className="text-sm text-gray-400">SRM IST, Trichy · 2022 – 2026</p>
                  <p className="text-sm text-purple-500">GPA: 9.27</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Location</h3>
                  <p className="text-sm text-gray-400">Tiruchirappalli, Tamil Nadu</p>
                  <p className="text-sm text-purple-500">India</p>
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="font-semibold mb-4">Core Competencies</h3>
              <div className="space-y-4">
                {[
                  { skill: "Research & Development", progress: 90 },
                  { skill: "Machine Learning & Deep Learning", progress: 88 },
                  { skill: "Computer Vision", progress: 85 },
                  { skill: "Agentic AI & LLM Pipelines", progress: 85 },
                  { skill: "MLOps & Model Deployment", progress: 82 },
                  { skill: "Technical Leadership", progress: 90 },
                ].map((item) => (
                  <div key={item.skill} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-sm">{item.skill}</span>
                      <span className="text-sm text-purple-500">{item.progress}%</span>
                    </div>
                    <Progress value={item.progress} className="h-2" />
                  </div>
                ))}
              </div>
              <div>
                <h3 className="font-semibold mb-3">Technical Skills</h3>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Python",
                    "JavaScript",
                    "SQL",
                    "Docker",
                    "PyTorch",
                    "TensorFlow",
                    "Computer Vision",
                    "Neural Networks",
                    "Agentic Pipelines",
                    "Model Deployment",
                  ].map((s) => (
                    <Badge key={s} variant="secondary">
                      {s}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 md:py-28" id="experience">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex items-center justify-center gap-3 mb-16">
            <Briefcase className="w-8 h-8 text-purple-500" />
            <h2 className="text-3xl md:text-4xl font-bold text-center">Experience</h2>
          </div>
          <div className="max-w-4xl mx-auto space-y-8">
            {experience.map((exp) => (
              <Card
                key={exp.role}
                className="p-8 bg-gray-900/50 border-gray-800 hover:border-purple-500 transition-all"
              >
                <div className="flex flex-col md:flex-row justify-between">
                  <div>
                    <h3 className="text-xl font-bold">{exp.role}</h3>
                    <p className="text-purple-500">{exp.org}</p>
                  </div>
                  <p className="text-gray-400">{exp.period}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Internships Section */}
      <section className="py-20 md:py-28 bg-black/50" id="internships">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex items-center justify-center gap-3 mb-16">
            <GraduationCap className="w-8 h-8 text-cyan-500" />
            <h2 className="text-3xl md:text-4xl font-bold text-center">Internships</h2>
          </div>
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
            {internships.map((exp) => (
              <Card
                key={exp.role}
                className="p-8 bg-gray-900/50 border-gray-800 hover:border-cyan-500 transition-all"
              >
                <div className="mb-4">
                  <h3 className="text-xl font-bold">{exp.role}</h3>
                  <p className="text-cyan-500">{exp.org}</p>
                  <p className="text-gray-400 text-sm mt-1">{exp.period}</p>
                </div>
                <ul className="list-disc list-inside text-gray-300 space-y-2">
                  {exp.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-20 md:py-28" id="leadership">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex items-center justify-center gap-3 mb-16">
            <Users className="w-8 h-8 text-purple-500" />
            <h2 className="text-3xl md:text-4xl font-bold text-center">Leadership &amp; Volunteering</h2>
          </div>
          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
            {leadership.map((exp) => (
              <Card
                key={exp.role}
                className="p-6 bg-gray-900/50 border-gray-800 hover:border-purple-500 transition-all"
              >
                <h3 className="text-lg font-bold mb-1">{exp.role}</h3>
                <p className="text-purple-500 text-sm">{exp.org}</p>
                <p className="text-gray-400 text-sm mb-4">{exp.period}</p>
                <ul className="list-disc list-inside text-gray-300 space-y-2 text-sm">
                  {exp.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 md:py-28 bg-black/50" id="projects">
        <div className="container px-4 md:px-6 mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => {
              const Icon = project.icon
              const content = (
                <Card className="p-6 bg-gray-900/50 border-gray-800 hover:border-purple-500 transition-all group relative h-full">
                  <Icon className={`w-12 h-12 ${project.color} mb-4`} />
                  <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                  <p className="text-xs text-gray-500 mb-3">{project.period}</p>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag}>{tag}</Badge>
                    ))}
                  </div>
                  {project.link && (
                    <span className="mt-4 inline-flex items-center gap-1 text-sm text-cyan-500">
                      {project.link.includes("github.com")
                        ? "View on GitHub"
                        : project.link.includes("zenodo")
                          ? "View on Zenodo"
                          : "View Project"}{" "}
                      <ExternalLink className="w-4 h-4" />
                    </span>
                  )}
                  {project.link && (
                    <ChevronRight className="w-6 h-6 text-purple-500 opacity-0 group-hover:opacity-100 transition-opacity absolute bottom-4 right-4" />
                  )}
                </Card>
              )
              return project.link ? (
                <Link key={project.title} href={project.link} target="_blank" rel="noopener noreferrer">
                  {content}
                </Link>
              ) : (
                <div key={project.title}>{content}</div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Research Metrics */}
      <section className="py-16 md:py-24">
        <div className="container px-4 md:px-6 mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Research Impact</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "3", label: "Published Papers" },
              { value: "2", label: "Under Review" },
              { value: "5+", label: "Projects Built" },
              { value: "9.27", label: "GPA" },
            ].map((stat) => (
              <Card
                key={stat.label}
                className="p-6 bg-gray-900/50 border-gray-800 hover:border-purple-500 transition-all text-center"
              >
                <h3 className="text-3xl font-bold text-purple-500 mb-2">{stat.value}</h3>
                <p className="text-gray-300">{stat.label}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section className="py-20 md:py-28 bg-black/50" id="publications">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex items-center justify-center gap-3 mb-16">
            <FileText className="w-8 h-8 text-purple-500" />
            <h2 className="text-3xl md:text-4xl font-bold text-center">Publications</h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-10">
            <div>
              <h3 className="text-xl font-semibold mb-6 text-purple-500">First Author</h3>
              <div className="space-y-6">
                {firstAuthorPubs.map((pub) => (
                  <PublicationCard key={pub.title} pub={pub} />
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-6 text-cyan-500">Co-Author</h3>
              <div className="space-y-6">
                {coAuthorPubs.map((pub) => (
                  <PublicationCard key={pub.title} pub={pub} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications & Achievements */}
      <section className="py-20 md:py-28">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
            <Card className="p-8 bg-gray-900/50 border-gray-800">
              <div className="flex items-center gap-3 mb-6">
                <Award className="w-7 h-7 text-cyan-500" />
                <h3 className="text-2xl font-bold">Certifications</h3>
              </div>
              <ul className="space-y-3">
                {certifications.map((c) => (
                  <li key={c} className="flex items-start gap-2 text-gray-300">
                    <ChevronRight className="w-5 h-5 text-cyan-500 mt-0.5 shrink-0" />
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </Card>

            <Card className="p-8 bg-gray-900/50 border-gray-800">
              <div className="flex items-center gap-3 mb-6">
                <Award className="w-7 h-7 text-purple-500" />
                <h3 className="text-2xl font-bold">Achievements</h3>
              </div>
              <ul className="space-y-3">
                {achievements.map((a) => (
                  <li key={a} className="flex items-start gap-2 text-gray-300">
                    <ChevronRight className="w-5 h-5 text-purple-500 mt-0.5 shrink-0" />
                    <span>{a}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 md:py-28 bg-black/50" id="contact">
        <div className="container px-4 md:px-6 mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Get In Touch</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Interested in collaborating on AI/ML projects or research? Let&apos;s connect and discuss how we can work
            together.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="https://github.com/rayeanpatric" target="_blank">
              <Button variant="outline" size="lg" className="gap-2 hover:bg-purple-500 hover:text-white transition-all">
                <Github className="w-5 h-5" />
                GitHub
              </Button>
            </Link>
            <Link href="https://linkedin.com/in/rayeanpatric" target="_blank">
              <Button variant="outline" size="lg" className="gap-2 hover:bg-cyan-500 hover:text-white transition-all">
                <Linkedin className="w-5 h-5" />
                LinkedIn
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-800">
        <div className="container px-4 md:px-6 mx-auto text-center text-gray-400">
          <p>© {new Date().getFullYear()} Rayean Patric F. All rights reserved.</p>
        </div>
      </footer>
      </div>
    </div>
  )
}

function PublicationCard({
  pub,
}: {
  pub: {
    title: string
    authors: string
    venue: string
    contribution: string
    status: string
    link: string | null
  }
}) {
  const inner = (
    <Card className="p-6 md:p-8 bg-gray-900/50 border-gray-800 hover:border-purple-500 transition-all group h-full">
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-3 mb-3">
        <h4 className="text-lg font-bold leading-snug">{pub.title}</h4>
        <Badge
          variant="secondary"
          className={pub.status === "Published" ? "text-cyan-500 shrink-0" : "text-purple-500 shrink-0"}
        >
          {pub.status}
        </Badge>
      </div>
      <p className="text-sm text-gray-300 mb-1">{pub.authors}</p>
      <p className="text-sm text-gray-400 mb-3">{pub.venue}</p>
      <p className="text-sm text-gray-500 italic mb-2">Contribution: {pub.contribution}</p>
      {pub.link && (
        <span className="inline-flex items-center gap-1 text-sm text-cyan-500">
          Read paper <ExternalLink className="w-4 h-4" />
        </span>
      )}
    </Card>
  )

  return pub.link ? (
    <Link href={pub.link} target="_blank" rel="noopener noreferrer" className="block">
      {inner}
    </Link>
  ) : (
    inner
  )
}
