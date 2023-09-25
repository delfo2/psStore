import { Component, OnInit } from '@angular/core';
import { getRandomNumber } from 'src/app/helpers/getRandomNumber';
import { GameData } from 'src/app/interfaces/gameData';
import { GameDatabaseApiService } from 'src/app/services/game-database-api.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
    public games: GameData[] = [];
    public currentDate = new Date();
    public year: number = getRandomNumber(1990, this.currentDate.getFullYear());
    public errorMessage = '';

    public loadScreen = true;
    public errorScreen = false;

    constructor(private api: GameDatabaseApiService) {}

    public ngOnInit(): void {
        this.searchGames(this.year);
    }

    private searchGames(year: number): void {
        this.loadScreen = true;
        this.api.connect(year).subscribe({
            next: (data) => {
                console.log(data);

                data.results.map((game) => {
                    this.addGame(game);
                });
            },
            error: (err) => {
                this.errorMessage = err.status + err.statusText;
                this.changeDisplay();
            },
            complete: () => {
                this.changeDisplay();
            },
        });
    }

    private addGame(game: GameData): void {
        if (
            game.background_image !== '' &&
            game.name !== '' &&
            game.platforms.length > 0 &&
            game.slug !== ''
        ) {
            this.games.push(game);
        }
    }

    private changeDisplay(): void {
        document.documentElement.scrollTop = 0;
        this.loadScreen = false;
        this.errorScreen = !(this.games.length > 0);
    }
}
