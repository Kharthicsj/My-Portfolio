/**
 * Central project data store.
 * Each project is loaded dynamically by the ProjectDetail page via its `id`.
 */
export const projects = [
    {
        id: 'autonomous-delivery-drone',
        title: 'Autonomous Medical Delivery Drone',
        tagline: 'Fixed-wing autonomous drone system for last-mile medical logistics and emergency supply delivery.',
        techStack: ['ArduPilot', 'Pixhawk', 'Python', 'Mission Planner', 'Embedded C', 'GPS Telemetry', 'MAVLink'],
        thumbnail: 'https://placehold.co/600x400/121212/4682B4?text=Autonomous+Drone',
        liveUrl: '',
        repoUrl: '',
        videoUrl: 'https://www.youtube.com/embed/rxW5j4OYRUk',
        researchUrl: 'https://ijirt.org/article?manuscript=192991',
        featured: true,
        additionalVideos: [
            { title: 'Flight Test', url: 'https://www.youtube.com/embed/ZW2GSn_0Vr0' },
            { title: 'Flight Modes Test', url: 'https://www.youtube.com/embed/w8mhm-JNhJw' },
            { title: 'GPS Tracking Test', url: 'https://www.youtube.com/embed/8lsaiernHyg' },
            { title: 'RTL Testing', url: 'https://www.youtube.com/embed/0t2NwId1evs' },
            { title: 'Autonomous Flight Test - 1', url: 'https://www.youtube.com/embed/4T0nbIe0OL4' },
        ],
        description: `Designed and built an autonomous fixed-wing drone system aimed at revolutionizing last-mile medical logistics. The drone leverages ArduPilot firmware running on a Pixhawk flight controller to navigate pre-programmed GPS waypoints fully autonomously — delivering medical supplies, blood samples, and time-critical medications to remote or underserved locations with minimal human intervention.

The system incorporates real-time telemetry monitoring, fail-safe return-to-home protocols, geofencing boundaries, and automated takeoff and landing sequences. A custom ground station setup was configured using Mission Planner for mission planning, live tracking, and post-flight analysis.

This project bridges Mechatronics Engineering with Medical Technology — directly addressing critical gaps in emergency healthcare delivery infrastructure, particularly relevant for remote areas where road access is unreliable. The work was formally published as a peer-reviewed research paper in the International Journal of Innovative Research in Technology (IJIRT, Manuscript #192991).`,
        highlights: [
            'Fully autonomous GPS waypoint navigation via ArduPilot & Pixhawk FCU',
            'Real-time telemetry and live mission monitoring with Mission Planner',
            'Fail-safe return-to-home (RTH) and geofencing for safe autonomous operation',
            'Designed for medical logistics: blood samples, medications, emergency supplies',
            'MAVLink protocol integration for ground-station communication',
            'Published peer-reviewed research — IJIRT Manuscript #192991',
            'Full flight demonstration available on YouTube',
        ],
    },
    {
        id: 'agrolens',
        title: 'AgroLens',
        tagline: 'Smart agricultural management mobile app for modern farmers.',
        techStack: ['React Native', 'Expo', 'Node.js', 'Express', 'MongoDB', 'Python', 'JWT'],
        thumbnail: 'https://placehold.co/600x400/121212/4682B4?text=AgroLens',
        liveUrl: '',
        repoUrl: 'https://github.com/Kharthicsj/AgroLens',
        description: `AgroLens is a modern agricultural management mobile application built with React Native (Expo) and Node.js. It helps farmers manage their agricultural activities, monitor crops, track real-time weather forecasts, and optimize farming operations through an intuitive, theme-adaptive interface. A Python-powered ML model API handles crop analysis and pest detection.`,
        highlights: [
            'JWT-based secure signup & login with protected routes',
            'Real-time weather forecasts and smart irrigation alerts',
            'ML model API for crop analytics and early pest detection',
            'GPS-based field mapping and smart dashboard',
            'Light/Dark theme support with persistent preferences',
        ],
    },
    {
        id: 'convoit',
        title: 'ConvoIT',
        tagline: 'Real-time full-stack chat app with follow-request system.',
        techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.io', 'Tailwind CSS', 'JWT'],
        thumbnail: 'https://placehold.co/600x400/121212/4682B4?text=ConvoIT',
        videoUrl: 'https://www.youtube.com/embed/gM-QckrfBQw',
        liveUrl: '',
        repoUrl: 'https://github.com/Kharthicsj/ConvoIT',
        description: `ConvoIT is a real-time chat and follow-request application resembling social media platforms. Users can register, send and manage follow/message requests with live notifications via Socket.io, view their followers list, and engage in one-to-one real-time conversations. Built with React on the frontend and a Node.js/Express/MongoDB backend.`,
        highlights: [
            'Real-time one-to-one chat powered by Socket.io',
            'Follow/message request system with live notifications',
            'Persistent notifications stored in local storage',
            'JWT authentication with protected routes',
            'Responsive UI built with Tailwind CSS',
        ],
    },
    {
        id: 'electronify',
        title: 'Electronify',
        tagline: 'Open-source full-stack eCommerce web template.',
        techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS', 'PayPal', 'Cloudinary', 'JWT'],
        thumbnail: 'https://placehold.co/600x400/121212/4682B4?text=Electronify',
        videoUrl: 'https://www.youtube.com/embed/VbyFNWXU3Ek',
        liveUrl: '',
        repoUrl: 'https://github.com/Kharthicsj/Electronify',
        description: `Electronify is an open-source, fully customizable eCommerce website template designed to help developers and entrepreneurs quickly launch scalable, maintainable eCommerce applications. It features a React frontend, a RESTful Node.js/Express API, MongoDB for data persistence, PayPal checkout integration, and Cloudinary for media management.`,
        highlights: [
            'JWT-based auth with token session management',
            'Dynamic product listings with search and filter',
            'Real-time cart updates with persistent cart state',
            'PayPal payment gateway integration',
            'Cloudinary-powered image upload and management',
        ],
    },
];
