/*eslint-disable */
export default class Car {
    constructor (brand, motor, color) {
        this._brand = brand;
        this._motor = motor;
        this._color = color;
    }

    static get [Symbol.species] () {
        return this;
    }

    cloneCar () {
        const C_Car = this.constructor[Symbol.species] ;
        return new C_Car;
    }
}
