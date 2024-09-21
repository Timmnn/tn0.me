# Dockerfile
# Build stage
FROM node:18-alpine as builder

WORKDIR /app

# Copy package.json and yarn.lock to install dependencies using yarn
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile

# Copy the rest of the app
COPY . .

# Build the SvelteKit app
RUN yarn build

# Production stage
FROM node:18-alpine

WORKDIR /app

# Copy from the build stage
COPY --from=builder /app/build ./build
COPY --from=builder /app/package.json ./
COPY --from=builder /app/yarn.lock ./

# Install only production dependencies
RUN yarn install --production --frozen-lockfile

# Expose the port
EXPOSE 3000

# Run the app (adapt this command based on your setup)
CMD ["node", "build"]
