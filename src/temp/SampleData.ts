import { Categories } from "../models/common";
import { Course } from "../models/course";

const sampleCourse: Course[] = [
    {
        id: 1,
        title: 'Learn ReactJS',
        banner: 'https://images.unsplash.com/photo-1626908013351-800ddd734b8a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDUzMDJ8MHwxfHNlYXJjaHwxMXx8bWF4aW1hbGZvY3VzfGVufDF8fHx8MTY1MjIyMDQyNA&ixlib=rb-1.2.1&q=80&w=1080',
        description: 'This online course was created for you if you are interested in taking great digital photos and learning how to make your photography unique and outstanding.',
        author: 'John Eames',
        topics: [
            {
                topicId: 1,
                topicName: "Introduction to ReactJS",
                topicDescription: "This is topic 1",
                topicStatus: 'to do',
                subTopics: [
                    {
                        subTopicId: 1,
                        subTopicName: "Sub Topic 1",
                        subTopicDuration: 30,
                        subTopicStatus: 'to do',
                    },
                    {
                        subTopicId: 2,
                        subTopicName: "Sub Topic 2",
                        subTopicDuration: 73,
                        subTopicStatus: 'to do',
                    },

                ],
                totalVideos: 5,
            },
            {
                topicId: 2,
                topicName: "components and props",
                topicDescription: "This is topic 2",
                topicStatus: 'to do',
                subTopics: [
                    {
                        subTopicId: 1,
                        subTopicName: "Sub Topic 1",
                        subTopicDuration: 30,
                        subTopicStatus: 'to do',
                    },
                    {
                        subTopicId: 2,
                        subTopicName: "Sub Topic 2",
                        subTopicDuration: 73,
                        subTopicStatus: 'to do',
                    },
                ],
                totalVideos: 5,
            },
        ],
        duration: 360,
        rating: '4.5/5',
        courseType: 'free',
        price: 600,
        bookmarked: false,
        enrolled: false,
        progress: 0,
    },
    {
        id: 2,
        title: 'PowerBI Masterclass',
        banner: 'https://images.unsplash.com/photo-1493612276216-ee3925520721?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDUzMDJ8MHwxfHNlYXJjaHwxNXx8Y29udGVudHxlbnwxfHx8fDE2NzI5OTU1OTA&ixlib=rb-4.0.3&q=80&w=1080',
        description: 'This online course was created for you if you are interested in taking great digital photos and learning how to make your photography unique and outstanding.',
        author: 'Ian Brown',
        topics: [
            {
                topicId: 1,
                topicName: "Introduction to ReactJS",
                topicDescription: "This is topic 1",
                topicStatus: 'to do',
                subTopics: [
                    {
                        subTopicId: 1,
                        subTopicName: "Sub Topic 1",
                        subTopicDuration: 30,
                        subTopicStatus: 'to do',
                    },
                    {
                        subTopicId: 2,
                        subTopicName: "Sub Topic 2",
                        subTopicDuration: 73,
                        subTopicStatus: 'to do',
                    },

                ],
                totalVideos: 5,
            },
            {
                topicId: 2,
                topicName: "components and props",
                topicDescription: "This is topic 2",
                topicStatus: 'to do',
                subTopics: [
                    {
                        subTopicId: 1,
                        subTopicName: "Sub Topic 1",
                        subTopicDuration: 30,
                        subTopicStatus: 'to do',
                    },
                    {
                        subTopicId: 2,
                        subTopicName: "Sub Topic 2",
                        subTopicDuration: 73,
                        subTopicStatus: 'to do',
                    },
                ],
                totalVideos: 5,
            },
        ],
        duration: 540,
        rating: '4.9/5',
        courseType: 'free',
        price: 500,
        bookmarked: false,
        enrolled: true,
        progress: 67,
    },
    {
        id: 3,
        title: 'Learn VueJS',
        banner: 'https://images.unsplash.com/photo-1542744173-05336fcc7ad4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDUzMDJ8MHwxfHNlYXJjaHwyfHxleGNlbHxlbnwxfHx8fDE2NzI5OTU0NTg&ixlib=rb-4.0.3&q=80&w=1080',
        description: 'This online course was created for you if you are interested in taking great digital photos and learning how to make your photography unique and outstanding.',
        author: 'Jane doe',
        topics: [
            {
                topicId: 1,
                topicName: "Introduction to VueJS",
                topicDescription: "This is topic 1",
                topicStatus: 'to do',
                subTopics: [
                    {
                        subTopicId: 1,
                        subTopicName: "Sub Topic 1",
                        subTopicDuration: 30,
                        subTopicStatus: 'to do',
                    },
                    {
                        subTopicId: 2,
                        subTopicName: "Sub Topic 2",
                        subTopicDuration: 73,
                        subTopicStatus: 'to do',
                    },

                ],
                totalVideos: 5,
            },
            {
                topicId: 2,
                topicName: "components and props",
                topicDescription: "This is topic 2",
                topicStatus: 'to do',
                subTopics: [
                    {
                        subTopicId: 1,
                        subTopicName: "Sub Topic 1",
                        subTopicDuration: 30,
                        subTopicStatus: 'to do',
                    },
                    {
                        subTopicId: 2,
                        subTopicName: "Sub Topic 2",
                        subTopicDuration: 73,
                        subTopicStatus: 'to do',
                    },
                ],
                totalVideos: 5,
            },
        ],
        duration: 230,
        rating: '4.9/5',
        courseType: 'free',
        price: 1200,
        bookmarked: true,
        enrolled: true,
        progress: 34,
    },
    {
        id: 4,
        title: "Agile Project Management",
        banner: 'https://images.unsplash.com/photo-1611224885990-ab7363d1f2a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDUzMDJ8MHwxfHNlYXJjaHwxfHxwcm9qZWN0JTIwbWFuYWdlbWVudHxlbnwxfHx8fDE2NTc1Mzg0Njg&ixlib=rb-1.2.1&q=80&w=1080',
        description: 'This online course was created for you if you are interested in taking great digital photos and learning how to make your photography unique and outstanding.',
        author: 'curt rits',
        topics: [
            {
                topicId: 1,
                topicName: "Introduction to VueJS",
                topicDescription: "This is topic 1",
                topicStatus: 'to do',
                subTopics: [
                    {
                        subTopicId: 1,
                        subTopicName: "Sub Topic 1",
                        subTopicDuration: 30,
                        subTopicStatus: 'to do',
                    },
                    {
                        subTopicId: 2,
                        subTopicName: "Sub Topic 2",
                        subTopicDuration: 73,
                        subTopicStatus: 'to do',
                    },

                ],
                totalVideos: 5,
            },
            {
                topicId: 2,
                topicName: "components and props",
                topicDescription: "This is topic 2",
                topicStatus: 'to do',
                subTopics: [
                    {
                        subTopicId: 1,
                        subTopicName: "Sub Topic 1",
                        subTopicDuration: 30,
                        subTopicStatus: 'to do',
                    },
                    {
                        subTopicId: 2,
                        subTopicName: "Sub Topic 2",
                        subTopicDuration: 73,
                        subTopicStatus: 'to do',
                    },
                ],
                totalVideos: 5,
            },
        ],
        duration: 130,
        rating: '4.9/5',
        courseType: 'paid',
        price: 700,
        bookmarked: false,
        enrolled: false,
        progress: 0,
    },
    {
        id: 5,
        title: "Full Stack Development with React and Node",
        banner: 'https://assets.api.uizard.io/api/cdn/stream/2c1a496b-9948-4cb1-b87e-dbd417261382.jpg',
        description: 'This online course was created for you if you are interested in taking great digital photos and learning how to make your photography unique and outstanding.',
        author: 'Chris kinley',
        topics: [
            {
                topicId: 1,
                topicName: "Introduction to VueJS",
                topicDescription: "This is topic 1",
                topicStatus: 'to do',
                subTopics: [
                    {
                        subTopicId: 1,
                        subTopicName: "Sub Topic 1",
                        subTopicDuration: 30,
                        subTopicStatus: 'to do',
                    },
                    {
                        subTopicId: 2,
                        subTopicName: "Sub Topic 2",
                        subTopicDuration: 73,
                        subTopicStatus: 'to do',
                    },
                ],
                totalVideos: 5,
            },
            {
                topicId: 2,
                topicName: "components and props",
                topicDescription: "This is topic 2",
                topicStatus: 'to do',
                subTopics: [
                    {
                        subTopicId: 1,
                        subTopicName: "Sub Topic 1",
                        subTopicDuration: 30,
                        subTopicStatus: 'to do',
                    },
                    {
                        subTopicId: 2,
                        subTopicName: "Sub Topic 2",
                        subTopicDuration: 73,
                        subTopicStatus: 'to do',
                    },
                ],
                totalVideos: 5,
            },
        ],
        duration: 130,
        rating: '4.9/5',
        courseType: 'free',
        price: 700,
        bookmarked: true,
        enrolled: false,
        progress: 0,
    },
    {
        id: 6,
        title: "Becoming a Photographer",
        banner: 'https://images.unsplash.com/photo-1541516160071-4bb0c5af65ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMDUzMDJ8MHwxfHNlYXJjaHwxfHxEYXNoYWhlJTIwUGFyayUyQyUyMFNoZW56aGVuJTIwU2hpJTJDJTIwQ2hpbmF8ZW58MXx8fHwxNjUxNzYxNjEw&ixlib=rb-1.2.1&q=80&w=1080',
        description: 'This online course was created for you if you are interested in taking great digital photos and learning how to make your photography unique and outstanding.',
        author: 'Clara Manning',
        topics: [
            {
                topicId: 1,
                topicName: "Introduction to VueJS",
                topicDescription: "This is topic 1",
                topicStatus: 'to do',
                subTopics: [
                    {
                        subTopicId: 1,
                        subTopicName: "Sub Topic 1",
                        subTopicDuration: 30,
                        subTopicStatus: 'to do',
                    },
                    {
                        subTopicId: 2,
                        subTopicName: "Sub Topic 2",
                        subTopicDuration: 73,
                        subTopicStatus: 'to do',
                    },
                ],
                totalVideos: 5,
            },
            {
                topicId: 2,
                topicName: "components and props",
                topicDescription: "This is topic 2",
                topicStatus: 'to do',
                subTopics: [
                    {
                        subTopicId: 1,
                        subTopicName: "Sub Topic 1",
                        subTopicDuration: 30,
                        subTopicStatus: 'to do',
                    },
                    {
                        subTopicId: 2,
                        subTopicName: "Sub Topic 2",
                        subTopicDuration: 73,
                        subTopicStatus: 'to do',
                    },
                ],
                totalVideos: 5,
            },
        ],
        duration: 230,
        rating: '4.9/5',
        courseType: 'paid',
        price: 1200,
        bookmarked: true,
        enrolled: false,
        progress: 0,
    }
];

const categories: Categories[] = [
    {
        id: 1,
        name: "Sales",
        icon: "faChartLine",
    },
    {
        id: 2,
        name: "HR",
        icon: "faUsers",
    },
    {
        id: 3,
        name: "Drawing",
        icon: "faPenRuler",
    },
    {
        id: 4,
        name: "Big Data",
        icon: "faTable",
    },
    {
        id: 5,
        name: "Design",
        icon: "faCompassDrafting",
    },
    {
        id: 6,
        name: "Marketing",
        icon: "faLightbulb",
    },
    {
        id: 7,
        name: "Astronomy",
        icon: "faSatellite",
    },
];

const myCourses = [
    {
        id: 1,
        title: "Becoming a Photographer",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laborisnisi ut aliquip ex ea commodo consequat. Duis aute irure dolor inreprehenderit in voluptate velit esse cillum dolore eu fugiatnulla pariatur. Excepteur sint occaecat cupidatat non proident,sunt in culpa qui officia deserunt mollit anim id est laborum.",
        author: "Clara Manning",
        progress: 69,
        duration: 156,
        rating: '3.8/5',
        price: 50,
    },
    {
        id: 2,
        title: "Power BI",
        description: "This is course 2",
        author: "Chris Kinley",
        progress: 34,
        duration: 540,
        rating: '4.9/5',
        price: 100,
    }
];

export {
    sampleCourse,
    categories,
    myCourses,
}