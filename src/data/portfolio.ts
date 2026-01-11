export const portfolio = {
    personal: {
        name: "Alejandro Canizares",
        role: "Senior Software Engineer - Backend",
        bio: "5+ years of experience developing microservices, rest APIs, and event-driven systems with a focus on scalability, reliability, and clean architecture.",
        location: "Unknown",
        socials: {
            linkedin: "https://www.linkedin.com/in/alejandrocanizares/",
            github: "https://github.com/alejocv7",
            email: "mailto:contact@example.com", // Placeholder
        },
    },
    skills: [
        {
            category: "Backend Development",
            items: ["Java", "Python", "Microservices", "Spring Boot", "Flask", "REST APIs", "Event-Driven"],
        },
        {
            category: "Cloud & DevOps",
            items: ["AWS", "Terraform", "Kubernetes", "Docker", "Git", "Jenkins", "CI/CD", "Spinnaker"],
        },
        {
            category: "Data & Streaming",
            items: ["Kafka", "Kinesis", "NoSQL/SQL", "DynamoDB", "Pandas"],
        },
    ],
    projects: [
        {
            title: "Tic-Tac-Toe",
            description: "Two player tic-tac-toe game in Python, which can be played on the terminal or as a GUI application.",
            tech: ["Python", "Pygame"],
            link: "https://github.com/alejocv7/tic-tac-toe",
            image: "/legacy_v1/images/tic-tac-toe/tic_tac_toe_main.jpg",
        },
        {
            title: "Excel Compare",
            description: "Script tool used for comparing excel docs. It produces a new excel file highlighting the difference between the original ones.",
            tech: ["Python", "Pandas"],
            image: "/legacy_v1/images/python.jpeg",
            link: "https://github.com/alejocv7/py-tools",
        },
        {
            title: "Drone Control",
            description: "Control of the Parrot AR-Drone 2.0. Developed in ROS with C++ using OpenCV for image recognition to trigger landing, and joystick for manual control.",
            tech: ["C++", "ROS", "OpenCV", "Robotics"],
            image: "/legacy_v1/images/ar-drone/ar_drone_main.jpg",
            link: "https://github.com/alejocv7/ros-drone-control",
        },
        {
            title: "Roomba Control",
            description: "ROS project to control an iRobot Roomba. Features obstacle detection, autonomous movement, and joystick control.",
            tech: ["C++", "ROS", "Robotics"],
            image: "/legacy_v1/images/roomba/roomba_main.jpg",
            link: "https://github.com/alejocv7/ros-roomba-control",
        },
        {
            title: "Prosthetic Arm",
            description: "IEEE published article on low-cost robotic prosthetics using 3D printing. Prototypes included a glove-controlled hand and EMG-controlled arm. Finger motions were controlled by servomotors, and the rotation of each servomotor was achieved using a microcontroller.",
            tech: ["3D Printing", "Microcontrollers", "EMG Sensors", "C++"],
            link: "https://ieeexplore.ieee.org/document/8261579",
            image: "/legacy_v1/images/Prosthetic Arm/mano_main.jpg",
        },
    ],
};
