# Multi-stage Dockerfile for ATS Backend

# Development stage
FROM node:20-alpine AS development

WORKDIR /app

# Copy package files
COPY backend/package*.json ./

# Install dependencies
RUN npm install

# Copy root tsconfig
COPY tsconfig.base.json ../

# Copy backend config files
COPY backend/tsconfig.json ./

# Copy source code
COPY backend/src ./src

# Expose port
EXPOSE 8000

# Start development server with hot reload
CMD ["npm", "run", "dev"]

# Production stage
FROM node:20-alpine AS production

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install only production dependencies
RUN npm ci --only=production

# Copy source code
COPY . .

# Build TypeScript
RUN npm run build

# Expose port
EXPOSE 8000

# Start production server
CMD ["npm", "start"]
