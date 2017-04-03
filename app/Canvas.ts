import * as Konva from 'konva';
import { Polygon } from './Polygon';

export class Canvas {
    id: string;
    width: number;
    height: number;
    stage: Konva.Stage;
    layer: Konva.Layer;

    constructor(config: { id: string, width: number, height: number }) { //TODO type here
        this.id = config.id;
        this.width = config.width;
        this.height = config.height;

        this.stage = new Konva.Stage({
            container: this.id,
            width: this.width,
            height: this.height,
            draggable: true,
        });

        this.layer = new Konva.Layer();
    }

    drawPolygon(polygon: Polygon) {
        var poly = new Konva.Line({
            points: polygon.getPointsFlattened(),
            fill: '#00D2FF',
            stroke: 'black',
            strokeWidth: 0,
            closed: true
        });
        // add the shape to the layer
        this.layer.add(poly);
        // add the layer to the stage
        this.stage.add(this.layer);
    }


    /*
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
     */
}
