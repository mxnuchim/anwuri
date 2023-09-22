'use client';
import React, { useTransition, useState } from 'react';
import Image from 'next/image';
import TabButton from './TabButton';
import { aboutText, TAB_DATA } from '../data';
import Lottie from 'lottie-react';

import { animations } from '../../../public';

const { aboutAnimation } = animations;

const animationOptions = {
  loop: true,
  autoplay: true,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice',
  },
};

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
      <div className="md:grid md:grid-cols-1 lg:grid-cols-2 gap-8 items-center py-8 px-2 xl:gap-16 sm:py-16 xl:px-16">
        <div className="w-[250px] h-[250px] md:w-[350px] md:h-[350px]">
          <Lottie
            options={animationOptions}
            animationData={aboutAnimation}
            className=" w-full h-full mb-0 lg:mb-44"
          />
        </div>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I&apos;m Anwuri, a dedicated UI/UX designer with a passion for
            creating exceptional digital experiences. With a keen eye for
            user-centered design and a deep understanding of the principles that
            make interfaces intuitive and engaging, I thrive on turning complex
            problems into elegant and user-friendly solutions. <br />
            My journey in the world of design has allowed me to collaborate with
            diverse teams and clients, transforming ideas into visually stunning
            and highly functional products. From wireframes to prototypes and
            user testing, I&apos;m committed to every phase of the design
            process, ensuring that the end result not only meets but exceeds
            expectations.
          </p>
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
