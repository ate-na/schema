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
exports.ChatSchema = exports.Chat = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const product_schema_1 = require("../product.schema");
const user_schma_1 = require("../../user/user.schma");
let Chat = class Chat {
};
__decorate([
    (0, mongoose_1.Prop)({ required: true, ref: user_schma_1.User.name, type: mongoose_2.Schema.Types.ObjectId }),
    __metadata("design:type", Object)
], Chat.prototype, "sender", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, ref: user_schma_1.User.name, type: mongoose_2.Schema.Types.ObjectId }),
    __metadata("design:type", Object)
], Chat.prototype, "receiver", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
        ref: product_schema_1.Product.name,
        type: mongoose_2.Schema.Types.ObjectId,
    }),
    __metadata("design:type", Object)
], Chat.prototype, "product", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Chat.prototype, "text", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Array)
], Chat.prototype, "attachment", void 0);
Chat = __decorate([
    (0, mongoose_1.Schema)({ _id: true, id: false, timestamps: true })
], Chat);
exports.Chat = Chat;
exports.ChatSchema = mongoose_1.SchemaFactory.createForClass(Chat);
//# sourceMappingURL=chat.schema.js.map