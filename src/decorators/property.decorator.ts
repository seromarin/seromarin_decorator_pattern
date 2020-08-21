export function propertyLog() {
    return function(target, propertyKey: string | symbol, descriptor: FunctionConstructor) {
        console.log('propertyLog(): called');

        console.log('target ->', target)
        console.log('propertyKey ->', propertyKey)
        console.log('descriptor ->', descriptor)
    }
}