import React, { useState, useEffect } from 'react';
import './App.css';

const Portfolio = () => {
  const [isVisible, setIsVisible] = useState({});
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(prev => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const aiProjects = [
    {
      title: "EMG Signal Preprocessing and Feature Extraction",
      description: "Developed robust EMG preprocessing pipelines including filtering, segmentation, normalization, and artifact handling for multi-channel speech recognition datasets.",
      tech: ["EMG Preprocessing", "Signal Conditioning", "Feature Extraction", "Quality Control"],
      featured: true
    },
    {
      title: "Signal Processing Front-Ends for EMG Speech Recognition",
      description: "Evaluated time–frequency and wavelet-based front-end representations to assess their effect on temporal stability and downstream sequence learning.",
      tech: ["Time–Frequency Analysis", "Wavelet Scattering", "MFSC", "Representation Learning"],
      featured: true
    },
    {
      title: "Subject-Independent Deep Learning Evaluation",
      description: "Designed training and evaluation protocols focused on cross-subject generalization, targeting robust performance for unseen users with substantial inter-subject variability.",
      tech: ["Cross-Subject Training", "Sequence Modeling", "Generalization", "Deep Learning"],
      featured: true
    },
    {
      title: "Academic Documentation and Manuscript Preparation",
      description: "Contributed to reproducible experimental documentation, method reporting, and results analysis for peer-reviewed conference and journal manuscript submissions.",
      tech: ["Experiment Design", "Ablation Analysis", "Reproducibility", "Scientific Writing"],
      featured: true
    }
  ];

  const dataProjects = [
    {
      title: "J. Matouq, O. Abulayla, R. N. Khushaba, and A. Al-Jumaily, “Sentence-level Speech Recognition Performance for EMG and Audio+EMG Fusion,” IEEE Engineering in Medicine and Biology Conference (EMBC), 2026 (Submitted).",
      description: "IEEE-style citation",
      tech: ["Submitted"]
    },
    {
      title: "R. N. Khushaba, O. Abulayla, J. Matouq, and A. Al-Jumaily, “A Robust Wavelet Scattering Front-End for Cross-Subject EMG-Based Speech Recognition,” IEEE Engineering in Medicine and Biology Conference (EMBC), 2026 (Submitted).",
      description: "IEEE-style citation",
      tech: ["Submitted"]
    },
    {
      title: "J. Matouq, O. Abulayla, R. N. Khushaba, “Benchmarking MFSC and Wavelet Scattering Feature Representations for EMG-Based Speech Recognition,” IEEE Transactions, 2026 (In Progress).",
      description: "IEEE-style citation",
      tech: ["In Progress"]
    }
  ];

  const skills = [
    { name: "Signal Processing", icon: "📶" },
    { name: "EMG Preprocessing", icon: "🧪" },
    { name: "Feature Extraction", icon: "🔍" },
    { name: "Time–Frequency Analysis", icon: "📊" },
    { name: "Wavelet-Based Front-Ends", icon: "🌊" },
    { name: "Deep Learning for Time-Series", icon: "🧠" },
    { name: "Sequence Modeling", icon: "⏱️" },
    { name: "Transformer Architectures", icon: "🤖" },
    { name: "Subject-Independent Training", icon: "👥" },
    { name: "Cross-Subject Evaluation", icon: "📈" },
    { name: "Python, NumPy, Pandas, PyTorch", icon: "🐍" },
    { name: "Jupyter, Git, LaTeX", icon: "📝" }
  ];

  const navItems = [
    { label: 'Research Summary', id: 'about' },
    { label: 'Technical Skills', id: 'skills' },
    { label: 'Research', id: 'projects' },
    { label: 'Contact', id: 'contact' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-semibold text-gray-900">Omar Abu Layla</div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-[#e8f5e9] rounded-full transition-all duration-300"
                >
                  {item.label}
                </button>
              ))}
              <a
                href="https://drive.google.com/file/d/1alHT7O3X6p2NCR_BzTwhz2fY-3_oX_Aa/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 bg-[#34a853] text-white text-sm font-medium rounded-full hover:bg-[#2d8f47] transition-all duration-300 transform hover:scale-105"
              >
                Download CV
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-[#e8f5e9] transition-all duration-300"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  {isMobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-gray-100">
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      scrollToSection(item.id);
                      setIsMobileMenuOpen(false);
                    }}
                    className="block w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-[#e8f5e9] rounded-md transition-all duration-300"
                  >
                    {item.label}
                  </button>
                ))}
                <a
                  href="https://drive.google.com/file/d/1alHT7O3X6p2NCR_BzTwhz2fY-3_oX_Aa/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center px-3 py-2 mt-4 bg-[#34a853] text-white font-medium rounded-md hover:bg-[#2d8f47] transition-all duration-300"
                >
                  Download CV
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-5"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1644325349124-d1756b79dd42)'
          }}
        ></div>
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <div className="mb-8">
            <img
              src="https://omarabulayla.github.io/portfolio_old/pics/Omar2.png"
              alt="Omar Abu Layla"
              className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto mb-8 border-4 border-[#e8f5e9] shadow-lg"
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-light text-gray-900 mb-4 animate-fade-in">
            Omar Abu Layla
          </h1>
          <h2 className="text-2xl md:text-3xl font-light text-gray-600 mb-6 animate-fade-in-delay-1">
            Research Assistant | Biomedical Signal Processing & Deep Learning
          </h2>
          <p className="text-lg md:text-xl text-gray-500 mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in-delay-2">
            Developing robust EMG-based speech recognition systems using signal processing and deep learning.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay-3">
            <button
              onClick={() => scrollToSection('projects')}
              className="px-8 py-4 bg-[#34a853] text-white font-medium rounded-full hover:bg-[#2d8f47] transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              View Research
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 border-2 border-gray-300 text-gray-700 font-medium rounded-full hover:border-[#34a853] hover:text-[#34a853] transition-all duration-300"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`py-20 ${isVisible.about ? 'animate-fade-in-up' : 'opacity-0'}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">Research Summary</h2>
            <div className="w-20 h-1 bg-[#34a853] mx-auto"></div>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-[#e8f5e9] to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-[#34a853]/20">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-[#34a853] rounded-full flex items-center justify-center mr-4">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-gray-900">Research Focus</h3>
              </div>
              
              <p className="text-gray-600 leading-relaxed mb-6">
                My research focuses on EMG-based speech recognition, with an emphasis on developing robust signal processing pipelines that integrate time–frequency and wavelet-based feature representations with deep learning architectures.
              </p>
              
              <div className="bg-white p-6 rounded-xl mb-6">
                <h4 className="font-semibold text-gray-900 mb-3">Research Themes:</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>• Biomedical signal processing and multi-channel EMG analysis</li>
                  <li>• Deep learning for time-series and sequence modeling</li>
                  <li>• Cross-subject (subject-independent) generalization</li>
                  <li>• Assistive technologies and human–machine interaction systems</li>
                </ul>
              </div>
              
              <p className="text-gray-600 leading-relaxed">
                A central objective of this work is improving cross-subject (subject-independent) generalization, addressing the significant variability inherent in multi-channel biomedical signals. Rather than treating deep learning models as black boxes, my work examines how representation design influences temporal stability, learning dynamics, and generalization performance, with relevance to assistive technologies and human–machine interaction systems.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className={`py-20 bg-gray-50 ${isVisible.skills ? 'animate-fade-in-up' : 'opacity-0'}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">Technical Skills</h2>
            <div className="w-20 h-1 bg-[#34a853] mx-auto"></div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className="bg-gradient-to-br from-[#e8f5e9] to-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 border border-[#34a853]/20"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="flex items-center">
                  <div className="text-2xl mr-3">{skill.icon}</div>
                  <div>
                    <h3 className="text-sm font-semibold text-gray-900">{skill.name}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={`py-20 ${isVisible.projects ? 'animate-fade-in-up' : 'opacity-0'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">Research Experience & Publications</h2>
            <div className="w-20 h-1 bg-[#34a853] mx-auto"></div>
          </div>

          {/* Featured AI Projects */}
          <div className="mb-20">
            <h3 className="text-2xl font-medium text-gray-900 mb-8 text-center">Research Experience</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {aiProjects.map((project, index) => (
                <div
                  key={project.title}
                  className="bg-gradient-to-br from-[#e8f5e9] to-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-[#34a853]/20"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-[#34a853] rounded-full flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                      </svg>
                    </div>
                    <h4 className="text-xl font-semibold text-gray-900">{project.title}</h4>
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-white text-[#34a853] text-sm font-medium rounded-full border border-[#34a853]/30">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Data Science Projects */}
          <div>
            <h3 className="text-2xl font-medium text-gray-900 mb-8 text-center">Publications</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {dataProjects.map((project, index) => (
                <div
                  key={project.title}
                  className="bg-gradient-to-br from-blue-50 to-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-blue-200"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                      </svg>
                    </div>
                    <h4 className="text-lg font-semibold text-gray-900">{project.title}</h4>
                  </div>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-white text-blue-600 text-xs font-medium rounded-full border border-blue-200">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
            <p className="text-gray-600 mt-8 text-center leading-relaxed">
              Manuscripts are under review or in preparation. Preprints are available upon request.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-20 bg-gray-50 ${isVisible.contact ? 'animate-fade-in-up' : 'opacity-0'}`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">Contact</h2>
          <div className="w-20 h-1 bg-[#34a853] mx-auto mb-8"></div>
          <p className="text-xl text-gray-600 mb-12 leading-relaxed">
            I welcome discussions on PhD opportunities and collaborative research in biomedical signal processing, EMG-based speech recognition, and deep learning.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="mailto:O.Abulayla@outlook.com"
              className="px-8 py-4 bg-[#34a853] text-white font-medium rounded-full hover:bg-[#2d8f47] transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Send Email
            </a>
            <a
              href="https://www.linkedin.com/in/omar-abulayla/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border-2 border-[#34a853] text-[#34a853] font-medium rounded-full hover:bg-[#34a853] hover:text-white transition-all duration-300"
            >
              LinkedIn Profile
            </a>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-gray-500">
              Email: <span className="font-medium">O.Abulayla@outlook.com</span>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
