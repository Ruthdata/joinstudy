# Askfield.io

Askfield.io is a lightweight survey platform where people can take surveys and earn rewards. This repository contains the web application and supporting documentation for building, running, and contributing to the project.

## Key features
- Create and publish surveys with multiple question types (single choice, multiple choice, text)
- Take surveys and track earned rewards
- User accounts and progress tracking
- Basic admin dashboard for survey management and reward configuration
- REST/GraphQL API for integrations

## Tech stack 
- Frontend: React / Next.js
- Backend: Node.js / Express / Fastify or GraphQL
- Database: MongoDB
- Authentication: JWT / OAuth
- Payments/rewards: Stripe or internal wallet system

## Getting started (development)
1. Clone the repo
    git clone <git@github.com:Ruthdata/Askfield.git>
2. Install dependencies
    cd askfield
    npm install
    or
    yarn
3. Create environment file (.env) with required variables:
    - DATABASE_URL
    - NEXT_PUBLIC_API_URL
    - JWT_SECRET
    - STRIPE_SECRET_KEY (optional)
4. Run migrations / seed data (if applicable)
5. Start dev server
    npm run dev
    or
    yarn dev

## Configuration
- Use environment variables to configure database connections, API endpoints, and third-party keys.
- Keep secrets out of version control (use .env and .env.example).

## Usage
- Sign up or sign in as a user to take available surveys.
- Complete surveys to earn reward points or credits.
- Admins can create surveys, view results, and configure reward rules.

## Testing
- Add unit and integration tests using your preferred framework (Jest, React Testing Library).
- Run tests:
  npm test
  or
  yarn test

## Deployment
- Build the production bundle:
  npm run build
  or
  yarn build
- Deploy to your hosting provider (Vercel, Netlify, Docker, or a VPS).
- Ensure production environment variables are set and database is migrated.

## Contribution
- Fork the repository, create a feature branch, and open a pull request.
- Follow established coding standards and include tests for new functionality.
- Keep changes small and focused; document any public API changes.

## Security & Privacy
- Minimize storage of personally identifiable information.
- Secure API endpoints and protect reward flows against abuse.
- Rate-limit survey submissions and verify identities where required.

## License
MIT — see LICENSE file for details.

## Contact
For questions or support, open an issue or contact the maintainers via the project repository.
