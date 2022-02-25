import requests from "../../../utils/requests";

const Navbar = () => {
  return (
    <nav className="relative">
      <div className="flex px-10 sm:px-20 whitespace-nowrap text-2xl space-x-10 overflow-x-scroll scrollbar-hide">
        {Object.entries(requests).map(([key, { title, url }]) => {
          console.log("key:", key, "title:", title, "url:", url);
          return (
            <h2
              className="last:pr-24 cursor-pointer transition duration-700  hover:scale-125 hover:text-white active:text-red-500 "
              key={key}
            >
              {title}
            </h2>
          );
        })}
      </div>
      <div className="absolute top-0 right-0 w-1/12 h-8 bg-gradient-to-l from-[#06202A]" />
    </nav>
  );
};

export default Navbar;
