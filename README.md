# SOC Security Dashboard

A modern Security Operations Center (SOC) dashboard built with Next.js, featuring real-time security event monitoring, AWS integration, and Cognito authentication.

## 🚀 Features

- **Real-time Security Monitoring**
  - Live security event updates
  - Event filtering and search
  - Severity-based categorization

- **AWS Integration**
  - GuardDuty integration
  - SecurityHub integration
  - CloudWatch Logs monitoring

- **Authentication & Security**
  - AWS Cognito authentication
  - Protected routes
  - Secure session management

- **Modern UI/UX**
  - Responsive design
  - Dark/light mode support
  - Interactive data visualization

## 🛠️ Tech Stack

- **Frontend:** Next.js, React, TypeScript
- **Styling:** Tailwind CSS
- **Authentication:** AWS Cognito
- **Cloud Services:** AWS GuardDuty, SecurityHub
- **Real-time Updates:** WebSocket

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/soc-dashboard.git
cd soc-dashboard
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
Create a `.env.local` file in the root directory with the following variables:
```env
NEXT_PUBLIC_AWS_REGION=your-region
NEXT_PUBLIC_COGNITO_USER_POOL_ID=your-user-pool-id
NEXT_PUBLIC_COGNITO_CLIENT_ID=your-client-id
NEXT_PUBLIC_GUARDDUTY_DETECTOR_ID=your-detector-id
```

4. Run the development server:
```bash
npm run dev
```

## 🔧 Configuration

### AWS Setup

1. Create a Cognito User Pool
2. Set up GuardDuty
3. Configure SecurityHub
4. Update environment variables

### Authentication

The dashboard uses AWS Cognito for authentication. Ensure you have:
- Configured Cognito User Pool
- Set up App Client
- Updated environment variables

## 🚦 Usage

1. Start the development server:
```bash
npm run dev
```

2. Open [http://localhost:3000](http://localhost:3000) in your browser
3. Log in using your Cognito credentials
4. Monitor security events in real-time

## 📱 Screenshots

[Add screenshots of your dashboard here]

## 🤝 Contributing

Contributions are not opened yet!

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

## 📧 Contact

Your Name - Paul D.
Project Link: [https://github.com/paulinhx/soc-dashboard](https://github.com/your-username/soc-dashboard)

## 🙏 Acknowledgments

- AWS Documentation
- Next.js Documentation
- Tailwind CSS
