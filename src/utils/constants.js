import { getSprintWorkingDays } from './utils'

export const SPRINT_DURATION = 2
export const WORKING_DAYS = ['Mon', 'Tue', 'Wed', 'Thur', 'Fri']
export const SPRINT_WORKING_DAYS = getSprintWorkingDays(WORKING_DAYS, SPRINT_DURATION)
