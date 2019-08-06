# MyBooks App in React Native

MyBooks is a sample application created in the React Native. The main purpose of this application is to create an app using mostly all the components in it. The app includes Authentication using Redux-Store and AsyncStorage. The animation library is also used in the app for better user experience.


## Dependencies of this project:

```python
react: 16.8.6
react-native: 0.60.4
native-base: ^2.13.4
react-native-community/async-storage: ^1.6.1
react-native-animatable: ^1.3.2
react-native-banner-carousel: ^1.03 
react-native-elements: ^1.1.0
react-native-file-viewer: ^2.0.0
react-native-gesture-handler: ^1.3.0
react-native-simple-toast: ^0.1.1
react-native-super-grid: ^3.0.8
react-native-vector-icons: ^6.6.0
react-navigation: ^3.11.1
react-navigation-transitions: ^1.0.12
react-redux: ^7.1.0
redux: ^4.0.4
rn-fetch-blob: ^0.10.16
```

## Dashboard Screen
When the app starts, the Dashboard screen appears. In this screen, there is a Category section where the category list is displayed. Then there is the Top Picks section where New arrival Books are displayed. Here, a vertical scroll list is used for the Top Picks. All the data is defined in the constant file. Also, the tab navigator is used on the dashboard screen.

![Dashboard Screen](https://github.com/purvangvasani/react-native-mybooks-app/blob/master/src/screenshots/Dashboard.png?raw=true)

## Category Wise Book Screen

From the dashboard, when the user clicks on any of the categories, the list of the book will appear.

![Category Wise Book Screen](https://github.com/purvangvasani/react-native-mybooks-app/blob/master/src/screenshots/CategoryWiseBooks.png?raw=true)

## Search Screen

In the Dashboard Tab Navigator, the second screen is the Search screen. The text box is used to search the book from the given list of books. The filtering of the book is done here.

![Search Screen](https://github.com/purvangvasani/react-native-mybooks-app/blob/master/src/screenshots/SearchingScreen.png?raw=true)

## Bookmark Screen

The next tab screen is the Bookmark Screen. When clicked on any bookmarked book, the detail page of the particular book will be open. 

![Bookmark Screen](https://github.com/purvangvasani/react-native-mybooks-app/blob/master/src/screenshots/BookmarkScreen.png?raw=true)

## Book Detail Screen

The detail screen shows all the details of the book. There is a favourite icon which on clicked, added to the My Collection list. The slider is also used which is statically displayed. The short description of the book is also available. The download option is available at the bottom left corner. The book PDF is downloaded when clicked.

![Book Detail Screen](https://github.com/purvangvasani/react-native-mybooks-app/blob/master/src/screenshots/BookDetailScreen.png?raw=true)

## Profile Screen

The profile screen is the last tab screen of the Dashboard. The user icon, name, and email id displayed on the screen. There are two buttons. 1) My Collections - which shows favourite marked books. 2) Requested Booklist - which shows Requested book list. The user can also request the book by filling the form. At last, there is a logout button.

![Profile Detail Screen](https://github.com/purvangvasani/react-native-mybooks-app/blob/master/src/screenshots/ProfileScreen.png?raw=true)

## MyCollection Screen

If the My Collection screen is empty, the empty message with the empty box image is shown to the user.

![MyCollection Detail Screen](https://github.com/purvangvasani/react-native-mybooks-app/blob/master/src/screenshots/MyCollectionScreen.png?raw=true)

When the user marks any book as a favourite, that book will appear on this screen. Basic detail is shown to the user such as an image of the book, name and author name. Delete icon is made available so that the user can remove the book from the favourite list.

![MyCollection Detail Screen](https://github.com/purvangvasani/react-native-mybooks-app/blob/master/src/screenshots/CollectionList.png?raw=true)

## Request Book Form Screen

The form consists of the following fields:
Book Name, 
Author Name, 
Description, 
Category, 
Ratings. 
These fields are used for demo purpose only. As the user fills all the fields and clicks on the submit button, they can view their requested book list from the Profile screen.


![Request Book Form Screen](https://github.com/purvangvasani/react-native-mybooks-app/blob/master/src/screenshots/RequestBookScreen.png?raw=true)

## Requested Book List Screen

The list shows the default icon of the book, Name of the requested book, category, and author name.


![Requested Book List Screen](https://github.com/purvangvasani/react-native-mybooks-app/blob/master/src/screenshots/RequestedBookList.png?raw=true)

## Login Screen

The user can log in using email and password. Also, by chance, if you forget your password, then there is a link given for it. 

## Register Screen

If you are new to the app, then you can also register yourself from the Registration form.

![Register Screen](https://github.com/purvangvasani/react-native-mybooks-app/blob/master/src/screenshots/RegisterScreen.png?raw=true)

## Drawer Menu

The drawer menu shows the app icon, login user name, and screen list.

![Drawer Menu](https://github.com/purvangvasani/react-native-mybooks-app/blob/master/src/screenshots/DrawerNavigator.png?raw=true)
