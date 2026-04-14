import type { TemperatureValue, StyleValue } from '@/data/quizQuestions'
import { getBeautyTypeByDimensions, type BeautyType } from '@/data/beautyTypes'

export interface QuizAnswer {
  questionId: number
  temperatureValue?: TemperatureValue
  styleValue?: StyleValue
}

function getMostFrequent<T extends string>(values: T[]): T {
  const counts = values.reduce(
    (acc, val) => {
      acc[val] = (acc[val] || 0) + 1
      return acc
    },
    {} as Record<string, number>,
  )

  let maxVal = values[0]
  let maxCount = 0
  for (const [val, count] of Object.entries(counts)) {
    if (count > maxCount) {
      maxCount = count
      maxVal = val as T
    }
  }
  return maxVal
}

export function calculateResult(answers: QuizAnswer[]): BeautyType {
  const temperatureAnswers = answers
    .filter((a) => a.temperatureValue)
    .map((a) => a.temperatureValue!)

  const styleAnswers = answers
    .filter((a) => a.styleValue)
    .map((a) => a.styleValue!)

  const temperature = getMostFrequent(temperatureAnswers)
  const style = getMostFrequent(styleAnswers)

  return getBeautyTypeByDimensions(temperature, style)
}
