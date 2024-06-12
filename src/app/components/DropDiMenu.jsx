// import { Fragment } from 'react'
import Link from "next/link";
import { useRouter } from "next/navigation";

import { MyLink, Menu, MenuButton, MenuItem, MenuItems, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import NavLink from "./NavLink";
import { Bars3Icon, AcademicCapIcon, PhoneIcon, BookmarkIcon, Bars2Icon } from "@heroicons/react/24/solid";
import Image from "next/image";

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}
const navLinks = [
  {
    title: "شروع",
    path: "/",
    icon: <BookmarkIcon className="h-5  w-5  text-green-600" />,
  },
  {
    title: "درباره",
    path: "#about",
    icon: <BookmarkIcon className="h-5  w-5  text-green-600" />,
  },
  {
    title: "پروژه",
    path: "#projects",
    icon: <AcademicCapIcon className="h-5 w-5 text-green-600" />,
  },
  {
    title: "تماس",
    path: "#contact",
    icon: <PhoneIcon className="h-5  w-5  text-green-600" />,
  },
];



const propsDropDiMenu = () => {

}
export default function DropDiMenu() {
  const router = useRouter();

  return (
    <>
      {/* UI FOR MOBILE */}

      <div className="text-white mobile-menu flex md:hidden justify-between">
        <div className="mobile-menu flex-wrap md:hidden">
          <div className="">
            <Link
              href={"/"}
              className="flex text-sm md:text-lg text-white font-semibold"
            >
              {/* <h2 className="h-2 align-middle size-auto ">مهدی</h2> */}
              <Image
                src="/images/fullstack-development.png"
                alt="my image"
                className="transform -translate-x-1/4  rounded-full"
                width={50}
                height={50}
              />
            </Link>
          </div>
          <div className="">
            <div className="mobile-menu flex-wrap md:hidden">

              <Menu as="div" className="relative  text-right rounded-full">

                <MenuButton className="inline-flex w-full justify-center text-sm md:text-xl rounded-full gap-x-0 bg-whit bg-slate-300 active:bg-orange-700 hover:bg-amber-600 px-10 py-2  text-gray-900 shadow-sm ring-1 ring-inset ring-blue-300 ">

                  <Bars3Icon className="h-5 w-5" />
                </MenuButton>


                <Transition
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <MenuItems className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="py-1">
                      <MenuItem>
                        {({ focus }) => (
                          <a
                            href={navLinks[0].path}
                            className={classNames(
                              focus ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                              'block px-4 py-2 text-sm'
                            )}
                          >
                            {navLinks[0].title}
                          </a>
                        )}
                      </MenuItem>
                      <MenuItem>
                        {({ focus }) => (
                          <a
                            href={navLinks[1].path}
                            className={classNames(
                              focus ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                              'block px-4 py-2 text-sm'
                            )}
                          >
                            {navLinks[1].title}
                          </a>
                        )}
                      </MenuItem>
                      <MenuItem>
                        {({ focus }) => (
                          <a
                            href={navLinks[2].path}
                            className={classNames(
                              focus ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                              'block px-4 py-2 text-sm'
                            )}
                          >
                            {navLinks[2].title}

                          </a>
                        )}
                      </MenuItem>
                      <MenuItem>
                        {({ focus }) => (
                          <a
                            href={navLinks[3].path}
                            className={classNames(
                              focus ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                              'block px-4 py-2 text-sm'
                            )}
                          >
                            {navLinks[3].title}

                          </a>
                        )}
                      </MenuItem>
                      {/* <form method="POST" action="#">
                <MenuItem>
                  {({ focus }) => (
                    <div
                      type="submit"
                      className={classNames(
                        focus ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                        'block w-full px-4 py-2 text-right text-sm'
                      )}
                    >
                                         {navLinks[3].title}           

                    </div>
                  )}
                </MenuItem>
              </form> */}
                    </div>
                  </MenuItems>
                </Transition>
              </Menu>
              {/* </button> */}

            </div>
          </div>
        </div>


      </div>

      {/* UI FOR DESKTOP */}
      <div className=" hidden md:block md:w-auto flex-row  lg:py-2 items-center justify-between mx-auto px-4 py-2">

        {/* <ul className="flex p-0 md:p-0 md:flex-row md:space-x-0 mt-3 gap-0  "> */}


        <Menu
          as="div" className="relative inline-flex ">

          {navLinks.map((link, index) => (
           
           <MenuButton key={index} className="flex  w-full justify-center text-sm  md:text-2xl gap-x-0 bg-white hover:bg-amber-600 px-1 py-1  text-gray-900 shadow-sm ring-1 ring-inset ring-blue-300 ">
              <Link className="w-full p-2" href={link.path}>{link.title}</Link>

              {/* <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" /> */}
            </MenuButton>

          ))}



        </Menu>



        {/* </ul> */}
      </div>
    </>



  )
}
