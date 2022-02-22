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
exports.Link = void 0;
const typeorm_1 = require("typeorm");
let Link = class Link {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)({ type: 'int', comment: 'id' }),
    __metadata("design:type", Number)
], Link.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', comment: '网站名', nullable: false }),
    __metadata("design:type", String)
], Link.prototype, "siteName", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'text', comment: '网站地址', nullable: false }),
    __metadata("design:type", String)
], Link.prototype, "siteUrl", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', comment: '链接状态', nullable: true, default: 0 }),
    __metadata("design:type", Number)
], Link.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.Column)({
        type: 'bigint',
        comment: '创建时间',
        nullable: false,
        default: new Date().getTime(),
    }),
    __metadata("design:type", Number)
], Link.prototype, "cdate", void 0);
Link = __decorate([
    (0, typeorm_1.Entity)()
], Link);
exports.Link = Link;
//# sourceMappingURL=link.entity.js.map