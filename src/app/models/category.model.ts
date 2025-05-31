import { JsonObject, JsonProperty } from 'json2typescript';

@JsonObject('Category')
export class Category {
    @JsonProperty('id', String, true)
    id?: string;

    @JsonProperty('name', String, true)
    name?: string;
}