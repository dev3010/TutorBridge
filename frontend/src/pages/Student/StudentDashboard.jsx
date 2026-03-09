import React, { useState, useEffect } from 'react';
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
  Paper,
  Button,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Avatar,
  Chip,
  LinearProgress,
  Alert,
  IconButton,
  Menu,
  MenuItem,
  Divider,
} from '@mui/material';
import {
  School,
  CalendarToday,
  TrendingUp,
  Star,
  AccessTime,
  LocationOn,
  Notifications,
  Search,
  Book,
  Payment,
  Favorite,
  Message,
  VideoCall,
  MoreVert,
  ArrowUpward,
  ArrowDownward,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const StudentDashboard = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({});
  const [upcomingSessions, setUpcomingSessions] = useState([]);
  const [recentActivity, setRecentActivity] = useState([]);
  const [favoriteTutors, setFavoriteTutors] = useState([]);
  const [notifications, setNotifications] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      // Mock API calls - replace with actual API
      const mockStats = {
        totalSessions: 24,
        totalHours: 48,
        averageGrade: 'A-',
        favoriteSubjects: ['Mathematics', 'Physics'],
        monthlySpending: 540,
      };

      const mockSessions = [
        {
          id: 1,
          tutorName: 'Dr. Sarah Johnson',
          subject: 'Calculus',
          date: '2024-01-20',
          time: '2:00 PM',
          duration: '1 hour',
          status: 'confirmed',
          avatar: '/avatar1.jpg',
        },
        {
          id: 2,
          tutorName: 'Prof. Michael Chen',
          subject: 'Physics',
          date: '2024-01-22',
          time: '3:00 PM',
          duration: '1 hour',
          status: 'pending',
          avatar: '/avatar2.jpg',
        },
      ];

      const mockActivity = [
        {
          id: 1,
          type: 'session_completed',
          message: 'Completed Calculus session with Dr. Sarah Johnson',
          time: '2 hours ago',
          icon: <School color="success" />,
        },
        {
          id: 2,
          type: 'payment_made',
          message: 'Payment of $45 sent to Dr. Sarah Johnson',
          time: '1 day ago',
          icon: <Payment color="primary" />,
        },
        {
          id: 3,
          type: 'review_left',
          message: 'Left 5-star review for Prof. Michael Chen',
          time: '2 days ago',
          icon: <Star color="warning" />,
        },
      ];

      const mockFavorites = [
        {
          id: 1,
          name: 'Dr. Sarah Johnson',
          subject: 'Mathematics',
          rating: 4.9,
          hourlyRate: 45,
          avatar: '/avatar1.jpg',
        },
        {
          id: 2,
          name: 'Prof. Michael Chen',
          subject: 'Physics',
          rating: 4.8,
          hourlyRate: 50,
          avatar: '/avatar2.jpg',
        },
      ];

      const mockNotifications = [
        {
          id: 1,
          message: 'Your session with Dr. Sarah Johnson is confirmed',
          time: '30 minutes ago',
          read: false,
        },
        {
          id: 2,
          message: 'Prof. Michael Chen accepted your booking request',
          time: '2 hours ago',
          read: false,
        },
        {
          id: 3,
          message: 'New Mathematics tutor available in your area',
          time: '1 day ago',
          read: true,
        },
      ];

      setStats(mockStats);
      setUpcomingSessions(mockSessions);
      setRecentActivity(mockActivity);
      setFavoriteTutors(mockFavorites);
      setNotifications(mockNotifications);
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleSessionAction = (sessionId, action) => {
    console.log(`Session ${sessionId}: ${action}`);
  };

  const handleNotificationClick = (notificationId) => {
    // Mark notification as read
    setNotifications(prev =>
      prev.map(notif =>
        notif.id === notificationId ? { ...notif, read: true } : notif
      )
    );
  };

  const quickActions = [
    {
      title: 'Find Tutor',
      icon: <Search />,
      color: 'primary',
      action: () => navigate('/student/tutor-search'),
    },
    {
      title: 'Book Session',
      icon: <CalendarToday />,
      color: 'success',
      action: () => navigate('/student/book'),
    },
    {
      title: 'View Schedule',
      icon: <AccessTime />,
      color: 'info',
      action: () => navigate('/student/bookings'),
    },
    {
      title: 'Make Payment',
      icon: <Payment />,
      color: 'warning',
      action: () => navigate('/student/payments'),
    },
  ];

  if (loading) {
    return (
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <LinearProgress />
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      {/* Welcome Header */}
      <Box sx={{ mb: 4, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Box>
          <Typography variant="h4" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
            Welcome back, {user?.firstName || 'Student'}!
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Here's what's happening with your learning journey
          </Typography>
        </Box>
        <IconButton onClick={handleMenuClick}>
          <MoreVert />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          <MenuItem onClick={handleMenuClose}>Profile Settings</MenuItem>
          <MenuItem onClick={handleMenuClose}>Help & Support</MenuItem>
          <MenuItem onClick={handleMenuClose}>Logout</MenuItem>
        </Menu>
      </Box>

      {/* Stats Overview */}
      <Grid container spacing={3} sx={{ mb: 4 }}>
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ bgcolor: 'primary.main', color: 'white' }}>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <School sx={{ mr: 1 }} />
                <Typography variant="h6">Total Sessions</Typography>
              </Box>
              <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
                {stats.totalSessions}
              </Typography>
              <Typography variant="body2">
                <ArrowUpward sx={{ fontSize: 14, verticalAlign: 'middle' }} />
                12% from last month
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ bgcolor: 'success.main', color: 'white' }}>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <AccessTime sx={{ mr: 1 }} />
                <Typography variant="h6">Learning Hours</Typography>
              </Box>
              <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
                {stats.totalHours}
              </Typography>
              <Typography variant="body2">
                <ArrowUpward sx={{ fontSize: 14, verticalAlign: 'middle' }} />
                8 hours this month
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ bgcolor: 'warning.main', color: 'white' }}>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <Star sx={{ mr: 1 }} />
                <Typography variant="h6">Average Grade</Typography>
              </Box>
              <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
                {stats.averageGrade}
              </Typography>
              <Typography variant="body2">
                <ArrowUpward sx={{ fontSize: 14, verticalAlign: 'middle' }} />
                Improved by 0.3 points
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={{ bgcolor: 'info.main', color: 'white' }}>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                <Payment sx={{ mr: 1 }} />
                <Typography variant="h6">Monthly Spend</Typography>
              </Box>
              <Typography variant="h4" sx={{ fontWeight: 'bold' }}>
                ${stats.monthlySpending}
              </Typography>
              <Typography variant="body2">
                <ArrowDownward sx={{ fontSize: 14, verticalAlign: 'middle' }} />
                5% from last month
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Quick Actions */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h5" gutterBottom sx={{ fontWeight: 'bold' }}>
          Quick Actions
        </Typography>
        <Grid container spacing={2}>
          {quickActions.map((action, index) => (
            <Grid item xs={6} sm={3} key={index}>
              <Card
                sx={{
                  cursor: 'pointer',
                  transition: 'transform 0.2s',
                  '&:hover': { transform: 'translateY(-2px)' },
                }}
                onClick={action.action}
              >
                <CardContent sx={{ textAlign: 'center', py: 2 }}>
                  <Box sx={{ color: `${action.color}.main`, mb: 1 }}>
                    {action.icon}
                  </Box>
                  <Typography variant="body2" sx={{ fontWeight: 'bold' }}>
                    {action.title}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Grid container spacing={4}>
        {/* Upcoming Sessions */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                Upcoming Sessions
              </Typography>
              <Button
                variant="text"
                size="small"
                onClick={() => navigate('/student/bookings')}
              >
                View All
              </Button>
            </Box>
            <List>
              {upcomingSessions.map((session) => (
                <React.Fragment key={session.id}>
                  <ListItem alignItems="flex-start">
                    <ListItemIcon>
                      <Avatar src={session.avatar} sx={{ width: 48, height: 48 }}>
                        {session.tutorName[0]}
                      </Avatar>
                    </ListItemIcon>
                    <ListItemText
                      primary={
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                            {session.tutorName}
                          </Typography>
                          <Chip
                            label={session.status}
                            size="small"
                            color={session.status === 'confirmed' ? 'success' : 'warning'}
                          />
                        </Box>
                      }
                      secondary={
                        <Box>
                          <Typography variant="body2" color="text.secondary">
                            {session.subject} • {session.duration}
                          </Typography>
                          <Typography variant="caption" color="text.secondary">
                            <CalendarToday sx={{ fontSize: 14, mr: 0.5, verticalAlign: 'middle' }} />
                            {session.date} at {session.time}
                          </Typography>
                        </Box>
                      }
                    />
                    <IconButton
                      size="small"
                      onClick={() => handleSessionAction(session.id, 'join')}
                    >
                      <VideoCall color="primary" />
                    </IconButton>
                  </ListItem>
                  <Divider variant="inset" component="li" />
                </React.Fragment>
              ))}
            </List>
          </Paper>
        </Grid>

        {/* Recent Activity */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3 }}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
              Recent Activity
            </Typography>
            <List>
              {recentActivity.map((activity) => (
                <React.Fragment key={activity.id}>
                  <ListItem alignItems="flex-start">
                    <ListItemIcon>
                      {activity.icon}
                    </ListItemIcon>
                    <ListItemText
                      primary={activity.message}
                      secondary={activity.time}
                    />
                  </ListItem>
                  <Divider variant="inset" component="li" />
                </React.Fragment>
              ))}
            </List>
          </Paper>
        </Grid>

        {/* Favorite Tutors */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                Favorite Tutors
              </Typography>
              <Button
                variant="text"
                size="small"
                onClick={() => navigate('/student/favorites')}
              >
                View All
              </Button>
            </Box>
            <List>
              {favoriteTutors.map((tutor) => (
                <React.Fragment key={tutor.id}>
                  <ListItem alignItems="flex-start">
                    <ListItemIcon>
                      <Avatar src={tutor.avatar} sx={{ width: 48, height: 48 }}>
                        {tutor.name[0]}
                      </Avatar>
                    </ListItemIcon>
                    <ListItemText
                      primary={
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                          <Typography variant="subtitle1" sx={{ fontWeight: 'bold' }}>
                            {tutor.name}
                          </Typography>
                          <Star sx={{ fontSize: 16, color: 'warning.main' }} />
                          <Typography variant="caption">{tutor.rating}</Typography>
                        </Box>
                      }
                      secondary={
                        <Box>
                          <Typography variant="body2" color="text.secondary">
                            {tutor.subject}
                          </Typography>
                          <Typography variant="caption" color="primary">
                            ${tutor.hourlyRate}/hour
                          </Typography>
                        </Box>
                      }
                    />
                    <IconButton
                      size="small"
                      onClick={() => navigate(`/student/tutor/${tutor.id}`)}
                    >
                      <Message color="primary" />
                    </IconButton>
                  </ListItem>
                  <Divider variant="inset" component="li" />
                </React.Fragment>
              ))}
            </List>
          </Paper>
        </Grid>

        {/* Notifications */}
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3 }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
              <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                Notifications
              </Typography>
              <Button
                variant="text"
                size="small"
                onClick={() => navigate('/student/notifications')}
              >
                View All
              </Button>
            </Box>
            <List>
              {notifications.map((notification) => (
                <React.Fragment key={notification.id}>
                  <ListItem
                    alignItems="flex-start"
                    sx={{
                      bgcolor: !notification.read ? 'action.hover' : 'transparent',
                      borderRadius: 1,
                      cursor: 'pointer',
                    }}
                    onClick={() => handleNotificationClick(notification.id)}
                  >
                    <ListItemIcon>
                      <Notifications color={!notification.read ? 'primary' : 'action'} />
                    </ListItemIcon>
                    <ListItemText
                      primary={
                        <Typography
                          variant="body2"
                          sx={{ fontWeight: !notification.read ? 'bold' : 'normal' }}
                        >
                          {notification.message}
                        </Typography>
                      }
                      secondary={notification.time}
                    />
                  </ListItem>
                  <Divider variant="inset" component="li" />
                </React.Fragment>
              ))}
            </List>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default StudentDashboard;
