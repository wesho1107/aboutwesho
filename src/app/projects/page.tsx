import React from 'react'

import projectItems from '@/src/data/projects.json'

export default function ProjectsPage() {
  let allProjects = projectItems.sort((a, b) => b.year.localeCompare(a.year));

  return (
    <div className="flex flex-col gap-y-12">
      <section className="grid gap-y-4">
        <p className="text-xs max-w-lg text-zinc-500">
          Spending time learning new tools & frameworks, building from my vast list of ideas one at a time. Here are some projects I've worked on.
        </p>
      </section>
      <section className="grid gap-y-4">
        {/* TODO: Bento box of projects to showcase */}
        <div className="flex justify-between items-center">
          <h2 className="font-medium">Projects</h2>
          <a href="/projects" className="text-xs text-zinc-500 hover:underline">View all </a>
        </div>
        <ul className="grid gap-y-4">
          {allProjects.map((project, index) => (
            <li key={`${project.name}-${project.year}-${index}`} className="flex text-xs text-zinc-600">
                <p>
                  <span className="font-medium">{project.year} — <a href={project.link} className="hover:underline" target="_blank" rel="noopener noreferrer">{project.name}</a></span>: {project.description} 
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
