const colorNumbers = new Map(
    Object.entries({
      black: 0,
      brown: 1,
      red: 2,
      orange: 3,
      yellow: 4,
      green: 5,
      blue: 6,
      violet: 7,
      grey: 8,
      white: 9,
    })
)

export class ResistorColor {
  private colors: string[]

  constructor(colors: string[]) {
    if (colors.length <= 1) {
      throw new Error('At least two colors need to be present')
    }
    this.colors = colors
  }

  value = (): number => colorNumbers.get(this.colors[0])! * 10 + colorNumbers.get(this.colors[1])!
}