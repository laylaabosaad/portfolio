import { useState } from "react";
import "./Navbar.css";
import { AiOutlineBars, AiOutlineClose } from "react-icons/ai";
import { HashLink as Link } from "react-router-hash-link";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const handleClick = () => {
    setShowMenu(!showMenu);
  };

  const handleCloseMenu = () => {
    setShowMenu(false);
  };

  return (
    <div>
      <div className="sm:w-full">
        <div class=" hidden sm:flex flex-row justify-evenly item-center self-center text-xl pt-2">
          <Link class="cursor-pointer" to="#about" smooth>
            About
          </Link>
          <Link class="cursor-pointer" to="#education" smooth>
            Education
          </Link>
          <Link class="cursor-pointer" to="#experience" smooth>
            Experience
          </Link>
          <Link class="cursor-pointer" to="#projects" smooth>
            Projects
          </Link>
          <Link class="cursor-pointer" to="#skills" smooth>
            Skills
          </Link>
        </div>

        <div className="responsive-navbar">
          {showMenu ? (
            <AiOutlineClose
              // className="responsive-block"
              class="block sm:hidden h-full w-9 "
              onClick={handleCloseMenu}
            />
          ) : (
            <AiOutlineBars
              class="flex justify-end sm:hidden h-full w-9"
              onClick={handleClick}
            />
          )}
        </div>
      </div>
      {showMenu && (
        <div class="h-52 w-full">
          <div class="flex h-full justify-evenly flex-col items-center bg-red-100 sm:hidden">
            <Link
              class="cursor-pointer"
              to="#about"
              smooth
              onClick={handleCloseMenu}
            >
              About
            </Link>
            <Link
              class="cursor-pointer"
              to="#experience"
              smooth
              onClick={handleCloseMenu}
            >
              Experience
            </Link>
            <Link
              class="cursor-pointer"
              to="#projects"
              smooth
              onClick={handleCloseMenu}
            >
              Projects
            </Link>
            <Link
              class="cursor-pointer"
              to="#education"
              smooth
              onClick={handleCloseMenu}
            >
              Education
            </Link>
            <Link
              class="cursor-pointer"
              to="#skills"
              smooth
              onClick={handleCloseMenu}
            >
              Skills
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
