import { Category } from "./category.model";

export class Feed {
  id?: number;
  title?: string;
  url?: string;
  category?: Category;

  public get domain(): string {
    if(this.url === undefined) {
      return '';
    }
    return (new URL(this.url)).hostname;
  }
}