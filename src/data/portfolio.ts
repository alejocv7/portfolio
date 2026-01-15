import ticImg from "@public/legacy_v1/images/tic-tac-toe/tic_tac_toe_main.jpg";
import pyImg from "@public/legacy_v1/images/python.jpeg";
import droneImg from "@public/legacy_v1/images/ar-drone/ar_drone_main.jpg";
import roombaImg from "@public/legacy_v1/images/roomba/roomba_main.jpg";
import prostheticImg from "@public/legacy_v1/images/Prosthetic Arm/mano_main.jpg";

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
      variant: "blue",
      items: [
        "Java",
        "Python",
        "Microservices",
        "Spring Boot",
        "Flask",
        "REST APIs",
        "Event-Driven",
      ],
    },
    {
      category: "Cloud & DevOps",
      variant: "purple",
      items: [
        "AWS",
        "Terraform",
        "Kubernetes",
        "Docker",
        "Git",
        "Jenkins",
        "CI/CD",
        "Spinnaker",
      ],
    },
    {
      category: "Data & Streaming",
      variant: "emerald",
      items: ["Kafka", "Kinesis", "NoSQL/SQL", "DynamoDB", "Pandas"],
    },
  ],
  projects: [
    {
      title: "Tic-Tac-Toe",
      description:
        "Two player tic-tac-toe game in Python, which can be played on the terminal or as a GUI application.",
      tech: ["Python", "Pygame"],
      link: "https://github.com/alejocv7/tic-tac-toe",
      image: ticImg,
    },
    {
      title: "Excel Compare",
      description:
        "Script tool used for comparing excel docs. It produces a new excel file highlighting the difference between the original ones.",
      tech: ["Python", "Pandas"],
      image: pyImg,
      link: "https://github.com/alejocv7/py-tools",
    },
    {
      title: "Drone Control",
      description:
        "Control of the Parrot AR-Drone 2.0. Developed in ROS with C++ using OpenCV for image recognition to trigger landing, and joystick for manual control.",
      tech: ["C++", "ROS", "OpenCV", "Robotics"],
      image: droneImg,
      link: "https://github.com/alejocv7/ros-drone-control",
    },
    {
      title: "Roomba Control",
      description:
        "ROS project to control an iRobot Roomba. Features obstacle detection, autonomous movement, and joystick control.",
      tech: ["C++", "ROS", "Robotics"],
      image: roombaImg,
      link: "https://github.com/alejocv7/ros-roomba-control",
    },
    {
      title: "Prosthetic Arm",
      description:
        "Low-cost robotic prosthetics using 3D printing. Published in IEEE, the project featured a glove-controlled hand and EMG-controlled arm. Finger articulation was achieved through servomotors driven by a microcontroller.",
      tech: ["C++", "Microcontrollers", "EMG Sensors", "3D Printing"],
      link: "https://ieeexplore.ieee.org/document/8261579",
      image: prostheticImg,
    },
  ],
};
