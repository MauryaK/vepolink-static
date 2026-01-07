# Vepolink - Environmental Monitoring Solutions

A comprehensive static website for Vepolink, showcasing environmental monitoring solutions including water quality, air quality, gas detection, and noise monitoring systems.

## 🌟 Overview

Vepolink provides real-time data acquisition, monitoring, reporting, and analysis software for environmental data. This website serves as the primary marketing and information platform for their industrial environmental monitoring solutions.

**Live Platform:** [enviro.vepolink.com](https://enviro.vepolink.com/)

## 🚀 Features

- **Responsive Design**: Fully responsive layout optimized for desktop, tablet, and mobile devices
- **Video Banner**: Auto-playing video banner with mobile optimization using `playsinline` and `webkit-playsinline`
- **Interactive Solutions Showcase**: 
  - CAAQMS (Continuous Ambient Air Quality Monitoring System)
  - CEMS (Continuous Emission Monitoring System)
  - Flow & Level Monitoring
  - Gas Detection Systems
  - Noise & Vibration Monitoring
  - Water Quality Analyzers
- **Strategic Partnerships**: Tabbed interface for OEM partners and clients
- **Product Finder**: Advanced product search and filtering system
- **Analytics Platform**: Real-time environmental data visualization
- **Compliance Guidelines**: Environmental regulation compliance information

## 📁 Project Structure

```
Vepolink HTML/
├── assets/
│   ├── css/               # Compiled CSS and external libraries
│   ├── dummy/             # Placeholder assets
│   ├── fonts/             # Custom web fonts
│   ├── icons/             # Icon assets
│   ├── images/            # Image assets organized by section
│   ├── js/                # JavaScript files (jQuery, Owl Carousel, custom scripts)
│   ├── json/              # Data files for products and content
│   ├── sass/              # SASS source files
│   │   ├── header/        # Header-specific styles
│   │   ├── home/          # Homepage-specific styles
│   │   └── ...            # Component-specific styles
│   └── video/             # Video assets
├── index.html             # Homepage
├── about.html             # About page
├── analytics.html         # Analytics solutions
├── find-product.html      # Product finder
├── contact-us.html        # Contact page
├── career.html            # Careers page
├── gallery.html           # Image gallery
├── clients.html           # Client showcase
└── [product-pages].html   # Individual product detail pages
```

## 🛠️ Technologies Used

- **HTML5**: Semantic markup
- **CSS3/SASS**: Styling with CSS preprocessor
- **JavaScript**: 
  - jQuery v3.7.1 for DOM manipulation
  - Owl Carousel v2.3.4 for image/content carousels
- **Responsive Design**: Mobile-first approach with custom breakpoints
- **Video Optimization**: HTML5 video with mobile autoplay attributes

## 📱 Responsive Breakpoints

The website uses custom SASS mixins for responsive design:

- **Desktop**: 1200px and above
- **Tablet**: 768px - 1199px
- **Mobile (Large)**: 480px - 767px
- **Mobile (Small)**: 380px - 479px
- **Mobile (XS)**: Below 380px

## 🎨 Key Styling Features

- **SASS Architecture**: Modular SASS files for maintainability
- **Custom Fonts**: Web fonts located in `/assets/fonts/`
- **Icon System**: Custom icon set in `/assets/icons/`
- **Animations**: Smooth transitions and hover effects
- **Color Scheme**: Professional environmental/industrial theme

## 📄 Key Pages

### Main Pages
- **Homepage** (`index.html`): Overview of solutions and features
- **About** (`about.html`): Company information and mission
- **Analytics** (`analytics.html`): Platform capabilities
- **Find Product** (`find-product.html`): Product search interface
- **Contact Us** (`contact-us.html`): Contact form and information
- **Clients** (`clients.html`): Client testimonials and partnerships
- **Gallery** (`gallery.html`): Project images and installations
- **Career** (`career.html`): Job opportunities

### Product Pages
- Air Quality: `caaqms.html`, `cems.html`, `adms.html`, `airpointer.html`
- Gas Detection: `gas-detection.html`, `gas-analyzers.html`, `dust-analyzers.html`
- Water Monitoring: `rtwqms.html`, `extractive-aqualog.html`, `probes.html`
- Flow Measurement: `electromagnetic-flowmeter-*.html`, `ultrasonic-flowmeter-*.html`
- Noise & Vibration: `noise-monitor.html`, `vibration-monitor.html`
- Treatment: `sewage-treatment-plants.html`, `moving-bed-bio-reactor.html`

### Legal Pages
- **Privacy Policy** (`privacy-policy.html`)
- **Terms & Conditions** (`terms-and-conditions.html`)

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- A local web server (optional, for development)

### Installation

1. **Clone or download the repository**
   ```bash
   git clone https://github.com/MauryaK/vepolink-static.git
   cd vepolink-static
   ```

2. **Open in browser**
   - Simply open `index.html` in your web browser
   - Or use a local server (recommended for development):
     ```bash
     # Using Python
     python -m http.server 8000
     
     # Using Node.js
     npx serve
     
     # Using PHP
     php -S localhost:8000
     ```

3. **Access the website**
   - Direct file: Open `index.html` in browser
   - Local server: Navigate to `http://localhost:8000`

## 🎥 Video Assets

The homepage banner uses a video background (`assets/video/home-banner.mp4`) with the following optimizations:
- `autoplay`: Starts playing automatically
- `muted`: Required for autoplay in most browsers
- `loop`: Continuous playback
- `playsinline`: Enables inline playback on iOS devices
- `webkit-playsinline`: Legacy iOS support
- `preload="auto"`: Preloads video for smoother playback

## 📝 Development

### SASS Compilation

If you're making changes to SASS files:

1. **Install SASS compiler** (if not already installed)
   ```bash
   npm install -g sass
   ```

2. **Watch and compile SASS files**
   ```bash
   sass --watch assets/sass:assets/sass
   ```

### Modifying Styles

Main SASS files are located in `assets/sass/`:
- `style.sass`: Main stylesheet entry point
- `header/_style.sass`: Header and navigation styles
- `home/_style.sass`: Homepage-specific styles
- `[section]/_style.sass`: Other section-specific styles

## 🔧 Configuration

### Header Navigation
Edit the navigation links in each HTML file's header section:
```html
<div class="nav">
    <a href="find-product.html">Find Product</a>
    <a href="analytics.html">Analytics</a>
    <a href="complianceguidelines.html">Compliance Guidelines</a>
    <a href="https://enviro.vepolink.com/" target="_blank">Login</a>
</div>
```

### Contact Information
Update contact details in the footer section of HTML files:
- Phone: +91-981-0416-132
- Email: techsupport@vepolink.com, sales@vepolink.com
- WhatsApp: Linked with pre-filled message

## 📞 Support

For technical support or inquiries:
- **Email**: techsupport@vepolink.com
- **Sales**: sales@vepolink.com
- **Phone**: +91-981-0416-132
- **WhatsApp**: [Send Message](https://wa.me/9810416132)

## 📄 License

Copyright © Vepolink. All rights reserved.

## 🤝 Contributing

This is a private commercial project. For contribution inquiries, please contact the development team.

## 📌 Recent Updates

- ✅ Optimized video playback for mobile devices with `playsinline` attributes
- ✅ Updated responsive image sizes for better mobile performance
- ✅ Adjusted header button dimensions for improved mobile UX
- ✅ Refined banner height for mobile viewports (260px on small screens)
- ✅ Updated `.gitignore` to include necessary video assets

---

**Developed with 💚 for a cleaner environment**
