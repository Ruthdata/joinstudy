export interface Survey {
  id: number;
  title: string;
  reward: number;
  duration: string;
  endsIn: string;
  imageUrl: string;
  author: {
    name: string;
    company: string;
    avatar: string;
  };
}

export const SURVEYS_DATA: Survey[] = [
  {
    id: 1,
    title: "Market Research On Mobile Banking",
    reward: 46000.50,
    duration: "10min",
    endsIn: "2 days",
    imageUrl: "/images/survey-placeholder.jpg",
    author: {
      name: "Orji Maxwell",
      company: "Avvic Group Of Companies",
      avatar: "/images/avatar-1.jpg"
    }
  },
  {
    id: 2,
    title: "Market Research On Mobile Banking",
    reward: 46000.50,
    duration: "10min",
    endsIn: "2 days",
    imageUrl: "/images/survey-placeholder.jpg",
    author: {
      name: "Orji Maxwell",
      company: "Avvic Group Of Companies",
      avatar: "/images/avatar-1.jpg"
    }
  },
  {
    id: 3,
    title: "Market Research On Mobile Banking",
    reward: 46000.50,
    duration: "9min",
    endsIn: "2 days",
    imageUrl: "/images/survey-placeholder.jpg",
    author: {
      name: "Orji Maxwell",
      company: "Avvic Group Of Companies",
      avatar: "/images/avatar-1.jpg"
    }
  },
  {
    id: 4,
    title: "Market Research On Mobile Banking",
    reward: 46000.50,
    duration: "10min",
    endsIn: "2 days",
    imageUrl: "/images/survey-placeholder.jpg",
    author: {
      name: "Orji Maxwell",
      company: "Avvicy Group Of Companies",
      avatar: "/images/avatar-1.jpg"
    }
  },
  {
    id: 5,
    title: "Market Research On Mobile Banking",
    reward: 46000.50,
    duration: "10min",
    endsIn: "2 days",
    imageUrl: "/images/survey-placeholder.jpg",
    author: {
      name: "Orji Maxwell",
      company: "Avvicy Group Of Companies",
      avatar: "/images/avatar-1.jpg"
    }
  },
  {
    id: 6,
    title: "Market Research On Mobile Banking",
    reward: 46000.50,
    duration: "9min",
    endsIn: "2 days",
    imageUrl: "/images/survey-placeholder.jpg",
    author: {
      name: "Orji Maxwell",
      company: "Avvicy Group Of Companies",
      avatar: "/images/avatar-1.jpg"
    }
  },
];