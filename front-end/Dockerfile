# Use the official Bun image
FROM oven/bun
WORKDIR /app

# Install production dependencies
COPY package.json bun.lockb .
RUN bun install --frozen-lockfile

COPY . .

# Expose the port that the application listens on
EXPOSE 3000

# Run the application
ENTRYPOINT ["bun", "run", "serve", "--host", "0.0.0.0"]