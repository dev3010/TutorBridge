import React, { useState, useEffect } from 'react';
import {
  Container,
  Typography,
  Box,
  Button,
  Grid,
  Card,
  CardContent,
  Avatar,
  Rating,
  Chip,
  Paper,
  AppBar,
  Toolbar,
  IconButton,
  Menu,
  MenuItem,
  TextField,
  InputAdornment,
  Fade,
  Slide,
  Alert,
  CircularProgress,
  Divider,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import {
  Search as SearchIcon,
  Menu as MenuIcon,
  AccountCircle,
  School,
  Star,
  TrendingUp,
  AccessTime,
  LocationOn,
  ArrowForward,
  CheckCircle,
  Groups,
  Support,
  Email,
  Phone,
  Shield,
  Lightbulb,
  Rocket,
  ExpandMore,
  Verified,
  FavoriteBorder,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();
  const [featuredTutors, setFeaturedTutors] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [anchorEl, setAnchorEl] = useState(null);

  useEffect(() => {
    // Mock data for featured tutors
    setFeaturedTutors([
      {
        id: 1,
        name: 'Dr. Sarah Johnson',
        subjects: ['Mathematics', 'Calculus'],
        rating: 4.9,
        reviews: 127,
        hourlyRate: 45,
        avatar: '/avatar1.jpg',
        experience: '8 years',
        location: 'New York',
        verified: true,
      },
      {
        id: 2,
        name: 'Prof. Michael Chen',
        subjects: ['Physics', 'Chemistry'],
        rating: 4.8,
        reviews: 98,
        hourlyRate: 50,
        avatar: '/avatar2.jpg',
        experience: '10 years',
        location: 'Los Angeles',
        verified: true,
      },
      {
        id: 3,
        name: 'Emily Rodriguez',
        subjects: ['English', 'Literature'],
        rating: 4.9,
        reviews: 156,
        hourlyRate: 40,
        avatar: '/avatar3.jpg',
        experience: '6 years',
        location: 'Chicago',
        verified: true,
      },
    ]);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/tutor-search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const stats = [
    { icon: <Groups />, label: 'Active Tutors', value: '2,500+' },
    { icon: <School />, label: 'Students Helped', value: '10,000+' },
    { icon: <Star />, label: 'Average Rating', value: '4.8/5' },
    { icon: <TrendingUp />, label: 'Success Rate', value: '95%' },
  ];

  const features = [
    {
      title: 'Verified Tutors',
      description: 'All tutors undergo thorough background checks and qualification verification.',
      icon: <CheckCircle sx={{ fontSize: 40, color: 'primary.main' }} />,
    },
    {
      title: 'Flexible Scheduling',
      description: 'Book sessions at your convenience with our easy-to-use scheduling system.',
      icon: <AccessTime sx={{ fontSize: 40, color: 'primary.main' }} />,
    },
    {
      title: 'Interactive Learning',
      description: 'Engage in live sessions with screen sharing, whiteboard, and recording features.',
      icon: <School sx={{ fontSize: 40, color: 'primary.main' }} />,
    },
    {
      title: '24/7 Support',
      description: 'Get help whenever you need it with our round-the-clock customer support.',
      icon: <Support sx={{ fontSize: 40, color: 'primary.main' }} />,
    },
  ];

  return (
    <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
      {/* Hero Section */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, rgba(25, 118, 210, 0.95) 0%, rgba(156, 39, 176, 0.95) 100%)',
          color: 'white',
          py: { xs: 6, md: 10 },
          position: 'relative',
          overflow: 'hidden',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        {/* Animated Background Elements */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            opacity: 0.3,
          }}
        />
        
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} md={6}>
              <Slide in timeout={800} direction="right">
                <Box>
                  <Chip
                    label="🎓 Trusted by 10,000+ Students"
                    sx={{
                      mb: 3,
                      bgcolor: 'rgba(255, 255, 255, 0.2)',
                      color: 'white',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255, 255, 255, 0.3)',
                      fontWeight: 'bold',
                    }}
                  />
                  <Typography
                    variant="h2"
                    component="h1"
                    gutterBottom
                    sx={{ 
                      fontWeight: 800, 
                      mb: 3,
                      fontSize: { xs: '2.5rem', md: '3.5rem' },
                      lineHeight: 1.2,
                      textShadow: '2px 2px 4px rgba(0,0,0,0.1)',
                    }}
                  >
                    Transform Your
                    <Box component="span" sx={{ color: '#FFD700', display: 'block' }}>
                      Learning Journey
                    </Box>
                  </Typography>
                  <Typography
                    variant="h5"
                    sx={{ 
                      mb: 4, 
                      opacity: 0.95, 
                      lineHeight: 1.6,
                      fontSize: { xs: '1.1rem', md: '1.3rem' },
                      maxWidth: '500px',
                    }}
                  >
                    Connect with expert tutors for personalized 1-on-1 learning experiences. 
                    Achieve academic excellence with guidance from top educators.
                  </Typography>
                  
                  <Box
                    component="form"
                    onSubmit={handleSearch}
                    sx={{ 
                      mb: 4,
                      bgcolor: 'rgba(255, 255, 255, 0.95)',
                      p: 1,
                      borderRadius: '16px',
                      backdropFilter: 'blur(10px)',
                      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
                    }}
                  >
                    <TextField
                      fullWidth
                      placeholder="🔍 Search for subjects, tutors, or topics..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      InputProps={{
                        disableUnderline: true,
                        sx: {
                          bgcolor: 'transparent',
                          fontSize: '1.1rem',
                          '& input': { py: 2 },
                        },
                        startAdornment: (
                          <InputAdornment position="start">
                            <SearchIcon sx={{ color: 'primary.main', fontSize: '1.5rem' }} />
                          </InputAdornment>
                        ),
                        endAdornment: (
                          <InputAdornment position="end">
                            <Button
                              type="submit"
                              variant="contained"
                              sx={{ 
                                bgcolor: 'primary.main',
                                color: 'white',
                                px: 3,
                                py: 1.5,
                                borderRadius: '12px',
                                fontWeight: 'bold',
                                boxShadow: '0 4px 12px rgba(25, 118, 210, 0.3)',
                                '&:hover': { 
                                  bgcolor: 'primary.dark',
                                  transform: 'translateY(-2px)',
                                  boxShadow: '0 6px 20px rgba(25, 118, 210, 0.4)',
                                },
                                transition: 'all 0.3s ease',
                              }}
                            >
                              Search
                            </Button>
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Box>

                  <Box sx={{ display: 'flex', gap: 3, flexWrap: 'wrap', alignItems: 'center' }}>
                    <Button
                      variant="outlined"
                      size="large"
                      sx={{ 
                        borderColor: 'white', 
                        color: 'white', 
                        px: 4,
                        py: 1.5,
                        borderRadius: '12px',
                        fontWeight: 'bold',
                        fontSize: '1rem',
                        backdropFilter: 'blur(10px)',
                        '&:hover': { 
                          bgcolor: 'rgba(255,255,255,0.1)',
                          transform: 'translateY(-2px)',
                          borderColor: 'white',
                        },
                        transition: 'all 0.3s ease',
                      }}
                      onClick={() => navigate('/tutor-search')}
                    >
                      Browse Tutors
                    </Button>
                    <Button
                      variant="contained"
                      size="large"
                      sx={{ 
                        bgcolor: 'white', 
                        color: 'primary.main', 
                        px: 4,
                        py: 1.5,
                        borderRadius: '12px',
                        fontWeight: 'bold',
                        fontSize: '1rem',
                        boxShadow: '0 4px 12px rgba(255, 255, 255, 0.3)',
                        '&:hover': { 
                          bgcolor: 'grey.100',
                          transform: 'translateY(-2px)',
                          boxShadow: '0 6px 20px rgba(255, 255, 255, 0.4)',
                        },
                        transition: 'all 0.3s ease',
                      }}
                      onClick={() => navigate('/register')}
                    >
                      Get Started Free
                    </Button>
                  </Box>
                </Box>
              </Slide>
            </Grid>
            <Grid item xs={12} md={6}>
              <Fade in timeout={1200}>
                <Box sx={{ textAlign: 'center', position: 'relative' }}>
                  <Box
                    sx={{
                      position: 'relative',
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        top: -20,
                        left: -20,
                        right: -20,
                        bottom: -20,
                        background: 'radial-gradient(circle, rgba(255,215,0,0.1) 0%, transparent 70%)',
                        borderRadius: '50%',
                        animation: 'pulse 3s ease-in-out infinite',
                      },
                    }}
                  >
                    <img
                      src="/hero-learning.svg"
                      alt="Students learning with tutors"
                      style={{ 
                        width: '100%', 
                        maxWidth: 600, 
                        height: 'auto',
                        filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.2))',
                      }}
                    />
                  </Box>
                  {/* Floating Cards */}
                  <Box
                    sx={{
                      position: 'absolute',
                      top: '10%',
                      right: '10%',
                      bgcolor: 'white',
                      p: 2,
                      borderRadius: '12px',
                      boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
                      animation: 'float 3s ease-in-out infinite',
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <Star sx={{ color: '#FFD700' }} />
                      <Typography variant="body2" fontWeight="bold">4.9/5 Rating</Typography>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      position: 'absolute',
                      bottom: '15%',
                      left: '5%',
                      bgcolor: 'white',
                      p: 2,
                      borderRadius: '12px',
                      boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
                      animation: 'float 3s ease-in-out infinite 1s',
                    }}
                  >
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <Groups sx={{ color: 'primary.main' }} />
                      <Typography variant="body2" fontWeight="bold">10,000+ Students</Typography>
                    </Box>
                  </Box>
                </Box>
              </Fade>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Stats Section */}
      <Box
        sx={{
          py: 8,
          background: 'linear-gradient(180deg, #f8f9fa 0%, #ffffff 100%)',
          position: 'relative',
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography
              variant="h3"
              component="h2"
              gutterBottom
              sx={{ fontWeight: 'bold', color: 'text.primary' }}
            >
              Trusted by Students & Educators Worldwide
            </Typography>
            <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto' }}>
              Join thousands of successful learners and expert tutors in our growing community
            </Typography>
          </Box>
          <Grid container spacing={4}>
            {stats.map((stat, index) => (
              <Grid item xs={6} md={3} key={index}>
                <Paper
                  sx={{
                    p: 4,
                    textAlign: 'center',
                    background: 'linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%)',
                    border: '1px solid rgba(25, 118, 210, 0.1)',
                    borderRadius: '20px',
                    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    position: 'relative',
                    overflow: 'hidden',
                    '&:hover': { 
                      transform: 'translateY(-8px) scale(1.02)',
                      boxShadow: '0 20px 40px rgba(25, 118, 210, 0.15)',
                      '& .stat-icon': {
                        transform: 'scale(1.1) rotate(5deg)',
                      },
                      '& .stat-value': {
                        color: 'primary.main',
                      }
                    },
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: '4px',
                      background: 'linear-gradient(90deg, #1976d2 0%, #9c27b0 100%)',
                      transform: 'translateX(-100%)',
                      transition: 'transform 0.6s ease',
                    },
                    '&:hover::before': {
                      transform: 'translateX(0)',
                    }
                  }}
                >
                  <Box 
                    className="stat-icon"
                    sx={{ 
                      color: 'primary.main', 
                      mb: 2, 
                      fontSize: { xs: 40, md: 48 },
                      transition: 'transform 0.3s ease',
                    }}
                  >
                    {stat.icon}
                  </Box>
                  <Typography 
                    className="stat-value"
                    variant="h3" 
                    sx={{ 
                      fontWeight: 'bold', 
                      mb: 1,
                      background: 'linear-gradient(135deg, #1976d2 0%, #9c27b0 100%)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text',
                      transition: 'all 0.3s ease',
                    }}
                  >
                    {stat.value}
                  </Typography>
                  <Typography 
                    variant="h6" 
                    color="text.secondary"
                    sx={{ fontWeight: 500 }}
                  >
                    {stat.label}
                  </Typography>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Features Section */}
      <Box
        sx={{
          py: 10,
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Background Pattern */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.03'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E")`,
            opacity: 0.5,
          }}
        />
        
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 2 }}>
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography
              variant="h3"
              component="h2"
              gutterBottom
              sx={{ 
                fontWeight: 'bold', 
                mb: 3,
                color: 'white',
                fontSize: { xs: '2rem', md: '2.5rem' }
              }}
            >
              Why Students & Teachers Love TutorBridge
            </Typography>
            <Typography 
              variant="h6" 
              sx={{ 
                color: 'rgba(255, 255, 255, 0.9)',
                maxWidth: 700,
                mx: 'auto',
                lineHeight: 1.6
              }}
            >
              Discover the features that make our platform the preferred choice for personalized education
            </Typography>
          </Box>
          
          <Grid container spacing={4}>
            {features.map((feature, index) => (
              <Grid item xs={12} md={6} key={index}>
                <Paper
                  sx={{
                    p: 4,
                    height: '100%',
                    background: 'rgba(255, 255, 255, 0.95)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: '20px',
                    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.1)',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    position: 'relative',
                    overflow: 'hidden',
                    '&:hover': { 
                      transform: 'translateY(-8px)',
                      boxShadow: '0 30px 60px rgba(0, 0, 0, 0.15)',
                      '& .feature-icon': {
                        transform: 'scale(1.1) rotate(-5deg)',
                      },
                      '& .feature-title': {
                        color: 'primary.main',
                      }
                    },
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: -50,
                      right: -50,
                      width: 100,
                      height: 100,
                      background: 'radial-gradient(circle, rgba(25, 118, 210, 0.1) 0%, transparent 70%)',
                      borderRadius: '50%',
                    }
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 3 }}>
                    <Box 
                      className="feature-icon"
                      sx={{ 
                        mb: 2,
                        transition: 'transform 0.3s ease',
                        flexShrink: 0
                      }}
                    >
                      {feature.icon}
                    </Box>
                    <Box>
                      <Typography 
                        className="feature-title"
                        variant="h5" 
                        gutterBottom 
                        sx={{ 
                          fontWeight: 'bold',
                          color: 'text.primary',
                          transition: 'color 0.3s ease',
                          mb: 2
                        }}
                      >
                        {feature.title}
                      </Typography>
                      <Typography 
                        variant="body1" 
                        color="text.secondary" 
                        sx={{ 
                          lineHeight: 1.6,
                          fontSize: '1rem'
                        }}
                      >
                        {feature.description}
                      </Typography>
                    </Box>
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Featured Tutors Section */}
      <Box
        sx={{
          py: 10,
          background: 'linear-gradient(180deg, #ffffff 0%, #f8f9fa 100%)',
          position: 'relative',
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography
              variant="h3"
              component="h2"
              gutterBottom
              sx={{ 
                fontWeight: 'bold', 
                mb: 3,
                background: 'linear-gradient(135deg, #1976d2 0%, #9c27b0 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Meet Our Expert Tutors
            </Typography>
            <Typography variant="h6" color="text.secondary" sx={{ maxWidth: 600, mx: 'auto', mb: 4 }}>
              Learn from certified educators and subject matter experts who are passionate about teaching
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2, flexWrap: 'wrap' }}>
              <Chip 
                label="✓ Background Checked" 
                color="primary" 
                variant="outlined" 
                sx={{ borderRadius: '20px' }}
              />
              <Chip 
                label="✓ Highly Rated" 
                color="primary" 
                variant="outlined" 
                sx={{ borderRadius: '20px' }}
              />
              <Chip 
                label="✓ Experienced" 
                color="primary" 
                variant="outlined" 
                sx={{ borderRadius: '20px' }}
              />
            </Box>
          </Box>
          
          <Grid container spacing={4}>
            {featuredTutors.map((tutor, index) => (
              <Grid item xs={12} md={4} key={tutor.id}>
                <Paper
                  sx={{
                    p: 3,
                    height: '100%',
                    borderRadius: '20px',
                    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    position: 'relative',
                    overflow: 'hidden',
                    background: 'white',
                    '&:hover': { 
                      transform: 'translateY(-12px)',
                      boxShadow: '0 25px 50px rgba(25, 118, 210, 0.15)',
                      '& .tutor-avatar': {
                        transform: 'scale(1.05)',
                      },
                      '& .tutor-name': {
                        color: 'primary.main',
                      },
                      '& .tutor-card-overlay': {
                        opacity: 1,
                      }
                    },
                  }}
                >
                  {/* Overlay for hover effect */}
                  <Box
                    className="tutor-card-overlay"
                    sx={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: 'linear-gradient(135deg, rgba(25, 118, 210, 0.05) 0%, rgba(156, 39, 176, 0.05) 100%)',
                      opacity: 0,
                      transition: 'opacity 0.3s ease',
                      pointerEvents: 'none',
                    }}
                  />
                  
                  <Box sx={{ position: 'relative', zIndex: 1 }}>
                    {/* Tutor Avatar */}
                    <Box sx={{ textAlign: 'center', mb: 3 }}>
                      <Box
                        className="tutor-avatar"
                        sx={{
                          position: 'relative',
                          display: 'inline-block',
                          transition: 'transform 0.3s ease',
                        }}
                      >
                        <Avatar
                          src={tutor.avatar}
                          alt={tutor.name}
                          sx={{ 
                            width: 100, 
                            height: 100, 
                            mx: 'auto',
                            border: '4px solid white',
                            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
                          }}
                        />
                        {tutor.verified && (
                          <Box
                            sx={{
                              position: 'absolute',
                              bottom: 5,
                              right: 5,
                              bgcolor: 'success.main',
                              borderRadius: '50%',
                              p: 0.5,
                              boxShadow: '0 2px 8px rgba(76, 175, 80, 0.4)',
                            }}
                          >
                            <CheckCircle sx={{ fontSize: 20, color: 'white' }} />
                          </Box>
                        )}
                      </Box>
                    </Box>

                    {/* Tutor Info */}
                    <Box sx={{ textAlign: 'center', mb: 3 }}>
                      <Typography
                        className="tutor-name"
                        variant="h6"
                        gutterBottom
                        sx={{ 
                          fontWeight: 'bold',
                          color: 'text.primary',
                          transition: 'color 0.3s ease',
                          mb: 1
                        }}
                      >
                        {tutor.name}
                      </Typography>
                      
                      <Box sx={{ display: 'flex', justifyContent: 'center', gap: 0.5, mb: 2 }}>
                        <Rating value={tutor.rating} precision={0.1} readOnly size="small" />
                        <Typography variant="caption" color="text.secondary">
                          ({tutor.reviews})
                        </Typography>
                      </Box>

                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, justifyContent: 'center', mb: 2 }}>
                        {tutor.subjects.map((subject, idx) => (
                          <Chip
                            key={idx}
                            label={subject}
                            size="small"
                            variant="outlined"
                            sx={{ 
                              fontSize: '0.75rem',
                              borderRadius: '12px',
                              borderColor: 'primary.main',
                              color: 'primary.main',
                            }}
                          />
                        ))}
                      </Box>

                      <Typography 
                        variant="body2" 
                        color="text.secondary"
                        sx={{ mb: 2 }}
                      >
                        📍 {tutor.location} • 🎓 {tutor.experience}
                      </Typography>

                      <Typography 
                        variant="h5" 
                        color="primary"
                        sx={{ 
                          fontWeight: 'bold',
                          mb: 3
                        }}
                      >
                        ${tutor.hourlyRate}/hour
                      </Typography>
                    </Box>

                    {/* Action Buttons */}
                    <Box sx={{ display: 'flex', gap: 1 }}>
                      <Button
                        variant="contained"
                        size="small"
                        fullWidth
                        onClick={() => navigate(`/tutor/${tutor.id}`)}
                        sx={{
                          borderRadius: '12px',
                          fontWeight: 'bold',
                          textTransform: 'none',
                          boxShadow: '0 4px 12px rgba(25, 118, 210, 0.2)',
                          '&:hover': {
                            boxShadow: '0 6px 16px rgba(25, 118, 210, 0.3)',
                          }
                        }}
                      >
                        View Profile
                      </Button>
                      <IconButton
                        size="small"
                        sx={{
                          border: '1px solid rgba(25, 118, 210, 0.3)',
                          '&:hover': {
                            bgcolor: 'primary.main',
                            color: 'white',
                          }
                        }}
                      >
                        <FavoriteBorder />
                      </IconButton>
                    </Box>
                  </Box>
                </Paper>
              </Grid>
            ))}
          </Grid>

          <Box sx={{ textAlign: 'center', mt: 6 }}>
            <Button
              variant="contained"
              size="large"
              endIcon={<ArrowForward />}
              onClick={() => navigate('/tutor-search')}
              sx={{
                px: 6,
                py: 2,
                borderRadius: '50px',
                fontWeight: 'bold',
                fontSize: '1.1rem',
                background: 'linear-gradient(135deg, #1976d2 0%, #9c27b0 100%)',
                boxShadow: '0 8px 24px rgba(25, 118, 210, 0.3)',
                '&:hover': {
                  boxShadow: '0 12px 32px rgba(25, 118, 210, 0.4)',
                  transform: 'translateY(-2px)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              Explore All Tutors
            </Button>
          </Box>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box
        sx={{
          background: 'linear-gradient(135deg, #1976d2 0%, #9c27b0 100%)',
          color: 'white',
          py: 12,
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Animated Background */}
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/svg%3E")`,
            opacity: 0.3,
          }}
        />
        
        <Container maxWidth="md" sx={{ position: 'relative', zIndex: 2 }}>
          <Typography
            variant="h3"
            gutterBottom
            sx={{ 
              fontWeight: 'bold', 
              mb: 3,
              fontSize: { xs: '2rem', md: '2.5rem' }
            }}
          >
            Ready to Transform Your Learning Journey?
          </Typography>
          <Typography
            variant="h6"
            sx={{ 
              mb: 5, 
              opacity: 0.95,
              fontSize: { xs: '1.1rem', md: '1.2rem' },
              maxWidth: 600,
              mx: 'auto',
              lineHeight: 1.6
            }}
          >
            Join thousands of students who have improved their grades and built confidence with TutorBridge's expert tutors
          </Typography>
          
          <Box sx={{ display: 'flex', gap: 3, justifyContent: 'center', flexWrap: 'wrap', mb: 4 }}>
            <Button
              variant="contained"
              size="large"
              sx={{ 
                bgcolor: 'white', 
                color: 'primary.main', 
                px: 5,
                py: 2,
                borderRadius: '50px',
                fontWeight: 'bold',
                fontSize: '1.1rem',
                boxShadow: '0 8px 24px rgba(255, 255, 255, 0.3)',
                '&:hover': { 
                  bgcolor: 'grey.100',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 12px 32px rgba(255, 255, 255, 0.4)',
                },
                transition: 'all 0.3s ease',
              }}
              onClick={() => navigate('/register')}
            >
              Start Learning Free
            </Button>
            <Button
              variant="outlined"
              size="large"
              sx={{ 
                borderColor: 'white', 
                color: 'white',
                px: 5,
                py: 2,
                borderRadius: '50px',
                fontWeight: 'bold',
                fontSize: '1.1rem',
                backdropFilter: 'blur(10px)',
                '&:hover': { 
                  bgcolor: 'rgba(255,255,255,0.1)',
                  transform: 'translateY(-2px)',
                  borderColor: 'white',
                },
                transition: 'all 0.3s ease',
              }}
              onClick={() => navigate('/tutor-search')}
            >
              Browse Tutors
            </Button>
          </Box>
          
          <Box sx={{ display: 'flex', justifyContent: 'center', gap: 4, flexWrap: 'wrap' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <CheckCircle sx={{ fontSize: 20 }} />
              <Typography variant="body2">No credit card required</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <CheckCircle sx={{ fontSize: 20 }} />
              <Typography variant="body2">Free trial session</Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <CheckCircle sx={{ fontSize: 20 }} />
              <Typography variant="body2">Cancel anytime</Typography>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default HomePage;
