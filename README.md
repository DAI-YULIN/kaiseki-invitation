# Spring Kaiseki Invitation (春の懐石 招待状)

This is a premium, Japanese-styled invitation webpage built with React and Three.js.

## Features
- **3D Atmospheric Background**: Falling sakura petals using Three.js (OpenGL).
- **Elegant Typography**: Vertical text layout (Tategaki) using Noto Serif JP.
- **Interactive Menu**: 11-course menu with detailed view and recipe links.
- **Responsive Design**: Adapts to different screen sizes.

## Project Structure
- `src/components/SakuraBackground.jsx`: The 3D particle system.
- `src/components/MenuList.jsx`: The interactive menu list and modal.
- `src/data.js`: Menu content and links.
- `public/assets/`: Generated assets (Hero image, Texture, Petal).

## How to Run

1. Install dependencies (if you haven't):
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open your browser at the Local URL (usually http://localhost:5173).

## Customization
- Modify `src/data.js` to change menu items.
- Replace images in `public/assets/` to change the theme.
