import { getSprintWorkingDays, getAvgTeamMood } from '../utils'

describe('utils.js', () => {
  it('should copy array values n times', () => {
    const arr = [1, 2, '3']

    expect(getSprintWorkingDays(arr, 0)).toEqual([])
    expect(getSprintWorkingDays(arr, 1)).toEqual([1, 2, '3'])
    expect(getSprintWorkingDays(arr, 2)).toEqual([1, 2, '3', 1, 2, '3'])
  })

  it('should return average mood for the team', () => {
    const team = [
      { name: 'Tom', day0: 1, day1: 3 },
      { name: 'Jerry', day0: 1, day2: 2 },
      { name: 'Spike', day0: 1, day2: 1 },
    ]

    expect(getAvgTeamMood('day0', team)).toEqual(1)
    expect(getAvgTeamMood('day1', team)).toEqual(3)
    expect(getAvgTeamMood('day2', team)).toEqual(2)
  })
})
