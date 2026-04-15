# Simple TODO app

## How to run the app

1. Download the code from GitHub and navigate to the project directory in your terminal.
2. Run `pnpm install` to install the dependencies.
3. Run `pnpm dev` to start the development server.
4. Open your browser and navigate to `http://localhost:5173` to see the app in action.
5. You can add, complete, and delete TODO items. The app will remember your TODOs even if you refresh the page, thanks to local storage.
6. You can also toggle between light and dark themes using the theme toggle in the navbar, and switch between the traditional and AI assisted modes.

## AI Used

The only AI used in this project are the Copilot code suggestions, and Github Copilot Chat with Claude Haiku 4.5. Copilot wrote the whole aiSupported view along with components located in `src/components/ai`. The code outside of these files were written mostly by me, using only code suggestions, documentation and my own knowledge.

Prompts used for Copilot Chat:
`you're a frontend developer tasked with creating a rather simple todo app, it should have a function to add a todo to the list, remove todo from list, and mark it as complete. there should be a FAB button that opens an input to provide the name of the todo. for state management you should use the provided useTodos zustand store and for UI components you can use the MUI 9.0 library along with mui icons. also add the navbar that was created in components, and make sure the app looks good both on mobile and desktop. don't use the todo and todoinput and todolist components - write those yourself` - this prompt created most of the ai view, along with components.

`show todos in two sections for completed and incomplete todos` - this prompt created the completed and incomplete sections in the ai view. which I forgot to add to the previous prompt.

`refactor the components into separate files, but keep them in components/ai/` - after everything was written, I asked copilot to refactor the code into separate components, which it did.

AI Code suggestions also helped write some of this README
