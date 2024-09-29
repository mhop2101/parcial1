// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
    .use(initReactI18next) // pasa i18n al react-i18next.
    .init({
        resources: {
            es: {
                translation: {
                    logIn: "Iniciar sesión",
                    email: "Correo electrónico",
                    password: "Contraseña",
                    running: "Correr",
                    cycling: "Ciclismo",
                    swimming: "Natación",
                }
            },
            en: {
                translation: {
                    logIn: "Log in",
                    email: "Email",
                    password: "Password",
                    running: "Running",
                    cycling: "Cycling",
                    swimming: "Swimming",
                }
            }
        },
        lng: "es",
        fallbackLng: "en",
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
