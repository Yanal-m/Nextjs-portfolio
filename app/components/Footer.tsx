import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#333] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-center md:gap-6 items-center">
          <div className="mb-4 md:mb-0">
            <Link href="/" className="text-2xl font-bold">
              Eva <span className="text-[#ff8615]">Portfolio |</span>
            </Link>
          </div>
          <nav className="mb-4 md:mb-0">
            <ul className="flex flex-wrap justify-center md:justify-end space-x-6">
              {['Home', 'About', 'Services', 'Projects', 'Skills', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    href={`#${item.toLowerCase()}`} 
                    className="hover:text-[#ff8615] transition-colors duration-300"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex space-x-4">
            {['facebook', 'twitter', 'instagram', 'linkedin'].map((social) => (
              <a 
                key={social}
                href={`#${social}`} 
                className="text-white hover:text-[#ff8615] transition-colors duration-300"
                aria-label={`Follow on ${social}`}
              >
                <i className={`bx bxl-${social} text-2xl`}></i>
              </a>
            ))}
          </div>
        </div>
        <div className="mt-8 text-center text-sm">
          <p>&copy; {currentYear} Eva Portfolio. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
