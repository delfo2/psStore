interface Platform {
    id: number;
    name: string;
    slug: string;
}

interface Store {
    id: number;
    name: string;
    slug: string;
}

interface Rating {
    id: number;
    title: string;
    count: number;
    percent: number;
}

interface Tag {
    id: number;
    name: string;
    slug: string;
    language: string;
    games_count: number;
    image_background: string;
}

interface Genre {
    id: number;
    name: string;
    slug: string;
}

interface ShortScreenshot {
    id: number;
    image: string;
}

export interface PlatformData {
    platform: Platform;
}

interface StoreData {
    store: Store;
}

interface ParentPlatform {
    platform: Platform;
}

export interface GameData {
    slug: string;
    name: string;
    playtime: number;
    platforms: PlatformData[];
    stores: StoreData[];
    released: string;
    tba: boolean;
    background_image: string;
    rating: number;
    rating_top: number;
    ratings_count: number;
    ratings: Rating[],
    reviews_text_count: number;
    added: number;
    added_by_status: {
        yet: number;
        owned: number;
        beaten: number;
        toplay: number;
        dropped: number;
        playing: number;
    };
    metacritic: number | null;
    suggestions_count: number;
    updated: string;
    id: number;
    score: null | unknown;
    clip: null | unknown;
    tags: Tag[];
    esrb_rating: null | unknown;
    user_game: null | unknown;
    reviews_count: number;
    saturated_color: string;
    dominant_color: string;
    short_screenshots: ShortScreenshot[];
    parent_platforms: ParentPlatform[];
    genres: Genre[];
}
