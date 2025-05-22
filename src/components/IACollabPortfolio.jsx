import React, { useState } from 'react';

// Header Section
const HeaderSection = () => (
  <header className="pt-32 pb-10 bg-transparent rounded-2xl shadow-lg mb-8 text-center">
    <h1 className="text-4xl font-bold mb-2 text-white drop-shadow-lg">IA Collaborative Portfolio</h1>
  </header>
);

// Image Modal Component
const ImageModal = ({ src, alt, onClose }) => (
  <div className="fixed inset-0 flex items-center justify-center z-50">
    <div className="absolute inset-0 bg-black opacity-75" onClick={onClose} />
    <div className="bg-white rounded-lg overflow-hidden shadow-lg max-w-5xl w-full z-10">
      <div className="relative pb-[60%]">
        <img src={src} alt={alt} className="absolute inset-0 w-full h-full object-contain" />
      </div>
      <button onClick={onClose} className="absolute top-2 right-2 text-gray-500 hover:text-gray-700">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
  </div>
);

// Architecture Section
const ArchitectureSection = ({ title, imgSrc, imgAlt, description, principles, personas }) => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <section className="bg-[#F5F5F5] rounded-2xl shadow-lg p-8 mb-10 flex flex-col md:flex-row gap-10 items-center border border-[#e5e0d8] min-h-[400px] min-w-full">
      <div className="w-full md:w-2/3 flex justify-center items-center order-1 md:order-2 min-h-[340px] min-w-[400px]">
        <div className="rounded-xl shadow-md flex items-center justify-center min-h-[320px] min-w-[380px] w-full cursor-zoom-in border border-[#e5e0d8] bg-[#f8f6f2]" onClick={() => setModalOpen(true)}>
          <img src={imgSrc} alt={imgAlt} className="h-[340px] w-auto max-w-full object-scale-down transition-transform duration-200" style={{ imageRendering: 'auto' }} />
        </div>
        {modalOpen && <ImageModal src={imgSrc} alt={imgAlt} onClose={() => setModalOpen(false)} />}
      </div>
      <div className="flex-1 order-2 md:order-1 flex flex-col justify-between h-full">
        <h2 className="text-3xl font-bold mb-4 text-[#23263a] drop-shadow text-left">{title}</h2>
        <div className="mb-6 text-[#3d3a2f] text-base text-left">{description}</div>
        <div className="flex flex-wrap gap-2 mt-2 mb-4">
          {principles.map((p, i) => (
            <span key={i} className="bg-yellow-100 text-yellow-900 px-3 py-1 rounded-full text-xs font-semibold shadow">{p}</span>
          ))}
        </div>
        {personas && (
          <div className="mt-4">
            <h4 className="font-semibold text-[#23263a] mb-1">Personas & Stakeholders</h4>
            <ul className="list-disc list-inside text-[#5a5544] text-sm">
              {personas.map((p, i) => <li key={i}>{p}</li>)}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
};

// Project Card
const ProjectCard = ({ title, subtitle, description, link, icon, tags }) => (
  <div className="bg-[#f8f6f2] rounded-2xl shadow-lg p-6 flex flex-col items-center hover:shadow-2xl transition group border border-[#e5e0d8] h-full min-h-[390px] justify-between font-sans">
    <div className="mb-4 flex items-center justify-center w-28 h-28 bg-white rounded-xl overflow-hidden border border-[#e5e0d8]">
      {icon}
    </div>
    <div className="text-center mb-2">
      <h3 className="font-bold text-lg text-[#23263a] group-hover:text-primary transition drop-shadow leading-tight">{title}</h3>
      {subtitle && <div className="text-[15px] text-gray-500 font-semibold leading-tight">{subtitle}</div>}
    </div>
    <div className="flex flex-wrap gap-2 justify-center mb-2">
      {tags && tags.map((tag, i) => (
        <span key={i} className="bg-blue-100 text-blue-800 px-2 py-0.5 rounded-full text-xs font-semibold">{tag}</span>
      ))}
    </div>
    <p className="text-[#5a5544] text-sm mb-4 text-center leading-relaxed flex-1">{description}</p>
    <a href={link} className="text-primary font-semibold underline group-hover:text-primary-dark mb-2">View</a>
  </div>
);

// Projects Table
const ProjectsTable = () => (
  <section className="mb-8 mt-16">
    <h2 className="text-2xl font-bold mb-4 text-white drop-shadow font-sans">Highlighted Projects</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      <ProjectCard 
        title="Coin Crew"
        subtitle={<span>Microsoft Case Competition Winner <span className='inline-block'>🏆</span></span>}
        description="Designed an innovative payment product for Microsoft’s case competition, focusing on seamless digital and physical currency integration for Gen Z."
        link="https://www.canva.com/design/DAGdJAKFC1o/LmgFxRrYugQS-vsApXt6KQ/edit?utm_content=DAGdJAKFC1o&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
        icon={<img src="/assets/coincrew_project.png" alt="Coin Crew thumbnail" className="w-full h-full object-contain" />}
        tags={["Product Strategy", "Collaboration", "Rapid Prototyping"]}
      />
      <ProjectCard 
        title="Snapchat"
        subtitle="Product Improvement"
        description="Proposed vision-led feature enhancements to improve social experience and engagement on Snapchat, with a focus on AR and GenAI-driven interactions."
        link="https://www.canva.com/design/DAGhA0oKXeg/0Ta6owLEYWH2MBKgAzGsrQ/edit?utm_content=DAGhA0oKXeg&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
        icon={<img src="/assets/Snap_image.png" alt="Snapchat thumbnail" className="w-full h-full object-contain" />}
        tags={["User Empathy", "Vision-Led Design", "Innovation"]}
      />
      <ProjectCard 
        title="Co-habit"
        subtitle="Design Thinking"
        description="Developed a chore-sharing and conflict resolution app for cohabitants, leveraging behavioral nudges and gamification. Presented as a final project for IMT 565."
        link="https://www.canva.com/design/DAGGqTZ_FUU/XYX7-w2t4JkCSAvpUqEzOg/edit?utm_content=DAGGqTZ_FUU&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
        icon={<img src="/assets/cohabit_project.png" alt="Co-habit thumbnail" className="w-full h-full object-contain" />}
        tags={["Design Thinking", "Behavioral Science", "Teamwork"]}
      />
      <ProjectCard 
        title="Form Filling Chatbot"
        subtitle="AI PoC development"
        description="Conversational AI assistant that demystifies complex tax forms and improves accessibility. Long-term goal: make form completion easy for everyone using natural language and smart automation."
        link="#form-filling-chatbot"
        icon={<img src="/assets/form_filling_chatbot.png" alt="Form Filling Chatbot thumbnail" className="w-full h-full object-contain" />}
        tags={["AI Accessibility", "Conversational UX", "Automation"]}
      />
    </div>
  </section>
);

// Main Page
const IACollabPortfolio = () => (
  <div className="relative min-h-screen font-sans">
    <video autoPlay loop muted playsInline className="fixed top-0 left-0 w-full h-full object-cover z-0">
      <source src="/assets/background.mp4" type="video/mp4" />
    </video>
    <div className="absolute inset-0 bg-black opacity-60 z-0 pointer-events-none " />
    <div className="container mx-auto px-4 py-8 relative z-10 ">
      <HeaderSection />
      {/* Part 1: Core AI Projects */}
      <ArchitectureSection
        title="Buddy AI"
        imgSrc="/assets/BuddyAiArchitecture.png"
        imgAlt="Buddy AI system architecture diagram"
        description={<>
          <div className="mb-2"><b>Objective:</b> Accelerate HR information access using a private enterprise agent for document retrieval.</div>
          <div className="mb-4"><b>Impact:</b> ↓80% retrieval time; ↓80% content update latency.</div>
          <div className="mb-4"><b>Key Stakeholders:</b> HR team, Legal, Cybersecurity, DevOps</div>
          <div className="mb-4"><b>Achievements:</b> Integrated OpenAI, SharePoint, Okta APIs; deployed on on-prem L40 GPU cluster</div>
        </>}
        principles={["Human-Centered Innovation", "Strategic Systems Thinking", "Cross-Disciplinary Collaboration", "Rapid Prototyping"]}
        personas={["HR Manager", "Compliance Officer", "IT Admin", "Legal", "Cybersecurity", "DevOps", "Nvidia (Mistral LLM use case)"]}
      />
      <ArchitectureSection
        title="FinOps AI Agent"
        imgSrc="/assets/FinOpsArchtiecture.png"
        imgAlt="FinOps AI Agent system architecture diagram"
        description={<>
          <div className="mb-2"><b>Objective:</b> Reduce cloud overspend via a GenAI-powered FinOps agent with cross-cloud capabilities.</div>
          <div className="mb-4"><b>Impact:</b> ↓30% overspend; ↓15% in operating costs.</div>
          <div className="mb-4"><b>Key Stakeholders:</b> Cloud Finance, Infra Engineers, UX Designers, MLOps, AWS/Azure/GCP SMEs</div>
          <div className="mb-4"><b>Achievements:</b> Federated Databricks data lakes; rapid GenAI prototyping; experience reframed from educational to escapist</div>
        </>}
        principles={["Systems Thinking", "Cost Optimization", "Cross-Cloud Collaboration", "Data-Driven"]}
        personas={["Cloud Analyst", "FinOps Engineer", "Product Owner", "Cloud cost analysts", "PMs", "Infra", "AWS", "Azure", "GCP stakeholders"]}
      />
      {/* Hyperlinked Projects at the bottom with thumbnails and descriptions */}
      <ProjectsTable />
    </div>
  </div>
);

export default IACollabPortfolio;
