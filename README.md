# Google Clone Project (Built with Next.js)

This project is a Google clone assignment built using Next.js. It replicates Google’s search interface, adding features like voice search and image search. The project makes use of various libraries and custom components for a modular and reusable design.

## Table of Contents
- [Installation](#installation)
- [File Structure](#file-structure)
- [Pages](#pages)
- [Features](#features)
- [Libraries Used](#libraries-used)
- [Components](#components)

---

## Installation

To set up and run this project locally, follow these steps:

### Prerequisites
- Node.js installed on your machine. You can download it from [here](https://nodejs.org/).

### Steps to Run

1. Clone the repository:
   ```bash
   git clone <https://github.com/yashgoyal0110/g-clone-next.git>

2. Navigate to the project folder:
    `cd cd google-clone-nextjs`

3. Install the required dependencies:
    `npm install`

4. Run the development server:
    `npm run dev`

5. Open your browser and go to http://localhost:3000 to view the app


## File Structure

```
google-clone-nextjs/
├── app/
│   ├── Context/
│   │   └── AppContext.jsx          # App-wide context for managing states
│   ├── results/
│   │   └── page.jsx                # Results page for displaying fetched image results
│   ├── speak/
│   │   ├── page.jsx                # Page for voice search functionality
│   │   └── Listening.css           # CSS for the voice search page
│   ├── layout.jsx                  # Main layout for the app
│   ├── page.jsx                    # Home page (Google search)
│   └── app.css                     # Global styles for the app
├── components/                     # Modular components directory
│   ├── ErrorDiv/
│   ├── Footer/
│   ├── GoogleButtons/
│   ├── Header/
│   ├── ImageSearch/
│   ├── InputBoxIcons/
│   ├── LanguageOptions/
│   ├── ResultPage/
│   ├── SearchSection/
├── public/
│   └── images/                     # All image assets used in the app
├── README.md                       # Project documentation
├── package.json                    # Project dependencies and scripts
├── package-lock.json               # Dependency lock file
├── jsconfig.json                   # JavaScript configuration file
├── next.config.mjs                 # Next.js configuration file
├── eslint.config.mjs               # ESLint configuration file
├── .gitignore                      # Git ignore file

```

## Pages

The app contains three main pages:

1. Home Search Page ('/'): This is the main page of the app where users can enter search queries, view suggestions, and initiate image search or voice search.

2. Voice Search Page ('/speak'): This page includes the voice search functionality, enabling users to speak their queries.

3. Results Page ('/results'): This page displays the search results for an image uploaded by the user.