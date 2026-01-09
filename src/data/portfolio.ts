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
            category: "Software Development",
            items: ["Python", "Java", "Git", "AWS", "Kafka", "Docker", "Jenkins"]
        },
        {
            category: "Robotics & Hardware",
            items: ["ROS (Robot Operating System)", "OpenCV", "Microcontrollers", "3D Printing"],
        },
        {
            category: "Tools & Others",
            items: ["VS Code", "Linux", "Arduino", "Excel Automation"],
        },
    ],
    projects: [
        {
            title: "Tic-Tac-Toe",
            description: "Two player tic-tac-toe game in Python, which can be played on the terminal or as a GUI application.",
            tech: ["Python", "Pygame"],
            link: "https://github.com/alejocv7/tic-tac-toe",
            image: "/legacy_v1/images/tic-tac-toe/tic_tac_toe_main.jpg",
            repo: "https://github.com/alejocv7/tic-tac-toe",
        },
        {
            title: "Blackjack",
            description: "Blackjack game for one player against the computer.",
            tech: ["Python"],
            link: "https://github.com/alejocv7/blackjack",
            image: "/legacy_v1/images/blackjack/blackjack_main.jpg",
            repo: "https://github.com/alejocv7/blackjack",
        },
        {
            title: "Excel Compare",
            description: "Script tool used for comparing excel docs. It produces a new excel file highlighting the difference between the original ones.",
            tech: ["Python", "Pandas"],
            link: "https://github.com/alejocv7/py-tools/blob/main/scripts/excel_compare.py",
            image: "/legacy_v1/images/python.jpeg",
            repo: "https://github.com/alejocv7/py-tools",
        },
        {
            title: "Drone Control",
            description: "Control of the Parrot AR-Drone 2.0. Developed in ROS with C++ using OpenCV for image recognition to trigger landing, and joystick for manual control.",
            tech: ["C++", "ROS", "OpenCV", "Robotics"],
            link: "https://github.com/alejocv7/ros-drone-control",
            image: "/legacy_v1/images/ar-drone/ar_drone_main.jpg",
            repo: "https://github.com/alejocv7/ros-drone-control",
        },
        {
            title: "Roomba Control",
            description: "ROS project to control an iRobot Roomba. Features obstacle detection, autonomous movement, and joystick control.",
            tech: ["C++", "ROS", "Robotics"],
            link: "https://github.com/alejocv7/ros-roomba-control",
            image: "/legacy_v1/images/roomba/roomba_main.jpg",
            repo: "https://github.com/alejocv7/ros-roomba-control",
        },
        {
            title: "Prosthetic Arm",
            description: "IEEE published article on low-cost robotic prosthetics using 3D printing. Prototypes included a glove-controlled hand and EMG-controlled arm.",
            tech: ["3D Printing", "Microcontrollers", "EMG Sensors", "C++"],
            link: "legacy_v1/projects/3d_printed_robotic_prosthetic_arm.html",
            image: "/legacy_v1/images/Prosthetic Arm/mano_main.jpg",
            repo: null,
        },
    ],
};
