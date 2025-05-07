# Base image
FROM node:18-alpine

# Set working directory
WORKDIR /app

# Copy app files
COPY . .

# Install dependencies
RUN npm install

# Build the React app
RUN npm run build

# Install `serve` to serve static files
RUN npm install -g serve

# Expose the port serve runs on
EXPOSE 3000

# Start the app
CMD ["serve", "-s", "build"]