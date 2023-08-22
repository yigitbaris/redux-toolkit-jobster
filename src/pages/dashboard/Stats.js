import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { showStats } from '../../features/allJobs/allJobsSlice'
import { StatsContainer, ChartsContainer } from '../../components'

const Stats = () => {
  const { monthlyApplications } = useSelector((store) => store.allJobs)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(showStats())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <StatsContainer />
      {monthlyApplications.length > 0 && <ChartsContainer />}
    </>
  )
}
export default Stats
