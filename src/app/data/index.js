export const navLinks = [
  {
    title: 'About',
    path: '#about',
  },
  {
    title: 'Projects',
    path: '#projects',
  },
  {
    title: 'Contact',
    path: '#contact',
  },
];

export const aboutText = `I'm Anwuri, a dedicated UI/UX designer with a passion for creating
            exceptional digital experiences. With a keen eye for user-centered
            design and a deep understanding of the principles that make
            interfaces intuitive and engaging, I thrive on turning complex
            problems into elegant and user-friendly solutions. ${(<br />)}
            My journey in the world of design has allowed me to collaborate with diverse
            teams and clients, transforming ideas into visually stunning and
            highly functional products. From wireframes to prototypes and user
            testing, I'm committed to every phase of the design process,
            ensuring that the end result not only meets but exceeds
            expectations.`;

export const projectsData = [
  {
    id: 1,
    title: 'React Portfolio Website',
    description: 'Project 1 description',
    image: '/images/projects/1.png',
    tag: ['All', 'Web'],
    gitUrl: '/',
    previewUrl: '/',
  },
  {
    id: 2,
    title: 'Potography Portfolio Website',
    description: 'Project 2 description',
    image: '/images/projects/2.png',
    tag: ['All', 'Web'],
    gitUrl: '/',
    previewUrl: '/',
  },
  {
    id: 3,
    title: 'E-commerce Application',
    description: 'Project 3 description',
    image: '/images/projects/3.png',
    tag: ['All', 'Web'],
    gitUrl: '/',
    previewUrl: '/',
  },
  {
    id: 4,
    title: 'Food Ordering Application',
    description: 'Project 4 description',
    image: '/images/projects/4.png',
    tag: ['All', 'Mobile'],
    gitUrl: '/',
    previewUrl: '/',
  },
  {
    id: 5,
    title: 'React Firebase Template',
    description: 'Authentication and CRUD operations',
    image: '/images/projects/5.png',
    tag: ['All', 'Web'],
    gitUrl: '/',
    previewUrl: '/',
  },
  {
    id: 6,
    title: 'Full-stack Roadmap',
    description: 'Project 5 description',
    image: '/images/projects/6.png',
    tag: ['All', 'Web'],
    gitUrl: '/',
    previewUrl: '/',
  },
];

export const TAB_DATA = [
  {
    title: 'Hard Skills',
    id: 'hard-skills',
    content: (
      <ul className="list-disc pl-2">
        <li>UI/UX Design</li>
        <li>User Research</li>
        <li>Wireframing</li>
        <li>Prototyping</li>
        <li>Usability Testing</li>
        <li>Interaction Design</li>
        <li>Information Architecture</li>
        <li>Proficiency in design software (Figma, Framer, Adobe XD)</li>
      </ul>
    ),
  },
  {
    title: 'Soft Skills',
    id: 'soft-skills',
    content: (
      <ul className="list-disc pl-2">
        <li>Communication</li>
        <li>Problem Solving</li>
        <li>Collaboration</li>
        <li>Creativity</li>
        <li>Empathy</li>
        <li>Time Management</li>
        <li>Critical Thinking</li>
        <li>Attention to detail</li>
      </ul>
    ),
  },
  {
    title: 'Education',
    id: 'education',
    content: (
      <ul className="list-disc pl-2">
        <li>Google UX Design Professional Certificate</li>
        <li>BA, Marketing, Rivers State University</li>
      </ul>
    ),
  },
];
