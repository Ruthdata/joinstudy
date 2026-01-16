
export interface SetupStep {
  id: string;
  title: string;
  completed?: boolean;
  options?: string[];
}

export const SETUP_STEPS: SetupStep[] = [
  {
    id: "verify-email",
    title: "Verify Email",
    completed: true,
  },
  {
    id: "purpose",
    title: "What are you here to do?",
    options: [
      "Create and run studies",
      "Collect data",
      "Get paid to participate in studies",
      "Monitor progress with dashboards",
      "Just exploring",
      "Other",
    ],
  },
  {
    id: "description",
    title: "What best describes you?",
    options: [
      "Academic Researcher",
      "Market Researcher",
      "UX Researcher",
      "Student",
      "Participant",
      "Other",
    ],
  },
  {
    id: "organization",
    title: "What organization are you affiliated with?",
    options: [
      "University",
      "Research Institute",
      "Private Company",
      "Government Agency",
      "Non-Profit",
      "Independent",
      "Other",
    ],
  },
  {
    id: "team-size",
    title: "What is your team size?",
    options: [
      "Just me",
      "2-5 people",
      "6-10 people",
      "11-25 people",
      "26-50 people",
      "50+ people",
    ],
  },
  {
    id: "field",
    title: "What field do you work in?",
    options: [
      "Psychology",
      "Sociology",
      "Medicine",
      "Education",
      "Marketing",
      "Technology",
      "Economics",
      "Other",
    ],
  },
  {
    id: "experience",
    title: "How experienced are you with research?",
    options: [
      "Beginner - New to research",
      "Intermediate - Some experience",
      "Advanced - Very experienced",
      "Expert - Research is my specialty",
    ],
  },
  {
    id: "budget",
    title: "What is your monthly research budget?",
    options: [
      "Less than $500",
      "$500 - $1,000",
      "$1,000 - $5,000",
      "$5,000 - $10,000",
      "$10,000+",
      "Not sure yet",
    ],
  },
];