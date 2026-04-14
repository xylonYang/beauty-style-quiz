export type TemperatureValue = 'cool' | 'warm' | 'neutral'
export type StyleValue = 'classical' | 'romantic' | 'avantgarde'

export interface QuizOption {
  label: string
  imageUrl: string
  temperatureValue?: TemperatureValue
  styleValue?: StyleValue
}

export interface QuizQuestion {
  id: number
  question: string
  dimension: 'temperature' | 'style'
  options: QuizOption[]
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: '如果你的气质是一种天气，你最接近？',
    dimension: 'temperature',
    options: [
      {
        label: '初雪的清晨，银装素裹的宁静',
        imageUrl: '/images/quiz/q1-snow.png',
        temperatureValue: 'cool',
      },
      {
        label: '午后的暖阳，透过树叶的光斑',
        imageUrl: '/images/quiz/q1-sun.png',
        temperatureValue: 'warm',
      },
      {
        label: '雨后天晴，清透而辽阔的天空',
        imageUrl: '/images/quiz/q1-rain.png',
        temperatureValue: 'neutral',
      },
    ],
  },
  {
    id: 2,
    question: '最想住进哪个世界？',
    dimension: 'style',
    options: [
      {
        label: '古希腊神殿，白色大理石柱林立于蓝天之下',
        imageUrl: '/images/quiz/q2-classical.png',
        styleValue: 'classical',
      },
      {
        label: '莫奈的花园，光影与睡莲交织的午后',
        imageUrl: '/images/quiz/q2-romantic.png',
        styleValue: 'romantic',
      },
      {
        label: '未来都市，霓虹与镜面构成的奇幻空间',
        imageUrl: '/images/quiz/q2-avantgarde.png',
        styleValue: 'avantgarde',
      },
    ],
  },
  {
    id: 3,
    question: '选一件最想拥有的首饰',
    dimension: 'temperature',
    options: [
      {
        label: '铂金钻石choker，冷冽璀璨',
        imageUrl: '/images/quiz/q3-cool.png',
        temperatureValue: 'cool',
      },
      {
        label: '琥珀坠子配金链，温润如蜜',
        imageUrl: '/images/quiz/q3-warm.png',
        temperatureValue: 'warm',
      },
      {
        label: '不规则银质耳环，简约有型',
        imageUrl: '/images/quiz/q3-neutral.png',
        temperatureValue: 'neutral',
      },
    ],
  },
  {
    id: 4,
    question: '你心目中最美的花？',
    dimension: 'style',
    options: [
      {
        label: '白色百合 —— 端庄纯粹',
        imageUrl: '/images/quiz/q4-classical.png',
        styleValue: 'classical',
      },
      {
        label: '粉色芍药 —— 柔美浪漫',
        imageUrl: '/images/quiz/q4-romantic.png',
        styleValue: 'romantic',
      },
      {
        label: '天堂鸟花 —— 张扬独特',
        imageUrl: '/images/quiz/q4-avantgarde.png',
        styleValue: 'avantgarde',
      },
    ],
  },
  {
    id: 5,
    question: '选一个拍照的场景',
    dimension: 'temperature',
    options: [
      {
        label: '极简白色影棚，只有你与光影',
        imageUrl: '/images/quiz/q5-cool.png',
        temperatureValue: 'cool',
      },
      {
        label: '午后的旧书咖啡馆，暖灯与花束',
        imageUrl: '/images/quiz/q5-warm.png',
        temperatureValue: 'warm',
      },
      {
        label: '城市天台日落，剪影与天际线',
        imageUrl: '/images/quiz/q5-neutral.png',
        temperatureValue: 'neutral',
      },
    ],
  },
  {
    id: 6,
    question: '如果生活在一部电影里，你选哪个？',
    dimension: 'style',
    options: [
      {
        label: '《傲慢与偏见》—— 庄园、舞会与含蓄的深情',
        imageUrl: '/images/quiz/q6-classical.png',
        styleValue: 'classical',
      },
      {
        label: '《天使爱美丽》—— 巴黎街头的小确幸',
        imageUrl: '/images/quiz/q6-romantic.png',
        styleValue: 'romantic',
      },
      {
        label: '《银翼杀手2049》—— 未来废墟中的诗意',
        imageUrl: '/images/quiz/q6-avantgarde.png',
        styleValue: 'avantgarde',
      },
    ],
  },
  {
    id: 7,
    question: '选一种颜色代表你',
    dimension: 'temperature',
    options: [
      {
        label: '冰川蓝',
        imageUrl: '/images/quiz/q7-cool.png',
        temperatureValue: 'cool',
      },
      {
        label: '琥珀金',
        imageUrl: '/images/quiz/q7-warm.png',
        temperatureValue: 'warm',
      },
      {
        label: '雾灰色',
        imageUrl: '/images/quiz/q7-neutral.png',
        temperatureValue: 'neutral',
      },
    ],
  },
]
