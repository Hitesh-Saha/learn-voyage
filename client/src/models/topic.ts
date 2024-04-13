export type SubTopic = {
    subTopicId: number;
    subTopicName: string;
    subTopicDuration: number;
    subTopicStatus: string;
}

export type Topic = {
    topicId: number;
    topicName: string;
    topicDescription: string;
    topicStatus: string;
    subTopics: SubTopic[];
    totalVideos: number;
}