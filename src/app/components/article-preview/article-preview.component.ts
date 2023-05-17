import { Component, Input } from "@angular/core";
import { Article } from "src/app/models/article.model";

@Component({
    selector: 'ui-article-preview',
    templateUrl: './article-preview.component.html',
    styleUrls: ['./article-preview.component.scss']
})
export class ArticlePreviewComponent {
    @Input() article?: Article;

    handleClick(article: Article) {
        console.log('click', article)
    }
}