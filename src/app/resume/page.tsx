import React from 'react'

import educationItems from '@/src/data/education.json'
import experienceItems from '@/src/data/experience.json'
import projectItems from '@/src/data/projects.json'

type ExperienceItemProps = Readonly<{
  company: string
  title: string
  location: string
  dates: string
  descriptions: string[]
}>

type EducationItemProps = Readonly<{
  school: string
  degree: string
  location: string
  dates: string
  activities: string[]
}>

const ExperienceItem = ({ company, title, location, dates, descriptions }: ExperienceItemProps) => {
  return (
    <article>
      <div className="flex gap-4">
        {/* TODO: Add icon */}
        <div className="shrink-0 rounded-full border shadow-sm w-8 h-8 flex justify-start items-start"/>
        <div className="flex flex-col gap-y-1">
          <p className="text-md font-semibold text-zinc-800">
            {title} @ {company}
          </p>
          <p className="text-md text-zinc-400">
            {location} · {dates}
          </p>
          <ul className="mt-2 list-disc list-inside">
            {descriptions.map((description) => (
              <li key={description} className="mb-2 text-md text-zinc-600 max-w-3xl">{description}</li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  )
}

const EducationItem = ({ school, degree, location, dates, activities }: EducationItemProps) => {
  return (
    <article>
      <div className="flex gap-4">
        <div className="shrink-0 rounded-full border shadow-sm w-8 h-8 flex justify-start items-start"/>
        <div className="flex flex-col gap-y-1">
          <p className="text-md font-semibold text-zinc-800">
            {degree} @ {school}
          </p>
          <p className="text-md text-zinc-400">
            {location} · {dates}
          </p>  
          <ul className="mt-2 list-disc list-inside">
            {activities.map((activity) => (
              <li key={activity} className="text-md text-zinc-600">{activity}</li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  )
}

export default function ResumePage() {
  let featuredProjects = projectItems.filter((project) => project.featured).sort((a, b) => b.year.localeCompare(a.year));

  return (
    <div className="flex flex-col gap-y-8">
      <section className="grid gap-y-4">
        <p className="text-md max-w-lg text-zinc-500">
          A full-stack software engineer experienced with React and user experience.
        </p>
      </section>
      <section className="grid gap-y-4">
        <h2 className="text-xl font-bold">Experience</h2>
        <div className="grid gap-y-8">
          {experienceItems.map((experience, index) => (
            <ExperienceItem key={`${experience.company}-${experience.title}-${experience.dates}-${index}`} {...experience} />
          ))}
        </div>
      </section>
      <section className="grid gap-y-4">
        <h2 className="text-xl font-bold">Education</h2>
        <div className="grid gap-y-8">
          {educationItems.map((education, index) => (
            <EducationItem key={`${education.school}-${education.degree}-${education.dates}-${index}`} {...education} />
          ))}
        </div>
      </section>
      <section className="grid gap-y-4">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold">Projects</h2>
          <a href="/projects" className="text-md text-zinc-500 hover:underline">View all </a>
        </div>
        <ul className="grid gap-y-4">
          {featuredProjects.map((project, index) => (
            <li key={`${project.name}-${project.year}-${index}`} className="flex text-md text-zinc-500">
                <p>
                  <span className="font-semibold text-zinc-800">{project.year} — <a href={project.link} className="hover:underline" target="_blank" rel="noopener noreferrer">{project.name}</a></span>: {project.description} 
                </p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
