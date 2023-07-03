import type { Project } from '~/types'

export async function getProjects(): Promise<Project[]> {
  const res = await fetch(
    'https://raw.githubusercontent.com/roblesdotdev/www.roblesdotdev/main/content/projects.json',
  )
  if (!res.ok) return Promise.reject('Fail to get projects data')
  const data = await res.json()
  return Promise.resolve(data as Project[])
}
