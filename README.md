# IntNetStat — Telecommunications Connectivity Incident Management System

Backend REST API for reporting, assigning, and resolving telecommunications
connectivity incidents.

**Course:** ITEC 116 — Systems Integration and Architecture
**Author:** Raniel T. Torrico

## Tech Stack

- **Framework:** NestJS (Node.js, TypeScript, CommonJS)
- **ORM:** TypeORM
- **Database:** MySQL 8
- **Auth:** JWT + bcrypt
- **Validation:** class-validator / class-transformer
- **Testing:** Postman

## Features

- JWT authentication (login, protected routes, bcrypt password hashing)
- Full CRUD for: Users (auth), Technicians, Locations, Incident Categories, Incidents, Incident Assignments, Incident Resolutions
- Relational integrity via foreign keys and TypeORM relations
- One resolution per incident enforced with UNIQUE constraint
- 33 REST endpoints (see API section)

## Local Setup

### 1. Prerequisites
- Node.js 18+ (tested on 22)
- MySQL 8 + phpMyAdmin
- Postman (for testing)

### 2. Clone

```bash
git clone https://github.com/<Raniel-Torrico>/intnetstat-backend.git
cd intnetstat-backend