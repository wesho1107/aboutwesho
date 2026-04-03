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
        <div className="rounded-full border shadow-sm w-8 h-8 flex justify-start items-start"/>
        <div className="flex flex-col gap-y-1">
          <p className="text-sm font-medium">
            {title} @ {company}
          </p>
          <p className="text-xs text-zinc-400">
            {location} · {dates}
          </p>
          <ul className="mt-2 list-disc list-inside">
            {descriptions.map((description) => (
              <li key={description} className="text-xs text-zinc-600">{description}</li>
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
        <div className="rounded-full border shadow-sm w-8 h-8 flex justify-start items-start"/>
        <div className="flex flex-col gap-y-1">
          <p className="text-sm font-medium">
            {degree} @ {school}
          </p>
          <p className="text-xs text-zinc-400">
            {location} · {dates}
          </p>  
          <ul className="mt-2 list-disc list-inside">
            {activities.map((activity) => (
              <li key={activity} className="text-xs text-zinc-600">{activity}</li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  )
}

export default function ResumePage() {
  return (
    <div className="flex flex-col gap-y-12">
      <section className="grid gap-y-4">
        <p className="text-xs max-w-lg text-zinc-500">
          A full-stack software engineer experienced with React and user experience.
        </p>
      </section>
      <section className="grid gap-y-4">
        <h2 className="font-medium">Experience</h2>
        <div className="grid gap-y-8">
          {experienceItems.map((experience, index) => (
            <ExperienceItem key={`${experience.company}-${experience.title}-${experience.dates}-${index}`} {...experience} />
          ))}
        </div>
      </section>
      <section className="grid gap-y-4">
        <h2 className="font-medium">Education</h2>
        <div className="grid gap-y-8">
          {educationItems.map((education, index) => (
            <EducationItem key={`${education.school}-${education.degree}-${education.dates}-${index}`} {...education} />
          ))}
        </div>
      </section>
      <section className="grid gap-y-4">
        <div className="flex justify-between items-center">
          <h2 className="font-medium">Projects</h2>
          <a href="/projects" className="text-xs text-zinc-500 hover:underline">View all </a>
        </div>
        <ul className="grid gap-y-2">
          {projectItems.filter((project) => project.featured).map((project, index) => (
            <li key={`${project.name}-${project.year}-${index}`} className="flex text-xs text-zinc-600">
                <p className="font-medium">
                  {project.year} — <a href={project.link} className="hover:underline" target="_blank" rel="noopener noreferrer">{project.name}</a>
                </p>
                : {project.description}
            </li>
          ))}
        </ul>
      </section>
    </div>
  )
}
