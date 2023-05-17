import { Component, Input } from "@angular/core";

@Component({
    selector: 'ui-article-preview',
    templateUrl: './article-preview.component.html',
    styleUrls: ['./article-preview.component.scss']
})
export class ArticlePreviewComponent {
    @Input() title: string = '';
    @Input() imageSrc: string = '';
    @Input() content: string = '';
}