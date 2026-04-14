import React from 'react'

import projectItems from '@/src/data/projects.json'

export default function ProjectsPage() {
  let allProjects = projectItems.sort((a, b) => b.year.localeCompare(a.year));
  let currentProject = "ACSOBA Mentorship Platform"

  return (
    <div className="flex flex-col gap-y-8">
      <section className="grid gap-y-4 mt-8">
        <h1 className="text-4xl font-bold">What am I up to?</h1>
        <p className="text-md max-w-lg text-zinc-500">
          Spending time learning new tools, building my ideas one at a time. Currently working on <span className="font-semibold text-zinc-800">{currentProject}</span>. Below are other projects I've worked on.
        </p>
      </section>
      <section className="grid gap-y-4">
        {/* TODO: Bento box of projects to showcase */}
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold">Projects</h2>
        </div>
        <ul className="grid gap-y-4">
          {allProjects.map((project, index) => (
            <li key={`${project.name}-${project.year}-${index}`} className="flex text-md text-zinc-500">
                <p>
                  <span className="font-semibold text-zinc-800">{project.year} — <a href={project.link} className="hover:underline" target="_blank" rel="noopener noreferrer">{project.name}</a></span>: {project.description} 
                </p>
            </li>
          ))}
        </ul>
      </section>
      {/* <section className="grid gap-y-4">
        <h2 className="font-medium">Project Ideas</h2>
      </section> */}
    </div>
  )
}
