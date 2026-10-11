# 🖼️ Image Carousel / Slider

A responsive and interactive **Image Carousel / Slider** built using HTML, CSS, and JavaScript. 
It features automatic slide rotation, previous and next navigation, clickable slide indicators, 
smooth transitions, and pause-on-hover functionality.

## 📌 Table of Contents

- [About the Project](#-about-the-project)
- [Features](#-features)
- [Technologies Used](#-technologies-used)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [How It Works](#-how-it-works)
- [Customization](#-customization)
- [Screenshots](#-screenshots)
- [Learning Objectives](#-learning-objectives)
- [Future Improvements](#-future-improvements)
- [Resources](#-resources)


## 📖 About the Project

The Image Carousel / Slider is a beginner-friendly frontend development project that displays multiple images in a single viewing area.

Users can navigate between images using Previous and Next buttons or clickable indicators. The carousel automatically changes slides after a fixed interval and pauses when the user hovers over it.

This project helps beginners understand DOM manipulation, JavaScript event handling, timers, array indexing, and CSS transitions.

## ✨ Features

- 🖼️ **Multiple Slides:** Displays at least five images.
- ⬅️ **Previous Button:** Navigate to the previous image.
- ➡️ **Next Button:** Move to the next image.
- 🔄 **Automatic Rotation:** Changes slides automatically every three seconds.
- ⏸️ **Pause on Hover:** Stops automatic rotation while the pointer is over the carousel.
- 🔘 **Slide Indicators:** Click an indicator to navigate directly to a slide.
- 🔢 **Slide Counter:** Displays the current slide number.
- 🎨 **Smooth Transitions:** Animated horizontal sliding effect.
- 📱 **Responsive Design:** Adapts to desktop and mobile screen sizes.
- 🔁 **Infinite Loop:** Moves from the last slide to the first and vice versa.

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| HTML5 | Creates the carousel structure |
| CSS3 | Provides styling, responsiveness, and transitions |
| JavaScript | Controls navigation, indicators, and automatic rotation |
| DOM API | Updates slide positions and active indicators |
| `setInterval()` | Automatically advances the slides |
| `clearInterval()` | Stops and resets the timer |

## 📂 Project Structure

```text
image-carousel/
│
├── index.html      # Carousel structure
├── style.css       # Styling and responsive layout
├── script.js       # Carousel functionality
└── README.md       # Project documentation
```

## 🚀 Getting Started

Follow these instructions to run the project locally.

### Prerequisites

- A modern web browser such as Chrome, Firefox, or Edge.
- A code editor such as Visual Studio Code.
- An internet connection for the example images hosted online.

### Installation

**1. Clone the repository**

```bash
git clone https://github.com/YOUR-USERNAME/image-carousel.git
```

Replace `YOUR-USERNAME` with your GitHub username and use your actual repository URL.

**2. Navigate to the project directory**

```bash
cd image-carousel
```

**3. Open the project**

Open `index.html` in your browser.

Alternatively, open the project in Visual Studio Code and use the Live Server extension.

## ⚙️ How It Works

### 1. Track the Current Slide

JavaScript maintains the index of the currently displayed slide.

```javascript
let currentIndex = 0;
```

The index starts at zero because JavaScript uses zero-based indexing.

### 2. Display the Selected Slide

```javascript
function showSlide(index) {
    currentIndex = (index + totalSlides) % totalSlides;

    slides.style.transform =
        `translateX(-${currentIndex * 100}%)`;
}
```

The modulo operator wraps the index around, allowing navigation to continue from the last slide to the first and from the first slide to the last.

### 3. Automatic Slide Rotation

```javascript
autoSlideTimer = setInterval(nextSlide, 3000);
```

The `setInterval()` method calls `nextSlide()` every 3,000 milliseconds.

### 4. Pause and Resume

```javascript
clearInterval(autoSlideTimer);
```

The `clearInterval()` method stops the running timer when the pointer enters the carousel. Automatic rotation resumes when the pointer leaves.

### 5. Update Slide Indicators

The active indicator is updated whenever the current slide changes, allowing users to see which image is being displayed and jump to another slide.

## 🎨 Customization

### Change the Slide Interval

Open `script.js` and modify:

```javascript
const slideDelay = 3000;
```

For example, use `5000` to change slides every five seconds.

### Change the Images

Open `index.html` and replace the image URLs inside the `<img>` elements.

```html
<img src="images/my-image.jpg" alt="My image">
```

You can create an `images` folder to store your own images locally.

### Change the Carousel Height

Open `style.css` and update:

```css
.slide img {
    height: 480px;
    object-fit: cover;
}
```

Change the height to suit your design.

### Customize the Appearance

You can modify the CSS colors, border radius, navigation buttons, caption styles, and transition duration to create your own visual theme.

## 📸 Screenshots

Add screenshots of your running project to a `screenshots` folder.

```text
image-carousel/
└── screenshots/
    ├── desktop.png
    └── mobile.png
```

After adding the screenshots, display them in this section:

### Desktop View

![Image Carousel Desktop Screenshot](screenshots/desktop.png)

### Mobile View

![Image Carousel Mobile Screenshot](screenshots/mobile.png)


## 🎯 Learning Objectives

This project provides practice with:

- DOM selection and manipulation.
- JavaScript functions and variables.
- Event listeners and click handling.
- Array indexing and the modulo operator.
- Timers using `setInterval()` and `clearInterval()`.
- Dynamic class manipulation with `classList`.
- CSS transitions and transforms.
- Responsive design using media queries.
- Creating and updating DOM elements dynamically.

## 🔮 Future Improvements

Possible enhancements include:

- [ ] Add Play/Pause controls.
- [ ] Support keyboard navigation.
- [ ] Add touch and swipe gestures.
- [ ] Add thumbnails for image previews.
- [ ] Allow users to select a custom transition effect.
- [ ] Add loading indicators for images.
- [ ] Add accessibility improvements for keyboard and screen-reader users.

## 📚 Resources

- [MDN — CSS Transitions](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_transitions/Using_CSS_transitions)
- [MDN — `setInterval()`](https://developer.mozilla.org/en-US/docs/Web/API/Window/setInterval)
- [MDN — `clearInterval()`](https://developer.mozilla.org/en-US/docs/Web/API/Window/clearInterval)
- [MDN — `classList`](https://developer.mozilla.org/en-US/docs/Web/API/Element/classList)
- [MDN — CSS Transforms](https://developer.mozilla.org/en-US/docs/Web/CSS/transform)

