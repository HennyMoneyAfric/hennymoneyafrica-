/**
 * Vercel Speed Insights initialization
 * This module initializes Speed Insights for tracking web vitals
 */
import { injectSpeedInsights } from '@vercel/speed-insights';

// Initialize Speed Insights
injectSpeedInsights({
  debug: false, // Set to true for development debugging
});
