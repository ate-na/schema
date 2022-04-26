"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LayerSchema = exports.Layer = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const variant_schema_1 = require("./variant.schema");
let Layer = class Layer {
};
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true, trim: true }),
    __metadata("design:type", String)
], Layer.prototype, "title", void 0);
__decorate([
    (0, mongoose_1.Prop)([variant_schema_1.VariantSchema]),
    __metadata("design:type", Array)
], Layer.prototype, "variants", void 0);
Layer = __decorate([
    (0, mongoose_1.Schema)()
], Layer);
exports.Layer = Layer;
exports.LayerSchema = mongoose_1.SchemaFactory.createForClass(Layer);
//# sourceMappingURL=layer.schema.js.map