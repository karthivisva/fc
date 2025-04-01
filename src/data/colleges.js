const colleges = [ 
      {
          title: "RP Sarathy Institute of Technology",
          subtitle: "Premier Technical College",
          description: "Known for its strong technical programs and research initiatives",
          link1: "https://www.rpsit.ac.in/",
          link2: "https://www.shiksha.com/"
        },
        {
          title: "Sona College of Technology",
          subtitle: "Leading Engineering Institution",
          description: "Famous for its innovative teaching methods and placements",
          link1: "https://www.sonatech.ac.in/",
          link2: "https://www.nirfindia.org/"
        },
        {
          title: "Paaval Group of Institutions",
          subtitle: "Reputed Engineering College",
          description: "Offers quality education in engineering with a strong focus on industry connections",
          link1: "https://www.paaval.edu.in/",
          link2: "https://www.shiksha.com/"
        },
        {
          title: "Mahendra Group of Institutions",
          subtitle: "Emerging Multi-Disciplinary Institute",
          description: "Provides courses in engineering, management, and applied sciences",
          link1: "https://www.mahendragroup.edu.in/",
          link2: "https://www.nirfindia.org/"
        },
        {
          title: "Muthayammal Engineering College",
          subtitle: "Top Private Engineering College",
          description: "Offers quality education in various engineering disciplines",
          link1: "https://www.muthayammal.edu.in/",
          link2: "https://www.shiksha.com/"
        },
        {
          title: "Annapoorana Engineering College & Medical",
          subtitle: "Renowned Educational Institution",
          description: "Offers a wide range of courses in engineering and medical fields",
          link1: "https://www.annapoorana.edu.in/",
          link2: "https://www.nirfindia.org/"
        },
        {
          title: "Gnanamani Group of Institutions",
          subtitle: "Leading Educational Group",
          description: "Known for its comprehensive technical and medical education programs",
          link1: "https://www.gnanamani.edu.in/",
          link2: "https://www.shiksha.com/"
        },
        {
          title: "Excel Group of Institutions",
          subtitle: "Top Educational Group",
          description: "Offers a diverse range of courses with a focus on industry relevance",
          link1: "https://www.excel.edu.in/",
          link2: "https://www.nirfindia.org/"
        },
        {
          title: "KSR Group of Institutions",
          subtitle: "Reputed Engineering & Management Institution",
          description: "Offers cutting-edge education and research opportunities",
          link1: "https://www.ksr.edu.in/",
          link2: "https://www.shiksha.com/"
        },
        {
          title: "Salem College of Engineering & Technology",
          subtitle: "Emerging Engineering College",
          description: "Provides quality education with a strong focus on placement support",
          link1: "https://www.salemcet.edu.in/",
          link2: "https://www.nirfindia.org/"
        },
        {
          title: "Ganesh Group of Institutions",
          subtitle: "Premier Technical Institution",
          description: "Offers UG and PG programs in engineering and technology fields",
          link1: "https://www.ganeshcollege.edu.in/",
          link2: "https://www.shiksha.com/"
        },
        {
          title: "AVS Group of Institutions",
          subtitle: "Reputed Educational Group",
          description: "Provides quality technical education with industry support",
          link1: "https://www.avsgroup.edu.in/",
          link2: "https://www.nirfindia.org/"
        },
        {
          title: "The Kavery Group of Institutions",
          subtitle: "Reputed Engineering College",
          description: "Known for excellence in technical education and research",
          link1: "https://www.kaverygroup.edu.in/",
          link2: "https://www.shiksha.com/"
        },
        {
          title: "Sengundhar Group of Institutions",
          subtitle: "Top Educational Group",
          description: "Known for its engineering and management programs",
          link1: "https://www.sengundharedn.edu.in/",
          link2: "https://www.nirfindia.org/"
        },
        {
          title: "Selvam College of Technology",
          subtitle: "Emerging Engineering Institution",
          description: "Provides strong academic foundation with industry tie-ups",
          link1: "https://www.selvamtech.edu.in/",
          link2: "https://www.shiksha.com/"
        },
        {
          title: "Vivekanandha Group of Institutions (Women's)",
          subtitle: "Leading Women's Engineering College",
          description: "Offers a wide range of programs focused on empowering women in technology",
          link1: "https://www.vivekanandha.edu.in/",
          link2: "https://www.nirfindia.org/"
        },
        {
          title: "JKK Nataraja Group of Institutions",
          subtitle: "Top Private Engineering College",
          description: "Known for excellence in education and strong industry connections",
          link1: "https://www.jkkcet.edu.in/",
          link2: "https://www.shiksha.com/"
        },
        {
          title: "JKK Muniraja Group of Institutions",
          subtitle: "Renowned Educational Institution",
          description: "Offers top-quality engineering, management, and arts education",
          link1: "https://www.jkkedu.org/",
          link2: "https://www.nirfindia.org/"
        },
        {
          title: "S.S.M Group of Institutions",
          subtitle: "Premier Educational Institution",
          description: "Provides diverse courses with excellent faculty and infrastructure",
          link1: "https://www.ssminstitutions.edu.in/",
          link2: "https://www.shiksha.com/"
        },
        {
          title: "Jayam Engineering College, Dharmapuri",
          subtitle: "Top Engineering College",
          description: "Known for its engineering programs and strong placement opportunities",
          link1: "https://www.jayamengg.edu.in/",
          link2: "https://www.nirfindia.org/"
        },
        {
          title: "Venkateswara Group of Institutions",
          subtitle: "Reputed Multi-Disciplinary College",
          description: "Offers engineering, medical, and management programs",
          link1: "https://www.venkateswara.edu.in/",
          link2: "https://www.shiksha.com/"
        },
        {
          title: "Erode Sengunthar Engineering College",
          subtitle: "Top Engineering College",
          description: "Provides excellent education with strong research initiatives",
          link1: "https://www.esec.ac.in/",
          link2: "https://www.nirfindia.org/"
        },
      
        {
          title: "SRM University",
          subtitle: "Leading Private University",
          description: "Known for excellence in engineering, medical, and management studies",
          link1: "https://www.srmist.edu.in/",
          link2: "https://www.nirfindia.org/"
        },
        {
          title: "PSG Group of Institutions",
          subtitle: "Top Technical and Research Institute",
          description: "Renowned for its quality education and research in various fields",
          link1: "https://www.psgtech.edu/",
          link2: "https://www.shiksha.com/"
        },
        {
          title: "Karpagam Group of Institutions",
          subtitle: "Premier Multi-Disciplinary Institution",
          description: "Offers diverse courses in engineering, medical, and arts streams",
          link1: "https://karpagam.ac.in/",
          link2: "https://www.nirfindia.org/"
        },
        {
          title: "Kumaraguru Group of Institutions",
          subtitle: "Top Engineering and Management Institute",
          description: "Highly ranked for its innovative curriculum and placements",
          link1: "https://www.kct.ac.in/",
          link2: "https://www.shiksha.com/"
        },
        {
          title: "Coimbatore Institute of Technology (CIT)",
          subtitle: "Government-Aided Autonomous Institution",
          description: "Recognized for its excellence in technical education and research",
          link1: "https://www.cit.edu.in/",
          link2: "https://www.nirfindia.org/"
        },
        {
          title: "Hindusthan Group of Institutions",
          subtitle: "Reputed Private Educational Institution",
          description: "Offers a wide range of technical, medical, and arts programs",
          link1: "https://www.hindusthan.net/",
          link2: "https://www.shiksha.com/"
        },
        {
          title: "Sri Krishna College of Engineering & Tech.",
          subtitle: "Top-Ranked Autonomous College",
          description: "Known for innovation, research, and high placement records",
          link1: "https://www.skcet.ac.in/",
          link2: "https://www.nirfindia.org/"
        },
        {
          title: "Ramakrishna Group of Institutions",
          subtitle: "Renowned Engineering & Medical Institution",
          description: "Offers top-quality education in multiple disciplines",
          link1: "https://www.srit.org/",
          link2: "https://www.shiksha.com/"
        },
        {
          title: "KGISL Group of Institutions",
          subtitle: "Emerging IT and Engineering College",
          description: "Specializes in IT and technical education with strong industry links",
          link1: "https://www.kgisliim.ac.in/",
          link2: "https://www.nirfindia.org/"
        },
        {
          title: "Dhanalakshmi Group of Institutions",
          subtitle: "Reputed Private Engineering Institution",
          description: "Provides quality education with strong placement support",
          link1: "https://www.dhanech.edu.in/",
          link2: "https://www.shiksha.com/"
        },
        {
          title: "Adithya Group of Institution",
          subtitle: "Top Emerging Technical Institution",
          description: "Known for its innovative teaching methods and industry collaborations",
          link1: "https://www.adithyatech.edu.in/",
          link2: "https://www.nirfindia.org/"
        },
        {
          title: "Nehru Group of Institutions",
          subtitle: "Renowned Multi-Disciplinary Institution",
          description: "Provides various UG and PG programs with industry-oriented training",
          link1: "https://www.nehrucolleges.com/",
          link2: "https://www.shiksha.com/"
        },
        {
          title: "Esha College of Engineering",
          subtitle: "Reputed Engineering College",
          description: "Provides top-quality engineering programs with good placements",
          link1: "https://www.eshatech.edu.in/",
          link2: "https://www.nirfindia.org/"
        },
        {
          title: "Dr. NGP Group of Institutions",
          subtitle: "Top Medical & Engineering Institute",
          description: "Offers technical, medical, and management education with excellent faculty",
          link1: "https://www.drngpasc.ac.in/",
          link2: "https://www.shiksha.com/"
        },
        {
          title: "Rathinam Group of Institution",
          subtitle: "Top Multi-Disciplinary Institution",
          description: "Recognized for quality education and strong industry collaboration",
          link1: "https://www.rathinamcollege.edu.in/",
          link2: "https://www.nirfindia.org/"
        },
        {
          title: "RVS Group of Institutions",
          subtitle: "Renowned Technical and Medical Institution",
          description: "Offers a wide range of courses in engineering, management, and medicine",
          link1: "https://www.rvsgroup.com/",
          link2: "https://www.shiksha.com/"
        },
        {
          title: "Info Institute of Technology",
          subtitle: "Emerging Engineering Institution",
          description: "Provides cutting-edge education in engineering and technology",
          link1: "https://www.infoengg.com/",
          link2: "https://www.nirfindia.org/"
        },
        {
          title: "Kathir Group of Institutions",
          subtitle: "Reputed Engineering and Management College",
          description: "Focused on technology and innovation with industry tie-ups",
          link1: "https://www.kathir.ac.in/",
          link2: "https://www.shiksha.com/"
        },
        {
          title: "Suguna Group of Institution",
          subtitle: "Emerging Technical and Management Institute",
          description: "Provides strong academic and placement opportunities",
          link1: "https://www.suguna.ac.in/",
          link2: "https://www.nirfindia.org/"
        },
        {
          title: "Sri Ranganathan Institute of Engg & Tech.",
          subtitle: "Renowned Technical Institution",
          description: "Offers quality technical education with strong industry support",
          link1: "https://www.sriet.ac.in/",
          link2: "https://www.shiksha.com/"
        },
        {
          title: "Study World Group of Institution",
          subtitle: "Multi-Disciplinary Educational Institution",
          description: "Offers courses in engineering, management, and health sciences",
          link1: "https://www.studyworldgroup.com/",
          link2: "https://www.nirfindia.org/"
        },
        {
          title: "UIT Group of Institutions",
          subtitle: "Premier Technical and Management Institution",
          description: "Known for quality technical education and campus placements",
          link1: "https://www.uit.edu.in/",
          link2: "https://www.shiksha.com/"
        },
        {
          title: "PPG Group of Institution",
          subtitle: "Leading Medical and Engineering Institution",
          description: "Offers a diverse range of programs in medicine, engineering, and management",
          link1: "https://www.ppg.edu.in/",
          link2: "https://www.nirfindia.org/"
        },
        {
          title: "Akshaya Group of Institution",
          subtitle: "Top Engineering & Management College",
          description: "Recognized for its academic excellence and strong placement records",
          link1: "https://www.akshaya.ac.in/",
          link2: "https://www.shiksha.com/"
        },
        {
          title: "Sri Sakthi College of Engineering & Tech.",
          subtitle: "Reputed Engineering Institution",
          description: "Offers innovative technical education with industry connections",
          link1: "https://www.srisakthi.ac.in/",
          link2: "https://www.nirfindia.org/"
        },
        {
          title: "CMS Group of Institution",
          subtitle: "Top Multi-Disciplinary College",
          description: "Provides UG and PG programs with focus on research and placements",
          link1: "https://www.cmscollege.edu.in/",
          link2: "https://www.shiksha.com/"
        },
      
        {
          title: "Vinayaka Mission Group of Institution",
          subtitle: "Renowned Private Educational Institution",
          description: "Offers diverse courses in engineering, medical, and management fields",
          link1: "https://www.vinayakamission.com/",
          link2: "https://www.shiksha.com/"
        },
        {
          title: "Savitha University",
          subtitle: "Leading Medical & Engineering University",
          description: "Known for excellence in medical and technical education",
          link1: "https://www.saveetha.com/",
          link2: "https://www.nirfindia.org/"
        },
        {
          title: "Sathyabama University",
          subtitle: "Best Private Engineering & Research University",
          description: "Highly reputed for its innovation and quality education",
          link1: "https://www.sathyabama.ac.in/",
          link2: "https://www.nirfindia.org/"
        },
        {
          title: "Panimalar Group of Institutions",
          subtitle: "Prominent Technical Institution",
          description: "Recognized for academic excellence and campus placements",
          link1: "https://www.panimalar.ac.in/",
          link2: "https://www.shiksha.com/"
        },
        {
          title: "Meenakchi Group of Institution",
          subtitle: "Premier Multi-Disciplinary Institution",
          description: "Offers medical, engineering, and arts programs",
          link1: "https://www.maher.ac.in/",
          link2: "https://www.shiksha.com/"
        },
        {
          title: "Balaji Group of Institution",
          subtitle: "Leading Higher Education Provider",
          description: "Provides courses in engineering, medical, and management studies",
          link1: "https://www.balaji.edu.in/",
          link2: "https://www.nirfindia.org/"
        },
        {
          title: "Vals Group of Institutions",
          subtitle: "Emerging Technical and Medical College",
          description: "A growing institution with a focus on quality education",
          link1: "https://www.valsuniversity.com/",
          link2: "https://www.shiksha.com/"
        },
        {
          title: "Bharath Group of Institutions",
          subtitle: "Reputed Private University",
          description: "Offers a wide range of undergraduate and postgraduate programs",
          link1: "https://www.bharathuniv.ac.in/",
          link2: "https://www.nirfindia.org/"
        },
        {
          title: "Saveetha Group of Institution",
          subtitle: "Top Medical & Engineering College",
          description: "Known for excellence in medical, engineering, and law studies",
          link1: "https://www.saveetha.com/",
          link2: "https://www.shiksha.com/"
        },
        {
          title: "Chettinad Medical & Dental College",
          subtitle: "Top Medical & Dental Institution",
          description: "Offers world-class medical and dental education",
          link1: "https://www.chettinadhealthcity.com/",
          link2: "https://www.nirfindia.org/"
        },
        {
          title: "Laxmi Narayanan Medical & Dental College",
          subtitle: "Renowned Medical Institution",
          description: "Provides high-quality medical and dental education",
          link1: "https://www.lnmch.ac.in/",
          link2: "https://www.shiksha.com/"
        },
        {
          title: "Manakula Vinayagar Medical & Dental College",
          subtitle: "Premier Medical and Dental College",
          description: "Known for excellent healthcare education and research",
          link1: "https://www.mvmc.ac.in/",
          link2: "https://www.nirfindia.org/"
        },{
    title: "IIT Madras",
    subtitle: "Top Engineering College",
    description: "Ranked #1 in India for engineering studies.",
    link1: "https://www.iitm.ac.in/",
    link2: "https://www.nirfindia.org/"
  },
  {
    title: "NIT Trichy",
    subtitle: "Premier Technical Institute",
    description: "Highly ranked for its research and placements.",
    link1: "https://www.nitt.edu/",
    link2: "https://www.nirfindia.org/"
  },
  {
    title: "VIT Vellore",
    subtitle: "Best Private Engineering College",
    description: "Famous for excellent faculty and infrastructure.",
    link1: "https://www.vit.ac.in/",
    link2: "https://www.shiksha.com/"
  },
    {
        title: "Loyola College",
        subtitle: "Top Arts and Science College",
        description: "Known for its quality education and cultural events.",
        link1: "https://www.loyolacollege.edu/",
        link2: "https://www.shiksha.com/"
    },
    {
        title: "St. Stephen's College",
        subtitle: "Leading College for Humanities",
        description: "Renowned for its faculty and extracurricular activities.",
        link1: "https://www.ststephens.edu/",
        link2: "https://www.shiksha.com/"
    },
    {
        title: "AIIMS Delhi",
        subtitle: "Top Medical College",
        description: "Ranked #1 in India for medical studies.",
        link1: "https://www.aiims.edu/",
        link2: "https://www.shiksha.com/"
    },
    {
    title: "Indian Institute of Technology Madras",
    subtitle: "Top Engineering College",
    description: "Ranked #1 in India for engineering studies.",
    link1: "https://www.iitm.ac.in/",
    link2: "https://www.nirfindia.org/"
},
{
    title: "National Institute of Technology Tiruchirappalli",
    subtitle: "Premier Technical Institute",
    description: "Highly ranked for its research and placements.",
    link1: "https://www.nitt.edu/",
    link2: "https://www.nirfindia.org/"
},
{
    title: "Vellore Institute of Technology",
    subtitle: "Best Private Engineering College",
    description: "Famous for excellent faculty and infrastructure.",
    link1: "https://www.vit.ac.in/",
    link2: "https://www.shiksha.com/"
},
{
    title: "S.R.M. Institute of Science and Technology",
    subtitle: "Leading Private University",
    description: "Well-known for high placement rates and industry collaboration.",
    link1: "https://www.srmist.edu.in/",
    link2: "https://www.nirfindia.org/"
},
{
    title: "Anna University",
    subtitle: "Renowned Public University",
    description: "Offers quality technical education with strong research opportunities.",
    link1: "https://www.annauniv.edu/",
    link2: "https://www.nirfindia.org/"
},
{
    title: "Amrita Vishwa Vidyapeetham",
    subtitle: "Top Deemed University",
    description: "Recognized for innovative teaching and global rankings.",
    link1: "https://www.amrita.edu/",
    link2: "https://www.nirfindia.org/"
},
{
    title: "Kalasalingam Academy of Research and Education",
    subtitle: "Deemed University",
    description: "Known for research and technology-oriented courses.",
    link1: "https://kalasalingam.ac.in/",
    link2: "https://www.nirfindia.org/"
},
{
    title: "Shanmugha Arts Science Technology and Research Academy",
    subtitle: "Top Private Engineering College",
    description: "Highly ranked for innovation and industry partnerships.",
    link1: "https://www.sastra.edu/",
    link2: "https://www.nirfindia.org/"
},
{
    title: "Sri Sivasubramaniya Nadar College of Engineering",
    subtitle: "Premier Private Engineering College",
    description: "Known for its academic excellence and research facilities.",
    link1: "https://www.ssn.edu.in/",
    link2: "https://www.nirfindia.org/"
},
{
    title: "Saveetha Institute of Medical and Technical Sciences",
    subtitle: "Deemed to be University",
    description: "Offers excellent programs in medical and technical education.",
    link1: "https://www.saveetha.com/",
    link2: "https://www.nirfindia.org/"
},
{
    title: "Sathyabama Institute of Science and Technology",
    subtitle: "Renowned Private University",
    description: "Popular for quality education and research in science and technology.",
    link1: "https://www.sathyabama.ac.in/",
    link2: "https://www.nirfindia.org/"
},
{
    title: "PSG College of Technology",
    subtitle: "Top Autonomous Engineering College",
    description: "Well-known for industry collaborations and excellent faculty.",
    link1: "https://www.psgtech.edu/",
    link2: "https://www.nirfindia.org/"
},
{
    title: "Sri Krishna College of Engineering and Technology",
    subtitle: "Leading Private Engineering College",
    description: "Recognized for its modern teaching facilities and placements.",
    link1: "https://www.skcet.ac.in/",
    link2: "https://www.nirfindia.org/"
},
{
    title: "Vel Tech Rangarajan Dr. Sagunthala R & D Institute of Science and Technology",
    subtitle: "Private Deemed University",
    description: "Focused on research-driven education with a global outlook.",
    link1: "https://www.veltech.edu.in/",
    link2: "https://www.nirfindia.org/"
},
{
    title: "Chennai Institute of Technology",
    subtitle: "Emerging Engineering Institute",
    description: "A fast-growing institute known for its academic excellence.",
    link1: "https://www.citchennai.edu.in/",
    link2: "https://www.nirfindia.org/"
},
{
    title: "Coimbatore Institute of Technology",
    subtitle: "Premier Autonomous College",
    description: "Offers a blend of academic rigor and industry exposure.",
    link1: "https://www.cit.edu.in/",
    link2: "https://www.nirfindia.org/"
},
{
    title: "Hindustan Institute of Technology and Science",
    subtitle: "Top Private Engineering University",
    description: "Renowned for its engineering and aviation programs.",
    link1: "https://hindustanuniv.ac.in/",
    link2: "https://www.nirfindia.org/"
},
{
    title: "Indian Institute of Information Technology, Design & Manufacturing, Kancheepuram",
    subtitle: "Premier IIIT Institute",
    description: "Specialized in design and manufacturing-focused education.",
    link1: "http://iiitdm.ac.in/",
    link2: "https://www.nirfindia.org/"
},
{
    title: "Karunya Institute of Technology and Sciences",
    subtitle: "Christian Minority Institution",
    description: "Well-reputed for technical and agricultural research programs.",
    link1: "https://karunya.edu/",
    link2: "https://www.nirfindia.org/"
},
{
    title: "Kongu Engineering College",
    subtitle: "Top Self-Financed College",
    description: "Recognized for quality education and modern infrastructure.",
    link1: "https://www.kongu.ac.in/",
    link2: "https://www.nirfindia.org/"
},
{
    title: "KPR Institute of Engineering and Technology",
    subtitle: "Top Emerging Engineering College",
    description: "Known for its advanced infrastructure and high placement rates.",
    link1: "https://www.kpriet.ac.in/",
    link2: "https://www.nirfindia.org/"
},
{
    title: "Mepco Schlenk Engineering College",
    subtitle: "Premier Self-Financed Engineering College",
    description: "Recognized for its strong academic programs and research.",
    link1: "https://www.mepcoeng.ac.in/",
    link2: "https://www.nirfindia.org/"
},
{
    title: "National Institute of Food Technology, Entrepreneurship and Management",
    subtitle: "Specialized Food Technology Institute",
    description: "Pioneering research in food technology and entrepreneurship.",
    link1: "https://www.niftem-t.ac.in/",
    link2: "https://www.nirfindia.org/"
},
{
    title: "PSG Institute of Technology and Applied Research",
    subtitle: "Leading Technical Institute",
    description: "Offers industry-oriented education and modern research facilities.",
    link1: "https://www.psgitech.ac.in/",
    link2: "https://www.nirfindia.org/"
},
{
    title: "Rajalakshmi Engineering College",
    subtitle: "Renowned Private Engineering College",
    description: "Recognized for academic excellence and research innovation.",
    link1: "https://www.rajalakshmi.org/",
    link2: "https://www.nirfindia.org/"
},
{
    title: "Sri Sairam Engineering College",
    subtitle: "Well-Established Engineering Institute",
    description: "A leader in technical education with high placement rates.",
    link1: "https://www.sairam.edu.in/",
    link2: "https://www.nirfindia.org/"
},
{
    title: "Thiagarajar College of Engineering",
    subtitle: "Autonomous Government-Aided Institution",
    description: "Highly ranked for academic excellence and innovation.",
    link1: "https://www.tce.edu/",
    link2: "https://www.nirfindia.org/"
},
{
    title: "Annamalai University",
    subtitle: "Historic Public University",
    description: "A prestigious institution offering diverse academic programs.",
    link1: "https://www.annamalaiuniversity.ac.in/",
    link2: "https://www.nirfindia.org/"
},
{
    title: "B. S. Abdur Rahman Crescent Institute of Science and Technology",
    subtitle: "Deemed-to-be University",
    description: "Known for excellence in engineering and science education.",
    link1: "https://crescent.education/",
    link2: "https://www.nirfindia.org/"
},
{
    title: "Easwari Engineering College",
    subtitle: "Affiliated with Anna University",
    description: "A reputed institution providing quality technical education.",
    link1: "https://www.srmeaswari.ac.in/",
    link2: "https://www.nirfindia.org/"
},
{
    title: "Kumaraguru College of Technology",
    subtitle: "Leading Private Engineering College",
    description: "Ranked among the best for research and industry collaborations.",
    link1: "https://www.kct.ac.in/",
    link2: "https://www.nirfindia.org/"
},
{
    title: "National Engineering College",
    subtitle: "Premier Self-Financed Engineering Institute",
    description: "Recognized for academic excellence and technical innovation.",
    link1: "https://www.nec.edu.in/",
    link2: "https://www.nirfindia.org/"
},
{
    title: "R.M.K. Engineering College",
    subtitle: "Top-Ranked Autonomous College",
    description: "Famous for high placement rates and quality education.",
    link1: "https://www.rmkec.ac.in/",
    link2: "https://www.nirfindia.org/"
},
{
    title: "Rajalakshmi Institute of Technology",
    subtitle: "Emerging Private Engineering College",
    description: "Known for academic excellence and student-centric programs.",
    link1: "https://www.ritchennai.org/",
    link2: "https://www.nirfindia.org/"
},
{
    title: "Sona College of Technology",
    subtitle: "Autonomous Private Engineering College",
    description: "Highly ranked for research and innovation.",
    link1: "https://www.sonatech.ac.in/",
    link2: "https://www.nirfindia.org/"
},
{
    title: "Sri Krishna College of Technology",
    subtitle: "Best Private Engineering College in Coimbatore",
    description: "Well-known for its technical education and research output.",
    link1: "https://www.srikrishna.ac.in/",
    link2: "https://www.nirfindia.org/"
},
{
    title: "Sri Ramakrishna Engineering College",
    subtitle: "Leading Private Autonomous Institute",
    description: "Ranked among the top engineering colleges in Tamil Nadu.",
    link1: "https://www.srec.ac.in/",
    link2: "https://www.nirfindia.org/"
},
{
    title: "Sri Venkateswara College of Engineering",
    subtitle: "Top Engineering College in Chennai",
    description: "Recognized for its strong academic and placement records.",
    link1: "https://www.svce.ac.in/",
    link2: "https://www.nirfindia.org/"
},
{
    title: "Dr. M. G. R. Educational and Research Institute",
    subtitle: "Deemed-to-be University",
    description: "Well-established institute offering diverse technical courses.",
    link1: "https://www.drmgrdu.ac.in/",
    link2: "https://www.nirfindia.org/"
},
{
    title: "E.G.S. Pillay Engineering College",
    subtitle: "Top Rural Engineering College",
    description: "Provides excellent engineering education with a focus on research.",
    link1: "https://www.egspec.org/",
    link2: "https://www.nirfindia.org/"
}];

export default colleges;
