# 🚒 Lost and Found App

A full-stack Lost and Found application that helps users report, discover, and recover misplaced items. Built with **React**, **Node.js**, and **SQLite**, it offers a clean interface and powerful features for item tracking.

> 🟢 **Hosted App (Expo Build):**  
> [https://expo.dev/accounts/devadigaakshay04/projects/bolt-expo-nativewind/builds/e81c89b8-4502-4197-aeb4-cdf6200374fd](https://expo.dev/accounts/devadigaakshay04/projects/bolt-expo-nativewind/builds/e81c89b8-4502-4197-aeb4-cdf6200374fd)

> 🔗 **Main App Repository:**  
> [https://github.com/Akshay-Devadiga-commits/sb1-kmerpar2.git](https://github.com/Akshay-Devadiga-commits/sb1-kmerpar2.git)

> 🧠 **Server (OTP & Feedback) Repository:**  
> [https://github.com/SvAkshayKumar/Otp-Service-And-Feedback-Using-SQLite](https://github.com/SvAkshayKumar/Otp-Service-And-Feedback-Using-SQLite)

> 📄 **Terms & Conditions:**  
> • Repo: [https://github.com/SvAkshayKumar/LostAndFound-TandC](https://github.com/SvAkshayKumar/LostAndFound-TandC)  
> • Hosted: [https://svakshaykumar.github.io/LostAndFound-TandC/](https://svakshaykumar.github.io/LostAndFound-TandC/)

---

## ✨ Origin Story

This project started with a clean scaffold generated from [bolt.new](https://bolt.new). Early stages were powered by references and advice from **ChatGPT** and **Grok**...

> ...until all the GPTs started acting like clueless tour guides. 🛍️🤖  
> I had to take the wheel, drop the AI, and grind through the logic myself.

Let’s just say: **the struggle was *very* real** — but so was the learning! 💪

---

## 🔧 Product Backlog (Agile User Stories)

- **As a user**, I want to register and log in so that I can access the app securely.  — _Implement user registration and login_
- **As a user**, I want to reset my password in case I forget it.  — _Develop password reset functionality_
- **As a user**, I want to edit my profile information.  — _Enable profile editing_
- **As a user**, I want to post details of a lost item so that others can help me find it.  — _Create lost item posting functionality_
- **As a user**, I want to post details of a found item so that the owner can claim it.  — _Create found item posting functionality_
- **As a user**, I want to upload images when posting items for better identification.  — _Enable image uploads_
- **As a user**, I want to manage my posts to keep information updated.  — _Allow users to edit or delete posts_
- **As a user**, I want to search for items using keywords.  — _Implement search functionality_
- **As a user**, I want to filter items by category and location for better results.  — _Add filters by category and location_
- **As a user**, I want to claim an item so that I can get it back.  — _Develop item claiming process_
- **As a user**, I want to chat with the person who posted an item to coordinate the return.  — _Create chat/messaging system_
- **As a user**, I want to verify that the item belongs to the claimant before handing it over.  — _Add verification before item handover_
- **As a user**, I want to receive notifications when someone comments on or claims my post.  — _Enable push notifications_
- **As a user**, I want to get email alerts for claims or messages.  — _Send email notifications_
- **As an admin**, I want to review and approve posts before they go live.  — _Moderate and approve posts_
- **As an admin**, I want to manage reported users and block inappropriate activity.  — _Implement user reporting and blocking_
- **As an admin**, I want to generate reports on frequently lost items.  — _Track commonly lost and found items_
- **As an admin**, I want to see user engagement stats.  — _Generate user activity reports_

> ⚠️ **Known Limitation:** As part of our product backlog, we’re working to resolve the issue where users **cannot currently add images from mobile devices**. This is a top priority item on our roadmap.

---

## 📅 Agile Progress

The app follows Agile principles with incremental delivery. Each story in the backlog maps to a planned sprint goal. We started with core features like posting and searching, and we continue to iterate.

---

## 🚨 Mobile Upload Note

> Currently, the hosted version **does not support image uploads from mobile devices.**  
> We're actively working on this limitation. Thanks for your patience and understanding!

---

## 💪 Run the App Locally

### 1. Clone the Main Repository

```bash
git clone https://github.com/Akshay-Devadiga-commits/sb1-kmerpar2.git
cd sb1-kmerpar2
```

### 2. Start the Backend Server

```bash
cd server
npm install
node index.js
```

- Server uses `better-sqlite3` with SQLite auto-init.
- Alternatively, use the server from the repo:  
  [https://github.com/SvAkshayKumar/Otp-Service-And-Feedback-Using-SQLite](https://github.com/SvAkshayKumar/Otp-Service-And-Feedback-Using-SQLite)

### 3. Start the Frontend App

```bash
cd ../client
npm install
npm start
```

Visit: `http://localhost:3000`

---

## 📂 Environment Variables

Create a `.env` file inside the `server/` directory:

```env
PORT=5000
EMAIL_SERVICE=gmail
EMAIL_USER=your-email@example.com
EMAIL_PASS=your-app-password
```

---

## 🧰 Terms & Conditions

This project includes a simple Terms & Conditions page.

- 📘 Repo: [https://github.com/SvAkshayKumar/LostAndFound-TandC](https://github.com/SvAkshayKumar/LostAndFound-TandC)  
- 🌐 Live: [https://svakshaykumar.github.io/LostAndFound-TandC/](https://svakshaykumar.github.io/LostAndFound-TandC/)

---

## 🤝 Contribution & Contact

We welcome and encourage contributions to improve the app!

If you have suggestions, want to report issues, or would like to build on this project — we’d love to hear from you.

📧 **Email:** adevadiga2005@gmail.com  
💬 **Message:** We encourage you to fork this project, suggest enhancements, or submit pull requests. Your contributions are not only welcome but deeply appreciated. Whether it’s a bug fix, a feature addition, or design improvement — every bit helps!

---

> Thank you for checking out the Lost and Found App. Whether you're a user or a developer, your support makes this project better. 💙

