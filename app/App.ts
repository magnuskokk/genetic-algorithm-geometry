import { Polygon } from './Polygon';
import { Utils } from "./Utils";
import { Canvas } from "./Canvas";


let utils = new Utils();

class App {
    //TODO: private/public stuff

    private canvasConfig: { id: string, width: number, height: number };
    private numPoints: number;
    private canvas: Canvas;

    constructor() {
        this.canvasConfig = {
            id: 'canvasContainer',
            width: 800,
            height: 800
        };

        this.numPoints = 100;

        this.canvas = new Canvas(this.canvasConfig);

        this.init();

    }

    private init() {
        var polygon = new Polygon();
        polygon.random(this.numPoints, this.canvasConfig.width, this.canvasConfig.height);

        console.log(polygon.circularity());

        this.canvas.drawPolygon(polygon);

    }
}

export = new App

