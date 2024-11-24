import LogoPNG from "@/assets/OGV.png";
import { Link } from "react-router-dom";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ModeToggle } from "../core/mode-toggle";

const Navbar = () => {
  return (
    <div>
      <TooltipProvider>
        <nav className="sticky top-0 bg-background navbar w-full flex items-center justify-between z-20">
          <div className="logo p-2 md:p-4">
            <Tooltip>
              <TooltipTrigger>
                <Link to="/">
                  <img src={LogoPNG} alt="logo" className="h-10 rounded-3xl" />
                </Link>
              </TooltipTrigger>
              <TooltipContent>
                <p className="text-sm md:text-md">
                  <b>O</b>pen <b>G</b>raph <b>V</b>isualizer
                </p>
              </TooltipContent>
            </Tooltip>
          </div>
          <div className="homeSections">
            <ul className="flex md:text-xl items-center justify-center gap-4 md:gap-8">
              <li>
                <Link
                  to="/#features"
                  className="hover:underline underline-offset-8"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  to="/#visualized-demo"
                  className="hover:underline underline-offset-8"
                >
                  Demo
                </Link>
              </li>
              <li>
                <Link
                  to="/#animated-globe"
                  className="hover:underline underline-offset-8"
                >
                  Stats
                </Link>
              </li>
            </ul>
          </div>
          <div className="themeToggle p-2 md:p-4">
            <ModeToggle />
          </div>
        </nav>
      </TooltipProvider>
    </div>
  );
};

export default Navbar;
