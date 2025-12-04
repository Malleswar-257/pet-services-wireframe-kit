# pet-services-wireframe-kit

A simple wireframe kit for a pet-care application created in Figma.

## Tech Stack

- **Frontend**: React + Vite
- **Backend**: FastAPI + SQLAlchemy
- **Design**: Figma ([View Design](https://www.figma.com/design/MGFPDxhpnzKUA5dFubZT4J/Pet-Services-Wireframe-Kit-%E2%80%94-FREE--Community-?node-id=34227-31755&t=nphuAc8Kvild1ewV-1))

## Project Structure

```
pet-services-wireframe-kit/
├── frontend/          # Frontend application
├── backend/           # Backend API
├── README.md          # This file
└── docker-compose.yml # Docker configuration (if applicable)
```

## Getting Started

### Prerequisites

- Node.js 18+ (for frontend)
- Python 3.11+ (for Python backends)
- Docker (optional, for containerized setup)

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

### Backend Setup

```bash
cd backend
# Follow backend-specific setup instructions in backend/README.md
```

## Features

- User authentication and authorization
- Pet service management
- Booking management
- Provider management

## API Endpoints

- `GET /api/services` - Retrieve a list of available pet services.
- `GET /api/services/{service_id}` - Retrieve details of a specific pet service.
- `POST /api/bookings` - Book a pet service.
- `GET /api/bookings` - Retrieve a list of bookings for a user.
- `POST /api/providers/services` - Create a new pet service for a provider.
- `GET /api/providers/services` - Retrieve a list of pet services for a provider.
- `GET /api/providers/bookings` - Retrieve a list of bookings for a provider.

## License

MIT
