import { Polygon } from './polygon';
import { Utils } from "./utils";
import * as Konva from 'konva';


let utils = new Utils();

class App {
    private canvasWidth: number;
    private canvasHeight: number;

    // Number of points in randomly generated cloud
    public numPoints: number;

    constructor() {
        this.canvasWidth = 800;
        this.canvasHeight = 800;

        this.numPoints = 200;

        this.init();
    }

    private init() {



        var polygon = new Polygon();
        polygon.random(this.numPoints, this.canvasWidth, this.canvasHeight);

        console.log(polygon.circularity());

        var width = this.canvasWidth;
        var height = this.canvasHeight;
        var stage = new Konva.Stage({
            container: 'canvasContainer',
            width: width,
            height: height,
            draggable: true,
        });
        var layer = new Konva.Layer();
        var poly = new Konva.Line({
            points: polygon.getPointsFlattened(),
            fill: '#00D2FF',
             stroke: 'black',
             strokeWidth: 0,
            closed: true
        });
        // add the shape to the layer
        layer.add(poly);
        // add the layer to the stage
        stage.add(layer);

        var scaleBy = 1.05;
        window.addEventListener('wheel', (e) => {
            e.preventDefault();
            var oldScale = stage.scaleX();
            var mousePointTo = {
                x: stage.getPointerPosition().x / oldScale - stage.x() / oldScale,
                y: stage.getPointerPosition().y / oldScale - stage.y() / oldScale,
            };
            var newScale = e.deltaY > 0 ? oldScale * scaleBy : oldScale / scaleBy;
            stage.scale({ x: newScale, y: newScale });
            var newPos = {
                x: -(mousePointTo.x - stage.getPointerPosition().x / newScale) * newScale,
                y: -(mousePointTo.y - stage.getPointerPosition().y / newScale) * newScale
            };
            stage.position(newPos);
            stage.batchDraw();
        });



    }

	/*private hello() {
		console.log(`Hello ${this.who} !`)
	}

	private who = 'World'*/
}

export = new App

