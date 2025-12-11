
import { ProfileData } from './types';
import { BLOG_POSTS } from './blogs/index';

// Use the external Google Scholar image as requested
const avatarImage = "https://scholar.googleusercontent.com/citations?view_op=medium_photo&user=8qSJ1GYAAAAJ&citpid=1";

export const PROFILE: ProfileData = {
  name: "Qipeng Chen",
  title: "Ph.D. Student",
  department: "Educational Research Methods",
  university: "University of Alabama",
  email: "Qchen23@crimson.ua.edu",
  avatar: avatarImage, 
  socials: {
    github: "https://github.com/qipengchen", 
    orcid: "https://orcid.org/0000-0003-3126-2487", 
    researchgate: "https://www.researchgate.net/profile/Qipeng-Chen-4",
    googleScholar: "https://scholar.google.com/citations?user=8qSJ1GYAAAAJ&hl=en",
    linkedin: "https://www.linkedin.com/in/qipeng-chen-604528271/"
  },
  scholar: {
    citations: 61,
    hIndex: 5,
    i10Index: 2
  },
  bio: "Hi! I am a Ph.D. researcher at the University of Alabama, specializing in Educational Research Methods. My work centers on leveraging process data to enhance test security and provide deeper assessment insights.",
  interests: [
    "Process Data Applications",
    "Aberrant Response Behaviors",
    "Longitudinal Modeling",
    "Psychometrics"
  ],
  education: [
    {
      degree: "Doctor of Philosophy",
      major: "Education (Educational Research)",
      institution: "University of Alabama",
      location: "USA",
      period: "2024–present",
      advisor: "Advisor: Kaiwen Man"
    },
    {
      degree: "Master of Education",
      major: "Applied Psychology",
      institution: "Zhejiang Normal University",
      location: "China",
      period: "2020–2023",
      advisor: "Advisor: Peida Zhan"
    },
    {
      degree: "Bachelor of Education",
      major: "Primary Education",
      institution: "Hunan Normal University",
      location: "China",
      period: "2014–2019"
    }
  ],
  experience: [
    {
      role: "Teaching Assistant",
      company: "The University of Alabama",
      type: "Part-time",
      period: "Aug 2024 - Present",
      location: "Tuscaloosa, Alabama, United States",
      description: "Developed tutorial materials, data examples for BER 345: Educational Statistics, supporting undergraduate students in statistical concepts and applied data analysis."
    },
    {
      role: "Assessment Analyst",
      company: "iFLYTEK Co., Ltd.",
      type: "Internship",
      period: "Feb 2022 - Jul 2022",
      location: "Hefei, Anhui, China",
      description: "Data preprocessing, database management, statistical analysis, and data visualization for large-scale questionnaire and achievement assessment data."
    }
  ],
  publications: [
    {
      id: "p0",
      year: 2025,
      title: "Key-Action Coding Incorporating Misconceptions and Its Application in Diagnostic Classification Analysis of Process Data",
      citation: "Zhan, P., Gao, F., & **Chen, Q.** (2025). Key-Action Coding Incorporating Misconceptions and Its Application in Diagnostic Classification Analysis of Process Data. *Journal of Psychological Science*, *48*(2), 481–494.",
      doi: "https://doi.org/10.16719/j.cnki.1671-6981.20250220"
    },
    {
      id: "p1",
      year: 2025,
      title: "Tracking the Development of L2 Reading Subskills Using Longitudinal Cognitive Diagnosis Models",
      citation: "Chen, H., Lin, Z., **Chen, Q.**, & Zhan, P. (2025). Tracking the Development of L2 Reading Subskills Using Longitudinal Cognitive Diagnosis Models. *Language Assessment Quarterly*, 22(2), 219–241.",
      doi: "https://doi.org/10.1080/15434303.2025.2497821"
    },
    {
      id: "p2",
      year: 2024,
      title: "Improvement and application of back random response detection",
      citation: "Li, Y., **Chen, Q.**, Gao, Y., & Liu, T. (2024). Improvement and application of back random response detection: Based on cumulative sum and change point analysis. *Behavior Research Methods*.",
      doi: "https://doi.org/10.3758/s13428-024-02495-0",
      jcr: "Q1",
      cas: "T2"
    },
    {
      id: "p3",
      year: 2024,
      title: "Development and validation of two shortened anxiety sensitivity index-3 scales",
      citation: "Luo, Y., **Chen, Q.**, Chen, J., & Zhan, P. (2024). Development and validation of two shortened anxiety sensitivity index-3 scales based on item response theory. *Humanities and Social Sciences Communications*, 11, 1078.",
      doi: "https://doi.org/10.1057/s41599-024-03615-z"
    },
    {
      id: "p4",
      year: 2023,
      title: "Binary modeling of action sequences in problem-solving tasks",
      citation: "Fu, Y., **Chen, Q.**, & Zhan, P. (2023). Binary modeling of action sequences in problem-solving tasks: One- and two-parameter action sequence model. *Acta Psychologica Sinica*, 55(8), 1383.",
      doi: "https://doi.org/10.3724/sp.j.1041.2023.01383"
    },
    {
      id: "p5",
      year: 2023,
      title: "Joint modeling of action sequences and action time",
      citation: "Fu, Y., Zhan, P., **Chen, Q.**, & Jiao, H. (2023). Joint modeling of action sequences and action time in computer-based interactive tasks. *Behavior Research Methods*.",
      doi: "https://doi.org/10.3758/s13428-023-02178-2",
      jcr: "Q1",
      cas: "T2"
    },
    {
      id: "p6",
      year: 2023,
      title: "Using a multi-strategy eye-tracking psychometric model",
      citation: "Liu, Y., Zhan, P., Fu, Y., **Chen, Q.**, Man, K., & Luo, Y. (2023). Using a multi-strategy eye-tracking psychometric model to measure intelligence and identify cognitive strategy in Raven’s Advanced Progressive Matrices. *Intelligence*, 100, 101782.",
      doi: "https://doi.org/10.1016/j.intell.2023.101782",
      jcr: "Q1",
      cas: "T2"
    },
    {
      id: "p7",
      year: 2023,
      title: "Don’t worry about the anchor-item setting",
      citation: "Yu, X., Zhan, P., & **Chen, Q.** (2023). Don’t worry about the anchor-item setting in longitudinal learning diagnostic assessments. *Frontiers in Psychology*, 14.",
      doi: "https://doi.org/10.3389/fpsyg.2023.1112463"
    },
    {
      id: "p8",
      year: 2023,
      title: "Longitudinal joint modeling for assessing parallel interactive development",
      citation: "Zhan, P., **Chen, Q.**, Wang, S., & Zhang, X. (2023). Longitudinal joint modeling for assessing parallel interactive development of latent ability and processing speed using responses and Response Times. *Behavior Research Methods*.",
      doi: "https://doi.org/10.3758/s13428-023-02113-5",
      jcr: "Q1",
      cas: "T2"
    }
  ],
  projects: [],
  workshops: [
    "Man, K., Toton, S., Gorney, K., & **Chen, Q.** (2025, April). Applying Data Mining Methods to Detect Test Fraud [Workshop session]. NCME Annual Meeting, Denver, CO."
  ],
  awards: [
    "Graduate Council Fellowship at The University of Alabama for 2024-2025"
  ],
  skills: [
    { category: "Python", items: ["pymc", "numpy", "numpyro", "seaborn"] },
    { category: "R", items: ["mirt", "gdina", "ggplot2"] },
    { category: "Database", items: ["SQL"] }
  ],
  blogs: BLOG_POSTS
};