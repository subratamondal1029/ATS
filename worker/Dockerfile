# Multi-stage Dockerfile for ATS Worker

# Development stage
FROM node:20-alpine AS development

WORKDIR /app

# Copy package files
COPY worker/package*.json ./

# Install dependencies
RUN npm install

# Copy root tsconfig
COPY tsconfig.base.json ../

# Copy worker config files
COPY worker/tsconfig.json ./

# Copy source code
COPY worker/src ./src

# Start development worker with hot reload
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

# Build TypeScript if needed
RUN npm run build 2>/dev/null || true

# Start production worker
CMD ["npm", "start"]
