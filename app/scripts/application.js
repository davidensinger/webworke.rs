/* global ga, responsiveFootnotes, smoothScroll */

// Smooth scroll
smoothScroll.init();

// Responsive footnotes
responsiveFootnotes.createAsides();

// Send pageview to Google Analytics
ga('send', 'pageview');
