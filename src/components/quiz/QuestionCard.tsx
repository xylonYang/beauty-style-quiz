import { motion } from 'framer-motion'
import type { QuizQuestion, QuizOption } from '@/data/quizQuestions'
import OptionCard from './OptionCard'

interface QuestionCardProps {
  question: QuizQuestion
  selectedOptionIndex: number | null
  onSelectOption: (index: number, option: QuizOption) => void
  direction: number
}

export default function QuestionCard({
  question,
  selectedOptionIndex,
  onSelectOption,
  direction,
}: QuestionCardProps) {
  return (
    <motion.div
      key={question.id}
      initial={{ opacity: 0, x: direction * 60 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: direction * -60 }}
      transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
      className="w-full"
    >
      <h2 className="text-xl md:text-2xl font-display text-center mb-8 text-foreground leading-relaxed">
        {question.question}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {question.options.map((option, index) => (
          <OptionCard
            key={index}
            option={option}
            isSelected={selectedOptionIndex === index}
            onClick={() => onSelectOption(index, option)}
          />
        ))}
      </div>
    </motion.div>
  )
}
