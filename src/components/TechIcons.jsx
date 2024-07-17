import dotnet from "../assets/svg/dotnet.svg";
import java from "../assets/svg/java.svg";
import react from "../assets/svg/react.svg";
import python from "../assets/svg/python.svg";
import javascript from "../assets/svg/javascript.svg";
import typescript from "../assets/svg/typescript.svg";
import html5 from "../assets/svg/html5.svg";
import css3 from "../assets/svg/css3.svg";
import aws from "../assets/svg/aws.svg";
import azure from "../assets/svg/azure.svg";
import azuredevops from "../assets/svg/azuredevops.svg";
import bootstrap from "../assets/svg/bootstrap.svg";
import csharp from "../assets/svg/csharp.svg";
import junit5 from "../assets/svg/junit5.svg";
import mysql from "../assets/svg/mysql.svg";
import mongodb from "../assets/svg/mongodb.svg";
import nodejs from "../assets/svg/nodejs.svg";
import redux from "../assets/svg/redux.svg";
import spring from "../assets/svg/spring.svg";
import sqlite from "../assets/svg/sqlite.svg";
import tailwind from "../assets/svg/tailwind.svg";
import xamarin from "../assets/svg/xamarin.svg";

const svgIcons = {
  dotnet: dotnet,
  java: java,
  react: react,
  python: python,
  javascript: javascript,
  typescript: typescript,
  html5: html5,
  css3: css3,
  aws: aws,
  azure: azure,
  azuredevops: azuredevops,
  bootstrap: bootstrap,
  csharp: csharp,
  junit5: junit5,
  mysql: mysql,
  mongodb: mongodb,
  nodejs: nodejs,
  redux: redux,
  spring: spring,
  sqlite: sqlite,
  tailwind: tailwind,
  xamarin: xamarin,
};

const TechIcons = ({ imageUrlName, name }) => {
  return (
    <img
      src={svgIcons[imageUrlName]}
      alt={name}
      title={name}
      className="h-8 w-8 mb-4 md:h-10 md:w10 lg:h-12 lg:w-12 mr-2 lg:mr-5"
    />
  );
};
export default TechIcons;
