type SummaryResponse = {
  completed: number
  total: number
  goalsPerDay: Record<
    string,
    {
      id: string
      title: string
      completedAt: string
    }[]
  >
}

export async function getSummary(): Promise<SummaryResponse> {
  const response = await fetch('http://localhost:3333/summary')
  const data = await response.json()

  return data.summary
}

// const [summary, setSummary] = useState<SummaryResponse | null>(null)

// useEffect(() => {
//   fetch('http://localhost:3333/summary')
//     .then(response => {
//       return response.json()
//     })
//     .then(data => {
//       setSummary(data.summary)
//     })
// }, [])
