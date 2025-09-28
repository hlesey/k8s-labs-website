# K8s Labs Website Makefile

.PHONY: help install run build serve clean deploy

# Default target
help:
	@echo "K8s Labs Website"
	@echo ""
	@echo "Available targets:"
	@echo "  install    Install dependencies"
	@echo "  run        Run development server (http://0.0.0.0:3000)"
	@echo "  build      Build production website"
	@echo "  serve      Serve built website locally"
	@echo "  clean      Clean build files and node_modules"
	@echo "  deploy     Deploy to production"
	@echo "  help       Show this help message"

# Install dependencies
install:
	@echo "Installing dependencies..."
	npm install

# Run development server
run:
	@echo "Starting development server..."
	@echo "Website will be available at: http://0.0.0.0:3000"
	npm start -- --host 0.0.0.0

# Build production website
build:
	@echo "Building production website..."
	npm run build

# Serve built website locally
serve: build
	@echo "Serving built website locally..."
	@echo "Production build available at: http://0.0.0.0:3000"
	npm run serve -- --host 0.0.0.0

# Clean build files and dependencies
clean:
	@echo "Cleaning build files and dependencies..."
	rm -rf build/
	rm -rf node_modules/
	rm -rf .docusaurus/

# Deploy to production (requires git push to main branch)
deploy:
	@echo "Deploying to production..."
	@echo "This will trigger GitHub Actions deployment"
	git add .
	git status
	@read -p "Continue with commit and push? [y/N] " confirm && [ "$$confirm" = "y" ]
	git commit -m "Deploy website updates"
	git push origin main
	@echo "Deployment initiated. Check GitHub Actions for status."

# Development helpers
dev-deps:
	@echo "Checking development dependencies..."
	@node --version
	@npm --version

# Quick setup for new developers
setup: install
	@echo "Setup complete! Run 'make run' to start development server."