import { EventRegistrationConfig, FormQuestion } from "@/types/types";

export const eventConfig: EventRegistrationConfig = {
  title: "General Members Registration",
  shortDescription:
    "Join Engineers Without Borders and make a difference through sustainable engineering solutions!",
  description:
    "Be part of a global movement of engineers working to empower communities through sustainable projects. As a member of Engineers Without Borders, you'll have opportunities to participate in local and international projects, network with experienced professionals, and develop valuable skills while making a positive impact. Our members work on projects ranging from water systems and renewable energy to infrastructure development in communities worldwide.",
  date: "Upto January 31st, 2025"
};
// Base questions that apply to all registrations
export const baseQuestions: FormQuestion[] = [
  {
    id: "name",
    label: "Full Name",
    type: "text",
    required: true,
    maxLength:50
  },
  {
    id: "email",
    label: "Email Address",
    type: "text",
    required: true,
    maxLength:50
  },
  {
    id:"college",
    label:"College Name",
    type:"text",
    required:true,
    maxLength:50
  },
  {
    id: "year",
    label: "Year of Study",
    type: "option",
    required: true,
    options: ["First", "Second", "Third", "Fourth"]
  }
];
// ... existing imports and eventConfig ...

// ... other imports and questions ...

export const projectQuestions: FormQuestion[] = [
  {
    id: "skillSet",
    label: "In this tenure, EWB Pulchowk's Research and Project Unit plans to initiate impactful social and academic projects. What are the major skill sets you're familiar with today? Your skill set could involve programming, creative design, engineering Simulation and Modeling, Machine Learning and Generative AI, etc. In 7-10 sentences, describe your specialty, and if possible, kindly mention 1-2 projects where you've implemented those skills.",
    type: "textarea",
    required: true,
    maxLength: 2000
  },
  {
    id: "researchChallenges",
    label: "You might have previously thought of initiating a major research work. What challenges did you face during the course of your work (if any) and how did you tackle them? In 7-9 sentences, explain. If not, then how do you plan to initiate your research work in the upcoming days?",
    type: "textarea",
    required: true,
    maxLength: 1500
  },
  {
    id: "academicInterest",
    label: "\"Academic Research can be a lot easier if the aspiring researcher has a strong command over the fundamentals of the research subject.\" You might also have a subject/engineering sub-field that you enjoy better than others and have slightly better command. In which core subject are you particularly interested and how does this field of study correlate with your current skill set? We ask this in order to assign you to the project that suits your interests/academic inclinations. Write in no more than 6 sentences.",
    type: "textarea",
    required: true,
    maxLength: 1000
  }
];

// Remove researchQuestions as it's now combined with projectQuestions

export const hrQuestions: FormQuestion[] = [
  {
    id: "recruitmentStrategy",
    label: "If there's a recruitment deadline approaching but you're getting fewer applications than expected, what would you do?",
    type: "textarea",
    required: true,
    maxLength: 1000
  },
  {
    id: "inclusionStrategy",
    label: "If a team member tells you they feel left out of important decisions, how would you handle their concerns and ensure they feel included in the future?",
    type: "textarea",
    required: true,
    maxLength: 1000
  }
];

export const creativeQuestions: FormQuestion[] = [
  {
    id: "detailOrientation",
    label: "How detail-oriented are you on a scale of 1 to 5? (1 being not at all, 5 being extremely meticulous)",
    type: "scale",
    required: true,
    min: 1,
    max: 5
  },
  {
    id: "designTools",
    label: "What design tools or software are you comfortable using? Please list them.",
    type: "textarea",
    required: true,
    maxLength: 500
  },
  {
    id: "contentCreationFrequency",
    label: "How often do you engage in writing or content creation?",
    type: "textarea",
    required: true,
    maxLength: 500
  },
  {
    id: "creativeProject",
    label: "In short describe about a creative project you've worked on.",
    type: "textarea",
    required: true,
    maxLength: 1000
  },
  {
    id: "creativeExpression",
    label: "What other forms of creative expression do you cherish (e.g., writing, photography, music)?",
    type: "textarea",
    required: true,
    maxLength: 500
  }
];

export const eventManagementQuestions: FormQuestion[] = [
  {
    id: "eventExperience",
    label: "Tell us about a recent event you organized/ attended or volunteered. What was the theme, and what were the key challenges you faced?",
    type: "textarea",
    required: true,
    maxLength: 1500
  },
  {
    id: "conflictManagement",
    label: "How do you manage conflicts within your team during the planning and execution of events?",
    type: "textarea",
    required: true,
    maxLength: 1000
  },
  {
    id: "challengingSituation",
    label: "Can you share a challenging situation you faced during an event and how you overcame it?",
    type: "textarea",
    required: true,
    maxLength: 1000
  },
  {
    id: "feedbackHandling",
    label: "How do you handle feedback from event attendees, both positive and negative?",
    type: "textarea",
    required: true,
    maxLength: 1000
  }
];

export const socialMediaQuestions: FormQuestion[] = [
  {
    id: "platformExpertise",
    label: "Which social media platforms are you most comfortable with, and how would you adapt content differently for each platform?",
    type: "textarea",
    required: true,
    maxLength: 1500
  },
  {
    id: "contentStrategy",
    label: "How would you share our work on social media? If we have a technical engineering post to share, how would you make it interesting for non-engineers?",
    type: "textarea",
    required: true,
    maxLength: 1500
  }
];


// Unit-specific questions

export const outreachQuestions: FormQuestion[] = [
  {
    id: "elevatorPitch",
    label: "If you had to convince someone in 30 seconds why they should support Engineers Without Borders, what would you say to make them put down their coffee and listen?",
    type: "textarea",
    required: true,
    maxLength: 1000
  },
  {
    id: "campaignStrategy",
    label: "If given the task to promote a community project with limited resources, how would you plan and execute the outreach campaign?",
    type: "textarea",
    required: true,
    maxLength: 1500
  },
  {
    id: "outreachSkills",
    label: "What communication and social media skills can you bring to the outreach team?",
    type: "textarea",
    required: true,
    maxLength: 1000
  },
  {
    id: "contentCreation",
    label: "Do you have experience in content creation (graphics, videos, writing)? Please describe.",
    type: "textarea",
    required: true,
    maxLength: 1000
  }
];

export const sponsorshipQuestions: FormQuestion[] = [
  {
    id: "sponsorApproach",
    label: "How would you approach a potential sponsor to secure funding or resources for our event or project?",
    type: "textarea",
    required: true,
    maxLength: 1500
  },
  {
    id: "relationshipBuilding",
    label: "What strategies or ideas do you have for building long-term relationships with sponsors?",
    type: "textarea",
    required: true,
    maxLength: 1500
  },
  {
    id: "negotiationExperience",
    label: "Describe any previous experience you have in negotiation or corporate communication.",
    type: "textarea",
    required: true,
    maxLength: 1000
  },
  {
    id: "sponsorshipGoals",
    label: "What do you think should be the key goals for the sponsorship unit in the coming year?",
    type: "textarea",
    required: true,
    maxLength: 1000
  }
];


export const technicalQuestions: FormQuestion[] = [
  {
    id: "programmingLanguages",
    label: "What programming languages are you proficient in?",
    type: "option",
    required: true,
    multiSelect: true,
    options: ["Python", "JavaScript", "Java", "C++", "C#", "PHP", "Other"]
  },
  {
    id: "projectExperience",
    label: "Describe any software projects you have built before. Include the technologies used and your role in the projects.",
    type: "textarea",
    required: true,
    maxLength: 1500
  },
  {
    id: "technicalInterests",
    label: "What areas of software development interest you the most? (e.g., web development, mobile apps, AI/ML, etc.)",
    type: "textarea",
    required: true,
    maxLength: 1000
  }
];
export const registrationQuestions: FormQuestion[] = [
  {
    id: "email",
    type: "text",
    label: "Email",
    required: true,
    maxLength: 50,
  },
  {
    id: "name",
    type: "text",
    label: "Your Name",
    required: true,
    maxLength: 50,
  },
  {
    id: "year",
    type: "option-with-input",
    label: "Which year of studies are you currently in?",
    options: ["Year 1", "Year 2", "Year 3", "Year 4"],
    required: true,
    placeholder: "Enter your current year",
    maxLength: 50,
  },
  {
    id: "stream",
    type: "option-with-input",
    label: "Stream",
    options: ["BCT", "BEI/BEX", "BEL"],
    required: true,
    maxLength: 50,
    placeholder: "Enter your stream",
  },
  {
    id: "campus",
    type: "option-with-input",
    label: "College/Campus",
    options: [
      "Pulchowk Campus",
      "Thapathali Campus",
      "Patan Multiple Campus",
      "Kathmandu Engineering College",
    ],
    required: true,
    maxLength: 100,
    placeholder: "Enter your campus name",
  },
  {
    id: "level_of_expertise",
    type: "option",
    required: true,
    label: "How would you rate your expertise in Data Analysis?",
    options: ["Beginner", "Intermediate", "Advanced"],
  },
  {
    id: "suggested_topics",
    type: "textarea",
    label: "Any specific topics you want the speakers to address?",
    required: false,
    maxLength: 1000,
  },
  {
    id: "email_notifications",
    type: "option",
    label: "Would you like to receive notifications about future events?",
    options: ["Yes", "No"],
    required: true,
  },
];