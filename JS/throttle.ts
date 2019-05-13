/**
 * @name 节流
 */
export class ThrottleProcessor {
    wait: number
    timeoutId: number
    performers: Function[] = []

    constructor(wait: number) {
        this.wait = wait
    }

    add = (performer: Function, args) => {

    }

}
