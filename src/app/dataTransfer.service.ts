import { EventEmitter } from "@angular/core";

export class dataTransfer{
    dataUpdated  = new EventEmitter<string>();
    indexUpdated  = new EventEmitter<number>();
    toMenuList = new EventEmitter<string>();
}