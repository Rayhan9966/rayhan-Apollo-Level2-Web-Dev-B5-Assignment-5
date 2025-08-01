# rayhan-Apollo-Level2-Web-Dev-B5-Assignment-5
 Video Link: https://drive.google.com/drive/folders/1k1udCEmXzQjhA7UJVJRPQXJBBq7lRg88?usp=drive_link



 # 💸 Digital Wallet API (Bkash/Nagad)

A secure, modular, role-based backend API for a digital wallet system built with **Express.js**, **Mongoose**, and **TypeScript**. Users can register, manage wallets, and perform financial operations like add money, withdraw, send money, and more.

---

## 🚀 Features

- 🔐 JWT Authentication with secure password hashing
- 🎭 Role-based Authorization (`admin`, `user`, `agent`)
- 💼 Wallet creation during registration with initial balance
- 💸 Add Money, Withdraw, Send Money (User)
- 🧾 Cash-In / Cash-Out (Agent)
- 🔒 Block/Unblock Wallets (Admin)
- 🧠 Transaction tracking and atomic operations
- 📦 Modular Project Structure
- 🧪 Tested with Postman

---

## 📁 Project Structure

```bash
src/
├── app.ts                # Express app setup
├── config/               # DB, token configs
├── modules/              # Feature modules
│   ├── auth/             # Register, login, JWT
│   ├── user/             # User logic
│   ├── wallet/           # Wallet logic
│   └── transaction/      # Transaction logic
├── middlewares/          # Auth, error handlers
├── utils/                # Common helpers
└── server.ts             # App entry point



