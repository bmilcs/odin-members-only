# Odin Project #28: Members Only

Welcome to Bryan Miller's Mini Message Board, the [twenty eighth assignment](https://www.theodinproject.com/lessons/nodejs-members-only) within the Odin Project curriculum. The goal of this repo is to practice the following skill sets:

- Authentication
  - Passport Local Strategy
  - Sessions & Cookies
- Express
- MongoDB / Atlas
- Mongoose
- EJS
- MVC: Model View Controller pattern
- Fly.io PaaS
  - Instances
  - Persistent Storage Volume Mount
  - SSL with custom domain
  - DNS records
- Additional Packages
  - `compression`: adds gzip compression
  - `helmet`: adds vulnerability protection
  - `express-rate-limit`: prevents brute force attacks
  - `express-async-handler`: wraps our route callbacks in try/catch blocks & handles errors
  - `express-validator`: execute validation on `req.body` variables, passed via `POST` requests / form data
  - `dotenv`: environmental variable handling (db connection string)

## Links

- [Live Demo](https://membersonly.bmilcs.com)
- [My Odin Project Progress](https://github.com/bmilcs/odin-project)

## Summary

In progress...

## Screenshots

In progress...

## Deployment

```sh
# clone repo & change directories
git clone https://github.com/bmilcs/odin-members-only
cd odin-members-only

# install dependencies
npm install
```

This project requires a database connection string from MongoDB Atlas to run locally:

1. Rename `.env.example` to `.env`
2. Paste connection string into `.env`

```sh
# run locally
npm run dev
```
