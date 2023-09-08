"use client"

import ProjectCard from "@/components/cards/ProjectCard";
import Gallery from "@/components/shared/Gallery";
import React from "react";

interface Project {
  projectName?: string;
  projectText?: string;
  projectSkills?: string;
  bgImageLink?: string;
  githubLink?: string;
  appLink?: string;
}


/* todo: get this data from database */
const project1:Project = {
  projectName: "MergePDF",
  projectText: "",
  projectSkills: "C#, .NET 7, WinForms",
  bgImageLink: "",
  githubLink: "",
  appLink: "",
}








export default function Projects() {

  
  return (
    <>
      <ProjectCard projectName="MergePDF" projectSkills="C#, .NET 7, WinForms"></ProjectCard>
      <ProjectCard projectName="MergePDF" projectSkills="C#, .NET 7, WinForms"></ProjectCard>
      <ProjectCard projectName="MergePDF" projectSkills="C#, .NET 7, WinForms"></ProjectCard>
      <ProjectCard projectName="MergePDF" projectSkills="C#, .NET 7, WinForms"></ProjectCard>
    </>
  )
}