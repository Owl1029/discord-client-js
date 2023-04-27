export class EmbedBuilder {
    private data: EmbedData = { description: '' };
  
    public setColor(color: string): this {
      this.data.color = color;
      return this;
    }
  
    public setTitle(title: string): this {
      this.data.title = title;
      return this;
    }
  
    public setURL(url: string): this {
      this.data.url = url;
      return this;
    }
  
    public setDescription(description: string): this {
      this.data.description = description;
      return this;
    }
  
    public setImage(image: string): this {
      this.data.image = image;
      return this;
    }

}
  
type EmbedData = {
    color?: string;
    title?: string;
    url?: string;
    description: string;
    image?: string;
}; 