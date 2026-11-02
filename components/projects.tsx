import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Badge} from "@/components/ui/badge";
import {Button} from "@/components/ui/button";
import {ExternalLink} from "lucide-react";
import React from "react";
import {Project, ProjectStatus} from "@/lib/types";

export const projectsData: Project[] = [
    {
        title: "FRCRS - Rust FRC Framework",
        description: "A Rust framework for FIRST Robotics Competition robot programming, providing safe and performant abstractions over WPILib for real-time robot control.",
        technologies: ["Rust", "WPILib", "RoboRIO", "CAN Bus", "Real-Time Systems", "FFI", "Java", "C/C++"],
        status: ProjectStatus.Completed,
        link: "https://github.com/Team-2502/frcrs",
        category: "Robotics"
    },
    {
        title: "RobotCode2025 - FRC Competition Robot",
        description: "Complete robot code for the 2025 FRC season built with Rust, featuring autonomous routines, teleop control, and subsystem management. Not to mention the only robot code for 2025 written in Rust.",
        technologies: ["Rust", "FRCRS", "Autonomous Programming", "PID Control", "State Machines"],
        status: ProjectStatus.Completed,
        link: "https://github.com/Team-2502/RobotCode2025",
        category: "Robotics"
    },
    {
        title: "RobotCode2024 - FRC Competition Robot",
        description: "Robot code for the 2024 FRC season built with Rust, showcasing the first year of our team's programming approach with Rust",
        technologies: ["Rust", "FRCRS", "Autonomous Programming", "PID Control", "State Machines"],
        status: ProjectStatus.Completed,
        link: "https://github.com/Team-2502/RobotCode2024",
        category: "Robotics"
    },
    {
        title: "RobotCode2023 - FRC Competition Robot",
        description: "Java-based robot code for the 2023 FRC season, featuring traditional WPILib programming patterns and command-based robot architecture.",
        technologies: ["Java", "WPILib", "Command-Based Programming", "Autonomous Programming", "Subsystem Management"],
        status: ProjectStatus.Completed,
        link: "https://github.com/Team-2502/RobotCode2023",
        category: "Robotics"
    },
    {
        title: "Talon Board - Hardware Dashboard",
        description: "A TypeScript-based dashboard application for monitoring and controlling FRC robot hardware, providing real-time telemetry and diagnostic capabilities.",
        technologies: ["TypeScript", "Web Development", "Real-Time Data", "Hardware Monitoring", "Dashboard UI"],
        status: ProjectStatus.Completed,
        link: "https://github.com/Team-2502/talon-board",
        category: "Robotics"
    },
    {
        title: "trajectory-rs - Path Planning Library",
        description: "A Rust library for decoding Choreo trajectory files and providing path planning capabilities for FRC robots.",
        technologies: ["Rust", "Path Planning", "Spline Generation", "Motion Profiling", "Mathematics"],
        status: ProjectStatus.Completed,
        link: "https://github.com/nolanpeterson07/trajectory-rs",
        category: "Robotics"
    },
    {
        title: "LCR - Left Center Right Simulation",
        description: "A C++ simulation of the Left Center Right dice game, demonstrating object-oriented programming principles and game state management with statistical features.",
        technologies: ["C++", "Object-Oriented Programming", "Game Simulation", "Statistical Analysis"],
        status: ProjectStatus.Completed,
        link: "https://github.com/nolanpeterson07/lcr",
        category: "Software"
    },
    {
        title: "Scouting 2024 - FRC Scouting App",
        description: "A web-based scouting application for FRC teams, built with NextJS and TypeScript, providing data collection and analysis during competitions.",
        technologies: ["NextJS", "TypeScript", "Web Development", "Firebase"],
        status: ProjectStatus.Completed,
        link: "https://github.com/nolanpeterson07/scouting2024",
        category: "Web"
    },
    {
        title: "Portfolio Website",
        description: "My personal portfolio website showcasing my projects, skills, and experiences, built with NextJS and shadcn/ui.",
        technologies: ["NextJS", "Typescript", "Web Development"],
        status: ProjectStatus.InProgress,
        link: "https://github.com/nolanpeterson07/portfolio",
        category: "Web"
    },
    {
        title: "Raytracer",
        description: "A basic raytracer implemented in Rust, with materials, lighting, and camera controls.",
        technologies: ["Rust", "Computer Graphics", "Math"],
        status: ProjectStatus.Completed,
        link: "https://github.com/nolanpeterson07/raytracer",
        category: "Software",
    },
    {
        title: "ESP32 Timing Gate System",
        description: "Mesh network timing system for Formula SAE vehicles built with ESP32 microcontrollers. Multiple gates coordinate to provide precise lap timing and telemetry data.",
        technologies: ["C", "ESP32", "Embedded Systems", "Mesh Networking", "WiFi", "Real-Time Systems"],
        status: ProjectStatus.Completed,
        link: "https://github.com/sundevilmotorsports/ESP32_Timing_Gate",
        category: "FSAE"
    },
    {
        title: "DAQ Receiver",
        description: "ESP32-based receiver for telemetry and timing gate data, sending wireless vehicle data over ESP-IDF to a TypeScript web frontend for real-time visualization.",
        technologies: ["C", "ESP32", "ESP-IDF", "TypeScript", "Real-Time Systems", "Telemetry"],
        status: ProjectStatus.Completed,
        link: "https://github.com/sundevilmotorsports/ESP32_Receiver",
        category: "FSAE"
    },
    {
        title: "Logger",
        description: "Rust data acquisition firmware for Formula SAE vehicles, logging CAN bus, ADC, IMU and GNSS data to SD card, with USB and serial interfaces, runtime configuration, and firmware updates over CAN.",
        technologies: ["Rust", "ESP32", "ESP-IDF", "CAN Bus", "SD Card", "USB", "Embedded Systems"],
        status: ProjectStatus.InProgress,
        link: "https://github.com/sundevilmotorsports/logger",
        category: "FSAE"
    },
    {
        title: "Logger Client",
        description: "Cross-platform Rust desktop app for the Formula SAE logger: discovers devices over serial, edits configuration, opens a live console, browses logs, and converts them to MoTeC format.",
        technologies: ["Rust", "Slint", "Serial", "MoTeC", "Desktop App", "Telemetry"],
        status: ProjectStatus.InProgress,
        link: "https://github.com/sundevilmotorsports/logger-client",
        category: "FSAE"
    },
    {
        title: "SDM Utils",
        description: "Shared C and Rust library defining the Formula SAE vehicle's CAN protocol: node and message IDs, heartbeats, the log file format, and over-the-air firmware update messages, so every node and tool speaks the same language.",
        technologies: ["Rust", "C", "CAN Bus", "OTA Updates", "Embedded Systems", "Protocol Design"],
        status: ProjectStatus.InProgress,
        link: "https://github.com/sundevilmotorsports/sdm-utils",
        category: "FSAE"
    },
    {
        title: "RISC-V Processor",
        description: "A RV32IM RISC-V processor written in Verilog with a hardware multiply/divide unit and UART, SPI, SD card and timer peripherals. Runs on a Tang Nano 9K FPGA, with a Rust simulator and C/Rust firmware including FatFs.",
        technologies: ["Verilog", "SystemVerilog", "RISC-V", "FPGA", "Rust", "C", "Computer Architecture"],
        status: ProjectStatus.InProgress,
        link: "https://github.com/nolanpeterson07/riscv",
        category: "Hardware"
    },
    {
        title: "Option Strategy Visualizer",
        description: "Interactive tool to build and visualize option strategies, compute P&L across underlying prices and time decay, and display results on an interactive graph with payoff and Greeks overlays.",
        technologies: ["TypeScript", "React", "Options Pricing", "P&L Visualization", "Interactive Charts"],
        status: ProjectStatus.Completed,
        link: "https://github.com/nolanpeterson07/visualize-options",
        category: "Finance",
    },
    {
        title: "ad-hole",
        description: "A DNS sinkhole for ad and tracker blocking, written in Rust with a web frontend for managing blocklists, viewing query logs, and monitoring DNS statistics.",
        technologies: ["Rust", "DNS", "Networking", "Web Development", "Tokio", "Ad Blocking"],
        status: ProjectStatus.Completed,
        link: "https://github.com/nolanpeterson07/ad-hole",
        category: "Software"
    },
    {
        title: "Euchre",
        description: "A Rust implementation of the Euchre card game, with game rules, turn-based play, and trick-taking logic.",
        technologies: ["Rust", "Game Simulation"],
        status: ProjectStatus.Completed,
        link: "https://github.com/nolanpeterson07/euchre",
        category: "Software"
    },
];

const CategoryFilter = ({ categories, selectedCategory, onCategoryChange }: {
    categories: string[],
    selectedCategory: string,
    onCategoryChange:  React.Dispatch<React.SetStateAction<string>>
}) => {
    return (
        <div className="flex justify-center mb-12">
            <div className="flex space-x-2 p-1 bg-card rounded-lg shadow-sm border border-border">
                {categories.map((category) => (
                    <Button
                        key={category}
                        variant={selectedCategory === category ? "default" : "ghost"}
                        size="sm"
                        onClick={() => onCategoryChange(category)}
                        className={selectedCategory === category
                            ? "bg-primary text-primary-foreground hover:bg-primary/90"
                            : "text-muted-foreground hover:text-foreground hover:bg-accent"
                        }
                    >
                        {category}
                    </Button>
                ))}
            </div>
        </div>
    );
};

export const ProjectCard = ({ project }: { project: Project }) => {
    return (
        <Card className="bg-card border-border shadow-sm hover:shadow-md transition-all duration-300 group flex flex-col h-full">
            <CardHeader className="flex-1">
                <div className="flex justify-between items-start">
                    <div className="flex-1">
                        <div className="flex items-center mb-2">
                            <Badge variant="outline" className="border-border text-muted-foreground text-xs">
                                {project.category}
                            </Badge>
                        </div>
                        <CardTitle className="text-foreground group-hover:text-primary transition-colors text-lg">
                            {project.title}
                        </CardTitle>
                        <CardDescription className="text-muted-foreground mt-2 text-sm">
                            {project.description}
                        </CardDescription>
                    </div>
                    <Badge
                        variant={project.status === 'Completed' ? 'default' : 'secondary'}
                        className={project.status === 'Completed'
                            ? 'bg-green-500/20 text-green-700 dark:text-green-300 border-green-500/30 text-xs'
                            : 'bg-yellow-500/20 text-yellow-700 dark:text-yellow-300 border-yellow-500/30 text-xs'
                        }
                    >
                        {project.status}
                    </Badge>
                </div>
            </CardHeader>

            <CardContent className="mt-auto space-y-4">
                <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="outline" className="border-border text-muted-foreground text-xs">
                            {tech}
                        </Badge>
                    ))}
                </div>
                <Button
                    variant="outline"
                    size="sm"
                    className="w-full bg-card border-border text-foreground hover:bg-accent group"
                    onClick={() => window.open(project.link, '_blank')}
                >
                    View Project
                    <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
            </CardContent>
        </Card>
    );
};

export const ProjectsSection = () => {
    const [selectedCategory, setSelectedCategory] = React.useState("All");
    const categories = ["All", ...new Set(projectsData.map(project => project.category))];

    const filteredProjects = selectedCategory === "All"
        ? projectsData
        : projectsData.filter(project => project.category === selectedCategory);

    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Projects</h2>
                    <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
                    <p className="text-xl text-muted-foreground mt-6 max-w-3xl mx-auto">
                        From competitive robotics to systems programming, here are some projects that showcase my journey
                    </p>
                </div>

                <CategoryFilter
                    categories={categories}
                    selectedCategory={selectedCategory}
                    onCategoryChange={setSelectedCategory}
                />

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredProjects.map((project, index) => (
                        <ProjectCard key={index} project={project} />
                    ))}
                </div>
            </div>
        </section>
    );
};
