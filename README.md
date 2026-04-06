# Portfolio - Vanilla HTML/CSS/JS Version

This is your portfolio website built with vanilla HTML, CSS, and JavaScript.

## Project Structure

```
Portfolio/
├── public/
│   ├── index.html
│   ├── script.js
│   ├── profile.jpg
│   ├── Project1.jpg
│   ├── project2.jpg
│   ├── project3.jpg
│   └── project4.jpg
├── styles.css
└── README.md
```

## Features

### Navigation
- Fixed navigation bar with smooth scrolling
- Responsive hamburger menu for mobile devices
- Active section highlighting

### Hero Section
- Main landing section with gradient text
- Call-to-action buttons for navigation
- Animated scroll indicator

### About Section
- Profile image
- Bio/description
- Tabbed interface for Skills, Experience, and Education
- Animated skill bars on scroll

### Services Section
- 3-column grid layout (responsive)
- Service cards with icons and descriptions

### Portfolio
- 4-item portfolio grid
- Hover overlay effects
- Project details and link

### Contact
- Contact information (email, phone)
- Social media links
- Contact form with form validation

## How to Use

1. **Open the project**:
   - Open `public/index.html` in your web browser
   - Or serve the files using a local web server

2. **For local development with a server**:
   ```bash
   # Using Python (if installed)
   python -m http.server 8000

   # Using Node.js (if installed)
   npx serve public

   # Or use any static file server
   ```

3. **Access the portfolio**:
   - Open `http://localhost:8000` (or your server port) in your browser

## Features Implemented

✅ **Responsive Design** - Mobile-first approach with breakpoints at 768px and 480px
✅ **Smooth Scrolling** - Native HTML scroll behavior with JavaScript navigation
✅ **Mobile Menu** - Hamburger menu that closes on link clicks
✅ **Tab System** - About section with Skills, Experience, Education tabs
✅ **Skill Animations** - Skill bars animate when scrolling into view
✅ **Form Handling** - Contact form with basic validation
✅ **Icon Library** - Font Awesome icons integrated
✅ **CSS Variables** - Easy theme customization

## Customization

### Change Colors
Edit the CSS variables in `styles.css`:
```css
:root {
    --black: #000000;
    --white: #ffffff;
    /* ... other colors */
}
```

### Update Content
Edit the HTML content directly in `public/index.html`:
- Navigation links in the `<nav>` section
- Hero section content
- About section tabs and content
- Services, Portfolio, and Contact sections
- Update these arrays to change the displayed content

### Add Social Links
Update the social links in `Contact.js`:
```javascript
<a href="https://facebook.com/yourprofile" title="Facebook">
    <i className="fab fa-facebook"></i>
</a>
```

## Building for Production

```bash
npm run build
```

This creates an optimized production build in the `build/` folder.

## Deployment

The project is configured for Vercel deployment with the included `vercel.json` file.

To deploy:
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Vercel will automatically build and deploy

Or deploy manually:
```bash
npm install -g vercel
vercel
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Notes

- All original CSS has been converted and is responsive
- Font Awesome 6.4.0 is included via CDN
- Poppins font is imported from Google Fonts
- Form submission logs to console (you may want to add a backend service)
- All smooth scrolling uses native CSS behavior
