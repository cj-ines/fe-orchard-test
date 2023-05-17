import { Component } from "@angular/core";

@Component({
    selector: 'ui-headline',
    templateUrl: './headline.component.html',
    styleUrls: ['./headline.component.scss']
})

export class HeadlineComponent {

    modal: string|null = null;

    showModal(src: string) {
        this.modal = src;
    }
}