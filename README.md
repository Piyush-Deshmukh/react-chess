## React Chess

React Chess is "just a chessboard" as lightweight as it can possibly be. It is connected to this [chess server](https://github.com/chesslablab/chess-server) as well as to this [chess api](https://github.com/chesslablab/chess-api).

### Demo

Check out [this demo](https://www.chesslablab.com/) to see it in action.

### Install and Setup

Make sure that both the chess server and the API are set up properly as per the [`src/App.js`](https://github.com/chesslablab/react-chess/blob/master/src/App.js) file.

```js
import Chess from 'features/Chess';

const App = () => {
  return (
    <Chess
      props={{
        api: {
          prot: 'https',
          host: 'pchess.net',
          port: '443'
        },
        ws: {
          prot: 'wss',
          host: 'pchess.net',
          port: '8443'
        }
      }}
    />
  );
}

export default App;
```

Create an `.env` file.

```
cp .env.example .env
```

Install the `npm` packages.

```
npm install
```

Add the following entry to your `/etc/hosts` file.

```
127.0.0.1       www.chesslablab.com
```

Start the app.

```
npm start
```

### Build the App

Build the app for production.

```
npm run build
```

### License

[The MIT License](https://github.com/chesslablab/react-chess/blob/master/LICENSE).

### Contributions

See the [contributing guidelines](https://github.com/chesslablab/redux-chess/blob/master/CONTRIBUTING.md).

Happy learning and coding!
