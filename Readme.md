# ThisCover

ThisCover is an app that tries to emulate the feeling of browsing through books at the library or at a bookstore.
Choose a genre and then simply swipe on books covers left or right, to either discard or save them.
They are stored in your phone storage so you can go back to them later.
You can also click on the books to get more details.

It was built using react-native, expo and react-native-reanimated 2.

## Running the app

If you want to build the app and run it, you might need an API key (Mock data is available if you don't use the API key).

Then, simply create a .env file with

```
REACT_APP_API_KEY = YOUR_API_KEY
```

## Api Issues

I built this app with a temporary API that has a very low rate (20/hour). If you want to try out the app you can get an API key [here](https://rapidapi.com/roftcomp-laGmBwlWLm/api/hapi-books/)

Otherwise, I have also added some mock data so that you can see the layout of every screen even when the API fails.

## Future updates

In the future, I plan to integrate Google login and Google Books API
Other features, like marking books as read and overall between saved books management will also be made.
