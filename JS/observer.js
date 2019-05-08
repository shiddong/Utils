
let queueObserver = new Set()
let observer = fn => queueObserver.add(fn)

let observable = obj => new Proxy(obj, {
    set
    // set: (target, key, value, receiver) => {
    //     const result = Reflect.set(target, key, value, receiver)
    //     queueObserver.forEach(observerFn => observerFn())
    //     return result
    // }
})

function set (...args) {
    const result = Reflect.set(...args)
    queueObserver.forEach(observerFn => observerFn())
    return result
}


// TEST
let obj = observable({
    name: "shiddong",
    age: 22
})
function print() {
    console.log(`${obj.name}, ${obj.age}`)
}
observer(print)

obj.name = "shanghai"