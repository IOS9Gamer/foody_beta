import { Component, Input, ElementRef, HostListener, ViewChild, ViewChildren, QueryList, Output, EventEmitter, OnInit } from '@angular/core';
import { trigger, transition, state, style, animate } from '@angular/animations';

@Component({
    selector: 'slider',
    templateUrl: 'slider.html',
    styleUrls: ['slider.css'],
    animations: [
        trigger('label', [
            state('full', style({ 
                bottom: '-2px',
                left: '22px'
             })),
             state('used', style({
                bottom: '12px',
                left: '0',
             })),
             transition('full<=>used',animate('20ms'))
        ])
    ]
})
export class Slider implements OnInit{

    constructor() { }

    ngOnInit() {
        this.tmpVolume = Math.round(this.value / 2 / 100 * this.volume);
    }

    active: boolean = false;

    @Input()
    value: number;
    @Input()
    volume: number;
    @Input()
    unit: string;

    @Output()
    updatedValue: EventEmitter<number> = new EventEmitter();
    @Output()
    alert: EventEmitter<void> = new EventEmitter();

    width: number = 200;
    height: number = 12;
    tmpVolume: number;

    @ViewChild('slider') slider: ElementRef;
    @ViewChildren('slider') sliderChildren: QueryList<ElementRef>;

    onPointerMove(evt: PointerEvent) {
        if(this.active) {
            const offsetLeft = Math.round(this.slider.nativeElement.getBoundingClientRect().left);
            const offsetRight = Math.round(this.slider.nativeElement.getBoundingClientRect().right);
            if (evt.clientX <= offsetLeft + 10) {
                this.value = 0;
                this.tmpVolume = 0;
                this.active = false;
                this.alert.emit();
            } else if (evt.clientX >= offsetRight - 5) {
                this.value = this.width;
                this.tmpVolume = this.volume;

            } else {
                this.value = evt.offsetX;
                this.tmpVolume = Math.round(this.value / 2 / 100 * this.volume);

            }
        }
        // TODO move available outside Y Params
    }

    @HostListener('window:mouseup')
    onPointerUp() {
        if(this.active) {
            this.active = false;
            this.updatedValue.emit(this.value / 2);
        }
    }

    onPointerDown(evt: PointerEvent) {
        this.active = true;
        if(evt.offsetX + 10 >= this.width) {
            this.value = this.width;
            this.tmpVolume = this.volume;
        } else if(evt.offsetX - 5 <= 0) {
            this.value = 0;
            this.tmpVolume = 0;
            this.alert.emit();
        } else {
            this.value = evt.offsetX;
            this.tmpVolume = Math.round(this.value / 2 / 100 * this.volume);
        }
        // TODO: Empty Message
    }

    getRoundedValue(value: number) {
        return Math.round(value);
    }

    // TODO: steps between
    // TODO: animation: on 100% label slides to left end?
}
