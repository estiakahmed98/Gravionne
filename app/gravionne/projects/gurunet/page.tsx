import ProjectShowcase from '@/components/projectShowcase'
import { JsonLd } from "@/components/seo/json-ld"
import {
  breadcrumbJsonLd,
  buildMetadata,
  webPageJsonLd,
} from "@/lib/seo"

const pageTitle = "GuruNet Reputation Ops"
const pageDescription =
  "Multi-role Next.js platform for reputation operations with automated tasks, QC workflows, and real-time collaboration."
const pagePath = "/gravionne/projects/gurunet"

export const metadata = buildMetadata({
  title: pageTitle,
  description: pageDescription,
  path: pagePath,
})

export default function Page() {
  const project = {
    title: 'GuruNet Reputation Ops',
    description:
      'Multi-role Next.js platform for client reputation operations with task automation, QC workflows, and real-time collaboration.',
    longDescription:
      'GuruNet Reputation Ops is a Next.js (App Router) + TypeScript platform for running end-to-end client ops. It includes role-specific dashboards (admin, AM/CEO, agent, QC, data-entry, client), task & QC workflows with pause reasons and performance scoring, template/package cloning for client-specific site assets, onboarding and renewal flows, and real-time chat/notifications. The UI uses Tailwind CSS and shadcn/ui; data is powered by Prisma/Postgres; real-time is via Pusher. Deployed on Vercel for quick previews.',
    technologies: [
      'Next.js',
      'React',
      'TypeScript',
      'Prisma',
      'PostgreSQL',
      'NextAuth',
      'Tailwind CSS',
      'shadcn/ui',
      'Lucide React',
      'Pusher',
      'SWR',
      'Vercel'
    ],
    image: '/assets/gurunet-reputation-ops.png',
    link: 'https://task-management-ann-nahl-gray.vercel.app'
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 py-12">
      <div className="max-w-5xl mx-auto px-4">
        <JsonLd
          data={webPageJsonLd({
            title: pageTitle,
            description: pageDescription,
            path: pagePath,
          })}
          id="gurunet-webpage-jsonld"
        />
        <JsonLd
          data={breadcrumbJsonLd([
            { name: "Home", path: "/" },
            { name: "Gravionne", path: "/gravionne" },
            { name: "Projects", path: "/gravionne/projects" },
            { name: "GuruNet", path: pagePath },
          ])}
          id="gurunet-breadcrumb-jsonld"
        />
        <ProjectShowcase project={project} />
      </div>
    </div>
  )
}
