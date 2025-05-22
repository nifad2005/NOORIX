'use client'
import ExperimentCard from '@/components/experiments/ExperimentCard'
import Loading from '@/components/utils/Loading'
import React, { useEffect, useState } from 'react'

export default function Experiments() {
  const [experimentData, setExperimentData] = useState([])
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    const fetchExperimentData = async () => {
      const response = await fetch('/api/experiments')
      const data = await response.json()
      setExperimentData(data)
   
      setLoading(false)
    }
    fetchExperimentData()
  }, [])
  if(loading)return <Loading/>
  return (
    <div className='  mx-auto flex flex-wrap gap-4 py-8'>
      
      {
        experimentData.map((data: any) => (
         <ExperimentCard key={data._id} {...data} />
        ))
      }
    </div>
  )
}
