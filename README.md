# Google Clone Project (Built with Next.js)

This project is a Google clone assignment built using Next.js. It replicates Google’s search interface, adding features like voice search and image search. The project makes use of various libraries and custom components for a modular and reusable design.

## Table of Contents
- [Installation](#installation)
- [File Structure](#file-structure)
- [Pages](#pages)
- [Features](#features)
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
    `cd google-clone-nextjs`

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

1. Home Search Page `('/')`: This is the main page of the app where users can enter search queries, view suggestions, and initiate image search or voice search.

2. Voice Search Page `('/speak')`: This page includes the voice search functionality.

3. Results Page `('/results')`: This page displays the search results for an image uploaded by the user.


## Features

1. **UI Same as og Google**
    - Tried to design UI as close as possible to original [google.com](https://www.google.com/)

2. **Search Functionality**  
   - Users can type their queries, and the app will display suggestions dynamically as they type.

3. **Voice Search**  
   - Integrated voice search feature page.

4. **Upload popup**
    - A proper popup for uploading image is design with proper error handling of `invalid urls`

5. **Image Search**  
   - Users can upload images, and the app will fetch results of the uploaded image with real time cropping featutres.

6. **Shimmer Effect**
    - Proper shimmer effect is applied till the images loads

7. **Responsive Design**  
   - Tried do design the app as responsive as possible.

8. **Modular Components**  
   - The app is built with modularity in mind, ensuring it is easy to maintain and extend in the future. Each feature is encapsulated in its own component.