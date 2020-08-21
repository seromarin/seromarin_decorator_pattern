import { IShape } from "../interfaces/shape.interface";

class Rectangle implements IShape {
    
    draw(): void {
        console.log('Shape: Circle');
    }

}

export default Rectangle;