import { Category } from "./category.model";
import { JsonObject, JsonProperty } from 'json2typescript';

@JsonObject('Feed')
export class Feed {
  @JsonProperty('id', Number, true)
  id?: number;

  @JsonProperty('title', String, true)
  title?: string;

  @JsonProperty('url', String, true)
  url?: string;

  @JsonProperty('category', Category, true)
  category?: Category;

  public get getUrlHostname(): string {
    if(this.url === undefined) {
      return '';
    }
    return (new URL(this.url)).hostname;
  }
}