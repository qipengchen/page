
import { ProfileData } from './types';

// Use the external Google Scholar image as requested
const avatarImage = "https://scholar.googleusercontent.com/citations?view_op=medium_photo&user=8qSJ1GYAAAAJ&citpid=1";

export const PROFILE: ProfileData = {
  name: "Qipeng Chen",
  title: "Ph.D. Student",
  department: "Educational Research Methods",
  university: "University of Alabama",
  email: "qchen23@crimson.ua.edu",
  avatar: avatarImage,
  socials: {
    github: "https://github.com/qipengchen",
    orcid: "https://orcid.org/0000-0003-3126-2487",
    researchgate: "https://www.researchgate.net/profile/Qipeng-Chen-4",
    googleScholar: "https://scholar.google.com/citations?user=8qSJ1GYAAAAJ&hl=en",
    linkedin: "https://www.linkedin.com/in/qipeng-chen-604528271/"
  },
  scholar: {
    citations: 75,
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
      degree: "Ph.D. Student",
      major: "Educational Research Methods",
      institution: "University of Alabama",
      location: "Tuscaloosa, AL, USA",
      period: "Aug 2024 – Present",
      advisor: "Advisor: Prof. Kaiwen Man"
    },
    {
      degree: "Master of Education",
      major: "Education",
      institution: "Zhejiang Normal University",
      location: "Jinhua, Zhejiang, China",
      period: "Sep 2020 – Jun 2023",
      advisor: "Advisor: Prof. Peida Zhan"
    },
    {
      degree: "Bachelor of Education",
      major: "Education",
      institution: "Hunan Normal University",
      location: "Changsha, Hunan, China",
      period: "2014 – 2019"
    }
  ],
  experience: [
    {
      role: "Teaching Assistant",
      company: "The University of Alabama",
      type: "Part-time",
      period: "Aug 2025 - Present",
      location: "Tuscaloosa, AL, USA",
      description: "Developed tutorial materials and data examples for BER 345: Educational Statistics, supporting undergraduate students in statistical concepts and applied data analysis."
    }
  ],
  publications: [
    {
      id: "p0",
      year: 2026,
      title: "Multi-source process data boosts Bayesian item compromise detection",
      citation: "**Chen, Q.**, Man, K., Zhang, S., & Harring, J. R. (under review). Multi-source process data boosts Bayesian item compromise detection: Integrating responses, response times, and fixation counts. *Psychometrika*."
    },
    {
      id: "p1",
      year: 2024,
      title: "Longitudinal joint modeling for assessing parallel interactive development",
      citation: "Zhan, P., **Chen, Q.**, Wang, S., & Zhang, X. (2024). Longitudinal joint modeling for assessing parallel interactive development of latent ability and processing speed using responses and response times. *Behavior Research Methods*, *56*, 1656–1677.",
      doi: "https://doi.org/10.3758/s13428-023-02113-5",
      jcr: "Q1"
    },
    {
      id: "p2",
      year: 2023,
      title: "Binary modeling of action sequences in problem-solving tasks",
      citation: "Fu, Y., **Chen, Q.**, & Zhan, P. (2023). Binary modeling of action sequences in problem-solving tasks: One- and two-parameter action sequence model. *Acta Psychologica Sinica*, *55*(8), 1383.",
      doi: "https://doi.org/10.3724/SP.J.1041.2023.01383"
    },
    {
      id: "p3",
      year: 2026,
      title: "Implementing cognitive component constraints in short-form Raven's APM",
      citation: "Zhan, P., **Chen, Q.**, Man, K., & Hao, N. (2026). Implementing cognitive component constraints in the development and validation of short-form Raven's Advanced Progressive Matrices based on item response theory. *Current Psychology*, *45*(4), 418. *[Co-first author]*",
      doi: "https://doi.org/10.1007/s12144-026-09075-9",
      jcr: "Q1"
    },
    {
      id: "p4",
      year: 2025,
      title: "Tracking the development of L2 reading subskills using longitudinal CDM",
      citation: "Chen, H., Lin, Z., **Chen, Q.**, & Zhan, P. (2025). Tracking the development of L2 reading subskills using longitudinal cognitive diagnosis models. *Language Assessment Quarterly*, *22*(2), 219–241.",
      doi: "https://doi.org/10.1080/15434303.2025.2497821",
      jcr: "Q2"
    },
    {
      id: "p5",
      year: 2025,
      title: "Key-action coding incorporating misconceptions in process data",
      citation: "Zhan, P., Gao, F., & **Chen, Q.** (2025). Key-action coding incorporating misconceptions and its application in diagnostic classification analysis of process data. *Journal of Psychological Science*, *48*(2), 481–494.",
      doi: "https://doi.org/10.16719/j.cnki.1671-6981.20250220"
    },
    {
      id: "p6",
      year: 2024,
      title: "Improvement and application of back random response detection",
      citation: "Li, Y., **Chen, Q.**, Gao, Y., & Liu, T. (2024). Improvement and application of back random response detection: Based on cumulative sum and change point analysis. *Behavior Research Methods*, *56*, 8640–8657.",
      doi: "https://doi.org/10.3758/s13428-024-02495-0",
      jcr: "Q1"
    },
    {
      id: "p7",
      year: 2024,
      title: "Development and validation of two shortened ASI-3 scales",
      citation: "Luo, Y., **Chen, Q.**, Chen, J., & Zhan, P. (2024). Development and validation of two shortened anxiety sensitivity index-3 scales based on item response theory. *Humanities and Social Sciences Communications*, *11*, 1078.",
      doi: "https://doi.org/10.1057/s41599-024-03615-z",
      jcr: "Q1"
    },
    {
      id: "p8",
      year: 2024,
      title: "Joint modeling of action sequences and action time",
      citation: "Fu, Y., Zhan, P., **Chen, Q.**, & Jiao, H. (2024). Joint modeling of action sequences and action time in computer-based interactive tasks. *Behavior Research Methods*, *56*, 4293–4310.",
      doi: "https://doi.org/10.3758/s13428-023-02178-2",
      jcr: "Q1"
    },
    {
      id: "p9",
      year: 2023,
      title: "Multi-strategy eye-tracking psychometric model for Raven's APM",
      citation: "Liu, Y., Zhan, P., Fu, Y., **Chen, Q.**, Man, K., & Luo, Y. (2023). Using a multi-strategy eye-tracking psychometric model to measure intelligence and identify cognitive strategy in Raven's Advanced Progressive Matrices. *Intelligence*, *100*, 101782.",
      doi: "https://doi.org/10.1016/j.intell.2023.101782",
      jcr: "Q1"
    },
    {
      id: "p10",
      year: 2023,
      title: "Don't worry about the anchor-item setting in longitudinal LDA",
      citation: "Yu, X., Zhan, P., & **Chen, Q.** (2023). Don't worry about the anchor-item setting in longitudinal learning diagnostic assessments. *Frontiers in Psychology*, *14*, 1112463.",
      doi: "https://doi.org/10.3389/fpsyg.2023.1112463",
      jcr: "Q1"
    }
  ],
  projects: [],
  workshops: [
    "Man, K., Toton, S., Gorney, K., & **Chen, Q.** (2025, April). *Applying Data Mining Methods to Detect Test Fraud* [Workshop]. NCME 2025 Annual Meeting, Denver, CO, United States.",
    "Man, K., Toton, S., Gorney, K., Li, J., & **Chen, Q.** (2026, April). *Applying Data Mining in Multi-Agent Systems for Test Fraud Detection* [Workshop]. NCME 2026 Annual Meeting, Los Angeles, CA, United States."
  ],
  presentations: [
    "**Chen, Q.**, Man, K., Zhang, S., & Harring, J. R. (2026, April 8–11). *Multi-source process data boosts item compromise detection*. NCME 2026 Annual Meeting, Los Angeles, CA, United States.",
    "Man, K., **Chen, Q.**, & Li, J. (2026, April 10). *Assessing pre-knowledge cheating via innovative measures*. NCME 2026 Annual Meeting, Los Angeles, CA, United States."
  ],
  awards: [
    "Graduate Council Fellowship (2024–2025), The University of Alabama — University-level merit fellowship awarded via departmental nomination, providing full tuition scholarship and competitive stipend for exceptional research potential."
  ],
  skills: [
    { category: "Python", items: ["pymc", "numpy", "numpyro", "seaborn"] },
    { category: "R", items: ["mirt", "gdina", "ggplot2"] },
    { category: "Database", items: ["SQL"] }
  ]
};
