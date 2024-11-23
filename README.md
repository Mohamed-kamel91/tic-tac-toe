# Tic Tac Toe

A stylish interactive Tic Tac Toe game built with React, TypeScript, and styled with Tailwind CSS. This game allows two players to take turns and play on a 3x3 grid to win by marking three squares in a row, column, or diagonal.

## Features

- 🎮 **Player vs Player**: Two players can play on the same device.
- 🔄 **Turn Indicator**: Tracks whose turn it is during the game.
- 🏅 **Scoreboard**: A scoreboard keeps track of the overall score, showing the number of rounds won by each player.
- 🔄 **Rounds System**: Keeps track of individual game rounds.
- 🏆 **Winner Detection**: The game automatically detects the winner or if it's a draw.
- ✨ **Desktop only design**: Styled with Tailwind CSS for a clean and modern look.
- 🌟 **Type Safety**: Fully typed using TypeScript to ensure a robust and maintainable codebase.

## Technologies Used

- **React**: For building the user interface.
- **Redux Toolkit**: For Global state management.
- **TypeScript**: For type-safe development.
- **Zod**: TypeScript-first schema declaration and validation library.
- **Tailwind CSS**: For modern styling.
- **Lucide React**: For svgs.

## Installation

### Prerequisites

- Node.js (v22.9.0 or higher)
- npm only

### Steps

1. **Clone the Repository**

   ```bash
   git clone https://github.com/Mohamed-kamel91/tic-tac-toe.git
   cd tic-tac-toe
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Set Up Environment Variables**
   Create a `.env` file in the root directory and add the following variable:

   ```env
   VITE_API_URL=<your-api-url>
   ```

4. **Run the Application**
   ```bash
   npm run dev
   ```
   The app will be accessible at [http://localhost:5000](http://localhost:5000).

## Project Structure

Most of the code lives in the `src` folder and looks something like this:

```sh
src
|
+-- app               # application layer containing:
|   |                 # this folder might differ based on the meta framework used
|   +-- App.tsx       # main application component
|   +-- AppProvider.tsx  # application provider that wraps the entire application with different global providers - this      might also differ based on meta framework used
+-- assets            # assets folder can contain all the static files such as images, fonts, etc.
|
+-- components        # shared components used across the entire application
|
+-- features          # feature based modules
|
+-- hooks             # shared hooks used across the entire application
|
+-- stores            # global state stores
|
+-- utils             # shared utility functions
```

For easy scalability and maintenance, organize most of the code within the features folder. Each feature folder should contain code specific to that feature, keeping things neatly separated. This approach helps prevent mixing feature-related code with shared components, making it simpler to manage and maintain the codebase compared to having many files in a flat folder structure. By adopting this method, you can enhance collaboration, readability, and scalability in the application's architecture.

A feature could have the following structure:

```sh
src/features/specific-feature
|
+-- components  # components scoped to a specific feature
|
+-- hooks       # hooks scoped to a specific feature
|
+-- slices      # state stores for a specific feature
|
+-- types       # typescript types used within the feature
|
+-- utils       # utility functions for a specific feature
```

## Scripts

- `npm run dev`: Start the app in development mode.
- `npm run build`: Build the app for production.
