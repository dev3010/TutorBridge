import React, { useState, useEffect } from 'react';
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
  TextField,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Chip,
  Pagination,
  Slider,
  InputAdornment,
  Search,
  FilterList,
  Sort,
  CircularProgress,
  Paper,
  Avatar,
  Rating,
  IconButton,
  Tooltip,
} from '@mui/material';
import {
  Search as SearchIcon,
  LocationOn,
  School,
  Star,
  AccessTime,
  FilterAlt,
  Sort as SortIcon,
  Favorite,
  FavoriteBorder,
  Verified,
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';

const TutorSearchPage = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  
  const [tutors, setTutors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filters, setFilters] = useState({
    subject: searchParams.get('subject') || '',
    location: searchParams.get('location') || '',
    priceRange: searchParams.get('priceRange') ? JSON.parse(searchParams.get('priceRange')) : [0, 200],
    rating: searchParams.get('rating') || 0,
    availability: searchParams.get('availability') || '',
    search: searchParams.get('q') || '',
  });
  const [sortBy, setSortBy] = useState('rating');
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [showFilters, setShowFilters] = useState(false);
  const [favorites, setFavorites] = useState([]);

  const subjects = [
    'Mathematics', 'Physics', 'Chemistry', 'Biology', 'English', 
    'History', 'Geography', 'Computer Science', 'Programming',
    'Music', 'Art', 'Languages', 'Business', 'Economics'
  ];

  const locations = [
    'New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix',
    'Philadelphia', 'San Antonio', 'San Diego', 'Dallas', 'San Jose'
  ];

  useEffect(() => {
    fetchTutors();
  }, [filters, sortBy, page]);

  const fetchTutors = async () => {
    setLoading(true);
    try {
      // Mock API call - replace with actual API
      const mockTutors = [
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
          availability: ['Monday', 'Wednesday', 'Friday'],
          education: 'PhD in Mathematics, MIT',
          languages: ['English', 'Spanish'],
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
          availability: ['Tuesday', 'Thursday', 'Saturday'],
          education: 'PhD in Physics, Stanford',
          languages: ['English', 'Mandarin'],
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
          availability: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'],
          education: 'MA in English Literature, Harvard',
          languages: ['English', 'French'],
        },
        {
          id: 4,
          name: 'James Wilson',
          subjects: ['Computer Science', 'Programming'],
          rating: 4.7,
          reviews: 89,
          hourlyRate: 55,
          avatar: '/avatar4.jpg',
          experience: '7 years',
          location: 'San Francisco',
          verified: true,
          availability: ['Weekend'],
          education: 'MS in Computer Science, Berkeley',
          languages: ['English'],
        },
        {
          id: 5,
          name: 'Maria Garcia',
          subjects: ['Spanish', 'French'],
          rating: 4.8,
          reviews: 112,
          hourlyRate: 35,
          avatar: '/avatar5.jpg',
          experience: '5 years',
          location: 'Miami',
          verified: true,
          availability: ['Monday', 'Wednesday', 'Friday'],
          education: 'MA in Linguistics, University of Miami',
          languages: ['English', 'Spanish', 'French'],
        },
        {
          id: 6,
          name: 'Robert Taylor',
          subjects: ['History', 'Geography'],
          rating: 4.6,
          reviews: 73,
          hourlyRate: 38,
          avatar: '/avatar6.jpg',
          experience: '9 years',
          location: 'Boston',
          verified: true,
          availability: ['Tuesday', 'Thursday', 'Saturday'],
          education: 'PhD in History, Yale',
          languages: ['English'],
        },
      ];

      // Apply filters and sorting
      let filteredTutors = mockTutors.filter(tutor => {
        if (filters.search && !tutor.name.toLowerCase().includes(filters.search.toLowerCase()) &&
            !tutor.subjects.some(s => s.toLowerCase().includes(filters.search.toLowerCase()))) {
          return false;
        }
        if (filters.subject && !tutor.subjects.includes(filters.subject)) {
          return false;
        }
        if (filters.location && tutor.location !== filters.location) {
          return false;
        }
        if (tutor.hourlyRate < filters.priceRange[0] || tutor.hourlyRate > filters.priceRange[1]) {
          return false;
        }
        if (filters.rating > 0 && tutor.rating < filters.rating) {
          return false;
        }
        return true;
      });

      // Sort tutors
      filteredTutors.sort((a, b) => {
        switch (sortBy) {
          case 'rating':
            return b.rating - a.rating;
          case 'price_low':
            return a.hourlyRate - b.hourlyRate;
          case 'price_high':
            return b.hourlyRate - a.hourlyRate;
          case 'reviews':
            return b.reviews - a.reviews;
          default:
            return 0;
        }
      });

      setTutors(filteredTutors);
      setTotalPages(Math.ceil(filteredTutors.length / 6));
    } catch (error) {
      console.error('Error fetching tutors:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleFilterChange = (key, value) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    setPage(1);
    
    // Update URL params
    const params = new URLSearchParams();
    Object.entries(newFilters).forEach(([k, v]) => {
      if (v && (typeof v !== 'object' || v.length > 0)) {
        params.set(k, typeof v === 'object' ? JSON.stringify(v) : v);
      }
    });
    setSearchParams(params);
  };

  const handleSortChange = (event) => {
    setSortBy(event.target.value);
  };

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const toggleFavorite = (tutorId) => {
    setFavorites(prev => 
      prev.includes(tutorId) 
        ? prev.filter(id => id !== tutorId)
        : [...prev, tutorId]
    );
  };

  const handleTutorClick = (tutorId) => {
    navigate(`/tutor/${tutorId}`);
  };

  const clearFilters = () => {
    setFilters({
      subject: '',
      location: '',
      priceRange: [0, 200],
      rating: 0,
      availability: '',
      search: '',
    });
    setSearchParams({});
  };

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
        Find Your Perfect Tutor
      </Typography>
      
      {/* Search Bar */}
      <Paper sx={{ p: 3, mb: 4 }}>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} md={6}>
            <TextField
              fullWidth
              placeholder="Search by subject, tutor name, or keywords..."
              value={filters.search}
              onChange={(e) => handleFilterChange('search', e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          </Grid>
          <Grid item xs={12} md={3}>
            <FormControl fullWidth>
              <InputLabel>Sort By</InputLabel>
              <Select
                value={sortBy}
                onChange={handleSortChange}
                label="Sort By"
              >
                <MenuItem value="rating">Highest Rated</MenuItem>
                <MenuItem value="price_low">Lowest Price</MenuItem>
                <MenuItem value="price_high">Highest Price</MenuItem>
                <MenuItem value="reviews">Most Reviews</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} md={3}>
            <Button
              fullWidth
              variant="outlined"
              startIcon={<FilterAlt />}
              onClick={() => setShowFilters(!showFilters)}
              sx={{ height: 56 }}
            >
              {showFilters ? 'Hide Filters' : 'Show Filters'}
            </Button>
          </Grid>
        </Grid>
      </Paper>

      <Grid container spacing={4}>
        {/* Filters Sidebar */}
        {showFilters && (
          <Grid item xs={12} md={3}>
            <Paper sx={{ p: 3 }}>
              <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                Filters
              </Typography>
              
              <FormControl fullWidth sx={{ mb: 3 }}>
                <InputLabel>Subject</InputLabel>
                <Select
                  value={filters.subject}
                  onChange={(e) => handleFilterChange('subject', e.target.value)}
                  label="Subject"
                >
                  <MenuItem value="">All Subjects</MenuItem>
                  {subjects.map((subject) => (
                    <MenuItem key={subject} value={subject}>
                      {subject}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <FormControl fullWidth sx={{ mb: 3 }}>
                <InputLabel>Location</InputLabel>
                <Select
                  value={filters.location}
                  onChange={(e) => handleFilterChange('location', e.target.value)}
                  label="Location"
                >
                  <MenuItem value="">All Locations</MenuItem>
                  {locations.map((location) => (
                    <MenuItem key={location} value={location}>
                      {location}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              <Typography variant="subtitle2" gutterBottom>
                Price Range: ${filters.priceRange[0]} - ${filters.priceRange[1]}
              </Typography>
              <Slider
                value={filters.priceRange}
                onChange={(e, newValue) => handleFilterChange('priceRange', newValue)}
                min={0}
                max={200}
                step={10}
                marks={[
                  { value: 0, label: '$0' },
                  { value: 200, label: '$200' }
                ]}
                sx={{ mb: 3 }}
              />

              <FormControl fullWidth sx={{ mb: 3 }}>
                <InputLabel>Minimum Rating</InputLabel>
                <Select
                  value={filters.rating}
                  onChange={(e) => handleFilterChange('rating', e.target.value)}
                  label="Minimum Rating"
                >
                  <MenuItem value={0}>Any Rating</MenuItem>
                  <MenuItem value={3}>3+ Stars</MenuItem>
                  <MenuItem value={4}>4+ Stars</MenuItem>
                  <MenuItem value={4.5}>4.5+ Stars</MenuItem>
                </Select>
              </FormControl>

              <Button
                variant="outlined"
                fullWidth
                onClick={clearFilters}
                sx={{ mb: 2 }}
              >
                Clear All Filters
              </Button>
            </Paper>
          </Grid>
        )}

        {/* Tutor Results */}
        <Grid item xs={12} md={showFilters ? 9 : 12}>
          {loading ? (
            <Box sx={{ display: 'flex', justifyContent: 'center', py: 8 }}>
              <CircularProgress size={64} />
            </Box>
          ) : tutors.length === 0 ? (
            <Paper sx={{ p: 4, textAlign: 'center' }}>
              <Typography variant="h6" color="text.secondary" gutterBottom>
                No tutors found matching your criteria
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 3 }}>
                Try adjusting your filters or search terms
              </Typography>
              <Button variant="contained" onClick={clearFilters}>
                Clear All Filters
              </Button>
            </Paper>
          ) : (
            <>
              <Box sx={{ mb: 3, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant="body1" color="text.secondary">
                  Found {tutors.length} tutor{tutors.length !== 1 ? 's' : ''}
                </Typography>
                <Box sx={{ display: 'flex', gap: 1 }}>
                  <Chip
                    label={`${filters.subject || 'All Subjects'}`}
                    onDelete={() => handleFilterChange('subject', '')}
                    size="small"
                  />
                  <Chip
                    label={`${filters.location || 'All Locations'}`}
                    onDelete={() => handleFilterChange('location', '')}
                    size="small"
                  />
                  <Chip
                    label={`$${filters.priceRange[0]} - $${filters.priceRange[1]}`}
                    onDelete={() => handleFilterChange('priceRange', [0, 200])}
                    size="small"
                  />
                </Box>
              </Box>

              <Grid container spacing={3}>
                {tutors
                  .slice((page - 1) * 6, page * 6)
                  .map((tutor) => (
                    <Grid item xs={12} sm={6} md={4} key={tutor.id}>
                      <Paper
                        sx={{
                          p: 3,
                          height: '100%',
                          cursor: 'pointer',
                          transition: 'transform 0.2s, box-shadow 0.2s',
                          '&:hover': { 
                            transform: 'translateY(-4px)',
                            boxShadow: 4
                          },
                        }}
                        onClick={() => handleTutorClick(tutor.id)}
                      >
                        <Box sx={{ textAlign: 'center', mb: 2 }}>
                          <Avatar
                            src={tutor.avatar}
                            alt={tutor.name}
                            sx={{ width: 80, height: 80, mx: 'auto', mb: 1 }}
                          />
                          {tutor.verified && (
                            <Verified sx={{ fontSize: 20, color: 'success.main' }} />
                          )}
                        </Box>
                        
                        <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', textAlign: 'center' }}>
                          {tutor.name}
                        </Typography>
                        
                        <Box sx={{ display: 'flex', justifyContent: 'center', gap: 0.5, mb: 2 }}>
                          <Rating value={tutor.rating} precision={0.1} readOnly size="small" />
                          <Typography variant="caption" color="text.secondary">
                            ({tutor.reviews})
                          </Typography>
                        </Box>

                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mb: 2, justifyContent: 'center' }}>
                          {tutor.subjects.slice(0, 2).map((subject, idx) => (
                            <Chip
                              key={idx}
                              label={subject}
                              size="small"
                              variant="outlined"
                              sx={{ fontSize: '0.7rem' }}
                            />
                          ))}
                        </Box>

                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <Typography variant="h6" color="primary">
                            ${tutor.hourlyRate}/hr
                          </Typography>
                          <IconButton
                            size="small"
                            onClick={(e) => {
                              e.stopPropagation();
                              toggleFavorite(tutor.id);
                            }}
                          >
                            {favorites.includes(tutor.id) ? (
                              <Favorite color="error" />
                            ) : (
                              <FavoriteBorder />
                            )}
                          </IconButton>
                        </Box>
                      </Paper>
                    </Grid>
                  ))}
              </Grid>

              {totalPages > 1 && (
                <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
                  <Pagination
                    count={totalPages}
                    page={page}
                    onChange={handlePageChange}
                    color="primary"
                    size="large"
                  />
                </Box>
              )}
            </>
          )}
        </Grid>
      </Grid>
    </Container>
  );
};

export default TutorSearchPage;
