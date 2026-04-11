import { useState, useEffect } from 'react'
import { fetchProjects } from '../services/projectsService'

export function useProjects() {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [filter, setFilter] = useState('All')

  useEffect(() => {
    async function load() {
      setLoading(true)
      const { data, error } = await fetchProjects()
      setProjects(data || [])
      setError(error)
      setLoading(false)
    }
    load()
  }, [])

  const allTechs = ['All', ...new Set(projects.flatMap(p => p.tech_stack || []))]
  const filtered = filter === 'All' ? projects : projects.filter(p => p.tech_stack?.includes(filter))

  return { projects: filtered, loading, error, filter, setFilter, allTechs }
}
