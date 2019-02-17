export const getSprintWorkingDays = (array, times) => {
  const sprintWorkingDays = []
  for (let i = 0; i < times; i++) {
    sprintWorkingDays.push(...array)
  }
  return sprintWorkingDays
}
