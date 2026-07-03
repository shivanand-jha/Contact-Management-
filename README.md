# Contact Management System

A full-stack web application for managing and organizing contacts with a clean, intuitive interface. Built with Node.js, Express, and MongoDB to demonstrate backend fundamentals and full-stack development.

## 🎯 Overview

This project is a practical implementation of a contact management system that showcases CRUD operations, form validation, database integration, and responsive UI development. Perfect for managing personal or professional contacts.

## ✨ Features

- **Create Contacts**: Add new contacts with name, email, phone, and notes
- **Read/Display**: View all contacts in a formatted list
- **Update Contacts**: Edit existing contact information
- **Delete Contacts**: Remove contacts from the database
- **Search & Filter**: Find contacts by name or phone number
- **Form Validation**: Client and server-side validation
- **Responsive UI**: Works on desktop and mobile devices
- **Session Management**: User sessions with Express middleware

## 🛠️ Tech Stack

| Layer | Technologies |
|-------|--------------|
| **Backend** | Node.js, Express.js (v4.19.2) |
| **Frontend** | EJS (Embedded JavaScript), HTML5, CSS3 |
| **Database** | MongoDB, Mongoose (v8.3.0) |
| **Server** | Nodemon (development), Express middleware |
| **Version** | Node 14+ |

## 🏗️ Project Structure

```
contact-management/
├── views/
│   ├── index.ejs          # Home page with contact list
│   ├── add-contact.ejs    # Form to add new contact
│   ├── edit-contact.ejs   # Form to edit existing contact
│   └── layouts/
│       └── header.ejs     # Shared header/nav
├── models/
│   └── Contact.js         # Mongoose Contact schema
├── routes/
│   └── contacts.js        # API routes (GET, POST, PUT, DELETE)
├── controllers/
│   └── contactController.js
├── public/
│   ├── css/
│   │   └── style.css
│   └── js/
│       └── script.js
├── index.js               # Entry point
├── package.json
└── README.md
```

## 🚀 Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local or MongoDB Atlas connection string)
- npm or yarn

### Steps

```bash
# Clone the repository
git clone https://github.com/shivanand-jha/Contact-Management-.git
cd Contact-Management-

# Install dependencies
npm install

# Create .env file (optional, for MongoDB connection)
echo "MONGODB_URI=mongodb://localhost:27017/contacts" > .env
echo "PORT=5000" >> .env

# Start the server
npm start
```

The application will run at `http://localhost:5000`

## 📚 API Endpoints

### Contacts Routes

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/contacts` | Retrieve all contacts |
| GET | `/contacts/:id` | Get a single contact by ID |
| POST | `/contacts` | Create a new contact |
| PUT | `/contacts/:id` | Update a contact |
| DELETE | `/contacts/:id` | Delete a contact |

### Request/Response Examples

**Create Contact (POST /contacts)**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+1-234-567-8900",
  "notes": "Important client"
}
```

**Update Contact (PUT /contacts/:id)**
```json
{
  "name": "John Smith",
  "email": "john.smith@example.com",
  "phone": "+1-234-567-8901",
  "notes": "Updated notes"
}
```

## 🗄️ Database Schema

### Contact Model (MongoDB)

```javascript
{
  _id: ObjectId,
  name: String (required, trimmed),
  email: String (required, validated),
  phone: String (required, formatted),
  notes: String (optional),
  createdAt: Date (default: now),
  updatedAt: Date (auto-update)
}
```

## 🔧 Key Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| express | ^4.19.2 | Web framework |
| mongoose | ^8.3.0 | MongoDB ODM |
| ejs | ^3.1.9 | Template engine |
| nodemon | ^3.1.0 | Dev server auto-restart |

## 🎨 Frontend Implementation

### Views (EJS Templates)

**index.ejs** - Contact List Display
- Displays all contacts in a table format
- Edit and delete buttons for each contact
- Add new contact button
- Search functionality

**add-contact.ejs** - Contact Form
- Input fields: name, email, phone, notes
- Form validation on submit
- Cancel button to go back

**edit-contact.ejs** - Edit Contact Form
- Pre-populated form fields
- Update and cancel buttons

## 🚧 Implementation Highlights

### 1. **Express Middleware**
```javascript
// Middleware for parsing form data
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))
```

### 2. **MongoDB Connection**
```javascript
// Mongoose connection to MongoDB
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/contacts')
```

### 3. **Route Handlers**
```javascript
// Create contact
router.post('/contacts', async (req, res) => {
  const contact = new Contact(req.body)
  await contact.save()
  res.redirect('/contacts')
})

// Delete contact
router.delete('/contacts/:id', async (req, res) => {
  await Contact.findByIdAndDelete(req.params.id)
  res.json({ success: true })
})
```

### 4. **Form Validation**
```javascript
// Server-side validation
const { body, validationResult } = require('express-validator')

router.post('/contacts',
  body('email').isEmail(),
  body('phone').isMobilePhone(),
  (req, res) => {
    const errors = validationResult(req)
    // Handle validation
  }
)
```

## 🔒 Security Features

- Input validation (email, phone format)
- SQL/NoSQL injection prevention via Mongoose
- CSRF protection ready (middleware installable)
- Environment variables for sensitive data
- Express security middleware

## 📈 Challenges Solved

1. **Database Modeling**: Designed efficient MongoDB schema with proper validation
2. **Form Handling**: Implemented both GET (display) and POST (submit) workflows
3. **Error Handling**: Comprehensive try-catch and validation error handling
4. **Responsive Design**: Mobile-friendly UI using CSS flexbox/grid
5. **State Management**: Proper express session handling

## 📝 Environment Variables

```env
MONGODB_URI=mongodb://localhost:27017/contacts
PORT=5000
NODE_ENV=development
```

## 🧪 Testing

```bash
# Manual testing with curl
curl -X POST http://localhost:5000/contacts \
  -H "Content-Type: application/json" \
  -d '{"name":"Test User","email":"test@example.com","phone":"1234567890"}'

# Test GET
curl http://localhost:5000/contacts
```

## 📚 Learning Outcomes

- Express.js server setup and routing
- MongoDB and Mongoose ODM integration
- RESTful API design principles
- EJS template engine usage
- Form handling and validation
- CRUD operations
- Full-stack development workflow

## 👤 Author

**Shivanand Jha**
- GitHub: [@shivanand-jha](https://github.com/shivanand-jha)
- LinkedIn: [your-linkedin](https://linkedin.com/in/your-profile)

## 📞 Features Coming Soon

- Contact groups/categories
- Export to CSV
- Backup/restore functionality
- User authentication
- Contact photo upload
- Birthday reminders

---

**Last Updated**: 2024
**Status**: Active Maintenance
**Beginner Friendly**: ✅ Great project to learn full-stack development
