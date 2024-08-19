# Travlr Getaways Full Stack Web Application

## Overview
This project is a travel booking website developed for Travlr Getaways. The website serves both customer-facing and admin-facing functionalities, built using the MEAN stack (MongoDB, Express, Angular, Node.js). The application allows customers to search and book travel packages, while the admin site enables administrators to manage packages, customer data, and bookings securely.

## Architecture

### Frontend Development
In this project, I utilized various types of frontend development:

- **Express with Handlebars**: For the customer-facing website, I used Handlebars as the templating engine. This allowed for dynamic rendering of content on the server side, making it easier to manage and display data-driven content. Handlebars templates were used to serve dynamic HTML pages, enabling the application to render JSON data from the backend directly into the frontend views.
- **Single-Page Application**: The admin site was built as a SPA using Angular. Unlike the static HTML approach, Angular allows for a more interactive user experience by dynamically updating the page content without needing to reload the page. This provides a smoother and faster experience for users, particularly when managing large datasets like customer information and travel packages.

### Backend and Database
- **NoSQL MongoDB Database**: The backend uses MongoDB, a NoSQL database, because of its flexibility in handling unstructured data. The nature of travel booking data, which can include various forms of information like customer details, trip itineraries, and pricing, benefits from MongoDB's ability to store data in JSON-like documents, making it easier to scale and adapt as the application grows.

## Functionality

### JSON and JavaScript
- **Difference Between JSON and JavaScript**: JSON (JavaScript Object Notation) is a lightweight data-interchange format that is easy for humans to read and write and easy for machines to parse and generate. While it is based on a subset of JavaScript, JSON is purely a data format and does not include functions or variable declarations. It plays a crucial role in tying together the frontend and backend by allowing data to be exchanged in a structured format between the client and the server.
  
- **Code Refactoring and Reusable Components**: Throughout the development process, I refactored code to enhance functionality and efficiency. For example, I created reusable UI components in Angular, such as forms for entering travel package details. This not only reduced code duplication but also made it easier to maintain and update the UI across different parts of the application.

## Testing

### API Testing and Security
- **Methods, Endpoints, and Security**: Testing a full stack application involves ensuring that each API endpoint correctly handles requests and returns the appropriate responses. This includes testing CRUD operations (Create, Read, Update, Delete) for resources like travel packages and user accounts. Adding layers of security, such as JWT (JSON Web Token) authentication, introduced additional testing complexity, particularly in ensuring that only authorized users could access certain endpoints. I used tools like Postman to automate and verify the testing of secured endpoints.

## Reflection

### Professional Growth
- **Skills Development**: This course has greatly helped me achieve my professional goals. I have significantly strengthened my skills in full stack development, particularly in integrating a NoSQL database with a RESTful API and developing a secure SPA with Angular. I am now more confident in my ability to build and deploy robust, scalable web applications.
