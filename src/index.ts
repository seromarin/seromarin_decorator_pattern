import Circle from "./models/circle.model";
import { IShape } from "./interfaces/shape.interface";

const circle: IShape = new Circle();

circle.draw("Este es un mensaje");
circle.shapeBorder();