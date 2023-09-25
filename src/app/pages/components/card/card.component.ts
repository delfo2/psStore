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
    public cardPrice: number | null = null;
    @Input()
    public cardLink: string = '#';

    public ngOnInit(): void {
        this.cardFormater();
        this.priceCheck();
    }

    public cardFormater(): void {
        this.platforms = this.platforms.slice(0, 2);

        this.platforms.map((platform) => {
            const { name } = platform.platform;

            if (name.includes('P') && name.includes('S')) {
                this.plastationFormater(name, platform);
            } else if (name.toLowerCase().includes('nintendo switch')) {
                platform.platform.name = 'Switch';
            } else if (name.toLocaleLowerCase().includes('game boy color')) {
                platform.platform.name = 'GBC';
            } else if (name.toLocaleLowerCase().includes('game boy a')) {
                platform.platform.name = 'GBA';
            }
        });
    }

    private plastationFormater(name: string, platform: PlatformData): void {
        let commomRegex = /[A-Z0-9]+/g;
        let numberRegex = /[0-9]+/g;
        let newName = name;
        if (name.match(numberRegex)) {
            newName = name.match(commomRegex)?.join('') || name;
        } else {
            newName = 'PS1';
        }
        platform.platform.name = newName;
    }

    private priceCheck() {
        this.cardPrice = this.cardPrice === null ? 99 : this.cardPrice;
    }
}
