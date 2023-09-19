import { Component, OnInit } from '@angular/core';
import { GameData } from 'src/app/interfaces/gameData';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
    public games: GameData[] = [];

    public ngOnInit(): void {
        this.games = [
            {
                slug: 'police-stories',
                name: 'Police Stories',
                playtime: 2,
                platforms: [
                    {
                        platform: {
                            id: 7,
                            name: 'Nintendo Switch',
                            slug: 'nintendo-switch',
                        },
                    },
                    {
                        platform: {
                            id: 18,
                            name: 'PlayStation 4',
                            slug: 'playstation4',
                        },
                    },
                    { platform: { id: 4, name: 'PC', slug: 'pc' } },
                    { platform: { id: 1, name: 'Xbox One', slug: 'xbox-one' } },

                    { platform: { id: 5, name: 'macOS', slug: 'macos' } },
                    { platform: { id: 6, name: 'Linux', slug: 'linux' } },
                ],
                stores: [
                    { store: { id: 1, name: 'Steam', slug: 'steam' } },
                    {
                        store: {
                            id: 3,
                            name: 'PlayStation Store',
                            slug: 'playstation-store',
                        },
                    },
                    {
                        store: {
                            id: 2,
                            name: 'Xbox Store',
                            slug: 'xbox-store',
                        },
                    },
                    { store: { id: 5, name: 'GOG', slug: 'gog' } },
                    {
                        store: {
                            id: 6,
                            name: 'Nintendo Store',
                            slug: 'nintendo',
                        },
                    },
                    { store: { id: 9, name: 'itch.io', slug: 'itch' } },
                ],
                released: '2019-09-18',
                tba: false,
                background_image:
                    'https://media.rawg.io/media/screenshots/9e1/9e11b9a8958de594c9e294fd0e569c7e.jpg',
                rating: 3.38,
                rating_top: 4,
                ratings: [
                    { id: 4, title: 'recommended', count: 31, percent: 50.82 },
                    { id: 3, title: 'meh', count: 18, percent: 29.51 },
                    { id: 1, title: 'skip', count: 8, percent: 13.11 },
                    { id: 5, title: 'exceptional', count: 4, percent: 6.56 },
                ],
                ratings_count: 60,
                reviews_text_count: 0,
                added: 1014,
                added_by_status: {
                    yet: 34,
                    owned: 882,
                    beaten: 40,
                    toplay: 30,
                    dropped: 25,
                    playing: 3,
                },
                metacritic: 71,
                suggestions_count: 167,
                updated: '2023-08-22T04:59:43',
                id: 15056,
                score: null,
                clip: null,
                tags: [
                    {
                        id: 31,
                        name: 'Singleplayer',
                        slug: 'singleplayer',
                        language: 'eng',
                        games_count: 208833,
                        image_background:
                            'https://media.rawg.io/media/games/310/3106b0e012271c5ffb16497b070be739.jpg',
                    },
                    {
                        id: 40847,
                        name: 'Steam Achievements',
                        slug: 'steam-achievements',
                        language: 'eng',
                        games_count: 31771,
                        image_background:
                            'https://media.rawg.io/media/games/9fa/9fa63622543e5d4f6d99aa9d73b043de.jpg',
                    },
                    {
                        id: 40836,
                        name: 'Full controller support',
                        slug: 'full-controller-support',
                        language: 'eng',
                        games_count: 14937,
                        image_background:
                            'https://media.rawg.io/media/games/49c/49c3dfa4ce2f6f140cc4825868e858cb.jpg',
                    },
                    {
                        id: 13,
                        name: 'Atmospheric',
                        slug: 'atmospheric',
                        language: 'eng',
                        games_count: 30148,
                        image_background:
                            'https://media.rawg.io/media/games/bc0/bc06a29ceac58652b684deefe7d56099.jpg',
                    },
                    {
                        id: 7808,
                        name: 'steam-trading-cards',
                        slug: 'steam-trading-cards',
                        language: 'eng',
                        games_count: 7571,
                        image_background:
                            'https://media.rawg.io/media/games/fc1/fc1307a2774506b5bd65d7e8424664a7.jpg',
                    },
                    {
                        id: 42,
                        name: 'Great Soundtrack',
                        slug: 'great-soundtrack',
                        language: 'eng',
                        games_count: 3249,
                        image_background:
                            'https://media.rawg.io/media/games/8cc/8cce7c0e99dcc43d66c8efd42f9d03e3.jpg',
                    },
                    {
                        id: 45,
                        name: '2D',
                        slug: '2d',
                        language: 'eng',
                        games_count: 189209,
                        image_background:
                            'https://media.rawg.io/media/games/9fa/9fa63622543e5d4f6d99aa9d73b043de.jpg',
                    },
                    {
                        id: 26,
                        name: 'Gore',
                        slug: 'gore',
                        language: 'eng',
                        games_count: 5154,
                        image_background:
                            'https://media.rawg.io/media/games/21a/21ad672cedee9b4378abb6c2d2e626ee.jpg',
                    },
                    {
                        id: 40850,
                        name: 'Steam Leaderboards',
                        slug: 'steam-leaderboards',
                        language: 'eng',
                        games_count: 6021,
                        image_background:
                            'https://media.rawg.io/media/games/fc8/fc838d98c9b944e6a15176eabf40bee8.jpg',
                    },
                    {
                        id: 49,
                        name: 'Difficult',
                        slug: 'difficult',
                        language: 'eng',
                        games_count: 12597,
                        image_background:
                            'https://media.rawg.io/media/games/4cf/4cfc6b7f1850590a4634b08bfab308ab.jpg',
                    },
                    {
                        id: 34,
                        name: 'Violent',
                        slug: 'violent',
                        language: 'eng',
                        games_count: 6025,
                        image_background:
                            'https://media.rawg.io/media/games/21a/21ad672cedee9b4378abb6c2d2e626ee.jpg',
                    },
                    {
                        id: 122,
                        name: 'Pixel Graphics',
                        slug: 'pixel-graphics',
                        language: 'eng',
                        games_count: 90784,
                        image_background:
                            'https://media.rawg.io/media/games/f46/f466571d536f2e3ea9e815ad17177501.jpg',
                    },
                    {
                        id: 74,
                        name: 'Retro',
                        slug: 'retro',
                        language: 'eng',
                        games_count: 39965,
                        image_background:
                            'https://media.rawg.io/media/games/14a/14a83c56ff668baaced6e8c8704b6391.jpg',
                    },
                    {
                        id: 61,
                        name: 'Top-Down',
                        slug: 'top-down',
                        language: 'eng',
                        games_count: 23341,
                        image_background:
                            'https://media.rawg.io/media/games/d28/d28e64fd1af23d1846d20b47dfa933f8.jpeg',
                    },
                    {
                        id: 136,
                        name: 'Music',
                        slug: 'music',
                        language: 'eng',
                        games_count: 25760,
                        image_background:
                            'https://media.rawg.io/media/screenshots/dcc/dcce37f6d000c846c7aa23ccebf53a73.jpg',
                    },
                    {
                        id: 78,
                        name: 'America',
                        slug: 'america',
                        language: 'eng',
                        games_count: 503,
                        image_background:
                            'https://media.rawg.io/media/games/106/1069e754e7e6012b0cf42b4b04704792.jpg',
                    },
                    {
                        id: 236,
                        name: 'Top-Down Shooter',
                        slug: 'top-down-shooter',
                        language: 'eng',
                        games_count: 1673,
                        image_background:
                            'https://media.rawg.io/media/screenshots/c37/c3739a39b6c595cfeb1301af7604a609.jpg',
                    },
                ],
                esrb_rating: null,
                user_game: null,
                reviews_count: 61,
                saturated_color: '0f0f0f',
                dominant_color: '0f0f0f',
                short_screenshots: [
                    {
                        id: -1,
                        image: 'https://media.rawg.io/media/screenshots/9e1/9e11b9a8958de594c9e294fd0e569c7e.jpg',
                    },
                    {
                        id: 132358,
                        image: 'https://media.rawg.io/media/screenshots/06b/06b45c94e8c514c1edca9e677a3ffa2a.jpg',
                    },
                    {
                        id: 132359,
                        image: 'https://media.rawg.io/media/screenshots/36c/36c1d852d10b983a8867694fa80d7859.jpg',
                    },
                    {
                        id: 132360,
                        image: 'https://media.rawg.io/media/screenshots/9a5/9a564387ecb65bf1b4bfcebfa116af14.jpg',
                    },
                    {
                        id: 132361,
                        image: 'https://media.rawg.io/media/screenshots/1e2/1e25dee234e9967261ebbc483c6d1741.jpg',
                    },
                    {
                        id: 132362,
                        image: 'https://media.rawg.io/media/screenshots/f69/f69a65bfe7e936be818752e634be287f.jpg',
                    },
                    {
                        id: 132363,
                        image: 'https://media.rawg.io/media/screenshots/433/433f092ab28d33d09b56b5208752456a.jpg',
                    },
                ],
                parent_platforms: [
                    { platform: { id: 1, name: 'PC', slug: 'pc' } },
                    {
                        platform: {
                            id: 2,
                            name: 'PlayStation',
                            slug: 'playstation',
                        },
                    },
                    { platform: { id: 3, name: 'Xbox', slug: 'xbox' } },
                    {
                        platform: {
                            id: 5,
                            name: 'Apple Macintosh',
                            slug: 'mac',
                        },
                    },
                    { platform: { id: 6, name: 'Linux', slug: 'linux' } },
                    { platform: { id: 7, name: 'Nintendo', slug: 'nintendo' } },
                ],
                genres: [
                    { id: 2, name: 'Shooter', slug: 'shooter' },
                    { id: 4, name: 'Action', slug: 'action' },
                    { id: 10, name: 'Strategy', slug: 'strategy' },
                    { id: 14, name: 'Simulation', slug: 'simulation' },
                    { id: 51, name: 'Indie', slug: 'indie' },
                ],
            },
        ];
    }
}
