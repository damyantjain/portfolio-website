import dotnet from "../assets/svg/dotnet.svg";
import java from "../assets/svg/java.svg";

const svgIcons = {
  dotnet: dotnet,
  java: java,
};

const TechIcons = ({ imageUrlName, name }) => {
  return (
    <img
      src={svgIcons[imageUrlName]}
      alt={name}
      className="h-8 w-8 mr-2"
    />
  );
};
export default TechIcons;
