import React from 'react';
import { Heart, User, Sun, Briefcase } from 'lucide-react';
import { Dimension, QuizQuestion, ServicePackage } from './types';

export const NAV_ITEMS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Method', href: '#method' },
  { label: 'Assessment', href: '#assessment' },
  { label: 'Programs', href: '#programs' },
  { label: 'Shop', href: '#shop' },
];

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    text: "Are you holding your glass by the bowl… or the stem?",
    correctAnswer: true,
    options: ["By the bowl", "By the stem"]
  },
  {
    id: 2,
    text: "Do you know where your napkin belongs in formal dining?",
    correctAnswer: true,
    options: ["On the table", "On the chair"]
  },
  {
    id: 3,
    text: "Is your posture communicating certainty—or hesitation?",
    correctAnswer: true,
    options: ["Certainty", "Hesitation"]
  },
  {
    id: 4,
    text: "Do you understand hierarchy and introductions in professional settings?",
    correctAnswer: true,
    options: ["Yes", "Not entirely"]
  },
  {
    id: 5,
    text: "Are your emails structured with clarity, restraint, and professionalism?",
    correctAnswer: true,
    options: ["Yes", "Could be better"]
  }
];

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