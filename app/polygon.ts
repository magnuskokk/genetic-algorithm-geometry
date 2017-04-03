import { Utils } from "./utils";
import * as ConcaveMan from 'concaveman';

let utils = new Utils();

//let myValidator = new ZipCodeValidator();

export class Polygon {
    vertices: number[][];

    constructor(vertices?: number[][]) {
        if (vertices) this.vertices = vertices;
    }

    random(numPointsInCloud: number, canvasWidth: number, canvasHeight: number): void {
        var points = [];

        // Generate a random set of points
        for (var i = 0; i < numPointsInCloud; i++) {
            var x = utils.getRandomIntInclusive(0, canvasWidth);
            var y = utils.getRandomIntInclusive(0, canvasHeight);

            points.push([x, y]);
        }

        this.vertices = ConcaveMan(points, 1);
    }

    getPointsFlattened(): number[] {
        return [].concat.apply([], this.vertices);
    }

    area(): number {
        var area = 0;
        var j = this.vertices.length - 1;

        for (var i = 0; i < this.vertices.length; i++) {
            area += (this.vertices[j][0] + this.vertices[i][0]) * (this.vertices[j][1] - this.vertices[i][1]);

            j = i;
        }

        return Math.abs(0.5 * area);
    }

    perimeter(): number {
        var perimeter = 0;
        var j = this.vertices.length - 1;

        for (var i = 0; i < this.vertices.length; i++) {
            perimeter += Math.sqrt(Math.pow(this.vertices[j][0] - this.vertices[i][0], 2) + Math.pow(this.vertices[j][1] - this.vertices[i][1], 2)); //TODO: optimize speed here, use multiplication instead of pow

            j = i;
        }

        return perimeter;
    }

    circularity(): number {
        return 4 * Math.PI * (this.area() / Math.pow(this.perimeter(), 2));
    }
}
