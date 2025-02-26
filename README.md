# My Project

This is a assignment submission with four main components handling API data fetching, local storage, and user input validation.

## Components (Located in `src/components`)

### 1. `Dropdown.jsx`
- Fetches a list of names from an API.
- Stores the `id` of the selected name.
- Using the `id`, we can fetch more details about the user from another API.

### 2. `Display.jsx`
- Fetches user details from an API.
- Retrieves the stored `id` from local storage.
- Displays user details like email, etc.

### 3. `Final.jsx`
- Allows the user to add a note.
- Shows an alert if the note is empty.

### 4. `Summary.jsx`
- Combines `Display.jsx` and `Final.jsx`.
- Shows user details along with the note section.

---

### Setup Instructions
1. Clone the repository.
2. cd rabbit
3. Run `npm install` to install dependencies.
4. Start the development server with `npm run dev`.

### Notes
- Make sure the API endpoints are accessible.
- Local storage is used for storing the selected user ID.

---

### Architecture of Assignment
<img width="671" alt="Screenshot 2025-02-26 at 10 11 32 PM" src="https://github.com/user-attachments/assets/44ccabdd-f112-49eb-90cb-b84f4f7977c3" />


---

