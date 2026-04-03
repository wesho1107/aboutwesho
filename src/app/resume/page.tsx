import React from 'react'

const sampleExperienceItems = [
  {
    company: 'Google',
    title: 'Software Engineer',
    location: 'Mountain View, CA',
    dates: '2020-2024',
    descriptions: ['Developed and maintained web applications using React and Node.js', 'Collaborated with a team of developers to build a new feature'],
  },
  {
    company: 'Google',
    title: 'Software Engineer',
    location: 'Mountain View, CA',
    dates: '2020-2024',
    descriptions: ['Developed and maintained web applications using React and Node.js', 'Collaborated with a team of developers to build a new feature'],
  },
  {
    company: 'Google',
    title: 'Software Engineer',
    location: 'Mountain View, CA',
    dates: '2020-2024',
    descriptions: ['Developed and maintained web applications using React and Node.js', 'Collaborated with a team of developers to build a new feature'],
  }
]

const sampleEducationItems = [
  {
    school: 'University of California, Berkeley',
    degree: 'Bachelor of Science in Computer Science',
    location: 'Berkeley, CA',
    dates: '2020-2024',
    activities: ['Leader of the Computer Science Club', 'Volunteer at the local library'],
  },
  {
    school: 'University of California, Berkeley',
    degree: 'Bachelor of Science in Computer Science',
    location: 'Berkeley, CA',
    dates: '2020-2024',
    activities: ['Leader of the Computer Science Club', 'Volunteer at the local library'],
  },
]

const sampleProjectItems = [
  {
    name: 'Project 1',
    year: '2020',
    description: 'Description of Project 1',
    link: 'https://www.project1.com',
  },
  {
    name: 'Project 2',  
    year: '2021',
    description: 'Description of Project 2',
    link: 'https://www.project2.com',
  },
  {
    name: 'Project 3',
    year: '2022',
    description: 'Description of Project 3',
    link: 'https://www.project3.com',
  },
  {
    name: 'Project 4',
    year: '2023',
    description: 'Description of Project 4',
    link: 'https://www.project4.com',
  },
  {
    name: 'Project 5',
    year: '2024',
    description: 'Description of Project 5',
    link: 'https://www.project5.com',
  },
  {
    name: 'Project 6',
    year: '2025',
    description: 'Description of Project 6',
    link: 'https://www.project6.com',
  },
  {
    name: 'Project 7',
    year: '2026',
    description: 'Description of Project 7',
    link: 'https://www.project7.com',
  },
  {
    name: 'Project 8',
    year: '2026',
    description: 'Description of Project 8',
    link: 'https://www.project8.com',
  },
]

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

type ProjectItemProps = Readonly<{
  name: string
  year: string
  description: string
  link: string
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
          {sampleExperienceItems.map((experience) => (
            <ExperienceItem key={experience.company} {...experience} />
          ))}
        </div>
      </section>
      <section className="grid gap-y-4">
        <h2 className="font-medium">Education</h2>
        <div className="grid gap-y-8">
          {sampleEducationItems.map((education) => (
            <EducationItem key={education.school} {...education} />
          ))}
        </div>
      </section>
      <section className="grid gap-y-4">
        <h2 className="font-medium">Projects</h2>
        <ul className="grid gap-y-2">
          {sampleProjectItems.map((project) => (
            <div className="flex text-xs text-zinc-600">
                <p className="font-medium">
                  {project.year} — <a href={project.link} className="hover:underline" target="_blank" rel="noopener noreferrer">{project.name}</a>
                </p>
                : {project.description}
            </div>
          ))}
        </ul>
      </section>
    </div>
  )
}
