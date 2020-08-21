export function functionLog() {
    return function(target, propertyKey: string | symbol, descriptor: FunctionConstructor) {
        console.log('functionLog(): called');

        console.log('target ->', target)
        console.log('propertyKey ->', propertyKey)
        console.log('descriptor ->', descriptor)
    }
}