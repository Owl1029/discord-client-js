"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmbedBuilder = void 0;
class EmbedBuilder {
    constructor() {
        this.data = { description: '' };
    }
    setColor(color) {
        this.data.color = color;
        return this;
    }
    setTitle(title) {
        this.data.title = title;
        return this;
    }
    setURL(url) {
        this.data.url = url;
        return this;
    }
    setDescription(description) {
        this.data.description = description;
        return this;
    }
    setImage(image) {
        this.data.image = image;
        return this;
    }
}
exports.EmbedBuilder = EmbedBuilder;
//# sourceMappingURL=EmbedBuilder.js.map