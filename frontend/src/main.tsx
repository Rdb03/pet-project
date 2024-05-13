import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import {PersistGate} from "redux-persist/integration/react";
import theme from "./theme.ts";
import {ThemeProvider} from "@mui/material";
import {Provider} from "react-redux";
import {persist, store} from "./app/store.ts";
import {BrowserRouter} from "react-router-dom";
import { GoogleOAuthProvider } from '@react-oauth/google';
import {GOOGLE_CLIENT_ID} from "./constants.ts";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <PersistGate persistor={persist}>
            <GoogleOAuthProvider clientId={GOOGLE_CLIENT_ID}>
                <BrowserRouter>
                    <ThemeProvider theme={theme}>
                        <App/>
                    </ThemeProvider>
                </BrowserRouter>
            </GoogleOAuthProvider>
        </PersistGate>
    </Provider>
)
