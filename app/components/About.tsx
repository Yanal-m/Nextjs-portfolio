'use client';
import { useState } from 'react';
import Image from 'next/image';
import { useTextAnimation } from '../hooks/useTextAnimation';

export default function About() {
  const animatedText = useTextAnimation();
  const [showMore, setShowMore] = useState(false);

  return (
    <section id="about" className="min-h-screen flex items-center justify-center bg-white py-16 px-[8%]">
      <div className="flex flex-col lg:flex-row items-center justify-between w-full max-w-7xl">
        <div className="lg:w-1/2 mb-12 lg:mb-0">
          <Image
            src="/about.jpg"
            alt="About Me"
            width={500}
            height={500}
            className="w-full max-w-md mx-auto rounded-lg shadow-lg"
          />
        </div>
        <div className="lg:w-1/2">
          <h2 className="text-4xl font-bold mb-4">About <span className="text-[#ff8615]">Me</span></h2>
          <h3 className="text-2xl mb-4">
            I'm Eva and I'm a <span className="text-[#ff8615]">{animatedText}</span>
          </h3>
          <div className="text-lg mb-6 text-gray-700">
            <p className="mb-6">
              As a dedicated full-stack developer with a passion for creating seamless digital experiences, 
              I bring a unique blend of technical expertise and creative problem-solving to every project. 
              My journey in web development began with a fascination for how technology can transform ideas 
              into interactive realities.
            </p>
            {showMore && (
              <>
                <p className="mb-6">
                  Specializing in modern web technologies like React, Next.js, and Node.js, I've had the privilege 
                  of working on diverse projects - from sleek corporate websites to complex e-commerce platforms. 
                  I thrive on challenges and continuously expand my skill set to stay at the forefront of web development trends.
                </p>
                <p className="mb-6">
                  Beyond coding, I'm an avid learner and a team player. I believe in the power of collaboration 
                  and enjoy working closely with designers and stakeholders to bring visions to life. When I'm not 
                  crafting code, you'll find me exploring new technologies, contributing to open-source projects, 
                  or sharing my knowledge through tech community meetups.
                </p>
              </>
            )}
          </div>
          <button 
            onClick={() => setShowMore(!showMore)}
            className="inline-block bg-[#ff8615] text-white py-3 px-8 rounded-full text-lg font-semibold 
                       transition duration-300 ease-in-out hover:bg-[#e67300] hover:shadow-lg"
          >
            {showMore ? 'Read Less' : 'Read More'}
          </button>
        </div>
      </div>
    </section>
  );
}
