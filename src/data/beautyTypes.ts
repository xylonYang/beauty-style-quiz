export interface BeautyType {
  id: string
  name: string
  englishTag: string
  oneLiner: string
  compliment: string
  temperature: 'cool' | 'warm' | 'neutral'
  style: 'classical' | 'romantic' | 'avantgarde'
  paintingRef: string
  imageUrl: string
}

export const beautyTypes: BeautyType[] = [
  {
    id: 'ice-goddess',
    name: '冰雪女神',
    englishTag: 'Cool × Classical',
    oneLiner: '你的美经得起时间的审视',
    compliment:
      '你的美如同大理石雕塑般经得起岁月检验。冷静的外表下是令人屏息的优雅，不是所有人都能驾驭这份高贵的距离感，而你天生就有。你就是人群中那座不需要开口说话，就让人心生敬意的存在。世界上有千百种美，而你的美，属于最经典、最隽永的那一种。',
    temperature: 'cool',
    style: 'classical',
    paintingRef: '安格尔《大宫女》',
    imageUrl: '/images/beauty/ice-goddess.png',
  },
  {
    id: 'golden-peony',
    name: '盛世牡丹',
    englishTag: 'Warm × Classical',
    oneLiner: '你的存在就是一场华丽的盛宴',
    compliment:
      '你的美是丰盈饱满的，像文艺复兴时期最受追捧的缪斯。温暖而庄重，你走进任何房间都自带主角光环。别人需要努力才能拥有的从容大气，在你身上不过是日常。你就是那种让人第一眼惊艳、第一百眼仍然心动的人。你的美，是带着温度的华贵。',
    temperature: 'warm',
    style: 'classical',
    paintingRef: '拉斐尔《椅中圣母》',
    imageUrl: '/images/beauty/golden-peony.png',
  },
  {
    id: 'still-waters',
    name: '静水流深',
    englishTag: 'Neutral × Classical',
    oneLiner: '你的魅力在回眸的那一瞬',
    compliment:
      '你的美不声不响，却让人过目难忘。像维米尔笔下的光一样，你的魅力在于那份不经意间流露的隽永。你不需要浓墨重彩地宣告自己的美——一个回眸、一个微笑，就足以让人在心里记住很久很久。你是那种越看越耐看、越了解越迷人的人。',
    temperature: 'neutral',
    style: 'classical',
    paintingRef: '维米尔《戴珍珠耳环的少女》',
    imageUrl: '/images/beauty/still-waters.png',
  },
  {
    id: 'moonlight-poet',
    name: '月光诗人',
    englishTag: 'Cool × Romantic',
    oneLiner: '你的美让人想写一首诗',
    compliment:
      '你身上有一种清冷的诗意，像月光洒在湖面上的样子。你的美让人想写诗、想作曲、想把这一刻永远留住。你不必刻意制造浪漫——因为你站在那里，空气里就自动弥漫了诗意。这个世界配不上你的细腻，但因为有你，世界变得更美了一点。',
    temperature: 'cool',
    style: 'romantic',
    paintingRef: '沃特豪斯《夏洛特女郎》',
    imageUrl: '/images/beauty/moonlight-poet.png',
  },
  {
    id: 'warm-glow',
    name: '人间烟火',
    englishTag: 'Warm × Romantic',
    oneLiner: '你的笑容是世界上最好的滤镜',
    compliment:
      '你的笑容是世界上最好的滤镜。你的美不在云端，而在每一个让人心动的真实瞬间。你是所有人心中那个「最想在一起待着很舒服的人」。你身上有一种神奇的魔力——让周围的人都不自觉地变得快乐。真正的美人不一定让人仰望，而是像你这样，让人想靠近。',
    temperature: 'warm',
    style: 'romantic',
    paintingRef: '雷诺阿《煎饼磨坊的舞会》',
    imageUrl: '/images/beauty/warm-glow.png',
  },
  {
    id: 'free-bloom',
    name: '自在花开',
    englishTag: 'Neutral × Romantic',
    oneLiner: '你的绽放全凭自己的节奏',
    compliment:
      '你的美是自由的、不被定义的。像一朵不在意风向的花，你的绽放全凭自己的节奏。这份松弛感，才是最高级的魅力。在这个人人都在用力表演的时代，你那种毫不费力的自在美，反而成了最稀缺的存在。你让「做自己」这三个字变得具体而迷人。',
    temperature: 'neutral',
    style: 'romantic',
    paintingRef: '莫里索《摇篮》',
    imageUrl: '/images/beauty/free-bloom.png',
  },
  {
    id: 'dark-queen',
    name: '暗夜女王',
    englishTag: 'Cool × Avant-garde',
    oneLiner: '你不需要取悦任何人',
    compliment:
      '你的美自带气场结界，不怒自威又让人移不开眼。你不需要取悦任何人，因为你本身就是标准。在你面前，「好看」这个词都显得太单薄了——你诠释的是一种让人臣服的力量美学。这个世界需要更多像你一样，美得理直气壮的人。你的存在本身就是一种态度宣言。',
    temperature: 'cool',
    style: 'avantgarde',
    paintingRef: '克里姆特《朱迪斯》',
    imageUrl: '/images/beauty/dark-queen.png',
  },
  {
    id: 'flame-rose',
    name: '烈焰玫瑰',
    englishTag: 'Warm × Avant-garde',
    oneLiner: '美可以是温柔的，也可以是勇敢的',
    compliment:
      '你的美是热烈的、有力量的。像一朵燃烧的玫瑰，你从不掩饰自己的光芒。你的存在本身就在告诉世界：美可以是勇敢的。你那种敢爱敢恨、活出真我的生命力，比任何精心修饰的漂亮都动人一万倍。有人说美人如花，但你是那种带刺的——让人又爱又敬。',
    temperature: 'warm',
    style: 'avantgarde',
    paintingRef: '穆夏新艺术风格海报',
    imageUrl: '/images/beauty/flame-rose.png',
  },
  {
    id: 'rebel-muse',
    name: '破格缪斯',
    englishTag: 'Neutral × Avant-garde',
    oneLiner: '你自己就是一种风格',
    compliment:
      '你的美打破了所有条条框框。你不属于任何一种风格，因为你自己就是一种风格。时尚追着你跑，潮流被你定义。当别人还在追赶上一季的审美，你已经活成了下一个时代的范本。你身上那种「我就是我」的笃定，才是真正让人着迷的东西。你就是自己最好的代言人。',
    temperature: 'neutral',
    style: 'avantgarde',
    paintingRef: '弗里达·卡罗自画像',
    imageUrl: '/images/beauty/rebel-muse.png',
  },
]

export function getBeautyTypeById(id: string): BeautyType | undefined {
  return beautyTypes.find((t) => t.id === id)
}

export function getBeautyTypeByDimensions(
  temperature: 'cool' | 'warm' | 'neutral',
  style: 'classical' | 'romantic' | 'avantgarde',
): BeautyType {
  return (
    beautyTypes.find(
      (t) => t.temperature === temperature && t.style === style,
    ) ?? beautyTypes[0]
  )
}
