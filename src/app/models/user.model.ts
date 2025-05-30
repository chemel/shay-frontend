import { JsonObject, JsonProperty } from 'json2typescript';

@JsonObject('User')
export class User {
    @JsonProperty('username', String, true)
    username?: string;

    @JsonProperty('roles', [String], true)
    roles?: string[];
}