import { IShape } from "../interfaces/shape.interface";
import { classLog, shapeBorder } from "../decorators/class.decorator";

@classLog()
@shapeBorder()
class Circle implements IShape {
    
    draw(): void {
        console.log('Shape: Circle');
    }

}

export default Circle;