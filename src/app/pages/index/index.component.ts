import { AfterViewInit, Component } from "@angular/core";

@Component({
    selector: 'page-index',
    templateUrl: './index.component.html',
    styleUrls: ['./index.component.scss']
})
export class IndexComponent implements AfterViewInit {

    ngAfterViewInit(): void {
       document.querySelectorAll('a').forEach(a => {
        a.addEventListener('click', () => console.log(a))
       })
    }
}