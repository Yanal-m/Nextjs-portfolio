import Image from 'next/image';

interface ProjectProps {
  title: string;
  description: string;
  imageSrc: string;
}

const ProjectCard: React.FC<ProjectProps> = ({ title, description, imageSrc }) => (
  <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-all duration-300 ease-in-out hover:shadow-xl">
    <Image 
      src={imageSrc} 
      alt={title} 
      width={400} 
      height={300} 
      className="w-full h-48 object-cover"
    />
    <div className="p-6">
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-700 mb-4">{description}</p>
      <a 
        href="#" 
        className="inline-block bg-[#ff8615] text-white py-2 px-4 rounded transition duration-300 ease-in-out hover:bg-[#e67300]"
      >
        Learn More
      </a>
    </div>
  </div>
);

export default function Projects() {
  const projects = [
    {
      title: "E-commerce Website",
      description: "A fully responsive e-commerce platform built with React and Node.js.",
      imageSrc: "/project1.jpg"
    },
    {
      title: "Portfolio Design",
      description: "A sleek and modern portfolio website showcasing creative works.",
      imageSrc: "/project2.jpg"
    },
    {
      title: "Mobile App",
      description: "An innovative mobile app developed for both iOS and Android platforms.",
      imageSrc: "/project3.jpg"
    },
    {
      title: "Blog Platform",
      description: "A feature-rich blogging platform with a clean and intuitive interface.",
      imageSrc: "/project4.jpg"
    },
    // Add more projects as needed
  ];

  return (
    <section id="projects" className="min-h-screen bg-gray-100 py-20 px-[8%]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16">Latest <span className="text-[#ff8615]">Projects</span></h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
