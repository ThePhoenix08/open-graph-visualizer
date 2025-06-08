# Open Graph Visualizer

A powerful tool to preview how your website's link previews will appear across different social media platforms. Perfect for optimizing your website's Open Graph metadata and improving SEO performance.

<!-- ![Open Graph Visualizer Demo](./assets/demo.png) -->

## 🚀 Features

- **Real-time Preview**: See how your links will look on Facebook, Twitter, LinkedIn, and other platforms
- **Metadata Analysis**: Comprehensive analysis of Open Graph tags, Twitter Cards, and other meta tags
- **SEO Insights**: Get recommendations to improve your social media presence
- **Responsive Design**: Works seamlessly across all devices
- **Fast Performance**: Built with modern technologies for optimal speed

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS, shadcn/ui
- **Backend**: Express.js, Node.js, TypeScript
- **Development**: ESLint, Prettier, Concurrently

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v18 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [MongoDB](https://www.mongodb.com/try/download/community)

## 🚀 Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/ThePhoenix08/open-graph-visualizer.git
   cd open-graph-visualizer
   ```

2. **Install dependencies of root, frontend, backend**
   ```bash
   npm install
   ```

3. **Set up environment variables for backend**
   ```bash
   cd ./backend
   cp .env.example .env
   # Edit .env with your configuration
   ```

4. **Start the development server for both frontend and backend**
   ```bash
   cd ..
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173` to see the application frontend running.
   Application backend should be accessible at `http://localhost:5000`

## 📁 Project Structure

```
open-graph-visualizer/
├── frontend/              # React frontend application
│   ├── src/
│   ├── public/
│   ├── package.json
│   └── ...
├── backend/               # Express backend API
│   ├── src/
│   ├── package.json
│   ├── .env               # Generate your own
│   ├── .env.example
│   └── ...
├── docs/                  # Documentation
├── .github/               # GitHub templates and workflows
├── package.json           # Root package.json (workspace)
├── README.md             # This file
└── ...
```

## 🔧 Development

### Available Scripts

- `npm run dev` - Start both frontend and backend in development mode
- `npm run build` - Build both applications for production
- `npm run start` - Start the production server
<!-- - `npm run lint` - Run ESLint on both projects -->
- `npm run format` - Format code with Prettier
<!-- - `npm run test` - Run tests -->

### Environment Variables

Create a `.env` file in the root directory:

```env
# Backend Configuration
PORT=5000
NODE_ENV=development
MONGODB_URL= for local use: (mongodb://localhost:27017/ogv)

# Optional: Add any API keys for enhanced features
# SOME_API_KEY=your_api_key_here
# Remember to always update .env.example if adding new env var
# And relay the env through secure channels to project owner or report the source to secure one
```

## 🤝 Contributing

We welcome contributions from the community! Please read our [Contributing Guide](./.github/CONTRIBUTING.md) to get started.

### Quick Contribution Steps

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Run tests and ensure code quality (`npm run lint && npm run test`)
5. Commit your changes (`git commit -m 'Add amazing feature'`)
6. Push to the branch (`git push origin feature/amazing-feature`)
7. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](./.github/LICENSE) file for details.

## 🆘 Support

- 📖 [Documentation](./docs)
- 🐛 [Report Bug](https://github.com/ThePhoenix08/open-graph-visualizer/issues)
- 💡 [Request Feature](https://github.com/ThePhoenix08/open-graph-visualizer/issues)
- 💬 [Discussions](https://github.com/ThePhoenix08/open-graph-visualizer/discussions)

## 🌟 Acknowledgments

- Thanks to all contributors who help make this project better
- Inspired by the need for better social media optimization tools
- Built with amazing open source technologies

## 📊 Project Status

![GitHub issues](https://img.shields.io/github/issues/ThePhoenix08/open-graph-visualizer)
![GitHub pull requests](https://img.shields.io/github/issues-pr/ThePhoenix08/open-graph-visualizer)
![GitHub stars](https://img.shields.io/github/stars/ThePhoenix08/open-graph-visualizer)
![GitHub license](https://img.shields.io/github/license/ThePhoenix08/open-graph-visualizer)

---

Made with ❤️ by [Your Name](https://github.com/ThePhoenix08)