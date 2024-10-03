'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useTextAnimation } from '../hooks/useTextAnimation';

export default function Home() {
  const animatedText = useTextAnimation();

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-white pt-[180px] md:pt-16 px-[8%]">
      <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-0 w-full max-w-7xl">
        <div className="lg:w-1/2 text-center lg:text-left mt-10 lg:mt-0">
          <h3 className="text-2xl font-semibold mb-2">Hello, It's Me</h3>
          <h1 className="text-5xl font-bold mb-4">Eva Tompson</h1>
          <h3 className="text-2xl mb-4">
            And I&apos;m a <span className="text-[#ff8615]">{animatedText}</span>
          </h3>
          <p className="text-lg mb-8 text-gray-700 max-w-xl mx-auto lg:mx-0">
            As a passionate and creative web developer, I specialize in crafting beautiful, 
            user-friendly websites and applications. With a keen eye for design and a love 
            for clean, efficient code, I bring ideas to life in the digital realm. Let&apos;s 
            collaborate and turn your vision into an engaging online experience!
          </p>
          <div className="flex justify-center lg:justify-start space-x-4 mb-8">
            {['facebook', 'twitter', 'instagram', 'linkedin'].map((social) => (
              <Link key={social} href={`#${social}`} className="inline-block">
                <i className={`bx bxl-${social} text-3xl text-[#ff8615] hover:text-[#e67300] transition-colors duration-300`}></i>
              </Link>
            ))}
          </div>
          <a 
            href="#"
            className="inline-block bg-[#ff8615] text-white py-3 px-8 rounded-full text-lg font-semibold 
                       transition duration-300 ease-in-out hover:bg-[#e67300] hover:shadow-lg"
          >
            Download CV
          </a>
        </div>
        <div className="lg:w-1/2 mb-12 lg:mb-0">
          <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 mx-auto">
            <Image
              src="/home.png"
              alt="Sara Smith"
              layout="fill"
              objectFit="cover"
              className="rounded-full border-8 border-[#ff8615]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
