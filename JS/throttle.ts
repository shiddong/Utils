/**
 * @name 节流
 */
export class xThrottleProcessor {
    wait: number
    timeoutId: number
    performers: Function[] = []

    constructor(wait: number) {
        this.wait = wait
    }

    add = (performer: Function, args) => {

    }

}

export class ThrottleProcessor {
    timeoutId: number = null
    timeout: number
    performer: Function = null

    constructor(fn: Function, timeout: number = 100) {
        this.performer = fn
        this.timeout = timeout
    }

    process = (...args: any[]) => {
        const self = this
        if (!self.timeoutId) {
            setTimeout(() => {
                self.performer(...args)
                clearTimeout(self.timeoutId)
            }, self.timeout)
        }
    }
}