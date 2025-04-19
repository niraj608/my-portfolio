import React, { useState, useEffect } from 'react';
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Award,
  Briefcase,
  Code,
  User,
  ChevronDown,
  BookOpen,
  Terminal,
  Globe,
  FileText,
  Phone,
  MessageSquare,
  Menu,
  X,
} from 'lucide-react';

function App() {
  const [activeSection, setActiveSection] = useState('about');
  const [isVisible, setIsVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const projects = [
    {
      title: 'StockSense',
      description:
        'Scraped data from Moneycontrol and Zerodha to provide real-time financial insights. Integrated RAG-based AI using LangChain and Pinecone for intelligent market analysis.',
      tech: ['Python', 'Django', 'React', 'Scrapy'],
      status: 'Present Work',
    },
    {
      title: 'ChaiBlogHub',
      description:
        'A dynamic web app for publishing thoughts and ideas. Features include user authentication, a rich text editor, and integration with Appwrite backend to ensure a secure and seamless blogging experience.',
      tech: ['React', 'Appwrite', 'TailwindCSS'],
      live: 'https://chaibloghub.netlify.app',
    },
    {
      title: 'PrepAI',
      description:
        'Developed a full-stack AI-powered platform for mock interview preparation. Ensured smooth integration between frontend and backend for optimal performance.',
      tech: ['Next.js', 'Drizzle ORM', 'Gemini AI', 'Clerk'],
      live: 'https://prep-ai-rust.vercel.app/',
    },
    {
      title: 'Sahayta AI',
      description:
        'AI-powered disaster management system to enhance emergency response efficiency. Implemented wildfire detection, drone-based victim search, and flood analysis using deep learning.',
      tech: ['Python', 'Streamlit', 'Geolocation APIs'],
      github: 'https://github.com/Niraj1608/Sahayta.ai',
      live: 'https://sahayta-ai.streamlit.app/',
    },
  ];

  const experience = [
    {
      company: 'Infodesk',
      position: 'Python Developer Intern',
      period: 'Jan 2025 – Present',
      description: [
        'Currently working on the RegIntel dashboard for Zyte website jobs.',
        'Scraped data from more than 900 websites during Scrapathon.',
        'Worked with CI/CD pipelines for deploying scraping tools and dashboards.',
        'Contributed to a full-stack Next.js application with monitoring tools integration.',
      ],
    },
    {
      company: 'Keshav Encon Pvt. Ltd.',
      position: 'Python Developer Intern',
      period: 'Jul 2024 – Dec 2024',
      description: [
        'Built a web scraper to extract job data from Naukri and LinkedIn.',
        'Integrated scraper with proxies and database for efficient data extraction and storage.',
      ],
    },
  ];

  const education = [
    {
      institution: 'The Maharaja Sayajirao University of Baroda',
      degree: 'B.E. in Computer Science and Engineering',
      cgpa: '8.16',
      location: 'Vadodara, Gujarat',
      duration: '2021 – Present',
    },
    {
      institution: 'Shree Narayan Vidhyalaya',
      degree: 'H.S.C. (12th Science)',
      percentage: '90.00%',
      location: 'Vadodara, Gujarat',
      duration: '2020 – 2021',
    },
  ];

  const achievements = [
    {
      title: 'Scrapathon 2025',
      date: 'Feb 2025',
      description:
        'Won 3 daily prizes and secured Second Runner-up overall at Infodesk.',
    },
    {
      title: 'Hackathon Winner: Eclipse Hacks',
      date: 'Oct 2024',
      description: 'Won 2nd Place for developing Sahayta AI on Devpost.',
    },
    {
      title: 'GirlScript Summer of Code 2024',
      date: 'Oct 2024 – Nov 2024',
      description:
        'Contributed to open-source projects and ranked 80 out of 3K+ participants.',
    },
    {
      title: 'Google Cloud Facilitator Program',
      date: 'Jul 2023 – Sep 2023',
      description:
        'Completed 30 skill badges and achieved the ultimate milestone.',
    },
  ];

  const socialLinks = {
    github: 'https://github.com/Niraj1608',
    linkedin: 'https://www.linkedin.com/in/niraj-parmar-531b5523a/',
    email: 'nirajprmr1608@gmail.com',
    whatsapp: 'https://wa.me/918732927543',
    phone: '+91 873-292-7543',
    leetcode: 'https://leetcode.com/u/Niraj1608/',
    resume:
      'https://drive.google.com/file/d/1tjw4621D8lqFqt18_f4XYCZNilHVJxL7/view?usp=sharing', //
  };

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Resume', href: socialLinks.resume, external: true },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Header/Nav */}
      <nav className="fixed w-full bg-gray-900/95 backdrop-blur-sm z-50 border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
              Niraj Parmar
            </span>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target={link.external ? '_blank' : '_self'}
                  rel={link.external ? 'noopener noreferrer' : ''}
                  className="hover:text-purple-400 transition-colors"
                  onClick={closeMenu}
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Mobile Navigation Button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="p-2 rounded-md text-gray-400 hover:text-white focus:outline-none"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-800 shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target={link.external ? '_blank' : '_self'}
                  rel={link.external ? 'noopener noreferrer' : ''}
                  className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 hover:text-purple-400 transition-colors"
                  onClick={closeMenu}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="about" className="pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div
            className={`transform transition-all duration-1000 ${
              isVisible
                ? 'translate-y-0 opacity-100'
                : 'translate-y-10 opacity-0'
            }`}
          >
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
              Hi, I'm Niraj Parmar
            </h1>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl">
              A passionate Computer Science student and Python Developer,
              specializing in web scraping and AI integration. Currently
              pursuing B.E. in Computer Science at MS University of Baroda.
            </p>
            <div className="flex space-x-4">
              <a
                href={socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:text-purple-400 transition-colors"
              >
                <Github />
              </a>
              <a
                href={socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:text-purple-400 transition-colors"
              >
                <Linkedin />
              </a>
              <a
                href={`mailto:${socialLinks.email}`}
                className="p-2 hover:text-purple-400 transition-colors"
              >
                <Mail />
              </a>
              <a
                href={socialLinks.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 hover:text-purple-400 transition-colors"
              >
                <MessageSquare />
              </a>
            </div>
          </div>
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ChevronDown className="text-gray-400" />
          </div>
        </div>
      </section>
      {/* Experience Section */}
      <section id="experience" className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 flex items-center">
            <Briefcase className="mr-2" /> Experience
          </h2>
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <div
                key={index}
                className="border-l-2 border-purple-500 pl-6 relative hover:transform hover:translate-x-2 transition-all duration-300"
              >
                <div className="absolute w-3 h-3 bg-purple-500 rounded-full -left-[7px] top-2"></div>
                <h3 className="text-xl font-semibold">{exp.position}</h3>
                <p className="text-purple-400">{exp.company}</p>
                <p className="text-gray-400">{exp.period}</p>
                <ul className="mt-2 list-disc list-inside text-gray-300">
                  {exp.description.map((desc, i) => (
                    <li key={i}>{desc}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-16 px-4 bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 flex items-center">
            <BookOpen className="mr-2" /> Education
          </h2>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-lg p-6 hover:transform hover:translate-y-[-4px] transition-all duration-300"
              >
                <h3 className="text-xl font-semibold mb-2">
                  {edu.institution}
                </h3>
                <p className="text-purple-400">{edu.degree}</p>
                <p className="text-gray-400">{edu.duration}</p>
                <p className="mt-2">
                  {edu.cgpa
                    ? `CGPA: ${edu.cgpa}`
                    : `Percentage: ${edu.percentage}`}{' '}
                  | {edu.location}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 px-4 bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 flex items-center">
            <Code className="mr-2" /> Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-lg p-6 hover:transform hover:scale-105 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-purple-900/30 rounded-full text-sm text-purple-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-purple-400 hover:text-purple-300"
                    >
                      <Github className="w-4 h-4 mr-1" /> Code
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-purple-400 hover:text-purple-300"
                    >
                      <Globe className="w-4 h-4 mr-1" /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-16 px-4 bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 flex items-center">
            <Award className="mr-2" /> Achievements
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-lg p-6 border border-gray-700 hover:border-purple-500 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold mb-2">
                  {achievement.title}
                </h3>
                <p className="text-purple-400 mb-2">{achievement.date}</p>
                <p className="text-gray-400">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-gray-800/50">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Get In Touch</h2>
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
            I'm currently seeking full-time opportunities as a fresher. If you
            have any exciting positions or would like to discuss potential
            collaborations, feel free to reach out!
          </p>
          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto mb-8">
            <a
              href={`mailto:${socialLinks.email}`}
              className="flex items-center justify-center px-6 py-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
            >
              <Mail className="mr-2" /> Email Me
            </a>
            <a
              href={socialLinks.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center px-6 py-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
            >
              <MessageSquare className="mr-2" /> WhatsApp
            </a>
          </div>
          <div className="flex justify-center space-x-6 mb-8">
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-400"
            >
              <Github size={24} />
            </a>
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-400"
            >
              <Linkedin size={24} />
            </a>
            <a
              href={socialLinks.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-purple-400"
            >
              <Code size={24} />
            </a>
          </div>
          <div className="text-gray-400">
            <p className="flex items-center justify-center">
              <Phone className="mr-2" /> {socialLinks.phone}
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-gray-800">
        <div className="max-w-7xl mx-auto text-center text-gray-400">
          <p>© 2025 Niraj Parmar. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
