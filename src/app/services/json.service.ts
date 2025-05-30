import { Injectable } from '@angular/core';
import { JsonConvert, OperationMode, ValueCheckingMode } from 'json2typescript';

@Injectable({
    providedIn: 'root'
})
export class JsonService {
    private jsonConvert: JsonConvert;

    constructor() {
        this.jsonConvert = new JsonConvert();
        // Configure json2typescript
        this.jsonConvert.operationMode = OperationMode.ENABLE;
        this.jsonConvert.valueCheckingMode = ValueCheckingMode.ALLOW_NULL;
        this.jsonConvert.ignorePrimitiveChecks = false; // Don't allow assigning number to string etc.
    }

    /**
     * Deserialize JSON data to a specific type
     * @param json The JSON data to deserialize
     * @param classReference The class to deserialize to
     * @returns An instance of the specified class
     */
    public deserialize<T extends object>(json: any, classReference: new () => T): T {
        try {
            return this.jsonConvert.deserializeObject(json, classReference);
        } catch (error) {
            console.error('Error deserializing object:', error);
            throw error;
        }
    }

    /**
     * Deserialize JSON array to an array of specific type
     * @param jsonArray The JSON array to deserialize
     * @param classReference The class to deserialize each item to
     * @returns An array of instances of the specified class
     */
    public deserializeArray<T extends object>(jsonArray: any[], classReference: new () => T): T[] {
        try {
            return this.jsonConvert.deserializeArray(jsonArray, classReference);
        } catch (error) {
            console.error('Error deserializing array:', error);
            throw error;
        }
    }

    /**
     * Serialize an object to JSON
     * @param data The object to serialize
     * @returns The serialized JSON
     */
    public serialize<T extends object>(data: T): any {
        try {
            return this.jsonConvert.serializeObject(data);
        } catch (error) {
            console.error('Error serializing object:', error);
            throw error;
        }
    }

    /**
     * Serialize an array of objects to JSON
     * @param data The array of objects to serialize
     * @returns The serialized JSON array
     */
    public serializeArray<T extends object>(data: T[]): any[] {
        try {
            return this.jsonConvert.serializeArray(data);
        } catch (error) {
            console.error('Error serializing array:', error);
            throw error;
        }
    }
} 