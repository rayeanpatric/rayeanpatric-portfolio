"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Github, Linkedin, Mail, ExternalLink, ChevronRight, Brain, Code, Database } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import ParticleBackground from "../components/particle-background"

export default function Page() {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Floating Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-black/80 backdrop-blur-md" : "bg-transparent"
        }`}
      >
        <div className="container px-4 md:px-6 mx-auto h-16 flex items-center justify-between">
          <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500">
            RP
          </span>
          <div className="flex gap-6">
            {["About", "Experience", "Projects", "Research", "Contact"].map((item) => (
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
        <ParticleBackground />
        <div className="absolute inset-0 z-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-02-21%20at%2011.26.56%20PM-vef2xMiLRMLO70pBdflcUshRNs7eHT.jpeg"
            alt="Background"
            fill
            className="object-cover opacity-10"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black"></div>
        </div>

        <div className="container px-4 md:px-6 mx-auto relative z-10 grid lg:grid-cols-2 gap-8 items-center">
          <div className="text-center lg:text-left">
            <div className="mb-6 inline-flex flex-wrap gap-4">
              <Badge variant="outline" className="text-purple-500 border-purple-500">
                AI/ML Developer
              </Badge>
              <Badge variant="outline" className="text-purple-500 border-purple-500">
                Research & Development
              </Badge>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-cyan-500">
              Rayean Patric F
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Research & Development | AI/ML Specialist | IEEE Chairperson
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
              <a href="mailto:patricrayean@gmail.com">
                <Button
                  variant="outline"
                  size="lg"
                  className="gap-2 hover:bg-purple-500 hover:text-white transition-all"
                >
                  <Mail className="w-5 h-5" />
                  Contact
                </Button>
              </a>
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
                Driven Computer Science student specializing in Artificial Intelligence and Machine Learning, with a
                proven track record of developing scalable and innovative software solutions. Proficient in Python,
                JavaScript, and Unix/Linux environments, with hands-on expertise in AI/ML applications.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold mb-2">Education</h3>
                  <p className="text-sm text-gray-400">B.Tech in Computer Science (AI & ML)</p>
                  <p className="text-sm text-purple-500">CGPA: 9.12</p>
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
                  { skill: "Machine Learning", progress: 80 },
                  { skill: "Computer Vision", progress: 80 },
                  { skill: "Python Development", progress: 80 },
                  { skill: "Technical Leadership", progress: 90 },
                  { skill: "Scientific Writing", progress: 85 },
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
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 md:py-28" id="experience">
        <div className="container px-4 md:px-6 mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Experience</h2>
          <div className="max-w-4xl mx-auto space-y-8">
            <Card className="p-8 bg-gray-900/50 border-gray-800 hover:border-purple-500 transition-all">
              <div className="flex flex-col md:flex-row justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold">IEEE Chairperson</h3>
                  <p className="text-purple-500">SRM Institute of Science and Technology</p>
                </div>
                <p className="text-gray-400">January 2025 - Present</p>
              </div>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Leading IEEE Student Branch initiatives and technical activities</li>
                <li>Organizing workshops and conferences in emerging technologies</li>
                <li>Collaborating academia and industry</li>
              </ul>
            </Card>

            <Card className="p-8 bg-gray-900/50 border-gray-800 hover:border-purple-500 transition-all">
              <div className="flex flex-col md:flex-row justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold">Machine Learning Developer</h3>
                  <p className="text-purple-500">Ministry of Education</p>
                </div>
                <p className="text-gray-400">October 2024 - January 2025</p>
              </div>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Conducted in-depth data analysis on global innovation metrics</li>
                <li>Improved web platform performance and user experience</li>
                <li>Developed and implemented ML models for data analysis</li>
              </ul>
            </Card>

            <Card className="p-8 bg-gray-900/50 border-gray-800 hover:border-purple-500 transition-all">
              <div className="flex flex-col md:flex-row justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold">President</h3>
                  <p className="text-purple-500">FOSS Society</p>
                </div>
                <p className="text-gray-400">November 2023 - February 2025</p>
              </div>
              <ul className="list-disc list-inside text-gray-300 space-y-2">
                <li>Led 6+ major open-source technology initiatives</li>
                <li>Organized 8+ technical events and workshops</li>
                <li>Managed 20+ team members and developed a community.</li>
              </ul>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 md:py-28 bg-black/50" id="projects">
        <div className="container px-4 md:px-6 mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 bg-gray-900/50 border-gray-800 hover:border-purple-500 transition-all group">
              <Brain className="w-12 h-12 text-purple-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">A Plant Disease Diagnosis Tool + Agricultural AI Chatbot</h3>
              <p className="text-gray-300 mb-4">
                 An AI-powered web application designed for rapid plant disease diagnosis and intelligent agricultural query resolution.
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge>Python</Badge>
                <Badge>LLM</Badge>
                <Badge>Groq</Badge>
                <Badge>Huggingface</Badge>
              </div>
              <ChevronRight className="w-6 h-6 text-purple-500 opacity-0 group-hover:opacity-100 transition-opacity absolute bottom-4 right-4" />
            </Card>

            <Card className="p-6 bg-gray-900/50 border-gray-800 hover:border-purple-500 transition-all group">
              <Database className="w-12 h-12 text-cyan-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">NSFW Content Detection</h3>
              <p className="text-gray-300 mb-4">
                Comparative analysis of 10 models including EfficientNet, ResNet, and MobileNet for content moderation
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge>PyTorch</Badge>
                <Badge>TensorFlow</Badge>
                <Badge>Computer Vision</Badge>
              </div>
              <ChevronRight className="w-6 h-6 text-purple-500 opacity-0 group-hover:opacity-100 transition-opacity absolute bottom-4 right-4" />
            </Card>

            <Card className="p-6 bg-gray-900/50 border-gray-800 hover:border-purple-500 transition-all group">
              <Code className="w-12 h-12 text-purple-500 mb-4" />
              <h3 className="text-xl font-bold mb-2">Pest Detection System</h3>
              <p className="text-gray-300 mb-4">
                YOLO-based pest detection achieving 95% accuracy for precision agriculture applications
              </p>
              <div className="flex flex-wrap gap-2">
                <Badge>YOLO</Badge>
                <Badge>TensorRT</Badge>
                <Badge>Jetson Nano</Badge>
              </div>
              <ChevronRight className="w-6 h-6 text-purple-500 opacity-0 group-hover:opacity-100 transition-opacity absolute bottom-4 right-4" />
            </Card>
          </div>
        </div>
      </section>

      {/* Research Metrics */}
      <section className="py-16 md:py-24 bg-black/50">
        <div className="container px-4 md:px-6 mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Research Impact</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <Card className="p-6 bg-gray-900/50 border-gray-800 hover:border-purple-500 transition-all text-center">
              <h3 className="text-3xl font-bold text-purple-500 mb-2">2</h3>
              <p className="text-gray-300">Published Papers</p>
            </Card>
            <Card className="p-6 bg-gray-900/50 border-gray-800 hover:border-purple-500 transition-all text-center">
              <h3 className="text-3xl font-bold text-purple-500 mb-2">2</h3>
              <p className="text-gray-300">In Review</p>
            </Card>
            <Card className="p-6 bg-gray-900/50 border-gray-800 hover:border-purple-500 transition-all text-center">
              <h3 className="text-3xl font-bold text-purple-500 mb-2">2</h3>
              <p className="text-gray-300">Ongoing Projects</p>
            </Card>
            <Card className="p-6 bg-gray-900/50 border-gray-800 hover:border-purple-500 transition-all text-center">
              <h3 className="text-3xl font-bold text-purple-500 mb-2">3</h3>
              <p className="text-gray-300">Completed Projects</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Research & Publications */}
      <section className="py-20 md:py-28" id="research">
        <div className="container px-4 md:px-6 mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Research & Publications</h2>
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <Link
              href="https://www.cureusjournals.com/articles/191-review-of-various-integrative-approaches-to-cardiovascular-disease-and-covid-19-biomarkers-ai-and-natural-treatments#!/"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Card className="p-8 bg-gray-900/50 border-gray-800 hover:border-purple-500 transition-all">
                <Database className="w-12 h-12 text-purple-500 mb-4" />
                <h3 className="text-xl font-bold mb-4">Cardiovascular Disease and COVID-19 Research</h3>
                <p className="text-gray-300 mb-4">
                  Review of various Integrative Approaches to Cardiovascular Disease and COVID-19: Biomarkers, AI, and
                  Natural Treatments
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary">Published in Cureus</Badge>
                </div>
              </Card>
            </Link>

            <Link
              href="https://ieeexplore.ieee.org/document/10689810/"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
            >
              <Card className="p-8 bg-gray-900/50 border-gray-800 hover:border-purple-500 transition-all">
                <Database className="w-12 h-12 text-cyan-500 mb-4" />
                <h3 className="text-xl font-bold mb-4">Intelligent Vehicle Management System</h3>
                <p className="text-gray-300 mb-4">
                  IoT-based system for traffic rule enforcement and road safety improvement
                </p>
                <div className="space-y-2">
                  <Badge variant="secondary">Published in IEEE Xplore</Badge>
                </div>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 md:py-28 bg-black/50" id="contact">
        <div className="container px-4 md:px-6 mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Get In Touch</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Interested in collaborating on AI/ML projects or research? Let's connect and discuss how we can work
            together.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="mailto:patricrayean@gmail.com">
              <Button variant="outline" size="lg" className="gap-2 hover:bg-purple-500 hover:text-white transition-all">
                <Mail className="w-5 h-5" />
                patricrayean@gmail.com
              </Button>
            </a>
            <a href="tel:+918903847468">
              <Button variant="outline" size="lg" className="gap-2 hover:bg-cyan-500 hover:text-white transition-all">
                <ExternalLink className="w-5 h-5" />
                +91 8903847468
              </Button>
            </a>
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
  )
}
