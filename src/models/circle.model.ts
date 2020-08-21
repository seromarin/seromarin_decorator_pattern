import { IShape } from "../interfaces/shape.interface";
import { classLog, shapeBorder } from "../decorators/class.decorator";
import { functionLog } from "../decorators/function.decorator";
import { propertyLog } from "../decorators/property.decorator";

@classLog()
@shapeBorder()
class Circle implements IShape {
    
    @functionLog()
    draw(@propertyLog() message: string): void {
        console.log('Shape: Circle', message);
    }

}

export default Circle;