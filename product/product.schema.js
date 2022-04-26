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
exports.ProductSchema = exports.Product = exports.ProductDimension = exports.ProductStatus = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const user_schma_1 = require("../user/user.schma");
const product_type_schema_1 = require("./product-type/product-type.schema");
var ProductStatus;
(function (ProductStatus) {
    ProductStatus["DRAFT"] = "draft";
    ProductStatus["PROCESS"] = "process";
    ProductStatus["DELIVERED"] = "delivered";
    ProductStatus["CONFIRMED"] = "confirmed";
    ProductStatus["REJECTED"] = "REJECTED";
})(ProductStatus = exports.ProductStatus || (exports.ProductStatus = {}));
var ProductDimension;
(function (ProductDimension) {
    ProductDimension["CM"] = "CM";
    ProductDimension["MM"] = "MM";
    ProductDimension["IN"] = "IN";
})(ProductDimension = exports.ProductDimension || (exports.ProductDimension = {}));
let Product = class Product {
};
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Product.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Product.prototype, "description", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", String)
], Product.prototype, "family", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: false, default: ProductStatus.DRAFT }),
    __metadata("design:type", String)
], Product.prototype, "status", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: false }),
    __metadata("design:type", String)
], Product.prototype, "startAtProcess", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: false }),
    __metadata("design:type", String)
], Product.prototype, "confirmAtProcess", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: false }),
    __metadata("design:type", String)
], Product.prototype, "rejectAtProcess", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, ref: user_schma_1.User.name, type: mongoose_2.Schema.Types.ObjectId }),
    __metadata("design:type", Object)
], Product.prototype, "creator", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
        ref: product_type_schema_1.ProductType.name,
        type: [mongoose_2.Schema.Types.ObjectId],
    }),
    __metadata("design:type", Array)
], Product.prototype, "types", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: false, default: 1 }),
    __metadata("design:type", Number)
], Product.prototype, "version", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Array)
], Product.prototype, "height", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Array)
], Product.prototype, "width", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Array)
], Product.prototype, "length", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true }),
    __metadata("design:type", Array)
], Product.prototype, "attachment", void 0);
Product = __decorate([
    (0, mongoose_1.Schema)({ _id: true, id: false, timestamps: true })
], Product);
exports.Product = Product;
exports.ProductSchema = mongoose_1.SchemaFactory.createForClass(Product);
//# sourceMappingURL=product.schema.js.map