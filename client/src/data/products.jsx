import React from 'react';

// Fire Safety Images
import fs0 from '../assets/products/fire-safety/Screenshot_2026-03-25_19-48-37.png';
import fs1 from '../assets/products/fire-safety/Screenshot_2026-04-27_12-48-12.png';
import fs2 from '../assets/products/fire-safety/Screenshot_2026-04-27_12-54-05.png';
import fs3 from '../assets/products/fire-safety/Screenshot_2026-04-27_12-54-42.png';

// Car Maintenance Images
import cm0 from '../assets/products/car-maintenance/Screenshot_2026-04-27_13-31-45.png';
import cm1 from '../assets/products/car-maintenance/Screenshot_2026-04-27_13-32-20.png';
import cm2 from '../assets/products/car-maintenance/Screenshot_2026-04-27_13-33-19.png';
import cm3 from '../assets/products/car-maintenance/Screenshot_2026-04-27_13-34-30.png';
import cm4 from '../assets/products/car-maintenance/Screenshot_2026-04-27_13-36-08.png';
import cm5 from '../assets/products/car-maintenance/Screenshot_2026-04-27_13-37-37.png';
import cm6 from '../assets/products/car-maintenance/Screenshot_2026-04-28_14-37-19.png';

// Oil Rig Images
import or0 from '../assets/products/oilrig/Screenshot_2026-03-25_20-04-15.png';
import or1 from '../assets/products/oilrig/Screenshot_2026-03-25_20-05-01.png';
import or2 from '../assets/products/oilrig/Screenshot_2026-03-25_20-05-25.png';
import or3 from '../assets/products/oilrig/Screenshot_2026-04-27_13-25-33.png';

// Mobile Sim Image
import ms0 from '../assets/products/mobile-sim/MobileSimulation Thumbnail.png';

export const productList = [
  {
    id: "01",
    name: "VR Safety Simulation",
    tagline: "Fire Training Environment",
    desc: "Highly immersive virtual environments designed for realistic hands-on training.",
    images: [fs0, fs1, fs2, fs3],
    categories: ["hardware", "VR"],
    features: ["Risk-free learning", "Better retention", "Repeatable scenarios"],
    detailTitle: "VR Based\nFire Safety Training",
    detailContent: (
      <>
        <p className="text-brand-steel text-sm md:text-base leading-[1.8] font-medium tracking-wide">
          An immersive virtual <strong className="font-bold text-brand-teal">Fire Training Environment</strong> centered on realistic scenarios, operational accuracy, and <strong className="font-bold text-brand-teal">consistent skill development.</strong> High-fidelity digital representations of real-world environments, equipment, and procedures within <strong className="font-bold text-brand-teal">a risk-free setting.</strong> Standardized training experiences across teams and locations, reduced reliance on physical infrastructure, and improved knowledge retention through experiential learning.
        </p>
        <p className="text-brand-steel text-sm md:text-base leading-[1.8] font-medium tracking-wide mt-5">
          <strong className="font-bold text-brand-teal">Clear visualization</strong> of complex processes, scenario-based exposure to critical situations, and structured learning pathways for both new and experienced personnel. <strong className="font-bold text-brand-teal">A scalable training solution</strong> aligned with safety compliance, operational efficiency, and modern workforce readiness.
        </p>
      </>
    )
  },
  {
    id: "02",
    name: "Mixed Reality Experiences",
    tagline: "Automotive Maintenance VR Training",
    desc: "Blend physical interaction with digital simulations for advanced training.",
    images: [cm0, cm1, cm2, cm3, cm4, cm5, cm6],
    categories: ["software", "maintenance", "VR"],
    features: ["Equipment handling", "Maintenance training", "Safety procedures"],
    detailTitle: "Automotive Maintenance\nVR Training",
    detailContent: (
      <>
        <p className="text-brand-steel text-sm md:text-base leading-[1.8] font-medium tracking-wide">
          A high-fidelity virtual maintenance training environment designed for <strong className="font-bold text-brand-teal">automotive and machinery</strong> operations. Detailed digital representations of engines, components, and maintenance workflows without disruption to live production.
        </p>
        <p className="text-brand-steel text-sm md:text-base leading-[1.8] font-medium tracking-wide mt-5">
          <strong className="font-bold text-brand-teal">Standardized maintenance practices</strong> across shifts and plants, reduced reliance on senior technicians, and improved technical understanding through guided simulation-based learning. Increased equipment reliability, improved operational continuity, and stronger adherence to safety standards.
        </p>
      </>
    )
  },
  {
    id: "03",
    name: "VR Training Simulations",
    tagline: "Oil Rig Emergency Training",
    desc: "Highly immersive virtual environments designed for realistic hands-on training.",
    images: [or0, or1, or2, or3],
    categories: ["hardware", "emergency", "VR"],
    features: ["Real-world experience", "Faster onboarding", "Risk-free learning"],
    detailTitle: "VR Based\nEmergency Training",
    detailContent: (
      <>
        <p className="text-brand-steel text-sm md:text-base leading-[1.8] font-medium tracking-wide">
          An immersive VR-based training platform designed for <strong className="font-bold text-brand-teal">oil rig emergency scenarios</strong>, enabling workers to experience high-risk situations in a completely <strong className="font-bold text-brand-teal">risk-free virtual environment</strong>. The system delivers realistic simulations of critical incidents, allowing personnel to practice response procedures without real-world danger.
        </p>
        <p className="text-brand-steel text-sm md:text-base leading-[1.8] font-medium tracking-wide mt-5">
          It reduces <strong className="font-bold text-brand-teal">training costs</strong>, minimizes dependency on physical setups, and ensures <strong className="font-bold text-brand-teal">standardized training</strong> across teams. Through experiential learning, workers improve decision-making, safety awareness, and response accuracy, resulting in a more prepared and resilient workforce.
        </p>
      </>
    )
  },
  {
    id: "04",
    name: "Mobile-Based Training",
    tagline: "Interactive mobile simulations accessible anytime",
    desc: "Interactive mobile simulations accessible anytime, anywhere.",
    images: [ms0],
    categories: ["software", "mobile"],
    features: ["Easy deployment", "Remote accessibility", "Cost-effective"],
    detailTitle: "Mobile Based\nTraining Simulations",
    detailContent: (
      <>
        <p className="text-brand-steel text-sm md:text-base leading-[1.8] font-medium tracking-wide">
          A mobile-based simulation training platform designed for easy access and on-the-go learning, eliminating the need for specialized hardware like VR headsets. Training is delivered directly through <strong className="font-bold text-brand-teal">smartphones and tablets</strong>, enabling workers to practice procedures anytime, anywhere.
        </p>
        <p className="text-brand-steel text-sm md:text-base leading-[1.8] font-medium tracking-wide mt-5">
          The platform emphasizes <strong className="font-bold text-brand-teal">precision-driven learning</strong>, guiding users through accurate, step-by-step simulations to improve task execution and decision-making. It enhances <strong className="font-bold text-brand-teal">training effectiveness</strong>, reduces setup complexity, and ensures workers are better prepared through consistent, repeatable experiences.
        </p>
        <p className="text-brand-steel text-sm md:text-base leading-[1.8] font-medium tracking-wide mt-5">
          By making training more accessible and practical, it supports <strong className="font-bold text-brand-teal">higher accuracy, improved confidence</strong>, and a more skilled and reliable workforce.
        </p>
      </>
    )
  }
];
