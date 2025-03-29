const courseDetails = {
    "B.Tech Computer Science & Engineering (CSE)": {
      description: "Focuses on software and hardware development, algorithms, and computer programming.",
      eligibility: "10+2 with Physics, Chemistry, and Mathematics.",
      duration: "4 years",
      careerProspects: "Software Developer, Systems Analyst, AI Engineer.",
      government_college_cutoff: { min: 183, max: 200 },
      private_college_cutoff: { min: 150, max: 195 },
      source: "https://www.careers360.com/courses/b-tech-in-computer-engineering"
    },
    "B.Tech Information Technology (IT)": {
      description: "Covers networking, database management, and IT system security.",
      eligibility: "10+2 with Physics, Chemistry, and Mathematics.",
      duration: "4 years",
      careerProspects: "IT Consultant, System Administrator, Database Manager.",
      government_college_cutoff: { min: 159, max: 196.25 },
      private_college_cutoff: { min: 140, max: 190 }
    },
    "B.Tech Artificial Intelligence & Machine Learning (AI & ML)": {
      description: "Focuses on AI models, deep learning, and data-driven applications.",
      eligibility: "10+2 with Physics, Chemistry, and Mathematics.",
      duration: "4 years",
      careerProspects: "AI Engineer, Machine Learning Researcher, Data Scientist.",
      government_college_cutoff: { min: 160, max: 198 },
      private_college_cutoff: { min: 135, max: 185 }
    },
    "B.Tech Data Science": {
      description: "Involves statistical analysis, big data handling, and data visualization.",
      eligibility: "10+2 with Physics, Chemistry, and Mathematics.",
      duration: "4 years",
      careerProspects: "Data Analyst, Business Intelligence Engineer, Data Engineer.",
      government_college_cutoff: { min: 165, max: 198 },
      private_college_cutoff: { min: 140, max: 190 }
    },
    "B.Tech Cybersecurity": {
      description: "Covers ethical hacking, security systems, and digital forensics.",
      eligibility: "10+2 with Physics, Chemistry, and Mathematics.",
      duration: "4 years",
      careerProspects: "Cybersecurity Analyst, Penetration Tester, Security Engineer.",
      government_college_cutoff: { min: 162, max: 197 },
      private_college_cutoff: { min: 135, max: 185 }
    },
    "B.Tech Electronics & Communication Engineering (ECE)": {
      description: "Involves communication systems, semiconductor devices, and circuit design.",
      eligibility: "10+2 with Physics, Chemistry, and Mathematics.",
      duration: "4 years",
      careerProspects: "Electronics Engineer, Communication Engineer, IoT Specialist.",
      government_college_cutoff: { min: 185.75, max: 200 },
      private_college_cutoff: { min: 150, max: 195 }
    },
    "B.Tech Electrical & Electronics Engineering (EEE)": {
      description: "Focuses on electrical circuits, power systems, and automation.",
      eligibility: "10+2 with Physics, Chemistry, and Mathematics.",
      duration: "4 years",
      careerProspects: "Electrical Engineer, Power Systems Engineer, Automation Engineer.",
      government_college_cutoff: { min: 168.25, max: 199.67 },
      private_college_cutoff: { min: 145, max: 190 }
    },
    "B.Tech Mechanical Engineering": {
      description: "Covers thermodynamics, robotics, and design engineering.",
      eligibility: "10+2 with Physics, Chemistry, and Mathematics.",
      duration: "4 years",
      careerProspects: "Mechanical Engineer, Robotics Engineer, Design Engineer.",
      government_college_cutoff: { min: 194.25, max: 200 },
      private_college_cutoff: { min: 160, max: 195 }
    },
    "B.Tech Civil Engineering": {
      description: "Deals with construction, structural analysis, and urban planning.",
      eligibility: "10+2 with Physics, Chemistry, and Mathematics.",
      duration: "4 years",
      careerProspects: "Civil Engineer, Structural Engineer, Urban Planner.",
      government_college_cutoff: { min: 179, max: 199.25 },
      private_college_cutoff: { min: 150, max: 190 }
    },
    "B.Tech Biotechnology": {
      description: "Combines biology and technology to develop medical, agricultural, and industrial applications.",
      eligibility: "10+2 with Physics, Chemistry, and Biology/Mathematics.",
      duration: "4 years",
      careerProspects: "Biotechnologist, Research Scientist, Genetic Engineer.",
      government_college_cutoff: { min: 143, max: 193.25 },
      private_college_cutoff: { min: 120, max: 185 },
      source: "https://tnau.ac.in/b-tech-biotechnology/"
    },
    "B.Tech Food Technology": {
      description: "Deals with food processing, quality control, and food safety standards.",
      eligibility: "10+2 with Physics, Chemistry, and Biology/Mathematics.",
      duration: "4 years",
      careerProspects: "Food Technologist, Quality Assurance Officer, R&D Specialist.",
      government_college_cutoff: { min: 146.25, max: 194.75 },
      private_college_cutoff: { min: 130, max: 180 }
    },
    "B.Tech Environmental Engineering": {
      description: "Focuses on pollution control, waste management, and sustainable energy.",
      eligibility: "10+2 with Physics, Chemistry, and Mathematics.",
      duration: "4 years",
      careerProspects: "Environmental Engineer, Waste Management Specialist, Sustainability Consultant.",
      government_college_cutoff: { min: 149, max: 193 },
      private_college_cutoff: { min: 125, max: 175 }
    },
    "B.Tech Genetic Engineering": {
      description: "Covers DNA technology, genetic modification, and bioinformatics.",
      eligibility: "10+2 with Physics, Chemistry, and Biology/Mathematics.",
      duration: "4 years",
      careerProspects: "Genetic Engineer, Bioinformatics Specialist, Research Scientist.",
      government_college_cutoff: { min: 155, max: 192 },
      private_college_cutoff: { min: 130, max: 180 }
    },
    "B.Tech Agricultural Engineering": {
      description: "Deals with irrigation, soil conservation, and farm machinery.",
      eligibility: "10+2 with Physics, Chemistry, and Mathematics.",
      duration: "4 years",
      careerProspects: "Agricultural Engineer, Farm Machinery Specialist, Irrigation Consultant.",
      government_college_cutoff: { min: 143.5, max: 193 },
      private_college_cutoff: { min: 130, max: 180 }
    },
    "B.Tech Nanotechnology": {
      description: "Covers nanomaterials, nanoelectronics, and biomedical applications.",
      eligibility: "10+2 with Physics, Chemistry, and Mathematics.",
      duration: "4 years",
      careerProspects: "Nanotechnologist, Materials Scientist, Biomedical Engineer.",
      government_college_cutoff: { min: 150, max: 195 },
      private_college_cutoff: { min: 130, max: 180 }
    },
    "MBBS (Bachelor of Medicine & Bachelor of Surgery)": {
      description: "Professional medical degree required to become a doctor.",
      eligibility: "10+2 with PCB, NEET required.",
      duration: "5.5 years (including internship)",
      careerProspects: "Doctor, Surgeon, Medical Researcher.",
      cutoff: { min: 600, max: 720 },
      source: "https://www.mciindia.org/"
    },
    "BDS (Bachelor of Dental Surgery)": {
      description: "Degree to become a dentist, covering oral and dental healthcare.",
      eligibility: "10+2 with PCB, NEET required.",
      duration: "5 years",
      careerProspects: "Dentist, Oral Surgeon, Orthodontist.",
      cutoff: { min: 500, max: 650 },
      source: "https://dciindia.gov.in/"
    },
    "BAMS (Bachelor of Ayurvedic Medicine & Surgery)": {
      description: "Ayurvedic medical degree focusing on traditional healing methods.",
      eligibility: "10+2 with PCB, NEET required.",
      duration: "5.5 years (including internship)",
      careerProspects: "Ayurvedic Doctor, Herbal Consultant.",
      cutoff: { min: 400, max: 550 },
      source: "https://www.ccimindia.org/"
    },
    "BHMS (Bachelor of Homeopathic Medicine & Surgery)": {
      description: "Degree in homeopathic medicine, an alternative medical field.",
      eligibility: "10+2 with PCB, NEET required.",
      duration: "5.5 years",
      careerProspects: "Homeopathy Doctor, Alternative Medicine Practitioner.",
      cutoff: { min: 350, max: 500 },
      source: "https://www.nch.org.in/"
    },
    "BUMS (Bachelor of Unani Medicine & Surgery)": {
      description: "Degree focusing on Unani medicine and healing techniques.",
      eligibility: "10+2 with PCB, NEET required.",
      duration: "5.5 years",
      careerProspects: "Unani Doctor, Traditional Medicine Expert.",
      cutoff: { min: 300, max: 450 },
      source: "https://www.ccimindia.org/"
    },
    "BNYS (Bachelor of Naturopathy & Yogic Sciences)": {
      description: "Focuses on natural healing methods and yoga-based treatment.",
      eligibility: "10+2 with PCB.",
      duration: "5.5 years",
      careerProspects: "Naturopath, Yoga Therapist, Wellness Consultant.",
      cutoff: { min: 250, max: 400 },
      source: "https://www.yogatherapy.org/"
    },
    "BVSc (Bachelor of Veterinary Science & Animal Husbandry)": {
      description: "Veterinary degree focusing on animal healthcare and surgery.",
      eligibility: "10+2 with PCB, NEET required.",
      duration: "5.5 years",
      careerProspects: "Veterinary Doctor, Animal Surgeon.",
      cutoff: { min: 450, max: 600 },
      source: "https://www.vciindia.org/"
    },
  
    // Paramedical & Allied Health Courses
    "B.Sc Nursing": {
      description: "Prepares students for a career in patient care and hospital management.",
      eligibility: "10+2 with PCB.",
      duration: "4 years",
      careerProspects: "Registered Nurse, Hospital Administrator.",
      cutoff: { min: 350, max: 550 },
      source: "https://www.indiannursingcouncil.org/"
    },
    "B.Pharm (Bachelor of Pharmacy)": {
      description: "Focuses on pharmaceutical sciences, drug formulation, and dispensing.",
      eligibility: "10+2 with PCB or PCM.",
      duration: "4 years",
      careerProspects: "Pharmacist, Drug Inspector, Medical Representative.",
      cutoff: { min: 300, max: 500 },
      source: "https://www.pci.nic.in/"
    },
    "BPT (Bachelor of Physiotherapy)": {
      description: "Deals with physical rehabilitation, exercises, and therapy techniques.",
      eligibility: "10+2 with PCB.",
      duration: "4.5 years",
      careerProspects: "Physiotherapist, Rehabilitation Specialist.",
      cutoff: { min: 250, max: 450 },
      source: "https://www.iapindia.org/"
    },
    "BMLT (Bachelor in Medical Laboratory Technology)": {
      description: "Trains students in diagnostic testing and medical lab procedures.",
      eligibility: "10+2 with PCB.",
      duration: "3-4 years",
      careerProspects: "Lab Technician, Pathology Specialist.",
      cutoff: { min: 200, max: 400 },
      source: "https://www.aiims.edu/"
    },
    "B.Sc Radiology & Imaging Technology": {
      description: "Focuses on diagnostic imaging techniques such as X-ray, MRI, and CT scans.",
      eligibility: "10+2 with PCB.",
      duration: "3-4 years",
      careerProspects: "Radiology Technician, Imaging Specialist.",
      cutoff: { min: 250, max: 450 },
      source: "https://www.medicalradiology.org/"
    },
    "B.Sc Medical Lab Technology": {
      description: "Teaches medical laboratory procedures, diagnostic techniques, and pathology.",
      eligibility: "10+2 with PCB.",
      duration: "3-4 years",
      careerProspects: "Medical Lab Technician, Research Assistant.",
      cutoff: { min: 200, max: 400 },
      source: "https://www.aims.edu/"
    },
    "B.Sc Optometry": {
      description: "Focuses on eye care, vision correction, and optometry services.",
      eligibility: "10+2 with PCB.",
      duration: "4 years",
      careerProspects: "Optometrist, Vision Specialist.",
      cutoff: { min: 300, max: 500 },
      source: "https://www.optometrycouncil.org/"
    },
    "B.Sc Anesthesia Technology": {
      description: "Trains students to assist anesthesiologists in surgical procedures.",
      eligibility: "10+2 with PCB.",
      duration: "3-4 years",
      careerProspects: "Anesthesia Technologist, Operation Theater Assistant.",
      cutoff: { min: 250, max: 450 },
      source: "https://www.asahq.org/"
    },
    "B.Sc Forensic Science": {
      description: "Applies scientific principles in criminal investigations and legal cases.",
      eligibility: "10+2 with PCB or PCM.",
      duration: "3-4 years",
      careerProspects: "Forensic Scientist, Crime Scene Investigator.",
      cutoff: { min: 250, max: 450 },
      source: "https://www.nfsu.ac.in/"
    },
    "B.Sc Medical Biotechnology": {
      description: "Focuses on using biotechnology in medicine and pharmaceuticals.",
      eligibility: "10+2 with PCB.",
      duration: "3-4 years",
      careerProspects: "Biotechnologist, Genetic Researcher.",
      cutoff: { min: 300, max: 500 },
      source: "https://www.dbtindia.nic.in/"
    },
    "B.Sc Neuroscience": {
      description: "Studies brain function, neural disorders, and cognitive science.",
      eligibility: "10+2 with PCB.",
      duration: "3-4 years",
      careerProspects: "Neuroscientist, Clinical Researcher.",
      cutoff: { min: 350, max: 550 },
      source: "https://www.neuroscienceresearch.org/"
    },
    "B.Sc Nutrition & Dietetics": {
      description: "Focuses on food science, nutrition planning, and diet management.",
      eligibility: "10+2 with PCB or PCM.",
      duration: "3-4 years",
      careerProspects: "Dietitian, Nutritionist, Health Consultant.",
      cutoff: { min: 300, max: 500 },
      source: "https://www.idaindia.com/"
    },
    "B.Sc Biology": {
    description: "Fundamental study of living organisms.",
    eligibility: "10+2 with PCB.",
    duration: "3 years",
    careerProspects: "Research Scientist, Biologist, Lab Technician.",
    government_college_cutoff: { min: 350, max: 550 },
    private_college_cutoff: { min: 200, max: 400 }
  },
  "B.Sc Biotechnology": {
    description: "Application of biological science in industries and medicine.",
    eligibility: "10+2 with PCB/PCM.",
    duration: "3 years",
    careerProspects: "Biotechnologist, Lab Technician, R&D Scientist.",
    government_college_cutoff: { min: 400, max: 600 },
    private_college_cutoff: { min: 250, max: 500 }
  },
  "B.Sc Biochemistry": {
    description: "Study of chemical processes in living organisms.",
    eligibility: "10+2 with PCB/PCM.",
    duration: "3 years",
    careerProspects: "Biochemist, Clinical Researcher, Toxicologist.",
    government_college_cutoff: { min: 350, max: 550 },
    private_college_cutoff: { min: 200, max: 450 }
  },
  "B.Sc Microbiology": {
    description: "Study of microorganisms such as bacteria and viruses.",
    eligibility: "10+2 with PCB.",
    duration: "3 years",
    careerProspects: "Microbiologist, Medical Lab Technician, Researcher.",
    government_college_cutoff: { min: 400, max: 600 },
    private_college_cutoff: { min: 250, max: 500 }
  },
  "B.Sc Genetics": {
    description: "Study of genes, genetic variation, and heredity.",
    eligibility: "10+2 with PCB/PCM.",
    duration: "3 years",
    careerProspects: "Geneticist, Research Scientist, Lab Technician.",
    government_college_cutoff: { min: 400, max: 600 },
    private_college_cutoff: { min: 250, max: 500 }
  },
  "B.Sc Botany": {
    description: "Study of plants, their structure, and functions.",
    eligibility: "10+2 with PCB.",
    duration: "3 years",
    careerProspects: "Botanist, Ecologist, Horticulturist.",
    government_college_cutoff: { min: 350, max: 550 },
    private_college_cutoff: { min: 200, max: 450 }
  },
  "B.Sc Zoology": {
    description: "Study of animal biology, behavior, and physiology.",
    eligibility: "10+2 with PCB.",
    duration: "3 years",
    careerProspects: "Zoologist, Wildlife Biologist, Conservationist.",
    government_college_cutoff: { min: 350, max: 550 },
    private_college_cutoff: { min: 200, max: 450 }
  },
  "B.Sc Agriculture": {
    description: "Study of farming techniques, soil science, and crop production.",
    eligibility: "10+2 with PCB/PCM.",
    duration: "4 years",
    careerProspects: "Agricultural Scientist, Agronomist, Farm Manager.",
    government_college_cutoff: { min: 450, max: 650 },
    private_college_cutoff: { min: 300, max: 550 }
  },
  "B.Sc Forestry": {
    description: "Study of forest management, conservation, and wildlife.",
    eligibility: "10+2 with PCB/PCM.",
    duration: "4 years",
    careerProspects: "Forest Officer, Conservationist, Wildlife Researcher.",
    government_college_cutoff: { min: 400, max: 600 },
    private_college_cutoff: { min: 250, max: 500 }
  },
  "B.Sc Horticulture": {
    description: "Study of plant cultivation, gardening, and landscape management.",
    eligibility: "10+2 with PCB/PCM.",
    duration: "4 years",
    careerProspects: "Horticulturist, Nursery Manager, Landscape Designer.",
    government_college_cutoff: { min: 400, max: 600 },
    private_college_cutoff: { min: 250, max: 500 }
  },
  "B.Sc Fisheries Science": {
    description: "Study of fishery resources, aquaculture, and marine biology.",
    eligibility: "10+2 with PCB.",
    duration: "4 years",
    careerProspects: "Fisheries Biologist, Aquaculture Manager, Marine Scientist.",
    government_college_cutoff: { min: 400, max: 600 },
    private_college_cutoff: { min: 250, max: 500 }
  },
  "B.Sc Environmental Science": {
    description: "Study of environmental conservation and pollution control.",
    eligibility: "10+2 with PCB/PCM.",
    duration: "3 years",
    careerProspects: "Environmental Scientist, Sustainability Consultant, Ecologist.",
    government_college_cutoff: { min: 400, max: 600 },
    private_college_cutoff: { min: 250, max: 500 }
  },
  "B.Sc Food Science & Technology": {
    description: "Study of food processing, quality control, and safety.",
    eligibility: "10+2 with PCB/PCM.",
    duration: "3 years",
    careerProspects: "Food Technologist, Quality Assurance Manager, R&D Specialist.",
    government_college_cutoff: { min: 400, max: 600 },
    private_college_cutoff: { min: 250, max: 500 }
  },
 "B.A. Psychology": {
    description: "Study of human behavior, mental processes, and therapy.",
    eligibility: "10+2 in any stream.",
    duration: "3 years",
    careerProspects: "Psychologist, Counselor, HR Specialist."
  },
  "B.A. Sociology": {
    description: "Study of society, social behavior, and culture.",
    eligibility: "10+2 in any stream.",
    duration: "3 years",
    careerProspects: "Sociologist, Social Worker, Policy Analyst."
  },
  "B.A. Political Science": {
    description: "Study of government, politics, and international relations.",
    eligibility: "10+2 in any stream.",
    duration: "3 years",
    careerProspects: "Political Analyst, Civil Services, Public Administration."
  },
  "B.A. Public Administration": {
    description: "Study of governance, policies, and administration.",
    eligibility: "10+2 in any stream.",
    duration: "3 years",
    careerProspects: "Public Administrator, Civil Services, Policy Maker."
  },
  "B.A. History": {
    description: "Study of historical events, civilizations, and cultures.",
    eligibility: "10+2 in any stream.",
    duration: "3 years",
    careerProspects: "Historian, Archaeologist, Museum Curator."
  },

  // ⚖️ Law & Administration
  "BA LLB (Bachelor of Arts & Bachelor of Law)": {
    description: "Integrated law course combining humanities and legal studies.",
    eligibility: "10+2 in any stream, CLAT preferred.",
    duration: "5 years",
    careerProspects: "Lawyer, Judge, Legal Advisor."
  },
  "BBA LLB (Bachelor of Business Administration & Bachelor of Law)": {
    description: "Integrated law course with business and corporate law focus.",
    eligibility: "10+2 in any stream, CLAT preferred.",
    duration: "5 years",
    careerProspects: "Corporate Lawyer, Legal Consultant, Business Law Specialist."
  },
  "B.Sc Criminology & Forensic Science": {
    description: "Study of criminal behavior and forensic investigation techniques.",
    eligibility: "10+2 with PCB/PCM.",
    duration: "3 years",
    careerProspects: "Forensic Scientist, Crime Investigator, Law Enforcement Officer."
  },

  // 🏢 Management & Business
  "BBA (Bachelor of Business Administration)": {
    description: "Business management degree covering finance, HR, and marketing.",
    eligibility: "10+2 in any stream.",
    duration: "3 years",
    careerProspects: "Business Manager, Marketing Executive, HR Manager."
  },
  "BMS (Bachelor of Management Studies)": {
    description: "Study of business operations, strategy, and management.",
    eligibility: "10+2 in any stream.",
    duration: "3 years",
    careerProspects: "Business Analyst, Project Manager, Operations Executive."
  },
  "BHM (Bachelor of Hotel Management)": {
    description: "Hospitality and hotel industry management degree.",
    eligibility: "10+2 in any stream.",
    duration: "3 years",
    careerProspects: "Hotel Manager, Hospitality Consultant, Chef."
  },
  "B.Sc Tourism & Hospitality Management": {
    description: "Study of tourism industry, event planning, and hospitality.",
    eligibility: "10+2 in any stream.",
    duration: "3 years",
    careerProspects: "Tourism Manager, Travel Consultant, Event Planner."
  },

  // 🎥 Mass Media & Communication
  "B.A. Journalism & Mass Communication": {
    description: "Study of news reporting, media, and communication strategies.",
    eligibility: "10+2 in any stream.",
    duration: "3 years",
    careerProspects: "Journalist, News Anchor, PR Officer."
  },
  "B.A. Visual Communication": {
    description: "Study of media production, design, and visual storytelling.",
    eligibility: "10+2 in any stream.",
    duration: "3 years",
    careerProspects: "Graphic Designer, Media Producer, Content Creator."
  },
  "B.A. Film & TV Production": {
    description: "Study of filmmaking, television production, and cinematography.",
    eligibility: "10+2 in any stream.",
    duration: "3 years",
    careerProspects: "Film Director, Cinematographer, Producer."
  },
  "B.A. Advertising & Public Relations": {
    description: "Study of marketing, branding, and corporate communication.",
    eligibility: "10+2 in any stream.",
    duration: "3 years",
    careerProspects: "PR Specialist, Marketing Executive, Brand Manager."
  },
  "B.Sc Neuroscience": {
    description: "Study of the nervous system and brain function.",
    eligibility: "10+2 with PCB.",
    duration: "3 years",
    careerProspects: "Neuroscientist, Researcher, Neurotechnologist."
  },
  "B.Sc Computational Biology": {
    description: "Combination of biology, mathematics, and computer science to analyze biological data.",
    eligibility: "10+2 with PCM/PCB.",
    duration: "3 years",
    careerProspects: "Bioinformatician, Data Scientist, Computational Biologist."
  },
  "B.Sc Bioinformatics": {
    description: "Study of biological data using computational tools and analysis.",
    eligibility: "10+2 with PCM/PCB.",
    duration: "3 years",
    careerProspects: "Bioinformatician, Genomics Analyst, Research Scientist."
  },
  "B.Sc Data Science": {
    description: "Study of big data, machine learning, and analytics.",
    eligibility: "10+2 with PCM.",
    duration: "3 years",
    careerProspects: "Data Scientist, AI Engineer, Business Analyst."
  },
  "B.Sc Statistics": {
    description: "Study of statistical methods, probability, and data analysis.",
    eligibility: "10+2 with PCM.",
    duration: "3 years",
    careerProspects: "Statistician, Data Analyst, Risk Manager."
  },
  "B.Sc Cyber Forensics": {
    description: "Study of digital crime investigation and cybersecurity.",
    eligibility: "10+2 with PCM.",
    duration: "3 years",
    careerProspects: "Cybersecurity Analyst, Forensic Investigator, Ethical Hacker."
  },
  "B.Sc Artificial Intelligence": {
    description: "Study of AI algorithms, machine learning, and automation.",
    eligibility: "10+2 with PCM.",
    duration: "3 years",
    careerProspects: "AI Engineer, Data Scientist, Robotics Developer."
  },

  // 🎨 Design & Creativity
  "B.Des (Bachelor of Design)": {
    description: "Specialized design degree in fashion, interior, or graphic design.",
    eligibility: "10+2 in any stream, design entrance exam preferred.",
    duration: "4 years",
    careerProspects: "Fashion Designer, Interior Designer, Graphic Designer."
  },
    "Computer & IT Related": {
      "B.Tech Computer Science & Engineering (CSE)": {
        "description": "Focuses on computing technologies, programming, and software development.",
        "eligibility": "10+2 with PCM (Physics, Chemistry, Mathematics).",
        "duration": "4 years",
        "careerProspects": "Software Developer, Data Scientist, AI Engineer, Cybersecurity Expert."
      },
      "B.Tech Information Technology (IT)": {
        "description": "Focuses on IT infrastructure, networking, and software development.",
        "eligibility": "10+2 with PCM.",
        "duration": "4 years",
        "careerProspects": "IT Manager, Network Engineer, Software Developer."
      },
      "B.Tech Artificial Intelligence & Machine Learning (AI & ML)": {
        "description": "Specialized engineering course focused on AI models, ML algorithms, and deep learning.",
        "eligibility": "10+2 with PCM, entrance exam required.",
        "duration": "4 years",
        "careerProspects": "AI Engineer, Data Scientist, Research Analyst."
      },
      "B.Tech Data Science": {
        "description": "Engineering degree focused on big data analytics, statistics, and predictive modeling.",
        "eligibility": "10+2 with PCM, entrance exam required.",
        "duration": "4 years",
        "careerProspects": "Data Analyst, Data Scientist, AI Engineer."
      },
      "B.Tech Cyber Security": {
        "description": "Focuses on cybersecurity principles, ethical hacking, and digital forensics.",
        "eligibility": "10+2 with PCM.",
        "duration": "4 years",
        "careerProspects": "Cybersecurity Analyst, Ethical Hacker, Security Consultant."
      },
      "B.Tech Software Engineering": {
        "description": "Emphasizes software development, testing, and project management.",
        "eligibility": "10+2 with PCM.",
        "duration": "4 years",
        "careerProspects": "Software Developer, System Analyst, DevOps Engineer."
      },
      "B.Tech Cloud Computing": {
        "description": "Focuses on cloud technologies, virtualization, and distributed computing.",
        "eligibility": "10+2 with PCM.",
        "duration": "4 years",
        "careerProspects": "Cloud Engineer, DevOps Engineer, IT Consultant."
      },
      "B.Tech Blockchain Technology": {
        "description": "Specialized engineering program on blockchain, cryptocurrencies, and decentralized networks.",
        "eligibility": "10+2 with PCM.",
        "duration": "4 years",
        "careerProspects": "Blockchain Developer, Crypto Analyst, Smart Contract Engineer."
      },
      "B.Tech Internet of Things (IoT)": {
        "description": "Covers IoT devices, sensor networks, and embedded systems.",
        "eligibility": "10+2 with PCM.",
        "duration": "4 years",
        "careerProspects": "IoT Developer, Embedded Systems Engineer, Automation Expert."
      },
      "B.Tech Robotics & Automation": {
        "description": "Specialization in robotics, automation, and control systems.",
        "eligibility": "10+2 with PCM.",
        "duration": "4 years",
        "careerProspects": "Robotics Engineer, Automation Specialist, AI Researcher."
      }
    },
    "Core Engineering Fields": {
      "B.Tech Electronics & Communication Engineering (ECE)": {
        "description": "Covers electronics, telecommunications, and embedded systems.",
        "eligibility": "10+2 with PCM.",
        "duration": "4 years",
        "careerProspects": "Telecom Engineer, Embedded Systems Developer, Network Engineer."
      },
      "B.Tech Electrical & Electronics Engineering (EEE)": {
        "description": "Focuses on electrical circuits, power systems, and automation.",
        "eligibility": "10+2 with PCM.",
        "duration": "4 years",
        "careerProspects": "Electrical Engineer, Power Systems Analyst, Renewable Energy Specialist."
      },
      "B.Tech Mechanical Engineering": {
        "description": "Covers mechanical design, thermodynamics, and manufacturing processes.",
        "eligibility": "10+2 with PCM.",
        "duration": "4 years",
        "careerProspects": "Mechanical Engineer, Automotive Engineer, Product Designer."
      },
      "B.Tech Civil Engineering": {
        "description": "Focuses on construction, infrastructure, and structural analysis.",
        "eligibility": "10+2 with PCM.",
        "duration": "4 years",
        "careerProspects": "Civil Engineer, Structural Engineer, Urban Planner."
      }
    },
    "Pure Science Courses (B.Sc / BCA)": {
      "B.Sc Computer Science": {
        "description": "Covers computing, algorithms, and programming languages.",
        "eligibility": "10+2 with Mathematics or Computer Science.",
        "duration": "3 years",
        "careerProspects": "Software Engineer, Web Developer, Cybersecurity Expert."
      },
      "B.Sc Artificial Intelligence & Data Science": {
        "description": "Study of AI concepts, data handling, and analytics techniques.",
        "eligibility": "10+2 with PCM or Computer Science.",
        "duration": "3 years",
        "careerProspects": "AI Developer, Data Analyst, Research Scientist."
      },
      "BCA (Bachelor of Computer Applications)": {
        "description": "IT-focused degree covering programming, databases, and software applications.",
        "eligibility": "10+2 with Mathematics or Computer Science.",
        "duration": "3 years",
        "careerProspects": "Software Developer, IT Analyst, System Administrator."
      }
    },
    "Commerce & Business Courses": {
      "B.Com (Bachelor of Commerce)": {
        "description": "Comprehensive commerce degree covering finance, accounting, and taxation.",
        "eligibility": "10+2 in Commerce or any stream.",
        "duration": "3 years",
        "careerProspects": "Accountant, Tax Consultant, Financial Analyst."
      },
      "BBA (Bachelor of Business Administration)": {
        "description": "Management-focused course covering business strategies, marketing, and entrepreneurship.",
        "eligibility": "10+2 in any stream.",
        "duration": "3 years",
        "careerProspects": "Business Manager, Marketing Executive, HR Specialist."
      }
    },
    "Arts & Humanities Courses": {
      "BA LLB (Bachelor of Arts & Bachelor of Law)": {
        "description": "Dual-degree in law and arts, combining humanities and legal studies.",
        "eligibility": "10+2 in any stream, entrance exam preferred.",
        "duration": "5 years",
        "careerProspects": "Corporate Lawyer, Civil Advocate, Legal Advisor."
      },
      "B.A. Journalism & Mass Communication": {
        "description": "Focuses on media studies, news reporting, and public relations.",
        "eligibility": "10+2 in any stream.",
        "duration": "3 years",
        "careerProspects": "Journalist, Content Writer, Media Manager."
      }
    },
    "Design, Fashion & Creative Courses": {
      "B.Des (Bachelor of Design)": {
        "description": "Specialized design degree in fashion, interior, or graphic design.",
        "eligibility": "10+2 in any stream, design entrance exam preferred.",
        "duration": "4 years",
        "careerProspects": "Fashion Designer, Interior Designer, Graphic Designer."
      },
      "B.Sc Animation & Multimedia": {
        "description": "Focuses on animation, VFX, and digital media design.",
        "eligibility": "10+2 in any stream.",
        "duration": "3 years",
        "careerProspects": "Animator, Game Designer, VFX Artist."
      }
    },
    "Aviation, Defense & Other Courses": {
      "B.Sc Aviation": {
        "description": "Degree for students interested in aviation, pilot training, and airline jobs.",
        "eligibility": "10+2 with PCM.",
        "duration": "3 years",
        "careerProspects": "Pilot, Air Traffic Controller, Aviation Manager."
      },
      "B.Tech Defense Technology": {
        "description": "Engineering degree focused on defense and military technology.",
        "eligibility": "10+2 with PCM, entrance exam required.",
        "duration": "4 years",
        "careerProspects": "Defense Engineer, Aerospace Scientist, DRDO Scientist."
      }
    }
    
  };
  
  export default courseDetails;
  