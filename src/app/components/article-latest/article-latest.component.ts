import { Component } from "@angular/core";
import { Article } from "src/app/models/article.model";

@Component({
    selector: 'ui-article-latest',
    templateUrl: './article-latest.component.html',
    styleUrls: ['./article-latest.component.scss']
})

export class ArticleLatestComponent {
    articles: Article[] = [
        { 
            stub: 'summer-lunch-menu',
            imageSrc: '/assets/component-02/Image-01@2x.jpg',
            title: 'Summer Lunch Menu',
            content: "AEG ambassador Mark Best's summer eats are guaranteed to help you make the most of the warmer weather and entertaining at home.",
            link: ''
        },
        { 
            stub: 'a-tradition-christmas',
            imageSrc: '/assets/component-02/Image-02@2x.jpg',
            title: 'A Traditional Chirstmas Eve, Mark Best Style',
            content: "One of Australia's best chefs and AEG ambassador, Mark Best, shares his favourite Christmas Eve menu which is sure to impress your guests",
            link: ''
        },
        { 
            stub: 'summer-lunch-menu',
            imageSrc: '/assets/component-02/Image-03@2x.jpg',
            title: 'Taking Taste Further',
            content: "This exclusive cookbook gives you all the know-how you need. We've designed it to make sure you get the most of our products - and the best out of your food.",
            link: ''
        }
    ]
}