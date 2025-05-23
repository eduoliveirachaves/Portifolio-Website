import { CodeBracketIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

const ProjectCard = ({ imgUrl, title, description, gitUrl}) => {
  return (
    <div>
      <div
        className="h-52 md:h-72 rounded-t-xl relative group transition-all duration-900"
        style={{
          backgroundImage: `url(${imgUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      >
        <div
          className="overlay items-center justify-center absolute top-0 left-0 w-full h-full hidden
        group-hover:flex bg-[#181818] opacity-80 rounded-t-xl transition-all duration-900"

        >
          <Link
            href={gitUrl}
            className="h-14 w-14 border-2 relative mr-2 rounded-full border-[#ADB7BE] hover:border-white group/link"
          >
            <CodeBracketIcon
              className="h-10 w-10 text absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white:"></CodeBracketIcon>
          </Link>
        </div>
      </div>
      <div className="text-white rounded-b-xl mt-1 bg-[#181818] py-6 px-4">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-[#ADB7BE]">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
