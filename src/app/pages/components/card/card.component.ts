import { Component, Input, OnInit } from '@angular/core';
import { PlatformData } from 'src/app/interfaces/gameData';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
    @Input()
    public cardImg: string = '';
    @Input()
    public isExclusive: boolean = false;
    @Input()
    public cardName: string = '';
    @Input()
    public platforms: PlatformData[] = [];
    @Input()
    public cardPrice: number = 0;

    public ngOnInit(): void {
        this.platforms = this.platforms.slice(0, 2);
        let regex = /[A-Z0-9]+/g;
        this.platforms.map((platform) => {
            const { name } = platform.platform;
            if (name.includes('P') && name.includes('S')) {
                platform.platform.name = name.match(regex)?.join('') || name;
            }
        });
    }
}
