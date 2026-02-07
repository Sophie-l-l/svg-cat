# SVG Cat — Interactive SVG Art

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![SVG](https://img.shields.io/badge/SVG-FFB13B?style=for-the-badge&logo=svg&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/SVG)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Live](https://img.shields.io/badge/Live-GitHub%20Pages-00C853?style=for-the-badge)](https://sophie-l-l.github.io/svg-cat/)

**SVG Cat** is a minimalist interactive web project featuring a **hand-crafted SVG cat illustration** with a clickable tail animation. Built with pure HTML, SVG, and 14 lines of vanilla JavaScript.

**Live Demo:** [https://sophie-l-l.github.io/svg-cat/](https://sophie-l-l.github.io/svg-cat/)

---

## Key Achievements

- **Situation**: Wanted to explore SVG graphics and interactivity as part of learning vector-based web illustration
- **Task**: Create an interactive, hand-drawn SVG illustration with user-triggered animation
- **Action**:
  - Hand-crafted a complete **SVG cat illustration** using only SVG path, circle, and ellipse elements — no external tools or image editors
  - Implemented a **click-to-toggle tail animation** that swaps between two tail positions using JavaScript visibility toggling
  - Kept the codebase minimal and clean — 14 lines of JavaScript, demonstrating that interactivity doesn't require frameworks
- **Result**: A clean, lightweight interactive illustration deployed on GitHub Pages, demonstrating SVG fundamentals and DOM event handling

---

## How It Works

Clicking the cat's tail toggles between two SVG path elements:

```javascript
const tail1 = document.getElementById("tail1");
const tail2 = document.getElementById("tail2");

tail1.addEventListener("click", () => {
    tail1.style.display = "none";
    tail2.style.display = "block";
});

tail2.addEventListener("click", () => {
    tail2.style.display = "none";
    tail1.style.display = "block";
});
```

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| **Structure** | HTML5 |
| **Graphics** | SVG (hand-crafted paths, circles, ellipses) |
| **Interactivity** | Vanilla JavaScript (14 lines) |
| **Deployment** | GitHub Pages |

---

## Getting Started

```bash
# Clone the repository
git clone https://github.com/Sophie-l-l/svg-cat.git
cd svg-cat

# Open in browser
open index.html
```

No dependencies — pure HTML + SVG + JavaScript.

---

## Skills Demonstrated

SVG illustration and vector graphics, JavaScript DOM manipulation, event handling, minimalist code design

---

## License

This project is licensed under the Unlicense. See the [LICENSE](LICENSE) file for details.
