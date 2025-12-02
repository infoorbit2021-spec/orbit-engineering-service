import { getSheetData } from '../lib/fetchGoogleSheet'
import { generateNextSeo } from 'next-seo/pages'
import ProjectCard from './ProjectCard'

export const revalidate = 600

export default async function ProjectsPage({ limit = 0 }: { limit?: number }) {
  const data = await getSheetData('ProjectList')

  // If limit is 0 or undefined -> show ALL
  const parsedLimit = Number(limit)
const items = parsedLimit > 0 ? data.slice(0, parsedLimit) : data


  

  return (
    <>
      {generateNextSeo({
        title: 'Projects - Orbit Engineering Services',
        description: 'Discover our landmark engineering and BIM projects.',
        openGraph: {
          title: 'Projects',
          description: 'Discover our landmark engineering and BIM projects.',
          url: 'https://orbitengineering.in/projects',
        },
      })}

      <main className="mx-auto py-16 px-5 bg-white">
        <h1 className="text-4xl font-bold mb-8 px-6">Our Projects</h1>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 px-6">
          {items.map((p: any) => (
            <ProjectCard key={p.Slug} project={p} />
          ))}
        </div>
      </main>
    </>
  )
}
