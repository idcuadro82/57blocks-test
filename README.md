# 57Blocks Frontend Test

## 1 - POC App
You can choose between this API

- Restaurants
- Movies
- Pokemon
- Music

Requirements:
1. Create a view to make the Login, without API call.

    a. Validate the email and password

    b. The next time the application is opened, if I have already logged in, it should send me directly to home

2. Bottom navigation tab bar:

    a. With two pages, one implemented and one dummy

    b. **Home page**: implement the Home list page with:

        i. Scrollable list content.

        ii. Show the first 20 elements from API and request next elements via pagination

        iii. Favorite button on each item, that is persisted between app launches.

3. Detail page: user should be able to navigate to the detail page when the user touches on each item in the home page list.
This page should open in a new page.

#### Nice to have for this POC app:

1. Have a good architecture for the application.
2. Implementing a typeahead input for search in the home page. Filtering elements.
3. Instead of a dummy tab implementing the favorite list.
4. Animation transaction between home and detail page.

## 2- Draw polygon app - (optional)

Please develop another app that users can draw simple polygon with it, the app works like
follow:

1. When users open the app, an empty canvas should be presented.
2. There should have 2 buttons, one button to complete a polygon, the other to reset canvas content.
3. When users touch on the canvas, a vertex will be added into the location where user touches, if there are any existing vertices,
new vertex should be connected to the last added existing vertex with a polyline, when user click on the complete button,
the last added vertex should be connect to the first vertex to form a polygon.
4. When users click the reset button, all vertices should be cleared from the canvas.

# TECH GUIDE

## Getting Started

For the first time you must run:

```bash
npm install
```

## Serve in local

To start a dev local server, run:

```bash
npm start
```

## Build all

To build all the components in a bundle for develop, run:

```bash
npm run build
```

## Good Practices

To check good practices or style guides of our source code.

```bash
npm run lint
```
