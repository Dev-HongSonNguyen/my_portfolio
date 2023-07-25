import axios from "axios";
import { useEffect, useState } from "../lib";
import projectItem from "./projectItem";

const projectList = ({ project }) => {
  return `
  ${project
    .map(function (item) {
      return `
    ${projectItem({ item })}
    `;
    })
    .join("")}
  `;
};

export default projectList;
