import Switcher from "./Switcher";

const Nav = () => {
  return (
    <nav class="bg-white dark:bg-gray-900" max-w-screen-lg>
      <div
        class=" max-w-screen-xl flex flex-wrap items-center pl-4 pr-2
   justify-between mx-auto"
      >
        <a href="/" class="flex items-center">
          <img
            src="https://flowbite.com/docs/images/logo.svg"
            class="h-7 mr-3"
            alt="Flowbite Logo"
          />
          <span class="self-center text-xl font-bold whitespace-nowrap dark:text-white">
            CreateResume
          </span>
        </a>

        <div class="flex md:order-3 pr-2 items-center space-x-8">
          <span class="pt-8">
            <Switcher />
          </span>
          <span class="space-x-3 ">
            <button
              href="/"
              class="inline-flex justify-center items-center text-sm py-2 px-4  font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            >
              Log In
            </button>
            <button
              href="/"
              class="inline-flex justify-center items-center text-sm p-2 px-4 font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
            >
              Sign Up
            </button>
          </span>
        </div>
        <div
          class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-cta"
        >
          <ul class="flex flex-col font-medium bg-white dark:bg-gray-900 md:flex-row md:space-x-8">
            <li>
              <a
                href="/"
                class=" text-white bg-blue-700 md:bg-transparent md:text-blue-700  md:dark:text-blue-500"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/"
                class=" text-gray-900  hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/"
                class=" text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="/"
                class=" text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:text-blue-500 dark:text-white"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
