import React, { useState, useEffect } from 'react';
import {
  Container,
  Paper,
  Typography,
  Box,
  Alert,
  CircularProgress,
  Button,
} from '@mui/material';
import {
  CheckCircle,
  Error,
  Email,
  Refresh,
} from '@mui/icons-material';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { authService } from '../../services/authService';

const VerifyEmailPage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const token = searchParams.get('token');
  
  const [loading, setLoading] = useState(true);
  const [verified, setVerified] = useState(false);
  const [error, setError] = useState('');
  const [resending, setResending] = useState(false);

  useEffect(() => {
    const verifyEmail = async () => {
      if (!token) {
        setError('Verification token is missing');
        setLoading(false);
        return;
      }

      try {
        await authService.verifyEmail(token);
        setVerified(true);
      } catch (err) {
        setError(err.response?.data?.message || 'Email verification failed');
      } finally {
        setLoading(false);
      }
    };

    verifyEmail();
  }, [token]);

  const handleResendVerification = async () => {
    setResending(true);
    try {
      // This would need to be implemented in the backend
      // For now, we'll just show a message
      setError('Please contact support to resend the verification email');
    } catch (err) {
      setError('Failed to resend verification email');
    } finally {
      setResending(false);
    }
  };

  if (loading) {
    return (
      <Container component="main" maxWidth="sm">
        <Box
          sx={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            py: 4,
          }}
        >
          <Paper
            elevation={3}
            sx={{
              p: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
            }}
          >
            <CircularProgress size={64} sx={{ mb: 3, color: 'primary.main' }} />
            <Typography variant="h5" sx={{ mb: 2 }}>
              Verifying your email...
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Please wait while we verify your email address
            </Typography>
          </Paper>
        </Box>
      </Container>
    );
  }

  if (verified) {
    return (
      <Container component="main" maxWidth="sm">
        <Box
          sx={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            py: 4,
          }}
        >
          <Paper
            elevation={3}
            sx={{
              p: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
            }}
          >
            <Box sx={{ mb: 3 }}>
              <CheckCircle sx={{ fontSize: 64, color: 'success.main' }} />
            </Box>
            
            <Typography
              component="h1"
              variant="h4"
              gutterBottom
              sx={{ fontWeight: 'bold', color: 'success.main' }}
            >
              Email Verified!
            </Typography>
            
            <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.6 }}>
              Your email address has been successfully verified.
              You can now log in to your account.
            </Typography>
            
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', justifyContent: 'center' }}>
              <Button
                variant="contained"
                size="large"
                onClick={() => navigate('/login')}
              >
                Continue to Login
              </Button>
            </Box>
          </Paper>
        </Box>
      </Container>
    );
  }

  return (
    <Container component="main" maxWidth="sm">
      <Box
        sx={{
          minHeight: '100vh',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          py: 4,
        }}
      >
        <Paper
          elevation={3}
          sx={{
            p: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
          }}
        >
          <Box sx={{ mb: 3 }}>
            <Error sx={{ fontSize: 64, color: 'error.main' }} />
          </Box>
          
          <Typography
            component="h1"
            variant="h4"
            gutterBottom
            sx={{ fontWeight: 'bold', color: 'error.main' }}
          >
            Verification Failed
          </Typography>
          
          {error && (
            <Alert severity="error" sx={{ width: '100%', mb: 3 }}>
              {error}
            </Alert>
          )}
          
          <Typography variant="body1" sx={{ mb: 3, lineHeight: 1.6 }}>
            We couldn't verify your email address. The verification link may have expired
            or is invalid.
          </Typography>
          
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: '100%' }}>
            <Button
              variant="contained"
              startIcon={resending ? <CircularProgress size={20} /> : <Refresh />}
              onClick={handleResendVerification}
              disabled={resending}
            >
              {resending ? 'Resending...' : 'Resend Verification Email'}
            </Button>
            
            <Button
              variant="outlined"
              onClick={() => navigate('/login')}
            >
              Back to Login
            </Button>
          </Box>
          
          <Box sx={{ mt: 3, p: 2, bgcolor: 'grey.50', borderRadius: 1 }}>
            <Typography variant="body2" color="text.secondary">
              <strong>Need help?</strong> Contact our support team at{' '}
              <Typography component="span" color="primary">
                support@tutorbridge.com
              </Typography>
            </Typography>
          </Box>
        </Paper>
      </Box>
    </Container>
  );
};

export default VerifyEmailPage;
