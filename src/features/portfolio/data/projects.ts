import type { Project } from "../types/projects";

export const PROJECTS: Project[] = [
  {
    id: "react-wheel-picker",
    title: "Kinetiq — Distributed Event Booking System",
    period: {
      start: "09.2025",
      end :  "10.2025"
    },
    link: "https://github.com/dkb73/Kinetiq",
    skills: [
      "React.js",
      "Node.js",
      "Kafka",
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "Docker",
      "NGINX",
      "Microservices",
      "Distributed Systems",
    ],
    description: `Asynchronous, distributed event booking system built using Kafka + polyglot persistence with PostgreSQL (write) and MongoDB (read).
- ⚡ High-throughput booking via Kafka queue + worker pool
- 🔄 Background data-sync service ensuring read/write store consistency
- 🗄 Polyglot persistence: PostgreSQL for transactional integrity, MongoDB for low-latency reads
- 🔐 Distributed locking via Redis to prevent race-conditions during ticket booking
- 🌐 NGINX reverse proxy as unified gateway for frontend + APIs
- 🐳 Fully containerized — one-command startup with Docker Compose
`,
    logo: "https://assets.chanhdai.com/images/project-logos/react-wheel-picker.svg",
    isExpanded: true,
  },
  {
    id: "chanhdaidotcom",
    title: "BulkProcessor — CSV Processing System",
    period: {
      start: "01.2025",
    },
    link: "https://github.com/dkb73/BulkProcessor",
    skills: [
    "React.js",
    "Node.js",
    "MongoDB",
    "BullMQ",
    "Redis",
    "Socket.io",
    "Streams",
    "Background Workers",
    "Batch Processing",
    ],
    description: `Full-stack CSV ingestion pipeline with scalable background processing and real-time UI feedback.
- ⚙️ Non-blocking CSV parsing using Node streams + BullMQ worker queues
- 🔁 Event-driven architecture with Redis Pub/Sub for live progress updates
- 📤 Socket.io integration for instant client feedback during processing
- 🗄 Bulk inserts into MongoDB for high-throughput ingestion
- 🔗 Decoupled API + worker design → eliminates request timeouts and enables independent scaling

Handles large uploads efficiently with real-time job tracking, error logging, and async ingestion into persistent storage`,
    logo: "https://assets.chanhdai.com/images/project-logos/chanhdaidotcom.svg",
  },
  // {
  //   id: "quaricdotcom",
  //   title: "quaric.com",
  //   period: {
  //     start: "03.2024",
  //   },
  //   link: "https://quaric.com",
  //   skills: [
  //     "Company Project",
  //     "Next.js 15",
  //     "Tailwind CSS v3",
  //     "shadcn/ui",
  //     "Strapi 5",
  //     "VNPAY-QR",
  //     "Docker",
  //     "Docker Compose",
  //     "NGINX",
  //   ],
  //   logo: "https://assets.chanhdai.com/images/project-logos/quaricdotcom.svg",
  // }
];
