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
exports.UsersSchema = exports.Users = exports.Permission = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const user_schma_1 = require("../user/user.schma");
const mongoose_2 = require("mongoose");
var Permission;
(function (Permission) {
    Permission["FINANCIAL"] = "FINANCIAL";
    Permission["PRODOUCT"] = "PRODUCT";
    Permission["VISIT"] = "VISIT";
})(Permission = exports.Permission || (exports.Permission = {}));
let Users = class Users {
};
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: mongoose_2.Schema.Types.ObjectId, ref: user_schma_1.User.name }),
    __metadata("design:type", Object)
], Users.prototype, "user", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Array)
], Users.prototype, "permission", void 0);
Users = __decorate([
    (0, mongoose_1.Schema)({ id: false, timestamps: true })
], Users);
exports.Users = Users;
exports.UsersSchema = mongoose_1.SchemaFactory.createForClass(Users);
//# sourceMappingURL=users.schema.js.map