# Contributing to Syllable Learning Game

## Welcome Contributors! 🌟

We're thrilled that you're interested in contributing to the Syllable Learning Game. This document provides guidelines to help you contribute effectively.

## 🤝 Code of Conduct

Please be respectful, inclusive, and constructive. We aim to create a welcoming environment for all contributors.

## 🚀 How to Contribute

### Reporting Bugs
1. Check existing issues to avoid duplicates
2. Use the bug report template
3. Provide detailed information:
   - Steps to reproduce
   - Expected vs. actual behavior
   - Environment details

### Suggesting Features
1. Check existing feature requests
2. Use the feature request template
3. Clearly describe:
   - The problem the feature solves
   - Proposed solution
   - Potential implementation approach

## 💻 Development Process

### Setup
1. Fork the repository
2. Clone your fork
   ```bash
   git clone https://github.com/your-username/syllable-learning-game.git
   cd syllable-learning-game
   ```
3. Install dependencies
   ```bash
   npm install
   ```

### Development Workflow
1. Create a feature branch
   ```bash
   git checkout -b feature/your-feature-name
   ```
2. Make your changes
3. Run tests
   ```bash
   npm test
   ```
4. Lint your code
   ```bash
   npm run lint
   ```
5. Commit with a clear, descriptive message
   ```bash
   git commit -m "Add: Brief description of changes"
   ```

### Pull Request Guidelines
1. Ensure code passes all tests
2. Update documentation if needed
3. Add tests for new features
4. Follow existing code style
5. Provide a clear PR description

## 🌍 Adding New Languages

### Steps to Add a Language
1. Update `src/data/syllables.js`
   - Add new language configuration
   - Include syllable sets
2. Add audio files in `src/assets/audio/`
3. Update README with new language details
4. Create tests for new language support

## 🛠 Development Standards

### Code Quality
- Follow ESLint rules
- Write clear, commented code
- Keep functions small and focused
- Use meaningful variable names

### Performance
- Optimize rendering
- Minimize unnecessary re-renders
- Use React hooks effectively

### Accessibility
- Ensure keyboard navigation
- Add proper ARIA attributes
- Support screen readers

## 🧪 Testing

### Types of Tests
- Unit tests for components
- Integration tests
- Accessibility tests

### Running Tests
```bash
npm test
```

## 📝 Documentation

- Update README for new features
- Add inline code comments
- Keep documentation clear and concise

## 🤔 Questions?

Open an issue or discuss in our community channels.

## 🙏 Thank You

Your contributions make this project better for everyone!
