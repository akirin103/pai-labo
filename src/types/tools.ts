export interface Tool {
  id: string
  name: string
  description: string
  url: string
  status: 'ready' | 'wip' | 'planned'
  icon: string
  categories: string[]
}
