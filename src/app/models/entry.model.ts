import { JsonObject, JsonProperty } from 'json2typescript';
import { DateConverter } from './converters/date.converter';

@JsonObject('Entry')
export class Entry {
    @JsonProperty('id', String, true)
    id?: string;

    @JsonProperty('date', DateConverter, true)
    date?: Date;

    @JsonProperty('permalink', String, true)
    permalink?: string;

    @JsonProperty('title', String, true)
    title?: string;

    @JsonProperty('content', String)
    content: string = '';

    @JsonProperty('hash', String, true)
    hash?: string;

    @JsonProperty('readed', Boolean, true)
    readed?: Boolean;

    @JsonProperty('createdAt', DateConverter, true)
    createdAt?: Date;

    @JsonProperty('feed', String, true)
    feed?: string;
}