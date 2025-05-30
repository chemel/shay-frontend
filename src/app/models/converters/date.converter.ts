import { JsonConverter, JsonCustomConvert } from "json2typescript";

@JsonConverter
export class DateConverter implements JsonCustomConvert<Date> {
    serialize(date: Date): any {
        return date ? date.toISOString() : null;
    }

    deserialize(date: string): Date {
        return date ? new Date(date) : new Date();
    }
} 