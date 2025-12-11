import type { Experience } from "../types/experiences";

export const EXPERIENCES: Experience[] = [
//   {
//     id: "simplamo",
//     companyName: "Simplamo Enterprise JSC",
//     companyLogo: "https://assets.chanhdai.com/images/companies/simplamo.webp",
//     positions: [
//       {
//         id: "20f8bfe5-b6a3-4b0d-ac2f-6fccd50d417e",
//         title: "Senior Frontend Developer",
//         employmentPeriod: {
//           start: "10.2022",
//         },
//         employmentType: "Full-time",
//         icon: "code",
//         description: `- Develop [AI Chat](https://help.simplamo.com/features/simplamo-ai/ai-chat/guide_simplamo_ai_chat?ref=IN-926722) and [AI Assistant](https://help.simplamo.com/features/simplamo-ai/ai-expert/aiexpert-rockdiscribe?ref=IN-926722) features.
// - Develop [Whiteboards](https://help.simplamo.com/features/whiteboard/overview?ref=IN-926722) with real-time collaboration.
// - Build and maintain the [Zalo Mini App](https://zalo.me/s/1736112917405511258/) for Simplamo with seamless integration.
// - Develop interactive chart and analytics widgets for the [Dashboard](https://help.simplamo.com/features/dashboard/overview) to enhance data visualization.
// - Develop and maintain core features to enhance functionality and user experience.
// - Ensure UI/UX consistency and adherence to standards.
// - Implement robust frontend solutions for web and mobile platforms.
// - Analyze technical capabilities and provide optimal solutions.`,
//         skills: [
//           "TypeScript",
//           "Next.js",
//           "React Native",
//           "MobX",
//           "MobX-State-Tree",
//           "Tailwind CSS",
//           "Dify",
//           "Zalo Mini App",
//           "Agile",
//           "Teamwork",
//           "Research",
//           "Problem-solving",
//         ],
//         isExpanded: true,
//       },
//       {
//         id: "cedd7adb-4118-4085-9983-ae00530b49e2",
//         title: "UI Design Lead",
//         employmentPeriod: {
//           start: "10.2022",
//         },
//         employmentType: "Full-time",
//         icon: "design",
//         description: `- Ensure UI/UX consistency and high-quality standards.
// - Design intuitive, user-focused interfaces aligned with business goals.
// - Define and establish a cohesive UI style for Simplamo.`,
//         skills: ["Creativity", "UI/UX Design", "Figma"],
//       },
//     ],
//     isCurrentEmployer: true,
//   },
  {
    id: "quaric",
    companyName: "Madhusudan Grp",
    companyLogo: "https://assets.chanhdai.com/images/companies/quaric.svg",
    positions: [
      {
        id: "30d3a9fb-021d-452a-9d27-83655369b4b9",
        title: "SDE intern",
        employmentPeriod: {
          start: "05.2025",
          end : "07.2025"
        },
        employmentType: "",
        icon: "code",
        description: `Built a dynamic reporting interface using AG-Grid, enabling customizable layouts for enterprise workflows.

- Implemented complex JSON parsing & bi-directional data transformation (5+ metadata fields).

In-house Project: **Dynamic Report Tool** — React

- Designed and developed a modular UI for flexible report configuration.

- Enabled dynamic grid restructuring and metadata-driven column layouts.

In-house Project: **SnapView** — REST API, SQL

- Developed analytics APIs enabling real-time & filtered sales insights.

- Implemented dynamic SQL query generation based on 10+ user parameters for multi-level grouping (partner, item, executive, etc).

- Ensured security & data integrity with parameter binding to prevent SQL injection attacks.`,
        skills: [
          "React.js",
          "AG-Grid",
          "REST API",
          "SQL",
          "Dynamic Query Generation",
          "Parameter Binding",
          "JSON Parsing",
          "Data Modeling"
        ],
        isExpanded: true,
      }
    ],
    isCurrentEmployer: true,
  },
  {
    id: "tungtung",
    companyName: "Indian Institute of Information Technology Vadodara",
    companyLogo: "images/link-icons/IIITV_logo.png",
    positions: [
      {
        id: "3e831244-8d8c-41e2-b2ce-7f3946956afd",
        title: "Teaching Assistant",
        employmentPeriod: {
          start: "01.2025",
          end: "04.2025",
        },
        employmentType: "Part-time",
        description: `- Assisted in conducting CS102: Data Structures for a batch of 200+ students.
- Delivered conceptual explanations for core topics such as arrays, linked lists, stacks, queues, trees, and graphs.
- Conducted 10+ quizzes and helped evaluate assignments, improving learning outcomes based on semester feedback.
- Guided students through problem-solving patterns, time complexity reasoning, and code implementation.
- Provided doubt-solving sessions and helped mentor students.`,
        icon: "education",
        skills: [
          "Data Structures",
    "Problem Solving",
    "Teaching & Mentoring",
    "DSA in C++",
    "Time Complexity Analysis",
    "Communication",
    "Guidance & Evaluation",
        ],
      }
    ],
  },
  {
    id: "freelance",
    companyName: "E-Cell IIITV",
    positions: [
      {
        id: "f0becfba-057d-40db-b252-739e1654faa1",
        title: "Core Member",
        employmentPeriod: {
          start: "08.2024",
        end: "12.2024",
        },
        employmentType: "Part-time",
        description: `- Organized an educational workshop attended by 70+ participants.
- Managed logistics, coordination, and event flow to ensure smooth execution.
- Contributed to drafting and structuring the SSIP constitution documentation.
- Assisted in planning initiatives promoting entrepreneurship on campus.`,
        icon: "business",
        skills: [
          "Event Management",
        "Team Coordination",
        "Documentation",
        "Leadership",
        "Communication",
        "Planning & Execution"
        ],
      }
    ],
  },
  {
    id: "education",
    companyName: "Education",
    positions: [
      {
        id: "c47f5903-88ae-4512-8a50-0b91b0cf99b6",
        title: "Indian Institute of Information Technology Vadodara",
        employmentPeriod: {
          start: "2022",
          end: "2026",
        },
        icon: "education",
        description: `- Currently studying for a Bachelor's degree in Computer Science and Engineering.
- Achieved several awards, including:
  - Rank 5, with CGPA: 9.15.
  - Rank 2 across institute in Engineering round of honour conducted by naukri.com.
  `,
        skills: [
          "C",
          "C++",
          "JavaScript",
          "SQL",
          "Data Structures",
          "Algorithms",
          "Advanced Databases",
          "Systems Design",
          "Distributed Systems",
          "Software Engineering",
          "Teamwork",
        ],
      },
      {
        id: "70131ed8-36d9-4e54-8c78-eaed18240eca",
        title: "Bhulka Vihar School",
        employmentPeriod: {
          start: "2010",
          end : "2020"
        },
        icon: "education",
        description: `- 
- Stood among top 1% students across state with percentile 99.82
- Scored A1 grade in 10th Boards in high school.
- Achieving rank 3 in 10th Boards in high school.
- Achieved numerous awards at school and national levels, including:
- Internatinal Maths Olympiad
- National Scicence Olympiad 
- Honored on the school's "Hall of Fame" for academic achievements.`,
//  skills: [
//           "Algorithms",
//           "C++",
//           "PHP",
//           "MySQL",
//           "Laravel",
//           "Node.js",
//           "Pandoc",
//           "Self-learning",
//         ],
      },
//       {
//         id: "36c4c6fb-02d0-48c0-8947-fda6e9a24af7",
//         title: "Thuan Hung Secondary School",
//         employmentPeriod: {
//           start: "08.2011",
//           end: "06.2015",
//         },
//         icon: "education",
//         description: `- Recognized as the most outstanding student of the district.
// - Achieved numerous awards at city and national levels:
//   - Consolation Prize — National Young Informatics Contest 2015
//   - Consolation Prize — National Young Informatics Contest 2014
//   - 1st Prize — Can Tho City Young Informatics Contest 2014
// - Achieved the title of Outstanding Student from Grade 6-9.
// - Developed websites using the open-source NukeViet CMS.`,
//         skills: [
//           "Pascal",
//           "NukeViet",
//           "HTML",
//           "CSS",
//           "JavaScript",
//           "Self-learning",
//         ],
//       },
    ],
  },
];
