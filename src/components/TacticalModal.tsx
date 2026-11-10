import React, { useState } from 'react';
import { 
  X, 
  Crosshair, 
  Compass, 
  Flame, 
  Zap,
  ArrowRight, 
  ArrowLeft,
  ShieldCheck, 
  Send,
  AlertCircle,
  Check
} from 'lucide-react';
import { FormAData, FormBData, FormCData, ExecutionNeed, ModalView } from '../types';

interface TacticalModalProps {
  view: ModalView;
  onClose: () => void;
  onSelectView: (view: ModalView) => void;
  onOpenCalendly: (leadName: string, leadCompany: string) => void;
}

const executionNeedOptions: ExecutionNeed[] = [
  'Corporate AV / Brand Film',
  'Website / SEO / Web App',
  'Packaging / 3D / Product Visuals',
  'Performance Marketing Campaign',
  'Integrated Campaign (Radio, Print, TVC, Outdoor + Digital)',
  'Event / Brand Activation / Trade Show',
];

const leadSourceOptions: string[] = [
  'Website forms',
  'Meta or Google ads',
  'WhatsApp',
  'Phone calls',
  'Walk-ins',
  'Marketplaces',
  'Other',
];

export const TacticalModal: React.FC<TacticalModalProps> = ({
  view,
  onClose,
  onSelectView,
}) => {
  // FORM A STATE
  const [formA, setFormA] = useState<FormAData>({
    name: '',
    companyAndUrl: '',
    monthlySpend: '',
    teamStructure: '',
    whatIsBroken: '',
    sixMonthVision: '',
    phone: '',
    email: '',
  });
  const [errorA, setErrorA] = useState<string>('');
  const [isSubmittingA, setIsSubmittingA] = useState<boolean>(false);

  // FORM B STATE
  const [formB, setFormB] = useState<FormBData>({
    name: '',
    company: '',
    whatNeeded: [],
    briefReady: '',
    budget: '',
    timeline: '',
    phone: '',
    email: '',
    challenge: '',
  });
  const [errorB, setErrorB] = useState<string>('');
  const [isSubmittingB, setIsSubmittingB] = useState<boolean>(false);

  // FORM C STATE
  const [formC, setFormC] = useState<FormCData>({
    name: '',
    companyAndUrl: '',
    leadSources: [],
    monthlyLeads: '',
    followUpSpeed: '',
    automateFirst: '',
    currentTools: '',
    phone: '',
    email: '',
  });
  const [errorC, setErrorC] = useState<string>('');
  const [isSubmittingC, setIsSubmittingC] = useState<boolean>(false);

  if (view === 'closed') return null;

  const handleToggleNeed = (item: ExecutionNeed) => {
    setFormB(prev => {
      const exists = prev.whatNeeded.includes(item);
      if (exists) {
        return { ...prev, whatNeeded: prev.whatNeeded.filter(n => n !== item) };
      } else {
        return { ...prev, whatNeeded: [...prev.whatNeeded, item] };
      }
    });
  };

  const handleToggleLeadSource = (source: string) => {
    setFormC(prev => {
      const exists = prev.leadSources.includes(source);
      if (exists) {
        return { ...prev, leadSources: prev.leadSources.filter(s => s !== source) };
      } else {
        return { ...prev, leadSources: [...prev.leadSources, source] };
      }
    });
  };

  const validatePhone = (phone: string): boolean => {
    const digits = phone.replace(/\D/g, '');
    return digits.length === 10 || (digits.length === 11 && digits.startsWith('0')) || (digits.length === 12 && digits.startsWith('91'));
  };

  const validateEmail = (email: string): boolean => {
    const trimmed = email.trim();
    return trimmed.includes('@') && trimmed.includes('.');
  };

  const handleSubmitFormA = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      !formA.name ||
      !formA.companyAndUrl ||
      !formA.monthlySpend ||
      !formA.teamStructure ||
      !formA.whatIsBroken ||
      !formA.phone ||
      !formA.email
    ) {
      setErrorA('Please fill in all required fields to evaluate leadership requirements.');
      return;
    }

    if (!validatePhone(formA.phone)) {
      setErrorA('Please enter a valid 10-digit phone number.');
      return;
    }

    if (!validateEmail(formA.email)) {
      setErrorA('Please enter a valid email address (must include @ and .)');
      return;
    }

    setErrorA('');
    setIsSubmittingA(true);

    const message = [
      'NEW LEAD - FORM A - THE LONG GAME',
      `Name: ${formA.name}`,
      `Company: ${formA.companyAndUrl}`,
      `Phone: ${formA.phone}`,
      `Email: ${formA.email}`,
      `Spend (INR): ${formA.monthlySpend}`,
      `Challenge: ${formA.whatIsBroken}`,
      ...(formA.sixMonthVision ? [`6-Month Vision: ${formA.sixMonthVision}`] : []),
    ].join('\n');

    window.open('https://wa.me/919820049031?text=' + encodeURIComponent(message), '_blank');
    window.open('mailto:connect@ekalavyaconsulting.com?subject=New Lead - FORM A - ' + formA.companyAndUrl + '&body=' + encodeURIComponent(message), '_blank');

    setTimeout(() => {
      setIsSubmittingA(false);
      onSelectView('thankYouA');
    }, 600);
  };

  const handleSubmitFormB = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      !formB.name ||
      !formB.company ||
      formB.whatNeeded.length === 0 ||
      !formB.briefReady ||
      !formB.budget ||
      !formB.timeline ||
      !formB.phone ||
      !formB.email
    ) {
      setErrorB('All fields and at least one execution deliverable are required.');
      return;
    }

    if (!validatePhone(formB.phone)) {
      setErrorB('Please enter a valid 10-digit phone number.');
      return;
    }

    if (!validateEmail(formB.email)) {
      setErrorB('Please enter a valid email address (must include @ and .)');
      return;
    }

    setErrorB('');
    setIsSubmittingB(true);

    const selectedDeliverables = formB.whatNeeded.join(', ');
    const challengeB = formB.challenge || `Timeline: ${formB.timeline} (Brief ready: ${formB.briefReady})`;

    const message = [
      `NEW LEAD - FORM B - ${selectedDeliverables}`,
      `Name: ${formB.name}`,
      `Company: ${formB.company}`,
      `Phone: ${formB.phone}`,
      `Email: ${formB.email}`,
      `Budget (INR): ${formB.budget}`,
      `Deliverables: ${selectedDeliverables}`,
      `Challenge: ${challengeB}`
    ].join('\n');

    window.open('https://wa.me/919820049031?text=' + encodeURIComponent(message), '_blank');
    window.open('mailto:connect@ekalavyaconsulting.com?subject=New Lead - FORM B - ' + formB.company + '&body=' + encodeURIComponent(message), '_blank');

    setTimeout(() => {
      setIsSubmittingB(false);
      onSelectView('thankYouB');
    }, 600);
  };

  const handleSubmitFormC = (e: React.FormEvent) => {
    e.preventDefault();
    if (
      !formC.name ||
      !formC.companyAndUrl ||
      formC.leadSources.length === 0 ||
      !formC.monthlyLeads ||
      !formC.followUpSpeed ||
      !formC.automateFirst ||
      !formC.phone ||
      !formC.email
    ) {
      setErrorC('Please fill in all required fields and select at least one lead source.');
      return;
    }

    if (!validatePhone(formC.phone)) {
      setErrorC('Please enter a valid 10-digit phone number.');
      return;
    }

    if (!validateEmail(formC.email)) {
      setErrorC('Please enter a valid email address (must include @ and .)');
      return;
    }

    setErrorC('');
    setIsSubmittingC(true);

    const sources = formC.leadSources.join(', ');

    const message = [
      'NEW LEAD - FORM C - THE SMART GAME (AI AUTOMATION)',
      `Name: ${formC.name}`,
      `Company: ${formC.companyAndUrl}`,
      `Phone: ${formC.phone}`,
      `Email: ${formC.email}`,
      `Lead Sources: ${sources}`,
      `Monthly Leads: ${formC.monthlyLeads}`,
      `Follow-Up Speed: ${formC.followUpSpeed}`,
      `Automate First: ${formC.automateFirst}`,
      ...(formC.currentTools ?
