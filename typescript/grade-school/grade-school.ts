export default class GradeSchool {

    private roster: Map<string, string[]> = new Map()

    studentRoster():Map<string, string[]> {
        const ret = new Map<string, string[]>()
        for (const [i, r] of this.roster.entries()) {
            ret.set(i, r.slice())
        }
        return ret
    }

    studentsInGrade(grade:number): string[] {
        return this.roster.has(String(grade)) ?
            this.roster.get(String(grade))!.slice() : []
    }

    addStudent(name:string, grade:number): void {
        const gradeStr = String(grade)
        this.deleteFromRoster(name)
        let rosterInGrade = this.roster.get(gradeStr)
        if (!rosterInGrade) {
            rosterInGrade = []
            this.roster.set(gradeStr, rosterInGrade)
        }
        rosterInGrade.push(name)
        rosterInGrade.sort()
    }

    private deleteFromRoster(name: string): void {
        for (const [i, r] of this.roster.entries()) {
            this.roster.set(i, r.filter(_name => _name != name))
        }
    }
}

