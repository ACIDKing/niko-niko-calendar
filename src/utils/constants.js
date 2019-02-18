import { getSprintWorkingDays } from './utils'

export const SPRINT_DURATION = 2
export const WORKING_DAYS = ['Mon', 'Tue', 'Wed', 'Thur', 'Fri']
export const SPRINT_WORKING_DAYS = getSprintWorkingDays(WORKING_DAYS, SPRINT_DURATION)

export const EMOJI_OPTIONS = [
  {
    label: '😄',
    value: 3,
  },
  { label: '😐', value: 2 },
  { label: '😡', value: 1 },
]
