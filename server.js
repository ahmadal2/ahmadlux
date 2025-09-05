import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 4000; // Changed to 4000 to avoid port conflicts

// Middleware
app.use(express.json());

// Serve static files from the React app build directory (only in production)
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'dist')));
}

// Load data files
const carsData = JSON.parse(fs.readFileSync(path.join(__dirname, 'data', 'cars.json'), 'utf8'));
const servicesData = JSON.parse(fs.readFileSync(path.join(__dirname, 'data', 'services.json'), 'utf8'));

let appointments = [];

// Create transporter for sending emails
let transporter;
try {
  transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS
    }
  });
  
  // Verify transporter configuration
  transporter.verify((error, success) => {
    if (error) {
      console.error('Email transporter configuration error:', error);
    } else {
      console.log('Email transporter is ready to send messages');
    }
  });
} catch (error) {
  console.error('Failed to create email transporter:', error);
  transporter = null;
}

// API Routes
// GET /api/cars
app.get('/api/cars', (req, res) => {
  res.json(carsData);
});

// GET /api/services
app.get('/api/services', (req, res) => {
  res.json(servicesData);
});

// GET /api/appointments - New endpoint to view all appointments
app.get('/api/appointments', (req, res) => {
  res.json({
    success: true,
    appointments: appointments,
    count: appointments.length
  });
});

// POST /api/appointments
app.post('/api/appointments', async (req, res) => {
  const { name, email, phone, date, serviceId, carId, message } = req.body;
  
  // Simple validation
  if (!name || !email || !date || (!serviceId && !carId)) {
    return res.status(400).json({ 
      success: false, 
      error: 'Missing required fields',
      message: 'Bitte füllen Sie alle erforderlichen Felder aus und wählen Sie entweder einen Service oder ein Fahrzeug aus.' 
    });
  }
  
  const newAppointment = {
    id: appointments.length + 1,
    name,
    email,
    phone,
    date,
    serviceId,
    carId,
    message,
    createdAt: new Date().toISOString()
  };
  
  appointments.push(newAppointment);
  
  // Send email notification (if transporter is configured)
  if (transporter) {
    try {
      const mailOptions = {
        from: process.env.GMAIL_USER,
        to: process.env.GMAIL_USER,
        subject: `New Appointment Request from ${name}`,
        html: `
          <h2>New Appointment Request</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
          <p><strong>Date:</strong> ${date}</p>
          <p><strong>Service ID:</strong> ${serviceId || 'Not specified'}</p>
          <p><strong>Car ID:</strong> ${carId || 'Not specified'}</p>
          <p><strong>Message:</strong> ${message || 'No message'}</p>
          <p><strong>Request Time:</strong> ${new Date().toLocaleString()}</p>
        `
      };
      
      await transporter.sendMail(mailOptions);
      
      res.json({
        success: true,
        appointment: newAppointment,
        message: 'Appointment booked successfully! We will contact you soon.'
      });
    } catch (error) {
      console.error('Error sending email:', error);
      // Even if email fails, we still want to confirm the appointment
      res.json({
        success: true,
        appointment: newAppointment,
        message: 'Appointment booked successfully! (Email notification failed)'
      });
    }
  } else {
    // No email transporter configured, but still confirm the appointment
    res.json({
      success: true,
      appointment: newAppointment,
      message: 'Appointment booked successfully! (Email notifications are not configured)'
    });
  }
});

// Test email endpoint
app.get('/api/test-email', async (req, res) => {
  if (!transporter) {
    return res.status(500).json({ 
      success: false, 
      message: 'Email transporter is not configured' 
    });
  }
  
  try {
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER,
      subject: 'Test Email from Car Website',
      html: '<h1>Test Email</h1><p>This is a test email to verify that the email functionality is working correctly.</p>'
    };
    
    await transporter.sendMail(mailOptions);
    res.json({ success: true, message: 'Test email sent successfully!' });
  } catch (error) {
    console.error('Error sending test email:', error);
    res.status(500).json({ success: false, message: 'Failed to send test email', error: error.message });
  }
});

// Catch-all handler: Send React app for any non-API routes (only in production)
if (process.env.NODE_ENV === 'production') {
  app.get('*', (req, res) => {
    const indexPath = path.join(__dirname, 'dist', 'index.html');
    if (fs.existsSync(indexPath)) {
      res.sendFile(indexPath);
    } else {
      res.status(404).send('Not found');
    }
  });
}

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});