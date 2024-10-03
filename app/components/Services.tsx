import { IconType } from 'react-icons';
import { FaCode, FaPaintBrush, FaChartLine } from 'react-icons/fa';

interface ServiceProps {
  title: string;
  description: string;
  Icon: IconType;
}

const ServiceCard: React.FC<ServiceProps> = ({ title, description, Icon }) => (
  <div className="bg-white p-8 rounded-lg shadow-lg text-center transition-all duration-300 ease-in-out hover:scale-105">
    <Icon className="text-6xl text-[#ff8615] mb-6 mx-auto" />
    <h3 className="text-2xl font-bold mb-4">{title}</h3>
    <p className="text-gray-700">{description}</p>
    <a href="#" className="inline-block mt-4 text-[#ff8615] hover:underline">Read More</a>
  </div>
);

export default function Services() {
  const services = [
    {
      title: 'Web Development',
      description: 'Creating responsive, user-friendly websites and web applications using modern frameworks like React and Next.js. From concept to deployment, I ensure your web presence is both functional and visually appealing.',
      Icon: FaCode,
    },
    {
      title: 'UI/UX Design',
      description: 'Crafting intuitive and engaging user interfaces with a focus on user experience. I combine aesthetic design with usability principles to create digital products that users love to interact with.',
      Icon: FaPaintBrush,
    },
    {
      title: 'Performance Optimization',
      description: 'Enhancing website speed and efficiency through code optimization, caching strategies, and best practices. I help your web applications run smoothly and quickly, improving user satisfaction and SEO rankings.',
      Icon: FaChartLine,
    },
  ];

  return (
    <section id="services" className="min-h-screen bg-gray-100 py-20 px-[8%]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">Our <span className="text-[#ff8615]">Services</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}
