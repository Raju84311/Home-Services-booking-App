# 🛠️ Home Services Booking App

A fully functional mobile application built using **React Native** that allows users to book trusted home service professionals like electricians, plumbers, and painters. The app offers seamless booking, secure QR code payments, and real-time service status views for both clients and admins.

---

## 📲 Features

- 🔐 User login and authentication  
- 📅 Service booking with selected date and time  
- 🧑‍🔧 Worker selection based on type of service  
- 💸 QR code-based payment confirmation flow  
- 📩 SMS confirmation message after successful payment  
- 🔒 Booking validation to prevent double-booking of workers  
- 🖥️ Separate views for Client and Admin for booking overview  
- 🧠 Smooth navigation and intuitive UI/UX  

---

## 🧪 Tech Stack

- **React Native** – Mobile app framework  
- **JavaScript / TypeScript** – Application logic  
- **React Navigation** – Screen routing  
- **react-native-qrcode-svg** – QR code generation  
- **AsyncStorage** – Local storage for user sessions and bookings  
- *(Optional backend can be added using Firebase or Node.js)*

---

## 🗂️ Folder Structure

HomeServicesApp/
├── assets/
│ └── icons/
│ ├── carpenter.png
│ ├── electrician.png
│ └── ...
├── src/
│ ├── data/
│ │ ├── services.js
│ │ └── bookings.js
│ └── screens/
│ ├── LoginScreen.tsx
│ ├── HomeScreen.tsx
│ ├── BookingScreen.tsx
│ ├── PaymentScreen.tsx
│ ├── AdminViewScreen.tsx
│ ├── ClientViewScreen.tsx
│ └── WorkersScreen.tsx
├── App.tsx
├── package.json
└── README.md

yaml
Copy
Edit


---

## 🛠️ How to Run the Project

> ⚠️ Make sure you’ve set up your development environment using the official [React Native guide](https://reactnative.dev/docs/environment-setup) for **React Native CLI**.

### 📦 Install Dependencies

```bash
npm install

▶️ Start Metro Bundler
bash
Copy
Edit
npm start
📱 Run on Android Device or Emulator
bash
Copy
Edit
npm run android
Make sure an Android emulator is running or a real device is connected via USB with debugging enabled.

🧪 Testing the Flow
Login using any sample credentials (no backend verification).

Select a service (like electrician, plumber, etc.).

Pick a worker, choose date & time, and click "Book Now".

Proceed to the Payment Screen.

Scan the QR code and click "I have paid".

A popup confirms the payment, followed by an SMS (simulated).

Admin view and Client view show bookings.

📦 Future Enhancements
Razorpay or UPI integration for real payments

Backend using Firebase or Node.js with database

Real-time SMS using Twilio

Notification support

Booking history and feedback

🤝 Contributing
Contributions are welcome!
If you'd like to improve the app or add features, feel free to fork the repo and submit a pull request.

📄 License
This project is open-source and available under the MIT License.

👨‍💻 Author
S.B Narasimha Raju
📍 Mysore, India
🔗 LinkedIn : linkedin.com/in/narasimharaju1
🐙 GitHub: github.com/Raju8431
