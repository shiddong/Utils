/**
 * @file 公共工具
 */

 /**
  * @name Sleep方法
  * @desc 返回Promise对象
  * 使用：(async () => {
  *     let actualTime = await new Sleep(2000)
  * })()
  */
class Sleep {
    timeout: number = 0

    constructor(timeout: number) {
        this.timeout = timeout
    }

    then(resolve: any, reject: any) {
        const startTime = Date.now()
        setTimeout(
            () => resolve(Date.now() - startTime),
            this.timeout
        )
    }
}

