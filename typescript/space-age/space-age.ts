export default class SpaceAge {
    private static readonly EARTH_YEAR_SECONDS = 31557600

    private readonly earthAge: number

    constructor(private _seconds: number) {
        this.earthAge = this._seconds / SpaceAge.EARTH_YEAR_SECONDS
    }

    get seconds(): number {
        return this._seconds
    }

    private static round(n: number): number {
        return Math.round(n * 100) / 100
    }

    onEarth(): number { return SpaceAge.round(this.earthAge) }

    onMercury(): number { return SpaceAge.round(this.earthAge / 0.2408467) }
    onVenus(): number { return SpaceAge.round(this.earthAge / 0.61519726) }
    onMars(): number { return SpaceAge.round(this.earthAge / 1.8808158) }
    onJupiter(): number { return SpaceAge.round(this.earthAge / 11.862615) }
    onSaturn(): number { return SpaceAge.round(this.earthAge / 29.447498) }
    onUranus(): number { return SpaceAge.round(this.earthAge / 84.016846) }
    onNeptune(): number { return SpaceAge.round(this.earthAge / 164.79132) }
}