# 🔵 CircleSync

![Node.js](https://img.shields.io/badge/Node.js-339933?logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?logo=mongodb&logoColor=white)
![Redis](https://img.shields.io/badge/Redis-DC382D?logo=redis&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?logo=docker&logoColor=white)
![License](https://img.shields.io/badge/license-MIT-green)

A **microservices-based social platform** that connects people around shared interests — RESTful APIs, real-time push notifications, and an event-driven reporting pipeline powered by **Redis Pub/Sub**.

## ✨ Features

- 🔐 User authentication & authorization
- 🤝 Interest-based connections & content sharing
- 🔔 Real-time push notifications (Firebase Cloud Messaging)
- 📊 Report generation via Redis Pub/Sub messaging
- 🧩 Microservices architecture
- 🐳 Containerized with Docker Compose

## 🏗️ Architecture

```
.
├── CircleSync/        # Main application service
├── Microservice/      # Supporting microservice(s)
└── docker-compose.yml # Orchestrates the services
```

## 🧰 Tech Stack

| Area | Tech |
|------|------|
| Runtime | Node.js |
| Framework | Express.js |
| Database | MongoDB |
| Messaging | Redis Pub/Sub |
| Notifications | Firebase Cloud Messaging |
| Containerization | Docker, Docker Compose |
| Testing | Jest |

## 🚀 Getting Started

```bash
# With Docker (recommended)
docker compose up --build

# Or run a service directly
cd CircleSync
npm install
cp .env.example .env
npm start
```

## 🧪 Testing

```bash
npm test
```

## 📄 License

MIT
