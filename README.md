# **Hybrid SOC AWS Dashboard**  
A **modern Security Operations Center (SOC) dashboard** built with **Next.js**, designed for **real-time security event monitoring**, AWS integration, and Cognito authentication.  

🚨 **Note:** While building a custom **SOC dashboard** on AWS can be fun and provide a tailored UI/UX experience, it may not be the most practical approach if **all security services are already hosted within AWS**. This project explores the hybrid approach, where cloud services integrate with **on-premise or external** security sources.

---

## **🚀 Features**

- **Real-time Security Monitoring**  
  - Live security event updates  
  - Event filtering and search  
  - Severity-based categorization  

- **AWS Integration** *(For Cloud Security Events)*  
  - GuardDuty security alerts  
  - SecurityHub compliance data  
  - CloudWatch Logs monitoring  

- **Hybrid SOC Capabilities** *(For On-Premise & External Sources)*  
  - API integration with external security feeds  
  - Custom log ingestion pipeline  
  - Multi-cloud visibility  

- **Authentication & Security**  
  - AWS Cognito authentication  
  - Protected routes & secure session management  

- **Modern UI/UX**  
  - Responsive design  
  - Dark/light mode support  
  - Interactive data visualization  

---

## **🛠️ Tech Stack**
- **Frontend:** Next.js, React, TypeScript  
- **Styling:** Tailwind CSS  
- **Authentication:** AWS Cognito  
- **Cloud Services:** AWS GuardDuty, SecurityHub  
- **Real-time Updates:** WebSockets  

---

## **📦 Installation**
1. Clone the repository:
   ```bash
   git clone https://github.com/paulinhx/soc-dashboard.git
   cd soc-dashboard ´´´

Install dependencies:

npm install

Set up environment variables:
Create a .env.local file in the root directory with the following variables:


NEXT_PUBLIC_AWS_REGION=your-region
NEXT_PUBLIC_COGNITO_USER_POOL_ID=your-user-pool-id
NEXT_PUBLIC_COGNITO_CLIENT_ID=your-client-id
NEXT_PUBLIC_GUARDDUTY_DETECTOR_ID=your-detector-id
Run the development server:

npm run dev

## **🔧 Configuration**

### AWS Setup

Create a Cognito User Pool
Enable GuardDuty for security threat detection
Configure SecurityHub for compliance insights
Update environment variables
Hybrid SOC Setup (Optional but Recommended)
Configure external SIEM logs (e.g., Splunk, Elastic, Graylog)
Set up custom log ingestion (e.g., API gateway, S3, or self-hosted log collector)
Enable multi-cloud security monitoring

## **🚦 Usage**
Start the development server:

npm run dev

Open http://localhost:3000 in your browser
Log in using your Cognito credentials
View real-time security events & hybrid logs

## **📱 Screenshots**

![Screenshot 2025-02-22 at 14 30 08](https://github.com/user-attachments/assets/300e2294-c198-4834-ba4c-74477e964cbe)
![Screenshot 2025-02-22 at 13 26 36](https://github.com/user-attachments/assets/33a75a2e-199e-4522-baed-75f5ae969e00)


## **🤝 Contributing**
This project is open for feedback, but contributions are not open yet.

## **📝 License**
This project is licensed under the MIT License – see the LICENSE file for details.

## **📧 Contact**
Paul Desbats
Project Repository: SOC Dashboard GitHub

## **🙏 Acknowledgments**
AWS Documentation for GuardDuty, SecurityHub, Cognito
Next.js Documentation for frontend development
Tailwind CSS for modern UI styling
Hybrid SOC Strategy for improving security beyond cloud environments
Why a Hybrid SOC?
While AWS offers built-in security services, a fully cloud-hosted SOC dashboard might be redundant. Instead, this project explores how a hybrid security monitoring system can integrate on-premise logs, multi-cloud data, and AWS security insights into a single unified dashboard.



