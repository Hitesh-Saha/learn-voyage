import { Topic } from './topic';
export type Course = {
    id: number;
    title: string;
    banner: string;
    description: string;
    author: string;
    topics: Topic[];
    duration: number;
    rating: string;
    courseType: string;
    price: number;
    bookmarked: boolean;
    enrolled: boolean;
    progress: number;
}