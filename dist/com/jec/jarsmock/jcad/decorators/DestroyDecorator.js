"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DestroyDecorator {
    constructor() { }
    decorate(target, key, descriptor) {
        return descriptor;
    }
}
exports.DestroyDecorator = DestroyDecorator;
