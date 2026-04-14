import { useState, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import { quizQuestions, type QuizOption } from '@/data/quizQuestions'
import { calculateResult, type QuizAnswer } from '@/lib/quizScoring'
import QuestionCard from '@/components/quiz/QuestionCard'
import ProgressBar from '@/components/quiz/ProgressBar'

export default function Quiz() {
  const navigate = useNavigate()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [answers, setAnswers] = useState<(QuizAnswer | null)[]>(
    Array(quizQuestions.length).fill(null),
  )
  const [selectedOptions, setSelectedOptions] = useState<(number | null)[]>(
    Array(quizQuestions.length).fill(null),
  )
  const [direction, setDirection] = useState(1)

  const currentQuestion = quizQuestions[currentIndex]

  const handleSelectOption = useCallback(
    (optionIndex: number, option: QuizOption) => {
      const question = quizQuestions[currentIndex]
      if (!question) return

      const newAnswers = [...answers]
      newAnswers[currentIndex] = {
        questionId: question.id,
        temperatureValue: option.temperatureValue,
        styleValue: option.styleValue,
      }
      setAnswers(newAnswers)

      const newSelected = [...selectedOptions]
      newSelected[currentIndex] = optionIndex
      setSelectedOptions(newSelected)

      setTimeout(() => {
        if (currentIndex < quizQuestions.length - 1) {
          setDirection(1)
          setCurrentIndex((prev) => prev + 1)
        } else {
          const validAnswers = newAnswers.filter(
            (a): a is QuizAnswer => a !== null,
          )
          const result = calculateResult(validAnswers)
          navigate(`/result/${result.id}`, {
            state: { answers: validAnswers },
          })
        }
      }, 400)
    },
    [answers, currentIndex, navigate, selectedOptions],
  )

  const handleGoBack = useCallback(() => {
    if (currentIndex > 0) {
      setDirection(-1)
      setCurrentIndex((prev) => prev - 1)
    } else {
      navigate('/')
    }
  }, [currentIndex, navigate])

  if (!currentQuestion) {
    navigate('/', { replace: true })
    return null
  }

  return (
    <div className="min-h-screen gradient-parchment flex flex-col">
      {/* Header with progress */}
      <div className="sticky top-0 z-20 bg-background/80 backdrop-blur-md border-b border-border/50 px-4 py-3">
        <div className="max-w-2xl mx-auto flex items-center gap-3">
          <button
            onClick={handleGoBack}
            className="p-1.5 rounded-md hover:bg-secondary transition-colors text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="h-5 w-5" />
          </button>
          <ProgressBar current={currentIndex + 1} total={quizQuestions.length} />
        </div>
      </div>

      {/* Question area */}
      <div className="flex-1 flex items-center justify-center px-4 py-8">
        <div className="max-w-2xl w-full">
          <motion.p
            key={`num-${currentIndex}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center text-sm text-gold font-display italic mb-2"
          >
            Question {currentIndex + 1}
          </motion.p>

          <AnimatePresence mode="wait" initial={false}>
            <QuestionCard
              key={currentQuestion.id}
              question={currentQuestion}
              selectedOptionIndex={selectedOptions[currentIndex]}
              onSelectOption={handleSelectOption}
              direction={direction}
            />
          </AnimatePresence>

          {currentIndex === 0 && (
            <p className="text-center text-xs text-muted-foreground/50 mt-8 font-serif-cn">
              点击左上角箭头可返回首页
            </p>
          )}
        </div>
      </div>
    </div>
  )
}
