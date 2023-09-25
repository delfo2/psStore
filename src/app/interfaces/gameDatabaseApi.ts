import { GameData } from "./gameData";

export interface RawgGameResponse {
    count: number;
    description: string;
    filters: {
        years: number[];
    };
    next: string;
    nofollow: boolean;
    nofollow_collections: string[];
    noindex: boolean;
    previous: string | null;
    results: GameData[];
    seo_description: string;
    seo_h1: string;
    seo_keywords: string;
    seo_title: string;
}
