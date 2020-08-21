export function classLog() {
    return function(constructor: Function) {
        console.log('classLog(): called');
    }
}

export function shapeBorder() {
    return function(constructor: Function) {
        constructor.prototype.shapeBorder = function () {
            console.log("Shape with border");
        };
        // return Object.assign(constructor.prototype, shapeBorder);
    }
}