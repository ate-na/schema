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
exports.PanelSchema = exports.Panel = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const user_schma_1 = require("../user/user.schma");
const mongoose_2 = require("mongoose");
const users_schema_1 = require("./users.schema");
let Panel = class Panel {
};
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
        type: mongoose_2.Schema.Types.ObjectId,
        ref: user_schma_1.User.name,
        index: true,
    }),
    __metadata("design:type", Object)
], Panel.prototype, "owner", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Panel.prototype, "company", void 0);
__decorate([
    (0, mongoose_1.Prop)([users_schema_1.UsersSchema]),
    __metadata("design:type", Array)
], Panel.prototype, "users", void 0);
Panel = __decorate([
    (0, mongoose_1.Schema)({ timestamps: true, id: false })
], Panel);
exports.Panel = Panel;
exports.PanelSchema = mongoose_1.SchemaFactory.createForClass(Panel);
exports.PanelSchema.pre('findOneAndUpdate', function () {
    this.populate({ path: 'users.user', select: '-password' });
});
//# sourceMappingURL=panel.schema.js.map