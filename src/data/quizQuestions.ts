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
        imageUrl: 'https://grazia-prod.oss-ap-southeast-1.aliyuncs.com/resources/uid_100029099/quiz-q1-snow_15304920.png',
        temperatureValue: 'cool',
      },
      {
        label: '午后的暖阳，透过树叶的光斑',
        imageUrl: 'https://grazia-prod.oss-ap-southeast-1.aliyuncs.com/resources/uid_100029099/quiz-q1-sun_7eba5294.png',
        temperatureValue: 'warm',
      },
      {
        label: '雨后天晴，清透而辽阔的天空',
        imageUrl: 'https://grazia-prod.oss-ap-southeast-1.aliyuncs.com/resources/uid_100029099/quiz-q1-rain_7a7b66de.png',
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
        imageUrl: 'https://grazia-prod.oss-ap-southeast-1.aliyuncs.com/resources/uid_100029099/quiz-q2-classical_1e0ff54c.png',
        styleValue: 'classical',
      },
      {
        label: '莫奈的花园，光影与睡莲交织的午后',
        imageUrl: 'https://grazia-prod.oss-ap-southeast-1.aliyuncs.com/resources/uid_100029099/quiz-q2-romantic_93bff946.png',
        styleValue: 'romantic',
      },
      {
        label: '未来都市，霓虹与镜面构成的奇幻空间',
        imageUrl: 'https://grazia-prod.oss-ap-southeast-1.aliyuncs.com/resources/uid_100029099/quiz-q2-avantgarde_a4f75815.png',
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
        imageUrl: 'https://grazia-prod.oss-ap-southeast-1.aliyuncs.com/resources/uid_100029099/quiz-q3-cool_d9c29cc8.png',
        temperatureValue: 'cool',
      },
      {
        label: '琥珀坠子配金链，温润如蜜',
        imageUrl: 'https://grazia-prod.oss-ap-southeast-1.aliyuncs.com/resources/uid_100029099/quiz-q3-warm_991b308a.png',
        temperatureValue: 'warm',
      },
      {
        label: '不规则银质耳环，简约有型',
        imageUrl: 'https://grazia-prod.oss-ap-southeast-1.aliyuncs.com/resources/uid_100029099/quiz-q3-neutral_176363fc.png',
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
        imageUrl: 'https://grazia-prod.oss-ap-southeast-1.aliyuncs.com/resources/uid_100029099/quiz-q4-classical_8f7a1cf2.png',
        styleValue: 'classical',
      },
      {
        label: '粉色芍药 —— 柔美浪漫',
        imageUrl: 'https://grazia-prod.oss-ap-southeast-1.aliyuncs.com/resources/uid_100029099/quiz-q4-romantic_65195aef.png',
        styleValue: 'romantic',
      },
      {
        label: '天堂鸟花 —— 张扬独特',
        imageUrl: 'https://grazia-prod.oss-ap-southeast-1.aliyuncs.com/resources/uid_100029099/quiz-q4-avantgarde_8ffea02d.png',
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
        imageUrl: 'https://grazia-prod.oss-ap-southeast-1.aliyuncs.com/resources/uid_100029099/quiz-q5-cool_9986ac82.png',
        temperatureValue: 'cool',
      },
      {
        label: '午后的旧书咖啡馆，暖灯与花束',
        imageUrl: 'https://grazia-prod.oss-ap-southeast-1.aliyuncs.com/resources/uid_100029099/quiz-q5-warm_f65a4265.png',
        temperatureValue: 'warm',
      },
      {
        label: '城市天台日落，剪影与天际线',
        imageUrl: 'https://grazia-prod.oss-ap-southeast-1.aliyuncs.com/resources/uid_100029099/quiz-q5-neutral_dc570dbb.png',
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
        imageUrl: 'https://grazia-prod.oss-ap-southeast-1.aliyuncs.com/resources/uid_100029099/quiz-q6-classical_82f31549.png',
        styleValue: 'classical',
      },
      {
        label: '《天使爱美丽》—— 巴黎街头的小确幸',
        imageUrl: 'https://grazia-prod.oss-ap-southeast-1.aliyuncs.com/resources/uid_100029099/quiz-q6-romantic_8f08fd3f.png',
        styleValue: 'romantic',
      },
      {
        label: '《银翼杀手2049》—— 未来废墟中的诗意',
        imageUrl: 'https://grazia-prod.oss-ap-southeast-1.aliyuncs.com/resources/uid_100029099/quiz-q6-avantgarde_f1f0b646.png',
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
        imageUrl: 'https://grazia-prod.oss-ap-southeast-1.aliyuncs.com/resources/uid_100029099/quiz-q7-cool_4970de12.png',
        temperatureValue: 'cool',
      },
      {
        label: '琥珀金',
        imageUrl: 'https://grazia-prod.oss-ap-southeast-1.aliyuncs.com/resources/uid_100029099/quiz-q7-warm_9f08e0ec.png',
        temperatureValue: 'warm',
      },
      {
        label: '雾灰色',
        imageUrl: 'https://grazia-prod.oss-ap-southeast-1.aliyuncs.com/resources/uid_100029099/quiz-q7-neutral_2c300fbc.png',
        temperatureValue: 'neutral',
      },
    ],
  },
]
