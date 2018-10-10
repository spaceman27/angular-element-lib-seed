import { OnInit, EventEmitter } from '@angular/core';
export declare class ToolbarComponent implements OnInit {
    languages: any;
    changeLang: EventEmitter<string>;
    language: string;
    constructor();
    ngOnInit(): void;
}
