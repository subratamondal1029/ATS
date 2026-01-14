# Multi-stage Dockerfile for ATS Frontend

# Development stage
FROM node:20-alpine AS development

WORKDIR /app

# Copy package files
COPY frontend/package*.json ./

# Install dependencies
RUN npm install

# Copy root tsconfig
COPY tsconfig.base.json ../

# Copy frontend config files
COPY frontend/tsconfig*.json ./
COPY frontend/*.config.* ./
COPY frontend/index.html ./

# Copy source code
COPY frontend/src ./src
COPY frontend/public ./public

# Expose Vite dev server port
EXPOSE 5173

# Start development server
CMD ["npm", "run", "dev", "--", "--host", "0.0.0.0"]

# Build stage
FROM node:20-alpine AS build

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# Build the application
RUN npm run build

# Production stage
FROM nginx:alpine AS production

# Copy built files from build stage
COPY --from=build /app/dist /usr/share/nginx/html

# Copy nginx configuration if needed
# COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port
EXPOSE 80

# Start nginx
CMD ["nginx", "-g", "daemon off;"]
