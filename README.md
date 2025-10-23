# Lee Chong Wei - Virtual Assistant

<p align="center">
  <img src="logo.jpg" alt="Lee Chong Wei Virtual Assistant" width="200" />
</p>

<p align="center">
  <em>Your personal voice-enabled virtual assistant</em>
</p>

An interactive voice-enabled virtual assistant built with HTML, CSS, and JavaScript that responds to voice commands and provides spoken feedback.

<p align="center">
  <a href="LICENSE">
    <img src="https://img.shields.io/github/license/codergangganesh/DLCO-project_1-lee-AI-Bot" alt="GitHub">
  </a>
  <a href="https://github.com/codergangganesh/DLCO-project_1-lee-AI-Bot/stargazers">
    <img src="https://img.shields.io/github/stars/codergangganesh/DLCO-project_1-lee-AI-Bot" alt="GitHub stars">
  </a>
  <a href="https://github.com/codergangganesh/DLCO-project_1-lee-AI-Bot/issues">
    <img src="https://img.shields.io/github/issues/codergangganesh/DLCO-project_1-lee-AI-Bot" alt="GitHub issues">
  </a>
</p>

## 🎯 Project Overview

Lee Chong Wei is a virtual assistant that leverages the Web Speech API to provide hands-free interaction. Users can speak commands to the assistant, which will respond verbally and perform various tasks like opening websites, telling time, and searching the web.

This project demonstrates the power of web-based voice technologies and provides an accessible interface for users who prefer voice interaction over traditional input methods.

### Key Benefits

- **Hands-Free Operation**: Control your computer without touching the keyboard or mouse
- **Accessibility**: Useful for users with mobility or vision impairments
- **Convenience**: Quick access to information and applications
- **Learning Tool**: Demonstrates modern web APIs in action

## ✨ Features

- **🎤 Voice Recognition**: Uses the Web Speech API to listen and interpret user commands
- **🔊 Voice Synthesis**: Provides spoken responses using text-to-speech capabilities
- **⏰ Time & Date**: Tells current time and date on request
- **🌐 Website Launcher**: Opens popular websites (YouTube, Google, Facebook, Instagram)
- **⚙️ Application Opener**: Launches system applications (Calculator, WhatsApp, Gmail)
- **🔍 Web Search**: Searches Google for queries not directly recognized
- **👋 Contextual Greetings**: Greets users differently based on time of day (Morning, Afternoon, Evening)

## 🚀 Getting Started

### Prerequisites

- A modern web browser (Chrome recommended for best Web Speech API support)
- Internet connection for CDN resources and web searches
- Microphone access (browser will prompt for permission)

### Quick Start

Simply open `index.html` in your browser to start using the assistant immediately!

### Installation Options

1. **Direct Download**: Download the ZIP file from GitHub and extract it
2. **Git Clone**: 
   ```bash
   git clone https://github.com/codergangganesh/DLCO-project_1-lee-AI-Bot.git
   ```
3. **GitHub CLI**:
   ```bash
   gh repo clone codergangganesh/DLCO-project_1-lee-AI-Bot
   ```

### Usage

1. Click the "Click here for talk to me" button
2. Speak your command clearly when the microphone activates
3. Listen to the verbal response from the assistant

> **Note**: On first use, your browser may ask for microphone permission. Please allow access for the voice recognition to work.

## 🎤 Supported Voice Commands

| Command | Action |
|---------|--------|
| "Hello" or "Hey Lee" | Greets the user |
| "Who are you?" or "What is your name?" | Introduces the assistant |
| "Open YouTube/Google/Facebook/Instagram" | Opens the respective website |
| "Open Calculator/WhatsApp/Gmail" | Launches the respective application |
| "What time is it?" or "Time" | Tells the current time |
| "What date is it?" or "Date" | Tells the current date |
| Any other phrase | Performs a Google search |

### Example Interactions

- User: "Hey Lee, what time is it?"
- Lee: "It's 3:45 PM"

- User: "Lee, open YouTube"
- Lee: "Opening YouTube..." (Opens YouTube in a new tab)

- User: "Who are you?"
- Lee: "My name is Lee Chong Wei, a virtual assistant created by Team Vishnu Sir"

## 🛠️ Technical Stack

- **Frontend**: HTML5, CSS3, JavaScript ES6+
- **APIs**: Web Speech API (SpeechRecognition & SpeechSynthesis)
- **Fonts**: Google Fonts ('Protest Guerrilla')
- **Graphics**: Custom logo and animated voice indicator

### Web Technologies Used

- **HTML5 Semantic Elements**: For structuring the interface
- **CSS3 Flexbox**: For responsive layout design
- **CSS3 Animations**: For interactive button effects
- **JavaScript ES6+**: For modern syntax and functionality
- **Web Speech API**: For voice recognition and synthesis

## 📁 Project Structure

```
DLCO project_1(lee AI Bot)/
├── index.html          # Main HTML structure
├── style.css           # Styling and animations
├── script.js           # Core functionality and logic
├── logo.jpg            # Assistant logo
├── voice.gif           # Animated voice indicator
└── mic.svg             # Microphone icon
```

### Key Components

- **index.html**: The main interface with the assistant's visual elements
- **style.css**: Responsive design with gradient buttons and animations
- **script.js**: Implements the Web Speech API and command processing logic

## 💻 Browser Compatibility

The Web Speech API has varying support across different browsers:

| Browser | Speech Recognition | Speech Synthesis |
|---------|-------------------|------------------|
| Chrome  | ✅ Supported       | ✅ Supported      |
| Firefox | ⚠️ Partial         | ✅ Supported      |
| Safari  | ❌ Not Supported   | ✅ Supported      |
| Edge    | ✅ Supported       | ✅ Supported      |

> **Note**: For the best experience, use Google Chrome as it has the most comprehensive support for the Web Speech API.

### Mobile Compatibility

- **Android**: Chrome Mobile fully supports both speech recognition and synthesis
- **iOS**: Safari on iOS has limited support; Chrome recommended

## 🎨 UI Preview

<p align="center">
  <img src="logo.jpg" alt="Assistant Interface" width="300" />
</p>

*The virtual assistant interface with voice activation button*

### Design Features

- Dark theme interface for reduced eye strain
- Gradient button with hover effects
- Animated voice indicator during speech recognition
- Responsive layout that works on different screen sizes

## ⚙️ How It Works

1. **Initialization**: On page load, the assistant greets the user based on the time of day
2. **Voice Input**: Clicking the button activates the microphone for voice input
3. **Command Processing**: The assistant analyzes the spoken command
4. **Action Execution**: Based on the command, it performs the appropriate action
5. **Verbal Response**: The assistant provides spoken feedback to the user

### Technical Flow

The application uses two main components of the Web Speech API:
- **SpeechRecognition**: Converts spoken words into text
- **SpeechSynthesis**: Converts text into spoken words

When a command is received, the system:
1. Normalizes the input text to lowercase
2. Matches against predefined command patterns
3. Executes the corresponding action
4. Generates a verbal response using text-to-speech

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Areas for Improvement

- Add more voice commands
- Implement natural language processing
- Improve error handling
- Add multilingual support
- Enhance UI/UX design

Please ensure your code follows the existing style and includes appropriate comments.

## 👨‍💻 Author

**Mannam Ganesh Babu** - *Initial Work* - [codergangganesh](https://github.com/codergangganesh)

Project maintained by Team Vishnu

## ❓ Troubleshooting

### Common Issues

1. **Microphone not working**:
   - Check browser permissions for microphone access
   - Ensure your microphone is properly connected
   - Try refreshing the page

2. **Voice recognition not responding**:
   - Make sure you're using a supported browser (Chrome recommended)
   - Speak clearly and at a moderate pace
   - Check your internet connection

3. **Voice synthesis not working**:
   - Verify your system audio is functioning
   - Check that your browser supports SpeechSynthesis

### Browser-Specific Solutions

- **Chrome**: Go to Settings > Privacy and security > Site Settings > Microphone
- **Firefox**: May require additional configuration for speech recognition
- **Safari**: Speech recognition is not supported

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.



## 🙏 Acknowledgments

- Thanks to Team Vishnu for creating this virtual assistant
- Inspired by modern voice assistant technologies
- Powered by Web Speech API

## 📞 Support

If you encounter any issues or have questions about this project, please [open an issue](https://github.com/codergangganesh/DLCO-project_1-lee-AI-Bot/issues) on GitHub.

---

⭐ **If you find this project helpful, please consider giving it a star!**

<p align="center">
  Made with ❤️ by <a href="https://github.com/codergangganesh">Mannam Ganesh Babu</a> and Team Vishnu
</p>