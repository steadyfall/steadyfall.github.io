export const detailsForMetadata = {
  baseUrl: 'https://steadyfall.github.io/',
  title: 'Himank Dave',
  name: 'Himank Dave',
  ogImage: '/icon.ico',
  description:
    'Himank Dave is a software engineer and Computational Mathematics student at the University of Waterloo.',
};

export const personalDetails = {
  name: 'Himank Dave',
  pronouns: 'he/him/his',
  currentEducation: 'Computational Mathematics [at] UWaterloo',
  githubLink: 'https://github.com/steadyfall',
  linkedinLink: 'https://www.linkedin.com/in/himank-dave/',
  email: 'hddave@uwaterloo.ca',
  resumeFile: 'resume.pdf',
};

export const education = [
  {
    institution: 'University of Waterloo',
    shortName: 'UWaterloo',
    logo: '/images/uwaterlooLogo.png',
    location: 'Waterloo, Ontario',
    degree: 'Bachelor of Mathematics',
    major: 'Computational Mathematics',
    start: '2022',
    end: 'Present',
    description:
      '[Computational Mathematics](https://uwaterloo.ca/computational-mathematics/) \
      is an interdisciplinary major that combines Mathematics, Statistics, Optimization \
      and Computer Science, offered by the Faculty of Mathematics.',
  },
];

export const experiences = [
  {
    companyLogo: '/images/miovision.png',
    companyName: 'Miovision',
    companyLink: 'https://miovision.com/',
    companyLocation: 'Kitchener, Ontario',
    position: 'Software Developer Intern',
    period: 'May 2026 - Present',
    tldr: "provides cities with modern tools to fix today's traffic problems, \
    using multimodal traffic data and actionable insights to help municipalities \
    move people more safely, efficiently, and sustainably.",
    responsibilities: [
      'I am working as a Software Developer on [Adaptive](https://miovision.com/adaptive/).',
    ],
  },
  {
    companyLogo: '/images/geotab.jpeg',
    companyName: 'Geotab',
    companyLink: 'https://geotab.com/',
    companyLocation: 'Oakville, Ontario',
    position: 'Embedded Software Developer Intern',
    period: 'January 2025 - August 2025',
    tldr: 'enables safe, sustainable, and efficient fleet and asset management \
    through data-driven connected solutions.',
    responsibilities: [
      'I worked as an Embedded Developer on the Pipeline Automation team, under Embedded Software Quality.',
      'Apart from day-to-day tasks supporting 10k+ pipelines/month across 250+ GitLab repositories, I:',
      [
        '- built high-performance artifact-retrieval gRPC microservice for in-house Software-in-the-Loop testing framework.',
        '- containerized Windows-only embedded development environment to automate firmware builds for 500k+ devices.',
        '- reverse-engineered undocumented production Docker images to reconstruct their commit-based build history, replacing \
        them with reproducible Ubuntu 22 Dockerfiles and reducing image size by 30%.',
      ],
    ],
  },
  {
    companyLogo: '/images/cactuscreatives.png',
    companyName: 'Cactus Creatives',
    companyLink: 'https://cactuscreatives.com/',
    companyLocation: 'Remote (Ahmedabad, India)',
    position: 'Software Developer Intern',
    period: 'May 2024 - August 2024',
    tldr: 'partners with clients to design and deliver innovative, \
    reliable, and cost-effective digital and IoT solutions.',
    responsibilities: [
      'I worked on the Core Services team.',
      'I developed a self-hosted uptime monitoring tool with real-time web & \
      database status tracking, and implemented CI/CD pipelines using \
      GitHub Actions across 25+ projects.',
    ],
  },
  {
    companyLogo: '/images/cactuscreatives.png',
    companyName: 'Cactus Creatives',
    companyLink: 'https://cactuscreatives.com/',
    companyLocation: 'Ahmedabad, India',
    position: 'Python Developer Intern',
    period: 'May 2023 - August 2023',
    tldr: 'partners with clients to design and deliver innovative, \
    reliable, and cost-effective digital and IoT solutions.',
    responsibilities: [
      'I worked on the Internal Tools team.',
      'I built and maintained a full-stack content management system with \
      real-time metrics, while spearheading major MySQL-to-PostgreSQL migrations \
      across projects and optimizing queries for post-migration performance gains.',
    ],
  },
];

export const projects = [
  {
    title: 'fspeek',
    selected_work: true,
    tldr: 'A terminal file-browser for remote HTTP servers that previews media metadata without downloading whole files.',
    description:
      'A terminal UI for browsing remote HTTP file servers, including authenticated servers, with filtering, \
      sorting, caching, and media metadata extraction via HTTP range requests.',
    repo: true,
    repoUrl: 'https://github.com/steadyfall/fspeek',
    live: false,
    techStack: ['Go', 'SQLite', 'Bubbletea'],
  },
  {
    title: 'deris',
    selected_work: true,
    tldr: 'A networked key-value store delivering 50k+ operations per second with sub-millisecond latency.',
    description:
      'A minimalist key-value store with network socket interface, \
      supporting CRUD operations, data integrity, high throughput (50k+ ops/sec) \
      and <1ms latency.',
    repo: true,
    repoUrl: 'https://github.com/steadyfall/deris',
    live: false,
    techStack: ['Go'],
  },
  {
    title: 'Sure (FOSS)',
    selected_work: true,
    tldr: 'Open-source contributor to a finance app, improving release infrastructure and developer tooling.',
    description:
      'Improved Sure’s release infrastructure, cutting Docker image builds from 35 mins to 6 mins through \
      multi-architecture matrix builds and registry caching. Upgraded devcontainers with Git-aware prompts, Ruby LSP, \
      autocomplete, Codespaces, and worker-service fixes.',
    repo: true,
    repoUrl: 'https://github.com/we-promise/sure',
    live: false,
    techStack: ['Ruby', 'Docker', 'GitHub Actions'],
  },
  {
    title: 'simple-technical-resume',
    selected_work: false,
    tldr: 'A one-page, ATS-friendly Typst template for creating clean technical resumes.',
    description:
      'Built a customizable Typst resume package that makes it easier than LaTeX to maintain polished, dense, single-page \
         ATS-compatible technical resumes.',
    repo: true,
    repoUrl: 'https://github.com/steadyfall/simple-technical-resume-template',
    live: true,
    liveUrl: 'https://typst.app/universe/package/simple-technical-resume',
    techStack: ['Typst'],
  },
  {
    title: 'SpectraSVD',
    selected_work: false,
    tldr: 'An interactive SVD image compressor that reduces file sizes by over 25% while preserving visual quality.',
    description:
      'Designed & deployed an advanced image compression algorithm achieving \
      25%+ size reduction, complemented by a real-time interactive web \
      application for demonstrating compression quality and efficiency.',
    repo: true,
    repoUrl: 'https://github.com/steadyfall/svd-compression',
    live: true,
    liveUrl: 'https://spectrasvd.streamlit.app/',
    techStack: ['NumPy', 'OpenCV', 'Pillow', 'Streamlit'],
  },
  {
    title: 'Trivivo',
    selected_work: false,
    tldr: 'A quiz platform with progressive difficulty, real-time analytics, admin tools, and a secure question API.',
    description:
      'Crafted a feature-rich, dynamic quiz game platform with progressive \
      difficulty levels, real-time analytics, and comprehensive admin tools, \
      complemented by a secure API for question management and user engagement tracking.',
    repo: true,
    repoUrl: 'https://github.com/steadyfall/wwbm-webapp',
    live: false,
    techStack: ['Django', 'MySQL', 'HTML5', 'TailwindCSS', 'jQuery', 'Docker', 'AWS EC2'],
  },
  {
    title: 'Chess',
    selected_work: false,
    tldr: 'A C++ chess engine with AI opponents, multiplayer variants, and rigorously tested object-oriented design.',
    description:
      'Developed a C++ chess engine with innovative multi-player variants & AI capabilities, \
      employing advanced software design patterns and rigorous testing methodologies in a \
      Linux environment.',
    repo: false,
    live: false,
    techStack: ['C++', 'CMake', 'XQuartz'],
  },
  {
    title: 'EcoWiz',
    selected_work: false,
    tldr: 'A garbage-sorting assistant using multimodal deep learning to classify waste with 80% accuracy.',
    description:
      'Engineered a full-stack application featuring a multimodal image classification system \
      for garbage sorting, achieving 80% accuracy through advanced deep learning techniques.',
    repo: true,
    repoUrl: 'https://github.com/karman103/DeltaHacksX',
    live: false,
    techStack: ['React', 'Flask', 'ResNet-50 CNN', 'YOLOv8'],
  },
  {
    title: 'RedWish',
    selected_work: false,
    tldr: 'A blood donation platform with an AI chatbot for accessible donor and transfusion coordination.',
    description:
      'Developed a comprehensive full-stack health application to streamline blood donation and \
      transfusion processes, incorporating an AI-powered chatbot to enhance user engagement and \
      accessibility.',
    repo: true,
    repoUrl: 'https://github.com/steadyfall/RedWish',
    live: true,
    liveUrl: 'https://steadyfall.github.io/RedWish/',
    techStack: ['HTML5', 'CSS3', 'JavaScript', 'Firebase', 'DialogFlow API'],
  },
];

export const skills = {
  languages: ['Python', 'Go', 'TypeScript', 'C++20', 'Bash', 'Powershell', 'SQL'],
  frameworksAndLibraries: [
    'Django',
    'Flask',
    'React',
    'TailwindCSS',
    'Next.js',
    'Node.js',
    'Postgres',
    'MySQL',
  ],
  tools: ['Docker', 'Kubernetes', 'GitLab CI', 'GitHub Actions', 'Google Cloud'],
};
// "Axios", "Socket.IO"
// databases: ["Postgres", "MySQL", "Redis"]
