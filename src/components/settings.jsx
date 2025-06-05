import React, { useState } from 'react';
import { 
  Container, 
  Typography, 
  Paper, 
  Grid, 
  Switch, 
  FormControlLabel, 
  TextField, 
  Button, 
  Box,
  Card,
  CardContent,
  Alert,
  Snackbar
} from '@mui/material';
import SettingsIcon from '@mui/icons-material/Settings';
import SecurityIcon from '@mui/icons-material/Security';
import NotificationsIcon from '@mui/icons-material/Notifications';
import LanguageIcon from '@mui/icons-material/Language';
import StorageIcon from '@mui/icons-material/Storage';
import { styled } from '@mui/material/styles';

// Custom styled components
const PageHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginBottom: theme.spacing(4),
  '& svg': {
    fontSize: 40,
    marginRight: theme.spacing(2),
    color: '#1976d2',
  }
}));

const SettingCard = styled(Card)(({ theme }) => ({
  marginBottom: theme.spacing(3),
  boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
  transition: 'transform 0.2s ease-in-out',
  '&:hover': {
    transform: 'translateY(-5px)',
  }
}));

const SettingSection = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  marginBottom: theme.spacing(2),
  '& svg': {
    fontSize: 24,
    marginRight: theme.spacing(2),
    color: '#1976d2',
  }
}));

const Settings = () => {
  // State for various settings
  const [systemSettings, setSystemSettings] = useState({
    enableNotifications: true,
    darkMode: false,
    autoBackup: true,
    language: 'he',
    backupFrequency: 'daily',
    logRetention: 30,
  });

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success'
  });

  // Handle settings changes
  const handleSettingChange = (setting) => (event) => {
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
    setSystemSettings({
      ...systemSettings,
      [setting]: value
    });
  };

  // Save settings
  const handleSaveSettings = () => {
    // Here you would typically save to your backend
    setSnackbar({
      open: true,
      message: 'ההגדרות נשמרו בהצלחה',
      severity: 'success'
    });
  };

  // Reset settings
  const handleResetSettings = () => {
    setSystemSettings({
      enableNotifications: true,
      darkMode: false,
      autoBackup: true,
      language: 'he',
      backupFrequency: 'daily',
      logRetention: 30,
    });
    setSnackbar({
      open: true,
      message: 'ההגדרות אופסו להגדרות ברירת המחדל',
      severity: 'info'
    });
  };

  const handleCloseSnackbar = () => {
    setSnackbar({
      ...snackbar,
      open: false
    });
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <PageHeader>
        <SettingsIcon />
        <Typography variant="h4" component="h1" fontWeight="bold">
          הגדרות מערכת
        </Typography>
      </PageHeader>

      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <SettingCard>
            <CardContent>
              <SettingSection>
                <NotificationsIcon />
                <Typography variant="h6" component="h2" fontWeight="bold">
                  התראות והודעות
                </Typography>
              </SettingSection>
              <FormControlLabel
                control={
                  <Switch
                    checked={systemSettings.enableNotifications}
                    onChange={handleSettingChange('enableNotifications')}
                    color="primary"
                  />
                }
                label="אפשר התראות מערכת"
              />
              <Box mt={2}>
                <Typography variant="body2" color="textSecondary">
                  התראות מערכת יוצגו למשתמשים בזמן אמת עבור אירועים חשובים כגון הזמנות חדשות, עדכוני מלאי ועוד.
                </Typography>
              </Box>
            </CardContent>
          </SettingCard>

          <SettingCard>
            <CardContent>
              <SettingSection>
                <SecurityIcon />
                <Typography variant="h6" component="h2" fontWeight="bold">
                  אבטחה
                </Typography>
              </SettingSection>
              <TextField
                select
                fullWidth
                label="תקופת שמירת לוגים (ימים)"
                value={systemSettings.logRetention}
                onChange={handleSettingChange('logRetention')}
                SelectProps={{
                  native: true,
                }}
                margin="normal"
              >
                <option value={7}>7 ימים</option>
                <option value={30}>30 ימים</option>
                <option value={90}>90 ימים</option>
                <option value={365}>שנה</option>
              </TextField>
              <Box mt={2}>
                <Typography variant="body2" color="textSecondary">
                  הגדרות אבטחה משפיעות על אופן שמירת המידע ומדיניות הגישה למערכת.
                </Typography>
              </Box>
            </CardContent>
          </SettingCard>
        </Grid>

        <Grid item xs={12} md={6}>
          <SettingCard>
            <CardContent>
              <SettingSection>
                <StorageIcon />
                <Typography variant="h6" component="h2" fontWeight="bold">
                  גיבוי ואחסון
                </Typography>
              </SettingSection>
              <FormControlLabel
                control={
                  <Switch
                    checked={systemSettings.autoBackup}
                    onChange={handleSettingChange('autoBackup')}
                    color="primary"
                  />
                }
                label="גיבוי אוטומטי"
              />
              <TextField
                select
                fullWidth
                label="תדירות גיבוי"
                value={systemSettings.backupFrequency}
                onChange={handleSettingChange('backupFrequency')}
                SelectProps={{
                  native: true,
                }}
                margin="normal"
                disabled={!systemSettings.autoBackup}
              >
                <option value="hourly">כל שעה</option>
                <option value="daily">יומי</option>
                <option value="weekly">שבועי</option>
                <option value="monthly">חודשי</option>
              </TextField>
            </CardContent>
          </SettingCard>

          <SettingCard>
            <CardContent>
              <SettingSection>
                <LanguageIcon />
                <Typography variant="h6" component="h2" fontWeight="bold">
                  שפה ותצוגה
                </Typography>
              </SettingSection>
              <TextField
                select
                fullWidth
                label="שפת ממשק"
                value={systemSettings.language}
                onChange={handleSettingChange('language')}
                SelectProps={{
                  native: true,
                }}
                margin="normal"
              >
                <option value="he">עברית</option>
                <option value="en">אנגלית</option>
                <option value="ar">ערבית</option>
                <option value="ru">רוסית</option>
              </TextField>
              <FormControlLabel
                control={
                  <Switch
                    checked={systemSettings.darkMode}
                    onChange={handleSettingChange('darkMode')}
                    color="primary"
                  />
                }
                label="מצב כהה"
              />
            </CardContent>
          </SettingCard>
        </Grid>

        <Grid item xs={12}>
          <Paper sx={{ p: 3, display: 'flex', justifyContent: 'space-between' }}>
            <Button 
              variant="outlined" 
              color="secondary" 
              onClick={handleResetSettings}
            >
              איפוס להגדרות ברירת מחדל
            </Button>
            <Button 
              variant="contained" 
              color="primary" 
              onClick={handleSaveSettings}
            >
              שמור הגדרות
            </Button>
          </Paper>
        </Grid>
      </Grid>

      <Snackbar 
        open={snackbar.open} 
        autoHideDuration={6000} 
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert onClose={handleCloseSnackbar} severity={snackbar.severity} sx={{ width: '100%' }}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Container>
  );
};

export default Settings;
