import axios from "axios";
import { FIREBASE_API_KEY } from "@/config/firebase.js";

let timer;

const state = {
    userId: null,
    token: null,
};
const mutations = {
    setUser(state, payload) {
        state.userId = payload.userId;
        state.token = payload.token;
    },
};
const actions = {
    auth(context, payload) {
        let url = "";
        if (payload.mode === "signin") {
            url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${FIREBASE_API_KEY}`;
        } else if (payload.mode === "signup") {
            url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${FIREBASE_API_KEY}`;
        } else {
            return;
        }

        const authDO = {
            email: payload.email,
            password: payload.password,
            returnSecureToken: true,
        };

        // Das, was die Firebase-REST-API gemäß Dokumentation für eine Registrierung erwartet
        // @link: https://firebase.google.com/docs/reference/rest/auth?hl=de#section-create-email-password
        return axios
            .post(url, authDO)
            .then((response) => {
                // Ablaufdatum auslesen (mit 1000 multiplizieren, weil es in Sekunden angegeben wird und wir Millisekunden brauchen)
                const expiresIn = Number(response.data.expiresIn) * 1000;
                const expDate = new Date().getTime() + expiresIn;
                // Daten im localStorage speichern
                localStorage.setItem("token", response.data.idToken);
                localStorage.setItem("userId", response.data.localId);
                localStorage.setItem("expiresIn", expDate);
                // Automatisch nach Ablauf des Tokens (= eine Stunde) ausloggen
                timer = setTimeout(() => {
                    context.dispatch('autoSignOut')
                }, expiresIn);
                // Commit (rufe Mutation auf)
                context.commit("setUser", {
                    userId: response.data.localId,
                    token: response.data.idToken,
                });
            })
            .catch((error) => {
                const errorMessage = new Error(
                    error.response.data.error.message ?? "UNKNOWN_ERROR"
                );
                throw errorMessage;
            });
    },
    // Registrieren beim (Firebase-)Backend
    signUp(context, payload) {
        // Der '...-Operator' heißt Spread-Operator
        const signUpDO = {
            ...payload,
            mode: "signup",
        };
        return context.dispatch("auth", signUpDO);
    },
    // Einloggen beim (Firebase-)Backend
    signIn(context, payload) {
        // Der '...-Operator' heißt Spread-Operator
        const signInDO = {
            ...payload,
            mode: "signin",
        };
        return context.dispatch("auth", signInDO);
    },
    // Automatisches Einloggen
    autoSignIn(context) {
        const token = localStorage.getItem('token');
        const userId = localStorage.getItem('userId');
        const expiresIn = localStorage.getItem('expiresIn');
        const timeLeft = Number(expiresIn) - new Date().getTime();
        // Wenn der Token abgelaufen ist
        if (timeLeft < 0) {
            // Hier könnte man mit dem 'refreshToken' von Firebase ein neues Token holen.
            // Der Ansatz des Dozenten sieht aber keine Token-Erneuerung vor.
            // Stattdessen wird die Funktion einfach beendet.
            return;
        }
        // Setze Timer zurück (man ist schließlich neu eingeloggt)
        timer = setTimeout(() => {
            context.dispatch('autoSignOut');
        }, expiresIn);
        // Wenn token uns UserId gesetzt sind
        if (token && userId) {
            // Rufe Mutation 'setUser' auf
            context.commit('setUser', {
                token: token,
                userId: userId,
            });
        }
    },
    // Ausloggen beim (Firebase-)Backend
    signOut(context) {
        // Resette localStorage
        localStorage.removeItem("token");
        localStorage.removeItem("userId");
        localStorage.removeItem("expiresIn");
        // Entferne den Timer für automatisches Ausloggen
        clearTimeout(timer);
        // Setze Inhalte im Store zurück
        context.commit('setUser', {
            token: null,
            userId: null,
        });
    },
    // Automatisches Ausloggen
    autoSignOut(context) {
        // Weitere Serverkommunikation möglich, falls notwendig
        context.dispatch('signOut');
    },
};
const getters = {
    isAuthenticated: (state) => Boolean(state.token),
};

const authModule = {
    state,
    mutations,
    actions,
    getters,
};

export default authModule;
