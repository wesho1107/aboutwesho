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
        {/* Bento box of projects to showcase */}
      </section>
      <section className="grid gap-y-4">
        <h2 className="font-medium">Project Ideas</h2>
      </section>
    </div>
  )
}
