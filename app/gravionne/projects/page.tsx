import projects from '../../../data/projects.json'
import ProjectShowcase, { type Project } from "@/components/projectShowcase"
import { JsonLd } from "@/components/seo/json-ld"
import {
  breadcrumbJsonLd,
  buildMetadata,
  webPageJsonLd,
} from "@/lib/seo"

const pageTitle = "Gravionne Projects"
const pageDescription =
  "Discover Gravionne projects and collaborations advancing luxury wellness, technology, and human-centric innovation."
const pagePath = "/gravionne/projects"

export const metadata = buildMetadata({
  title: pageTitle,
  description: pageDescription,
  path: pagePath,
})

const projectList = projects as Project[]

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <JsonLd
          data={webPageJsonLd({
            title: pageTitle,
            description: pageDescription,
            path: pagePath,
          })}
          id="projects-webpage-jsonld"
        />
        <JsonLd
          data={breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Gravionne", path: "/gravionne" },
            { name: "Projects", path: pagePath },
          ])}
          id="projects-breadcrumb-jsonld"
        />
        <h1 className="text-3xl font-bold mb-6">Projects</h1>

        <div className="flex flex-col gap-6">
          {projectList.map((project) => (
            <ProjectShowcase key={project.title} project={project} />
          ))}
        </div>
      </div>
    </div>
  )
}
