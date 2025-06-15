# MichaelAllenSmith.com

A personal website built with [Astro](https://astro.build/) that serves as my digital presence and portfolio. This site showcases my background, interests, and projects while also featuring a TV show and movie review tracker.

## 🚀 Features

- **Personal Portfolio**: Introduction page with biographical information, education, military service, and career highlights
- **Media Tracker**: TV show and movie review system with search functionality
- **Responsive Design**: Clean, modern interface using the Paper CSS framework
- **Optimized Images**: Astro's built-in image optimization with modern formats (AVIF, WebP)
- **SEO Friendly**: Proper meta tags and structured data for better search engine visibility

## 🛠️ Tech Stack

- **Framework**: [Astro](https://astro.build/) v5.9.3
- **Deployment**: [Netlify](https://netlify.com) with `@astrojs/netlify` adapter
- **Styling**: Paper CSS framework for clean, minimal design
- **Image Processing**: Astro's built-in Picture component for optimized image delivery
- **Content Management**: Astro Content Collections for structured data

## 📁 Project Structure

```
├── public/                  # Static assets
│   ├── images/             # Image assets
│   └── verification files  # Site verification files
├── src/
│   ├── assets/             # Optimized images
│   ├── components/         # Reusable Astro components
│   │   ├── Card.astro
│   │   ├── Footer.astro
│   │   └── Navigation.astro
│   ├── layouts/            # Page layouts
│   │   └── Layout.astro
│   ├── pages/              # Route pages
│   │   ├── index.astro     # Personal introduction
│   │   └── watched.astro   # TV/Movie tracker
│   └── styles/             # CSS files
├── astro.config.mjs        # Astro configuration
├── netlify.toml           # Netlify deployment config
└── package.json           # Dependencies and scripts
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:

```bash
git clone https://github.com/digitalcolony/michaelallensmith.git
cd michaelallensmith
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:4321`

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run start` - Alias for dev command
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## 🌐 Deployment

This site is automatically deployed to Netlify when changes are pushed to the main branch. The deployment configuration is managed through `netlify.toml`.

### Build Process

- **Build Command**: `npm run build`
- **Publish Directory**: `dist`
- **Adapter**: Netlify Functions support via `@astrojs/netlify`

## 🎯 Key Pages

- **Home (/)**: Personal introduction with biographical information, education, military service, and contact details
- **Watched (/watched/)**: TV show and movie review tracker with search functionality and viewing statistics

## 🤝 Contributing

This is a personal website, but if you notice any bugs or have suggestions, feel free to open an issue or submit a pull request.

## 📧 Contact

- **Website**: [michaelallensmith.com](https://michaelallensmith.com)
- **Email**: digitalcolony@gmail.com
- **GitHub**: [@digitalcolony](https://github.com/digitalcolony)
- **LinkedIn**: [Michael Allen Smith](https://www.linkedin.com/in/digitalcolony/)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
