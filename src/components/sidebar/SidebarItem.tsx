'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { CiBookmarkCheck } from 'react-icons/ci';

interface Props {
  icon: React.ReactNode;
  path: string;
  title: string;
}

{/* Active className: text-white bg-gradient-to-r from-sky-600 to-cyan-400 */}
export const SidebarItem = ( {icon, path, title}: Props ) => {

  const pathName = usePathname();

  return (
    <ul className="space-y-2 tracking-wide mt-8">
      <li>
        <Link href={ path } 
          className={`
            px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group
            hover:bg-gradient-to-r hover:bg-sky-600 hover:text-white
            ${ path === pathName ? 'text-white bg-gradient-to-r from-sky-600 to-cyan-400' : '' } 
          `}
        >
          { icon }
          <span className="-mr-1 font-medium">{ title }</span>
          {/* <span className="group-hober:text-white-700">{ title }</span> */}
        </Link>
      </li>
    </ul>
  );
}