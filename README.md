# Portfolio - React.js Version

This is your portfolio website converted to React.js from vanilla HTML/CSS/JS.

## Project Structure

```
Portfolio/
├── public/
│   ├── index.html
│   ├── profile.jpg
│   ├── Project1.jpg
│   ├── project2.jpg
│   ├── project3.jpg
│   └── project4.jpg
├── src/
│   ├── components/
│   │   ├── Navbar.js
│   │   ├── Hero.js
│   │   ├── About.js
│   │   ├── Services.js
│   │   ├── Portfolio.js
│   │   └── Contact.js
│   ├── styles/
│   │   └── index.css
│   ├── App.js
│   └── index.js
├── package.json
└── vercel.json
```

## Components

### Navbar
- Fixed navigation bar with smooth scrolling
- Responsive hamburger menu for mobile devices
- Active section highlighting

### Hero
- Main landing section with gradient text
- Call-to-action buttons for navigation
- Animated scroll indicator

### About
- Profile image
- Bio/description
- Tabbed interface for Skills, Experience, and Education
- Animated skill bars on scroll

### Services
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

## Installation

1. **Copy image files** to the `public/` folder:
   - profile.jpg
   - Project1.jpg
   - project2.jpg
   - project3.jpg
   - project4.jpg

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm start
   ```

The application will open at `http://localhost:3000`

## Features Implemented

✅ **Responsive Design** - Mobile-first approach with breakpoints at 768px and 480px
✅ **Smooth Scrolling** - Native HTML scroll behavior with React navigation
✅ **Mobile Menu** - Hamburger menu that closes on link clicks
✅ **Tab System** - About section with Skills, Experience, Education tabs
✅ **Skill Animations** - Skill bars animate when scrolling into view
✅ **Form Handling** - Contact form with success message
✅ **Icon Library** - Font Awesome icons integrated
✅ **CSS Variables** - Easy theme customization

## Customization

### Change Colors
Edit the CSS variables in `src/styles/index.css`:
```css
:root {
    --black: #000000;
    --white: #ffffff;
    /* ... other colors */
}
```

### Update Content
Each component can be easily modified:
- Component data is defined inside each component
- Example: `About.js` has `skills`, `experience`, and `education` arrays
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
