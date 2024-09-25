## Getting Started

# Enviornment Files
You will need to create the following two files in the project root: `.env.development` and `.env.production`.

We've provided a `.env.example` file as a template. Copy it and rename it for both your development and production environments:
```bash
cp .env.example .env.development
cp .env.example .env.production
```
Open each file and replace the placeholder values with the actual secrets provided to you.

To run the development server:
```bash
yarn dev
```