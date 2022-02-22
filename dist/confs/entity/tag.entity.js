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
exports.Tag = void 0;
const typeorm_1 = require("typeorm");
let Tag = class Tag {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'int', comment: 'id' }),
    __metadata("design:type", Number)
], Tag.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', comment: '标签名称', nullable: false }),
    __metadata("design:type", String)
], Tag.prototype, "tagname", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', comment: '标签描述', nullable: false }),
    __metadata("design:type", String)
], Tag.prototype, "tagdesc", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', comment: '标签状态', nullable: true, default: 0 }),
    __metadata("design:type", Number)
], Tag.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'bigint',
        comment: '创建时间',
        nullable: false,
        default: new Date().getTime(),
    }),
    __metadata("design:type", Number)
], Tag.prototype, "cdate", void 0);
Tag = __decorate([
    (0, typeorm_1.Entity)()
], Tag);
exports.Tag = Tag;
//# sourceMappingURL=tag.entity.js.map