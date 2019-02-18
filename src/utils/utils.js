import { sumBy } from 'lodash'

export const getSprintWorkingDays = (array, times) => {
  const sprintWorkingDays = []
  for (let i = 0; i < times; i++) {
    sprintWorkingDays.push(...array)
  }
  return sprintWorkingDays
}

export const getAvgTeamMood = (day, arr) => {
  const count = arr.reduce((prev, curr) => {
    return prev + Object.keys(curr).filter(prop => prop === day).length
  }, 0)

  const sum = sumBy(arr, elem => elem[day] || 0)

  return sum ? Math.round(sum / count) : null
}
