# --- Build stage ---
FROM node:20 AS builder

WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy all source files
COPY . .

# Build backend + frontend
RUN npm run build

# --- Production stage ---
FROM node:20-alpine

WORKDIR /app

# Install only runtime dependencies
COPY package*.json ./
RUN npm install --omit=dev

# Copy built backend, frontend, shared
COPY --from=builder /app/build/server ./server
COPY --from=builder /app/build/shared ./shared
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/dist/public ./server/public  


ENV NODE_ENV=production

EXPOSE 3000

# Run compiled backend
CMD ["node", "server/index.js"]
