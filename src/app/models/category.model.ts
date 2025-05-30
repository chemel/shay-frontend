import { JsonObject, JsonProperty } from 'json2typescript';

@JsonObject('Category')
export class Category {
    @JsonProperty('id', Number, true)
    id?: number;

    @JsonProperty('name', String, true)
    name?: string;
}