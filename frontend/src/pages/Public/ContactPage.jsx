import React, { useState } from 'react';
import {
  Container,
  Paper,
  Typography,
  Box,
  Grid,
  TextField,
  Button,
  Alert,
  CircularProgress,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Divider,
} from '@mui/material';
import {
  Email,
  Phone,
  LocationOn,
  AccessTime,
  Send,
  Support,
  Business,
  School,
} from '@mui/icons-material';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (error) setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      // Mock API call - replace with actual API
      await new Promise(resolve => setTimeout(resolve, 1000));
      setSuccess(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (err) {
      setError('Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const contactInfo = [
    {
      icon: <Email color="primary" />,
      title: 'Email',
      content: 'support@tutorbridge.com',
      subtitle: 'We respond within 24 hours',
    },
    {
      icon: <Phone color="primary" />,
      title: 'Phone',
      content: '+1 (555) 123-4567',
      subtitle: 'Mon-Fri, 9AM-6PM EST',
    },
    {
      icon: <LocationOn color="primary" />,
      title: 'Office',
      content: '123 Education Street, New York, NY 10001',
      subtitle: 'Visit us by appointment',
    },
    {
      icon: <AccessTime color="primary" />,
      title: 'Support Hours',
      content: 'Monday - Friday: 9AM - 6PM EST',
      subtitle: 'Weekend: Limited support',
    },
  ];

  const departments = [
    {
      icon: <Support color="primary" />,
      name: 'Customer Support',
      email: 'support@tutorbridge.com',
      description: 'General inquiries and account assistance',
    },
    {
      icon: <School color="primary" />,
      name: 'Tutor Relations',
      email: 'tutors@tutorbridge.com',
      description: 'For tutor applications and support',
    },
    {
      icon: <Business color="primary" />,
      name: 'Partnerships',
      email: 'partnerships@tutorbridge.com',
      description: 'Business and institutional partnerships',
    },
  ];

  if (success) {
    return (
      <Container maxWidth="md" sx={{ py: 8 }}>
        <Paper sx={{ p: 6, textAlign: 'center' }}>
          <Alert severity="success" sx={{ mb: 3 }}>
            Message sent successfully!
          </Alert>
          <Typography variant="h5" gutterBottom>
            Thank you for contacting us
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
            We'll get back to you within 24 hours.
          </Typography>
          <Button
            variant="contained"
            onClick={() => setSuccess(false)}
          >
            Send Another Message
          </Button>
        </Paper>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      <Typography
        variant="h3"
        component="h1"
        gutterBottom
        textAlign="center"
        sx={{ fontWeight: 'bold', mb: 6 }}
      >
        Contact Us
      </Typography>

      <Grid container spacing={4}>
        {/* Contact Information */}
        <Grid item xs={12} md={4}>
          <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
            Get in Touch
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ mb: 4 }}>
            We're here to help! Reach out to us through any of the following channels.
          </Typography>

          <List>
            {contactInfo.map((info, index) => (
              <React.Fragment key={index}>
                <ListItem alignItems="flex-start">
                  <ListItemIcon sx={{ minWidth: 40 }}>
                    {info.icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={info.title}
                    secondary={
                      <Box>
                        <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                          {info.content}
                        </Typography>
                        <Typography variant="caption" color="text.secondary">
                          {info.subtitle}
                        </Typography>
                      </Box>
                    }
                  />
                </ListItem>
                {index < contactInfo.length - 1 && <Divider variant="inset" component="li" />}
              </React.Fragment>
            ))}
          </List>

          <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold', mt: 4, mb: 2 }}>
            Departments
          </Typography>

          {departments.map((dept, index) => (
            <Card key={index} sx={{ mb: 2 }}>
              <CardContent sx={{ py: 2 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                  {dept.icon}
                  <Typography variant="h6" sx={{ ml: 1, fontWeight: 'bold' }}>
                    {dept.name}
                  </Typography>
                </Box>
                <Typography variant="body2" color="primary" sx={{ mb: 0.5 }}>
                  {dept.email}
                </Typography>
                <Typography variant="caption" color="text.secondary">
                  {dept.description}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Grid>

        {/* Contact Form */}
        <Grid item xs={12} md={8}>
          <Paper sx={{ p: 4 }}>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
              Send us a Message
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
              Fill out the form below and we'll get back to you as soon as possible.
            </Typography>

            {error && (
              <Alert severity="error" sx={{ mb: 3 }}>
                {error}
              </Alert>
            )}

            <Box component="form" onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    label="Your Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    label="Email Address"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    label="Subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    label="Message"
                    name="message"
                    multiline
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    variant="outlined"
                    placeholder="Tell us how we can help you..."
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    size="large"
                    disabled={loading}
                    startIcon={loading ? <CircularProgress size={20} /> : <Send />}
                    sx={{ minWidth: 150 }}
                  >
                    {loading ? 'Sending...' : 'Send Message'}
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Paper>

          {/* FAQ Section */}
          <Paper sx={{ p: 4, mt: 4 }}>
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
              Frequently Asked Questions
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
              Before reaching out, check if your question is answered below.
            </Typography>

            <Box>
              <Typography variant="h6" gutterBottom>
                How quickly will I receive a response?
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                We typically respond to all inquiries within 24 hours during business days.
              </Typography>

              <Typography variant="h6" gutterBottom>
                What if I need immediate help?
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                For urgent matters, please call our support line during business hours.
              </Typography>

              <Typography variant="h6" gutterBottom>
                Can I schedule a call with your team?
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Yes! Include your availability in your message, and we'll schedule a call.
              </Typography>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ContactPage;
