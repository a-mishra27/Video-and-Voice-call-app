# 📞 Video and Voice Call App

A real-time voice and video calling application built using **React, Vite, Tailwind CSS, and ZEGOCLOUD**. The application allows users to view their unique user ID and username and send voice or video call invitations to other users.

## ✨ Features

- 📞 **Voice Calling** – Send voice call invitations to other users.
- 📹 **Video Calling** – Send video call invitations for face-to-face communication.
- 🆔 **Unique User ID** – Generate a user ID for each session.
- 👤 **Username Display** – Display the current user's username.
- 🎨 **Responsive UI** – Modern interface with gradient backgrounds and styled call buttons.
- ⚡ **Fast Development** – Powered by Vite and React.
- 🔗 **ZEGOCLOUD Integration** – Uses ZEGOCLOUD UIKit and ZIM for call invitations.

## 🛠️ Tech Stack

- **Frontend:** React.js
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **Calling SDK:** `@zegocloud/zego-uikit-prebuilt`
- **Messaging Plugin:** `zego-zim-web`
- **Language:** JavaScript
- **Version Control:** Git and GitHub

## 🚀 Getting Started

### Prerequisites

Make sure you have installed:

- Node.js
- npm
- A ZEGOCLOUD account and project

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/a-mishra27/Video-and-Voice-call-app.git
   ```

2. Navigate to the project directory:

   ```bash
   cd Video-and-Voice-call-app
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the local URL shown in your terminal, usually:

   `http://localhost:5173/`

## ⚙️ Configuration

Configure your ZEGOCLOUD project using its App ID and authentication settings.

**Security note:** Never expose your ZEGOCLOUD Server Secret in frontend code or commit it to GitHub. For production, generate authentication tokens securely on a backend.

## 📱 How to Use

1. Open the application in your browser.
2. Note your displayed username and user ID.
3. Open the application in another browser or have another user join.
4. Click **Voice Call** or **Video Call**.
5. Enter the recipient's user ID and username when prompted.
6. The recipient must be connected and configured to receive and accept call invitations.

## 🔮 Future Improvements

- Incoming call notification and accept/reject controls.
- Call status indicators.
- User authentication and persistent user profiles.
- Contact list and user search.
- Call history.
- Secure backend token generation.
- Deployment to a hosting platform.

## 👩‍💻 Author

**Amisha Mishra**

GitHub: [@a-mishra27](https://github.com/a-mishra27)

---

⭐ If you find this project interesting, consider giving the repository a star!
