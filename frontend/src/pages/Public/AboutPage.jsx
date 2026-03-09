import React from 'react';
import {
  Container,
  Typography,
  Box,
  Grid,
  Paper,
  Card,
  CardContent,
  Avatar,
  Button,
  Divider,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import {
  ExpandMore,
  School,
  Groups,
  TrendingUp,
  AccessTime,
  LocationOn,
  Email,
  Phone,
  CheckCircle,
  Star,
  Shield,
  Lightbulb,
  Rocket,
} from '@mui/icons-material';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  const teamMembers = [
    {
      name: 'Sarah Johnson',
      role: 'CEO & Founder',
      avatar: '/team1.jpg',
      bio: 'Former educator with 15+ years experience in educational technology.',
    },
    {
      name: 'Michael Chen',
      role: 'CTO',
      avatar: '/team2.jpg',
      bio: 'Software engineer passionate about creating innovative learning solutions.',
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of Operations',
      avatar: '/team3.jpg',
      bio: 'Expert in scaling educational platforms and user experience.',
    },
    {
      name: 'David Williams',
      role: 'Head of Tutor Relations',
      avatar: '/team4.jpg',
      bio: 'Dedicated to building the best tutor community worldwide.',
    },
  ];

  const stats = [
    { icon: <Groups />, value: '10,000+', label: 'Active Students' },
    { icon: <School />, value: '2,500+', label: 'Expert Tutors' },
    { icon: <Star />, value: '4.8/5', label: 'Average Rating' },
    { icon: <TrendingUp />, value: '95%', label: 'Success Rate' },
  ];

  const features = [
    {
      icon: <Shield sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: 'Verified Tutors',
      description: 'All tutors undergo thorough background checks and qualification verification.',
    },
    {
      icon: <Lightbulb sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: 'Personalized Learning',
      description: 'Customized lesson plans tailored to individual learning styles and goals.',
    },
    {
      icon: <Rocket sx={{ fontSize: 40, color: 'primary.main' }} />,
      title: 'Advanced Technology',
      description: 'Cutting-edge platform with interactive tools and real-time collaboration.',
    },
  ];

  const faqs = [
    {
      question: 'How does TutorBridge work?',
      answer: 'TutorBridge connects students with qualified tutors through our easy-to-use platform. Students can search for tutors by subject, compare profiles, and book sessions that fit their schedule.',
    },
    {
      question: 'How do you verify your tutors?',
      answer: 'All tutors go through a comprehensive verification process including background checks, credential verification, and teaching assessments to ensure quality and safety.',
    },
    {
      question: 'What subjects are available?',
      answer: 'We offer tutoring in over 100 subjects including mathematics, sciences, languages, arts, and test preparation. Our tutor network continues to grow based on student demand.',
    },
    {
      question: 'Can I change or cancel a booking?',
      answer: 'Yes, you can modify or cancel bookings up to 24 hours before the scheduled session without penalty. Our flexible scheduling system makes it easy to manage your learning.',
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 8 }}>
      {/* Hero Section */}
      <Box sx={{ textAlign: 'center', mb: 8 }}>
        <Typography
          variant="h2"
          component="h1"
          gutterBottom
          sx={{ fontWeight: 'bold', color: 'primary.main' }}
        >
          About TutorBridge
        </Typography>
        <Typography variant="h5" color="text.secondary" sx={{ maxWidth: 800, mx: 'auto', mb: 4 }}>
          We're on a mission to make quality education accessible to everyone through personalized online tutoring.
        </Typography>
        <Button
          variant="contained"
          size="large"
          component={Link}
          to="/tutor-search"
        >
          Find a Tutor
        </Button>
      </Box>

      {/* Stats Section */}
      <Box sx={{ mb: 8 }}>
        <Grid container spacing={4}>
          {stats.map((stat, index) => (
            <Grid item xs={6} md={3} key={index}>
              <Paper
                sx={{
                  p: 3,
                  textAlign: 'center',
                  bgcolor: 'primary.main',
                  color: 'white',
                  boxShadow: 3,
                  transition: 'transform 0.3s',
                  '&:hover': { transform: 'translateY(-5px)' },
                }}
              >
                <Box sx={{ fontSize: 40, mb: 1 }}>{stat.icon}</Box>
                <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 0.5 }}>
                  {stat.value}
                </Typography>
                <Typography>{stat.label}</Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Mission Section */}
      <Grid container spacing={6} sx={{ mb: 8 }}>
        <Grid item xs={12} md={6}>
          <Typography variant="h3" gutterBottom sx={{ fontWeight: 'bold' }}>
            Our Mission
          </Typography>
          <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
            At TutorBridge, we believe that every student deserves access to quality education regardless of their location or background. Our platform connects learners with experienced tutors who can provide personalized guidance and support.
          </Typography>
          <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
            We're committed to creating a supportive learning environment where students can build confidence, improve their understanding, and achieve their academic goals.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h3" gutterBottom sx={{ fontWeight: 'bold' }}>
            Our Vision
          </Typography>
          <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
            To become the world's leading online tutoring platform, making quality education accessible to millions of students through innovative technology and exceptional teaching talent.
          </Typography>
          <Typography variant="body1" paragraph sx={{ lineHeight: 1.8 }}>
            We envision a future where every student has the opportunity to learn from the best educators, regardless of geographical boundaries.
          </Typography>
        </Grid>
      </Grid>

      {/* Features Section */}
      <Box sx={{ mb: 8 }}>
        <Typography variant="h3" textAlign="center" gutterBottom sx={{ fontWeight: 'bold', mb: 6 }}>
          Why Choose TutorBridge?
        </Typography>
        <Grid container spacing={4}>
          {features.map((feature, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card sx={{ height: '100%', textAlign: 'center', p: 3, boxShadow: 2 }}>
                <Box sx={{ mb: 2, display: 'flex', justifyContent: 'center' }}>
                  {feature.icon}
                </Box>
                <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
                  {feature.title}
                </Typography>
                <Typography color="text.secondary" sx={{ lineHeight: 1.6 }}>
                  {feature.description}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* Team Section */}
      <Box sx={{ mb: 8 }}>
        <Typography variant="h3" textAlign="center" gutterBottom sx={{ fontWeight: 'bold', mb: 6 }}>
          Meet Our Team
        </Typography>
        <Grid container spacing={4}>
          {teamMembers.map((member, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Paper sx={{ p: 3, textAlign: 'center', height: '100%' }}>
                <Avatar
                  src={member.avatar}
                  alt={member.name}
                  sx={{ width: 100, height: 100, mx: 'auto', mb: 2 }}
                />
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                  {member.name}
                </Typography>
                <Typography variant="body2" color="primary" gutterBottom>
                  {member.role}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {member.bio}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* FAQ Section */}
      <Box sx={{ mb: 8 }}>
        <Typography variant="h3" textAlign="center" gutterBottom sx={{ fontWeight: 'bold', mb: 6 }}>
          Frequently Asked Questions
        </Typography>
        {faqs.map((faq, index) => (
          <Accordion key={index} sx={{ mb: 2 }}>
            <AccordionSummary expandIcon={<ExpandMore />}>
              <Typography variant="h6">{faq.question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography variant="body1" color="text.secondary">
                {faq.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>

      {/* CTA Section */}
      <Paper
        sx={{
          p: 6,
          textAlign: 'center',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: 'white',
        }}
      >
        <Typography variant="h3" gutterBottom sx={{ fontWeight: 'bold' }}>
          Ready to Start Learning?
        </Typography>
        <Typography variant="h6" sx={{ mb: 4, opacity: 0.9 }}>
          Join thousands of students who have improved their grades with TutorBridge
        </Typography>
        <Button
          variant="contained"
          size="large"
          sx={{ bgcolor: 'white', color: 'primary.main', px: 4, py: 1.5 }}
          component={Link}
          to="/register"
        >
          Get Started Today
        </Button>
      </Paper>
    </Container>
  );
};

export default AboutPage;
