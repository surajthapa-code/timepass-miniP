export interface Job {
  id: number
  company: string
  role: string
  status: 'applied' | 'interview' | 'rejected' | 'offer'
  date: string
  salary?: number
}