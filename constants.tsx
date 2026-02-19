import React from 'react';
import { Heart, User, Sun, Briefcase } from 'lucide-react';
import { Dimension, QuizQuestion, ServicePackage } from './types';

export const NAV_ITEMS = [
  { label: 'Home', href: '/#home' },
  { label: 'About', href: '/#about' },
  { label: 'Method', href: '/#method' },
  { label: 'Assessment', href: '/#assessment' },
  { label: 'Programs', href: '/programs' },
  { label: 'Shop', href: '/shop' },
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    text: "You arrive at a business meeting and the other person is late. You:",
    correctAnswer: "Stay calm, review your notes, and greet them professionally when they arrive.",
    options: [
      "Complain about it to others.",
      "Scroll on your phone and show your irritation.",
      "Stay calm, review your notes, and greet them professionally when they arrive."
    ]
  },
  {
    id: 2,
    text: "You enter a room full of colleagues or clients. What’s the most professional and respectful way to do it?",
    correctAnswer: "Pause, make eye contact, smile, and greet those present",
    options: [
      "Walk in quickly and sit down quietly",
      "Pause, make eye contact, smile, and greet those present",
      "Wait silently in the corner until someone speaks to you"
    ]
  },
  {
    id: 3,
    text: "You’ve just met a new client or colleague. What’s the most respectful way to follow up after your meeting?",
    correctAnswer: "Email the same day to thank them for their time",
    options: [
      "Send a casual text the next week",
      "Email the same day to thank them for their time",
      "Wait until you need something to reach out"
    ]
  },
  {
    id: 4,
    text: "At a networking event, someone interrupts you while you are speaking. You:",
    correctAnswer: "Pause, let them speak, then calmly continue when appropriate.",
    options: [
      "Pause, let them speak, then calmly continue when appropriate.",
      "Raise your voice to finish your point.",
      "Interrupt them back."
    ]
  },
  {
    id: 5,
    text: "On a first date, the person criticizes their ex and overshares personal problems. You:",
    correctAnswer: "Politely change the subject and observe their maturity.",
    options: [
      "Join in and share your past stories.",
      "Comfort them and go deep into the topic.",
      "Politely change the subject and observe their maturity."
    ]
  },
  {
    id: 6,
    text: "You are invited to someone’s home for dinner. You:",
    correctAnswer: "Arrive on time with a small thoughtful gift and thank the host sincerely.",
    options: [
      "Arrive empty-handed and late.",
      "Arrive on time with a small thoughtful gift and thank the host sincerely.",
      "Arrive on time but bring nothing."
    ]
  },
  {
    id: 7,
    text: "You are hosting guests in your home. After greeting them and taking their coats, what should you do next?",
    correctAnswer: "Briefly show them where the bathroom is and let them know they are comfortable to use it anytime.",
    options: [
      "Start serving drinks immediately and continue chatting.",
      "Wait until they ask if they need anything.",
      "Briefly show them where the bathroom is and let them know they are comfortable to use it anytime."
    ]
  }
];

export const QUIZ_RESULTS = {
  ASCENDING: {
    title: "The Ascending Standard",
    subtitle: "You are perceptive and approaching refinement.",
    description: "You understand that social environments operate on subtle codes — yet mastery is not fully instinctive. At times, posture, communication, or gesture may lack precision.\n\nPresence is not about knowing the rules. It is about alignment.\n\nAs calibration becomes consistent, your authority will register without effort.",
    scoreRange: "0–3 Points"
  },
  COMPOSED: {
    title: "The Composed Authority",
    subtitle: "You move with intention and discernment.",
    description: "Your language, posture, and awareness reflect structure and control. You understand hierarchy and communicate with discipline.\n\nAt this level, refinement is no longer about correction — it is about polish. Subtlety becomes your advantage.\n\nYou are not learning etiquette. You are shaping perception.",
    scoreRange: "4–6 Points"
  },
  EXECUTIVE: {
    title: "The Executive Standard",
    subtitle: "Your presence is measured and unmistakably assured.",
    description: "Authority is conveyed through restraint. Precision governs your conduct. Composure anchors every interaction.\n\nYou understand that etiquette is strategic — a signal of intelligence and internal certainty.\n\nYou do not adapt to the room. The room adjusts to you.",
    scoreRange: "7 Points"
  }
};


export const METHOD_DIMENSIONS: Dimension[] = [
  {
    title: "EMOTIONAL",
    description: "Composure, boundaries, self-command",
    icon: <Heart className="w-6 h-6 text-gold-500" />
  },
  {
    title: "PHYSICAL",
    description: "Posture, grooming, body language, presentation",
    icon: <User className="w-6 h-6 text-gold-500" />
  },
  {
    title: "SPIRITUAL",
    description: "Integrity, sincerity, grace under pressure",
    icon: <Sun className="w-6 h-6 text-gold-500" />
  },
  {
    title: "PROFESSIONAL / FINANCIAL",
    description: "Business etiquette, executive presence, opportunity-ready conduct",
    icon: <Briefcase className="w-6 h-6 text-gold-500" />
  }
];

export const SERVICES: ServicePackage[] = [
  {
    title: "1:1 Private Etiquette & Presence Session",
    duration: "60 Minutes",
    audience: "Adults | Private",
    description: "A focused private session to refine your presence in real time—whether you’re preparing for business, dating, travel, public visibility, or a personal reinvention.",
    features: [
      "Body language and posture calibration",
      "First impressions and introductions",
      "Social and business conduct",
      "Digital etiquette (email, calls, messaging)",
      "Boundaries, composure, and confident communication"
    ],
    cta: "Book Now",
    href: "https://sofia.style/products/1-1-lesson-on-etiquette-manners-60min?pr_prod_strat=e5_desc&pr_rec_id=dbc92f92c&pr_rec_pid=6999429152861&pr_ref_pid=6670483128413&pr_seq=uniform"
  },
  {
    title: "Private Short Course",
    duration: "3 Private Sessions | 60 Minutes Each",
    audience: "Adults",
    description: "A structured refinement program for women who want deeper transformation—not inspiration that fades. Choose your focus:",
    features: [
      "PERSONAL: posture, grooming, dining, boundaries",
      "PROFESSIONAL: greetings, email, networking",
      "SOCIAL: hosting, conversation, events, dating"
    ],
    cta: "Book Now",
    href: "https://sofia.style/products/one-to-one-etiquette-manners-short-course-for-adults?pr_prod_strat=e5_desc&pr_rec_id=424c4f9c2&pr_rec_pid=15603151438173&pr_ref_pid=6999429152861&pr_seq=uniform"
  },
  {
    title: "Youth Excellence",
    duration: "60 Minutes | Personalized",
    audience: "Under 18",
    description: "Private Youth Lesson. Confidence is built—not wished for.",
    features: [
      "First impressions & respectful greetings",
      "Posture & body awareness",
      "Dining confidence",
      "Polite communication",
      "Cultural awareness and public behavior"
    ],
    cta: "Book Now",
    href: "https://sofia.style/products/etiquette-manners-private-lessons-for-kids-young-adults?pr_prod_strat=e5_desc&pr_rec_id=7690fc634&pr_rec_pid=9510315557213&pr_ref_pid=15603151438173&pr_seq=uniform"
  },
  {
    title: "Youth Short Course",
    duration: "3 Lessons | 50–60 Minutes Each",
    audience: "Youth",
    description: "A structured foundation in first impressions, social graces, and essential table manners—designed to build confidence, not entitlement.",
    features: [],
    cta: "Book Now",
    href: "https://sofia.style/products/etiquette-manners-of-3-lessons-60min-each-for-kids-young-adults?pr_prod_strat=e5_desc&pr_rec_id=80da18c3c&pr_rec_pid=9769149071709&pr_ref_pid=9510315557213&pr_seq=uniform"
  }
];