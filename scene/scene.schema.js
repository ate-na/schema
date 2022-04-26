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
exports.SceneSchema = exports.Scene = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const gallery_schema_1 = require("./gallery.schema");
const layer_schema_1 = require("./layer.schema");
let Scene = class Scene {
};
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true, trim: true }),
    __metadata("design:type", String)
], Scene.prototype, "title", void 0);
__decorate([
    (0, mongoose_1.Prop)([layer_schema_1.LayerSchema]),
    __metadata("design:type", Array)
], Scene.prototype, "layers", void 0);
__decorate([
    (0, mongoose_1.Prop)([gallery_schema_1.GallerySchema]),
    __metadata("design:type", Array)
], Scene.prototype, "galleries", void 0);
Scene = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true })
], Scene);
exports.Scene = Scene;
exports.SceneSchema = mongoose_1.SchemaFactory.createForClass(Scene);
//# sourceMappingURL=scene.schema.js.map