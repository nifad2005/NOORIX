import React from 'react'
import ExperimentCard from '../experiments/ExperimentCard'

// Example data, replace with real data or props as needed
const experiments = [
  {
    author: 'Jane Doe',
    date: '2025-05-23',
    title: 'Experiment 1',
    description: 'This is a description of experiment 1.',
    video: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    category: 'Physics',
  },
  {
    author: 'John Smith',
    date: '2025-05-20',
    title: 'Experiment 2',
    description: 'This is a description of experiment 2.',
    video: '',
    category: 'Chemistry',
  },
]

export default function Experiments() {
  return (
    <div className="max-w-4xl mx-auto py-10 grid grid-cols-1 md:grid-cols-2 gap-8">
      {experiments.map((exp, idx) => (
        <ExperimentCard key={idx} {...exp} />
      ))}
    </div>
  )
}