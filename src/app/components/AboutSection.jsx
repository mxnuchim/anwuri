'use client';
import React, { useTransition, useState } from 'react';
import Image from 'next/image';
import TabButton from './TabButton';
import { aboutText } from '../data';

const TAB_DATA = [
  {
    title: 'Hard Skills',
    id: 'hard-skills',
    content: (
      <ul className="list-disc pl-2">
        <li>User Experience (UX) Design</li>
        <li>User Interface (UI) Design</li>
        <li>User Research</li>
        <li>Wireframing</li>
        <li>Prototyping</li>
        <li>Usability Testing</li>
        <li>Interaction Design</li>
        <li>Visual Design</li>
        <li>Information Architecture</li>
        <li>Proficiency in design software (Figma, Framer, Adobe XD)</li>
      </ul>
    ),
  },
  {
    title: 'Soft Skills',
    id: 'soft-skills',
    content: (
      <ul className="list-disc pl-2">
        <li>Communication</li>
        <li>Problem Solving</li>
        <li>Collaboration</li>
        <li>Creativity</li>
        <li>Empathy</li>
        <li>Time Management</li>
        <li>Critical Thinking</li>
        <li>Attention to detail</li>
      </ul>
    ),
  },
  {
    title: 'Education',
    id: 'education',
    content: (
      <ul className="list-disc pl-2">
        <li>Google UX Design Professional Certificate</li>
        <li>BA, Marketing, Rivers State University</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState('hard-skills');
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.png" width={500} height={500} />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">{aboutText}</p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange('hard-skills')}
              active={tab === 'hard-skills'}
            >
              {' '}
              Hard Skills{' '}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange('soft-skills')}
              active={tab === 'soft-skills'}
            >
              {' '}
              Soft Skills{' '}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange('education')}
              active={tab === 'education'}
            >
              {' '}
              Education{' '}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
