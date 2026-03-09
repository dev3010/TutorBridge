import React, { useState, useEffect } from 'react';
import {
  Container,
  Paper,
  Typography,
  Box,
  Grid,
  Avatar,
  Rating,
  Button,
  Chip,
  Divider,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Alert,
  CircularProgress,
  Tab,
  Tabs,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import {
  Star,
  LocationOn,
  School,
  AccessTime,
  Email,
  Phone,
  Language,
  CalendarToday,
  Payment,
  Verified,
  Favorite,
  FavoriteBorder,
  Share,
  Message,
  VideoCall,
  ExpandMore,
  CheckCircle,
  Schedule,
  Reviews,
} from '@mui/icons-material';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const TutorProfilePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user, isAuthenticated } = useAuth();
  
  const [tutor, setTutor] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [isFavorite, setIsFavorite] = useState(false);
  const [showBookingModal, setShowBookingModal] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [reviews, setReviews] = useState([]);
  const [availableSlots, setAvailableSlots] = useState([]);

  useEffect(() => {
    fetchTutorProfile();
    fetchTutorReviews();
    fetchAvailableSlots();
  }, [id]);

  const fetchTutorProfile = async () => {
    setLoading(true);
    try {
      // Mock API call - replace with actual API
      const mockTutor = {
        id: parseInt(id),
        name: 'Dr. Sarah Johnson',
        title: 'Mathematics Expert',
        bio: 'I am a passionate mathematics educator with over 8 years of experience teaching students from middle school to university level. My teaching philosophy focuses on building strong foundational understanding while making complex concepts accessible and enjoyable.',
        subjects: ['Mathematics', 'Calculus', 'Algebra', 'Statistics'],
        rating: 4.9,
        reviews: 127,
        hourlyRate: 45,
        avatar: '/avatar1.jpg',
        experience: '8 years',
        location: 'New York, NY',
        verified: true,
        availability: {
          monday: ['9:00 AM', '10:00 AM', '2:00 PM', '3:00 PM'],
          tuesday: ['9:00 AM', '11:00 AM', '2:00 PM', '4:00 PM'],
          wednesday: ['10:00 AM', '2:00 PM', '3:00 PM'],
          thursday: ['9:00 AM', '11:00 AM', '3:00 PM'],
          friday: ['9:00 AM', '2:00 PM', '4:00 PM'],
        },
        education: [
          'PhD in Mathematics, MIT (2015)',
          'MS in Applied Mathematics, Stanford (2012)',
          'BS in Mathematics, UC Berkeley (2010)',
        ],
        languages: ['English (Native)', 'Spanish (Fluent)'],
        teachingLevels: ['Middle School', 'High School', 'College', 'Graduate'],
        specialties: ['Calculus', 'Linear Algebra', 'Statistics', 'Test Preparation'],
        achievements: [
          'Best Mathematics Tutor 2022',
          '95% Student Success Rate',
          'Published Mathematics Researcher',
        ],
        responseTime: '1 hour',
        completionRate: '98%',
      };
      setTutor(mockTutor);
    } catch (err) {
      setError('Failed to load tutor profile');
    } finally {
      setLoading(false);
    }
  };

  const fetchTutorReviews = async () => {
    try {
      // Mock reviews data
      const mockReviews = [
        {
          id: 1,
          studentName: 'John Doe',
          rating: 5,
          comment: 'Dr. Johnson is an amazing tutor! She helped me understand calculus concepts that I was struggling with for months.',
          date: '2024-01-15',
          subject: 'Calculus',
        },
        {
          id: 2,
          studentName: 'Jane Smith',
          rating: 4,
          comment: 'Very knowledgeable and patient. Great at explaining complex topics in simple terms.',
          date: '2024-01-10',
          subject: 'Algebra',
        },
        {
          id: 3,
          studentName: 'Mike Johnson',
          rating: 5,
          comment: 'Excellent tutor! Helped me improve my grades significantly.',
          date: '2024-01-05',
          subject: 'Statistics',
        },
      ];
      setReviews(mockReviews);
    } catch (err) {
      console.error('Error fetching reviews:', err);
    }
  };

  const fetchAvailableSlots = async () => {
    try {
      // Mock available slots
      const mockSlots = [
        { date: '2024-01-20', time: '10:00 AM', available: true },
        { date: '2024-01-20', time: '2:00 PM', available: true },
        { date: '2024-01-21', time: '9:00 AM', available: false },
        { date: '2024-01-21', time: '3:00 PM', available: true },
      ];
      setAvailableSlots(mockSlots);
    } catch (err) {
      console.error('Error fetching available slots:', err);
    }
  };

  const handleBookingSubmit = async (bookingData) => {
    try {
      // Handle booking submission
      console.log('Booking data:', bookingData);
      setShowBookingModal(false);
      // Show success message or redirect to booking confirmation
    } catch (err) {
      console.error('Booking error:', err);
    }
  };

  const handleFavoriteToggle = () => {
    setIsFavorite(!isFavorite);
  };

  const handleMessageTutor = () => {
    if (!isAuthenticated) {
      navigate('/login');
      return;
    }
    // Open messaging interface
  };

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  if (loading) {
    return (
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Box sx={{ display: 'flex', justifyContent: 'center', py: 8 }}>
          <CircularProgress size={64} />
        </Box>
      </Container>
    );
  }

  if (error || !tutor) {
    return (
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Alert severity="error">{error}</Alert>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Grid container spacing={4}>
        {/* Profile Header */}
        <Grid item xs={12} md={4}>
          <Paper sx={{ p: 3, textAlign: 'center' }}>
            <Box sx={{ position: 'relative', display: 'inline-block' }}>
              <Avatar
                src={tutor.avatar}
                alt={tutor.name}
                sx={{ width: 150, height: 150, mx: 'auto', mb: 2 }}
              />
              {tutor.verified && (
                <Verified
                  sx={{
                    position: 'absolute',
                    bottom: 10,
                    right: 10,
                    color: 'primary.main',
                    bgcolor: 'white',
                    borderRadius: '50%',
                    p: 0.5,
                  }}
                />
              )}
            </Box>
            
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold' }}>
              {tutor.name}
            </Typography>
            
            <Typography variant="h6" color="text.secondary" gutterBottom>
              {tutor.title}
            </Typography>
            
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 }}>
              <Rating value={tutor.rating} precision={0.1} readOnly />
              <Typography variant="body2" sx={{ ml: 1 }}>
                ({tutor.reviews} reviews)
              </Typography>
            </Box>
            
            <Typography variant="h5" color="primary" gutterBottom>
              ${tutor.hourlyRate}/hour
            </Typography>
            
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 1, mb: 3 }}>
              <Chip label={tutor.experience} color="primary" variant="outlined" />
              <Chip label={tutor.location} icon={<LocationOn />} variant="outlined" />
            </Box>
            
            <Box sx={{ display: 'flex', gap: 1, justifyContent: 'center', mb: 3 }}>
              <IconButton onClick={handleFavoriteToggle}>
                {isFavorite ? <Favorite color="error" /> : <FavoriteBorder />}
              </IconButton>
              <IconButton>
                <Share />
              </IconButton>
            </Box>
            
            <Button
              fullWidth
              variant="contained"
              size="large"
              onClick={() => setShowBookingModal(true)}
              sx={{ mb: 2 }}
            >
              Book Session
            </Button>
            
            <Button
              fullWidth
              variant="outlined"
              size="large"
              startIcon={<Message />}
              onClick={handleMessageTutor}
            >
              Send Message
            </Button>
          </Paper>
        </Grid>

        {/* Profile Content */}
        <Grid item xs={12} md={8}>
          <Paper sx={{ p: 3 }}>
            <Tabs value={activeTab} onChange={handleTabChange} sx={{ mb: 3 }}>
              <Tab label="About" />
              <Tab label="Subjects" />
              <Tab label="Availability" />
              <Tab label="Reviews" />
            </Tabs>

            {/* About Tab */}
            {activeTab === 0 && (
              <Box>
                <Typography variant="h6" gutterBottom>
                  About {tutor.name}
                </Typography>
                <Typography variant="body1" paragraph>
                  {tutor.bio}
                </Typography>
                
                <Divider sx={{ my: 3 }} />
                
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <Typography variant="h6" gutterBottom>
                      Education
                    </Typography>
                    <List dense>
                      {tutor.education.map((edu, index) => (
                        <ListItem key={index}>
                          <ListItemIcon>
                            <School color="primary" />
                          </ListItemIcon>
                          <ListItemText primary={edu} />
                        </ListItem>
                      ))}
                    </List>
                  </Grid>
                  
                  <Grid item xs={12} sm={6}>
                    <Typography variant="h6" gutterBottom>
                      Languages
                    </Typography>
                    <List dense>
                      {tutor.languages.map((lang, index) => (
                        <ListItem key={index}>
                          <ListItemIcon>
                            <Language color="primary" />
                          </ListItemIcon>
                          <ListItemText primary={lang} />
                        </ListItem>
                      ))}
                    </List>
                  </Grid>
                </Grid>
                
                <Divider sx={{ my: 3 }} />
                
                <Typography variant="h6" gutterBottom>
                  Specialties
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
                  {tutor.specialties.map((specialty, index) => (
                    <Chip key={index} label={specialty} color="primary" />
                  ))}
                </Box>
                
                <Typography variant="h6" gutterBottom>
                  Achievements
                </Typography>
                <List dense>
                  {tutor.achievements.map((achievement, index) => (
                    <ListItem key={index}>
                      <ListItemIcon>
                        <CheckCircle color="success" />
                      </ListItemIcon>
                      <ListItemText primary={achievement} />
                    </ListItem>
                  ))}
                </List>
              </Box>
            )}

            {/* Subjects Tab */}
            {activeTab === 1 && (
              <Box>
                <Typography variant="h6" gutterBottom>
                  Subjects I Teach
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, mb: 3 }}>
                  {tutor.subjects.map((subject, index) => (
                    <Card key={index} sx={{ minWidth: 200 }}>
                      <CardContent>
                        <Typography variant="h6" color="primary">
                          {subject}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Expert level instruction
                        </Typography>
                      </CardContent>
                    </Card>
                  ))}
                </Box>
                
                <Typography variant="h6" gutterBottom>
                  Teaching Levels
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {tutor.teachingLevels.map((level, index) => (
                    <Chip key={index} label={level} variant="outlined" />
                  ))}
                </Box>
              </Box>
            )}

            {/* Availability Tab */}
            {activeTab === 2 && (
              <Box>
                <Typography variant="h6" gutterBottom>
                  Available Time Slots
                </Typography>
                <Typography variant="body2" color="text.secondary" gutterBottom>
                  Response time: {tutor.responseTime} • Completion rate: {tutor.completionRate}
                </Typography>
                
                {Object.entries(tutor.availability).map(([day, slots]) => (
                  <Accordion key={day} sx={{ mb: 1 }}>
                    <AccordionSummary expandIcon={<ExpandMore />}>
                      <Typography variant="subtitle1" sx={{ textTransform: 'capitalize' }}>
                        {day}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                        {slots.map((slot, index) => (
                          <Chip key={index} label={slot} variant="outlined" />
                        ))}
                      </Box>
                    </AccordionDetails>
                  </Accordion>
                ))}
              </Box>
            )}

            {/* Reviews Tab */}
            {activeTab === 3 && (
              <Box>
                <Typography variant="h6" gutterBottom>
                  Student Reviews
                </Typography>
                {reviews.map((review) => (
                  <Paper key={review.id} sx={{ p: 2, mb: 2 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                      <Typography variant="subtitle2" sx={{ fontWeight: 'bold' }}>
                        {review.studentName}
                      </Typography>
                      <Rating value={review.rating} size="small" sx={{ ml: 1 }} />
                    </Box>
                    <Typography variant="body2" color="text.secondary">
                      {review.comment}
                    </Typography>
                    <Typography variant="caption" color="text.secondary">
                      {review.date} • {review.subject}
                    </Typography>
                  </Paper>
                ))}
              </Box>
            )}
          </Paper>
        </Grid>
      </Grid>

      {/* Booking Modal */}
      <Dialog
        open={showBookingModal}
        onClose={() => setShowBookingModal(false)}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle>Book a Session with {tutor.name}</DialogTitle>
        <DialogContent>
          <Box sx={{ py: 2 }}>
            <Typography variant="body1" gutterBottom>
              Select a date and time for your session:
            </Typography>
            <TextField
              fullWidth
              label="Preferred Date"
              type="date"
              sx={{ mb: 2 }}
              InputLabelProps={{ shrink: true }}
            />
            <TextField
              fullWidth
              label="Preferred Time"
              type="time"
              sx={{ mb: 2 }}
              InputLabelProps={{ shrink: true }}
            />
            <TextField
              fullWidth
              label="Additional Notes"
              multiline
              rows={3}
              placeholder="Any specific topics you'd like to cover?"
            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setShowBookingModal(false)}>Cancel</Button>
          <Button variant="contained" onClick={() => handleBookingSubmit({})}>
            Book Session
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default TutorProfilePage;
