import Link from 'next/link';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="inline bottom-0 z-50 w-full bg-[#181818] ">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <div className="text-xl font-bold">
          <span className="text-[#EFF0F0]">Memo.a</span>
        </div>

        <div className="flex space-x-2 mt-2 md:mt-0">
          <p>
            Made with <span className="text-[#F7A650]">🧡</span> by Memo Al-dujaili
          </p>
        </div>

        <div className="flex space-x-4 text-2xl mt-2 md:mt-0">
          <Link href="https://github.com/Memo-Aldu" passHref>
            <FaGithub className="hover:text-[#F7A650] transition duration-300 cursor-pointer" />
          </Link>
          <Link href="https://www.linkedin.com/in/memo-aldu/" passHref>
            <FaLinkedin className="hover:text-[#F7A650] transition duration-300 cursor-pointer" />
          </Link>
          <Link href="mailto:aldu.memo@gmail.com" passHref>
            <FaEnvelope className="hover:text-[#F7A650] transition duration-300 cursor-pointer" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
