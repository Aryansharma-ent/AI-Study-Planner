# AI Study Plan Generator

An intelligent, AI-powered study plan generator that creates personalized learning schedules tailored to your goals, available time, and skill level. Built with React, Node.js, Express, MongoDB, and Google's Gemini AI.

## Screenshots

<div align="center">
  <table>
    <tr>
      <td width="50%">
        <img src="screenshots/Dashboard.png" alt="Dashboard" />
        <p align="center"><b>Landing Dashboard</b></p>
      </td>
      <td width="50%">
        <img src="screenshots/Form.png" alt="Generate Form" />
        <p align="center"><b>Study Plan Generator Form</b></p>
      </td>
    </tr>
    <tr>
      <td width="50%">
        <img src="screenshots/Result1.png" alt="Generated Plan Part 1" />
        <p align="center"><b>AI-Generated Study Plan (Part 1)</b></p>
      </td>
      <td width="50%">
        <img src="screenshots/Result2.png" alt="Generated Plan Part 2" />
        <p align="center"><b>AI-Generated Study Plan (Part 2)</b></p>
      </td>
    </tr>
  </table>
</div>

## Features

- **AI-Powered Planning** - Utilizes Google's Gemini AI to generate personalized study schedules
- **Customizable Inputs** - Set your goals, available time, duration, subjects, and skill level
- **Smart Scheduling** - Creates day-by-day breakdowns with specific topics and time allocations
- **MongoDB Integration** - Saves and retrieves your study plans
- **Modern UI/UX** - Beautiful, responsive interface with smooth animations
- **Real-time Loading States** - Animated spinners and feedback during plan generation
- **Fully Responsive** - Works seamlessly on desktop, tablet, and mobile devices

## Tech Stack

### Frontend
- **React 19** - Modern React with hooks
- **React Router DOM** - Client-side routing
- **Axios** - HTTP client for API requests
- **React Icons** - Beautiful icon library
- **Vite** - Lightning-fast build tool
- **CSS3** - Custom styling with animations

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **Google Generative AI (Gemini)** - AI model for plan generation
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variable management

## Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v18 or higher)
- **npm** or **yarn**
- **MongoDB** (local installation or MongoDB Atlas account)
- **Google Gemini API Key** ([Get it here](https://makersuite.google.com/app/apikey))

## Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/Aryansharma-ent/AI-Study_Planner.git
cd AI-Study_Planner
```

### 2. Install Root Dependencies

```bash
npm install
```

### 3. Setup Client (Frontend)

```bash
cd client
npm install
```

Create a `.env` file in the `client` folder (if needed for any frontend environment variables):

```env
# Add any frontend environment variables here if needed
```

### 4. Setup Server (Backend)

```bash
cd ../server
npm install
```

Create a `.env` file in the `server` folder with the following variables:

```env
# MongoDB Connection String
MONGO_URI=your_mongodb_connection_string

# Google Gemini API Key
GEMINI_API_KEY=your_gemini_api_key

# Server Port (optional, defaults to 8000)
PORT=8000
```

**Important:** Replace the placeholder values with your actual credentials:
- `MONGO_URI`: Your MongoDB connection string (local or Atlas)
  - Local example: `mongodb://localhost:27017/studyplanner`
  - Atlas example: `mongodb+srv://username:password@cluster.mongodb.net/studyplanner`
- `GEMINI_API_KEY`: Your Google Gemini API key

## Running the Application

### Development Mode

You need to run both the client and server simultaneously.

#### Terminal 1 - Start the Backend Server

```bash
cd server
npm run dev
```

The server will start on `http://localhost:8000`

#### Terminal 2 - Start the Frontend Client

```bash
cd client
npm run dev
```

The client will start on `http://localhost:5173`

### Production Build

#### Build the Client

```bash
cd client
npm run build
```

#### Start the Server

```bash
cd server
npm start
```

## Project Structure

```
AI-Study_Planner/
├── client/                    # Frontend React application
│   ├── public/               # Static assets
│   ├── src/
│   │   ├── api/              # API service layer
│   │   │   ├── Client.js     # Axios client configuration
│   │   │   └── PlanApi.js    # Plan API endpoints
│   │   ├── assets/           # Images, fonts, etc.
│   │   ├── components/       # Reusable components
│   │   │   ├── dashboard/    # Dashboard-specific components
│   │   │   ├── MainFooter.jsx
│   │   │   └── Navbar.jsx
│   │   ├── layouts/          # Layout components
│   │   │   └── MainNav.jsx
│   │   ├── pages/            # Page components
│   │   │   ├── DashBoard.jsx
│   │   │   ├── GenerateForm.jsx
│   │   │   ├── Prism.jsx
│   │   │   └── ResultPage.jsx
│   │   ├── styles/           # CSS stylesheets
│   │   ├── App.jsx           # Main App component
│   │   └── main.jsx          # Entry point
│   ├── package.json
│   └── vite.config.js
│
├── server/                    # Backend Node.js application
│   ├── config/
│   │   └── db.js             # MongoDB connection
│   ├── Controllers/
│   │   └── DataControllers.js # Business logic
│   ├── Middlewares/
│   │   └── ErrorHandler.js   # Error handling middleware
│   ├── Models/
│   │   └── PlanModel.js      # Mongoose schema
│   ├── Routes/
│   │   └── DataRouters.js    # API routes
│   ├── server.js             # Server entry point
│   └── package.json
│
├── screenshots/               # Application screenshots
├── .gitignore                # Git ignore file
├── package.json              # Root package.json
└── README.md                 # This file
```

## API Endpoints

### Base URL
```
http://localhost:8000/api/plans
```

### Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/` | Generate a new study plan |
| GET | `/:id` | Retrieve a specific study plan by ID |

### Example Request

**POST /api/plans**

```json
{
  "title": "Master Data Structures & Algorithms",
  "hoursperday": 4,
  "durationDays": 30,
  "subjects": ["Arrays", "Linked Lists", "Trees", "Graphs"],
  "weakAreas": ["Dynamic Programming", "Recursion"],
  "level": "Intermediate"
}
```

**Response:**

```json
{
  "_id": "generated_plan_id",
  "title": "Master Data Structures & Algorithms",
  "hoursperday": 4,
  "durationDays": 30,
  "subjects": ["Arrays", "Linked Lists", "Trees", "Graphs"],
  "weakAreas": ["Dynamic Programming", "Recursion"],
  "level": "Intermediate",
  "generatedPlan": "Detailed AI-generated study plan...",
  "createdAt": "2026-02-02T10:30:00.000Z"
}
```

## Usage

1. **Navigate to the Dashboard** - View the landing page with features and benefits
2. **Click "Generate Study Plan"** - Navigate to the form
3. **Fill in Your Details:**
   - Plan Title/Goal
   - Available hours per day
   - Study duration in days
   - Subjects/Topics (comma-separated)
   - Weak areas (optional, comma-separated)
   - Current skill level
4. **Submit the Form** - AI will generate your personalized study plan
5. **View Your Plan** - See your detailed day-by-day study schedule

## Environment Variables

### Server (.env)

| Variable | Description | Required |
|----------|-------------|----------|
| MONGO_URI | MongoDB connection string | Yes |
| GEMINI_API_KEY | Google Gemini API key | Yes |
| PORT | Server port number | No (default: 8000) |

### Client (.env)

Currently, no client-side environment variables are required. If you need to configure the API base URL:

```env
VITE_API_URL=http://localhost:8000
```

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the ISC License.

## Author

**Aryan Sharma**
- GitHub: [@Aryansharma-ent](https://github.com/Aryansharma-ent)

## Acknowledgments

- Google Gemini AI for powerful language model capabilities
- React team for the amazing framework
- MongoDB team for the flexible database solution
- All contributors and users of this project

## Known Issues

- None currently reported

## Support

If you encounter any issues or have questions, please:
1. Check the existing issues on GitHub
2. Create a new issue with detailed information
3. Contact the maintainer

## Future Enhancements

- [ ] User authentication and profile management
- [ ] Save multiple study plans per user
- [ ] Progress tracking with checkboxes
- [ ] Calendar integration
- [ ] Study reminders and notifications
- [ ] Export plans to PDF
- [ ] Share plans with others
- [ ] Mobile app version

---

<div align="center">
  Made with love by Aryan Sharma
</div>
