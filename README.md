## Project Introduction
Many websites do more than just give you information. Sites like GitHub, Zillow, Mint and Treehouse let users do things. They act like programs you run on your computer. These web applications, often include pages for looking at your profile, what you've done in the week or what you need to get done. These "dashboards" act like your control panel for controlling the web app.

In this project, you'll take a mockup and a few icons and build a beautiful, web dashboard complete with JavaScript-driven charts and graphs. You only need to take the design and create the HTML, CSS and JavaScript functionality for this one page -- you don't need to create other pages, or build any backend or database functionality.

**NOTE:**  The Front End Web Development Techdegree is meant to train you in HTML, CSS and JavaScript, and let you practice and show your mastery of these fundamental building blocks of the web. Because of that, please avoid using frameworks like Bootstrap, Foundation, Skeleton, and so on for this project. Even though you may end up using frameworks like these professionally, you still need to know and be able to implement designs with your own knowledge of HTML, CSS and JavaScript.

In addition, please avoid submitting any projects that rely on a server-side technology like PHP or Ruby on Rails.

## Before you start
-   #### Download the project files. We've given you the following files:
    
    -   dashboard.png (a mockup of the finished web application page)
    -   icon files (8 svg images):
        -   4 navigation buttons on the left side of the page
        -   "Bell" icon used to identify alerts
        -   Twitter, Facebook and Google+ icons
    
-   #### Find a chart library. We recommend chart.js. When adding your chart library, please use the CDN links, DO NOT install via node/bower for this project. Use the link for the  _chart.js_  library  [here](https://cdnjs.com/libraries/Chart.js)

## Project Instructions
To complete this project, follow the instructions below. If you get stuck, ask a question on Slack or in the Treehouse Community.

-   #### Create a responsive web page from the supplied  `dashboard.png`  mockup with the following:
    
    -   Header with app name, notification icon badge, and profile avatar and name.
    -   SVG icon based navigation with the following links: Dashboard, Members, Visits, and Settings. NOTE: You only have to build out the main dashboard page, not any of the other pages.
    -   Main content area where the specific dashboard widgets will go.
    -   Ensure that the design responds well to mobile (320px), tablet (768px) and desktop (1024px) screen sizes.
    -   Use CSS grid to lay out the main elements (header, sidebar navigation, main content) on the page.
    
-   #### Demo alert notification.
    
    -   In the dashboard.png, this appears as the purple bar near the top of the page with the word "Alert" in it. When the page loads this alert should be visible, but the user should be able to close the alert by clicking the X button.
    -   Include a notification icon in the navigation header. Use the icon-bell.svg file. In the mockup, this is the bell in the top right corner of the page.
    -   Add a CSS transition to the bell icon when the user hovers over it.
    
-   #### Chart widgets
    
    -   Using chart.js, create and include the information for the following chart widgets, as shown in the mockup for the:
        -   Web Traffic (line chart)
        -   Daily Traffic Bar Chart (bar chart)
        -   Mobile User Pie Chart (donut chart)
    -   Style the charts to match the overall style of the dashboard.
    -   You will need to make up this data -- you can see the mockup for sample data.
    
-   #### Social Stats Widget
    
    -   Create a widget (or three separate widgets) to display social network stats for Facebook, Twitter, and Google+.
    -   Use the provided SVG icons for each of the social networks.
    -   SVG icons are added as inline SVG's.
    -   SVG fill colors have been changed to match the mockups.
    -   Style the social information to match the corresponding social network.
    -   Style to match the overall look and feel of the dashboard.
    
-   #### New Members and Recent Activity Widgets
    
    -   Create widgets that list users for both widgets.
    -   Include avatars for each member (member avatars are inside images folder).
    -   Add the information for each user as shown in the mockup, such as Member name, email address, Sign up Date etc.
    
-   #### Message User Widget
    
    -   Create a field for searching for a user.
        -   You don't have to add real search functionality, but if you attempt to get the exceeds grade, you'll need to make up some user data.
    -   Add a message textarea field that lets you add a message.
    -   Create a “Send” button and use JS to allow you to submit the form and display a confirmation the message was sent. You won't actually submit the form, just simulate the action using JavaScript.
    -   Use JS to display error messages if a user isn’t selected or message field is empty.
    -   Style to match the overall look and feel of the dashboard.
    
-   #### Settings Widget
    
    -   Create a settings widget to display various setting options using different form elements.
    -   Create an on/off widget for whether to send email notifications.
    -   Create an on/off widget for whether to set the profile to public or private.
    -   Create a drop-down to select the timezone.
    -   Add Save and Cancel buttons (these do not have to do anything functional).
    -   Style to match the overall look and feel of the dashboard.