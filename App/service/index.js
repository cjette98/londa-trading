
import CaretUp from '../assets/caret-up.png'
import CaretDown from '../assets/caret-down.png'


function getColorAndIcon(data) {
  let color = undefined
  let icon = undefined

  if (data) {
    const dataToNumber = Number(data)
    const isNegative = dataToNumber < 0
    const isPositive = dataToNumber > 0

    if (isNegative) {
      color = 'red'
      icon = CaretDown
    } else if (isPositive) {
      color = 'green'
      icon = CaretUp
    }
  }

  return { color, icon }
}

export default {
  getColorAndIcon,
}
