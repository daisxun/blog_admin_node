"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const user_module_1 = require("./users/user.module");
const article_module_1 = require("./article/article.module");
const category_module_1 = require("./category/category.module");
const comment_module_1 = require("./comment/comment.module");
const link_module_1 = require("./link/link.module");
const tag_module_1 = require("./tag/tag.module");
const config_module_1 = require("./confs/config.module");
const dotenv = require("dotenv");
dotenv.config({ path: '.env' });
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            user_module_1.UserModule,
            article_module_1.ArticleModule,
            config_module_1.ConfModule,
            category_module_1.CategoryModule,
            comment_module_1.CommentModule,
            link_module_1.LinkModule,
            tag_module_1.TagModule,
        ],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map