export const detailsForMetadata = {
  baseUrl: 'https://steadyfall.github.io/',
  title: 'Himank Dave',
  name: 'Himank Dave',
  ogImage: '/icon.ico',
  description:
    'A sleek, minimalistic and dynamic personal website built with React, TailwindCSS, Next.js and Framer Motion.',
};

export const personalDetails = {
  name: 'Himank Dave',
  pronouns: 'he/him/his',
  currentEducation: 'Computational Mathematics [at] UWaterloo',
  // currentJob: ['Software Developer in Test Intern', 'Geotab'],
  // basedFrom: 'Toronto',
  githubLink: 'https://github.com/steadyfall',
  linkedinLink: 'https://www.linkedin.com/in/himank-dave/',
  email: 'hddave@uwaterloo.ca',
  resumeFile: 'resume.pdf',
};

export const experiences = [
  {
    companyLogo: '/images/miovision.png',
    companyName: 'Miovision',
    companyLink: 'https://miovision.com/',
    position: 'Software Developer Intern',
    period: 'May 2026 - Present',
    responsibilities: [
      "Miovision provides cities with modern tools to fix today's traffic problems, \
      using multimodal traffic data and actionable insights to help municipalities \
      move people more safely, efficiently, and sustainably.",
      'I am working as a Software Developer on [Adaptive](https://miovision.com/adaptive/).',
    ],
  },
  {
    companyLogo: '/images/geotab.jpeg',
    companyName: 'Geotab',
    companyLink: 'https://geotab.com/',
    position: 'Embedded Software Developer Intern',
    period: 'January 2025 - August 2025',
    responsibilities: [
      'Geotab enables safe, sustainable, and efficient fleet and asset management \
      through data-driven connected solutions.',
      'I worked as an Embedded Developer on the Pipeline Automation team, under Embedded Software Quality.',
      'Apart from day-to-day tasks supporting 10k+ pipelines/month across 250+ GitLab repositories, \
      I built a high-performance artifact-retrieval gRPC microservice for an in-house Software-in-the-Loop (SIL) testing framework and containerized \
      a Windows-only embedded development environment to automate firmware builds for 500k+ devices.',
    ],
  },
  {
    companyLogo: '/images/cactuscreatives.png',
    companyName: 'Cactus Creatives',
    companyLink: 'https://cactuscreatives.com/',
    position: 'Software Developer Intern',
    period: 'May 2024 - August 2024',
    responsibilities: [
      'Cactus Creatives partners with clients to design and deliver innovative, \
      reliable, and cost-effective digital and IoT solutions.',
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
    position: 'Python Developer Intern',
    period: 'May 2023 - August 2023',
    responsibilities: [
      'Cactus Creatives partners with clients to design and deliver innovative, \
      reliable, and cost-effective digital and IoT solutions.',
      'I worked on the Internal Tools team.',
      'I built and maintained a full-stack content management system with \
      real-time metrics, while spearheading major MySQL-to-PostgreSQL migrations \
      across projects and optimizing queries for post-migration performance gains.',
    ],
  },
];

export const projects = [
  {
    title: 'Deris',
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
    title: 'Trivivo',
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
    title: 'SpectraSVD',
    description:
      'Designed and deployed an advanced image compression algorithm achieving \
      25%+ size reduction, complemented by a real-time interactive web \
      application for demonstrating compression quality and efficiency.',
    repo: true,
    repoUrl: 'https://github.com/steadyfall/svd-compression',
    live: true,
    liveUrl: 'https://spectrasvd.streamlit.app/',
    techStack: ['NumPy', 'OpenCV', 'Pillow', 'Streamlit'],
  },
  {
    title: 'Personal Website',
    description:
      'Built a modern, responsive portfolio website with fluid animations, \
      architected as a customizable template.',
    repo: true,
    repoUrl: 'https://github.com/steadyfall/steadyfall.github.io.git',
    live: true,
    liveUrl: 'https://steadyfall.github.io',
    techStack: ['TypeScript', 'React', 'TailwindCSS', 'Next.js', 'Framer Motion', 'Node.js'],
  },
  {
    title: 'Chess',
    description:
      'Developed a C++ chess engine with innovative multi-player variants and AI capabilities, \
      employing advanced software design patterns and rigorous testing methodologies in a \
      Linux environment.',
    repo: false,
    live: false,
    techStack: ['C++', 'CMake', 'XQuartz'],
  },
  {
    title: 'EcoWiz',
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
