# Use Node.js base image
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy everything into the container
COPY . .

# Install dependencies
RUN npm install

# Build the Next.js app
RUN npm run build

# Expose the default Next.js port
EXPOSE 3000

# Start the Next.js server
CMD ["npm", "start"]
