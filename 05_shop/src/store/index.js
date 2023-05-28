import { createStore } from "vuex";
import axios from "axios";
import { FIREBASE_API_KEY } from "@/config/firebase.js";

const store = createStore({
    state: {
        userId: null,
        token: null,
    },
    mutations: {
        setUser(state, payload) {
            state.userId = payload.userId;
            state.token = payload.token;
        }
    },
    actions: {
        // Registrieren beim (Firebase-)Backend
        async signUp(context, payload) {
            // Das, was die Firebase-REST-API gemäß Dokumentation für eine Registrierung erwartet
            // @link: https://firebase.google.com/docs/reference/rest/auth?hl=de#section-create-email-password
            const signUpDO = {
                email: payload.email,
                password: payload.password,
                returnSecureToken: true,
            };
            try {
                const response = await axios
                    .post(
                        `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${FIREBASE_API_KEY}`,
                        signUpDO
                    );
                // console.log(response);
                context.commit('setUser', {
                    userId: response.data.localId,
                    token: response.data.idToken,
                });
            } catch (error) {
                // Hinweis: Die Interpolation des errors ermöglich den Zugriff und das Auslesen aller Informationen der Antwort.
                // console.log({ error });
                const errorMessage = new Error(error.response.data.error.message ?? "UNKNOWN_ERROR");
                throw errorMessage;
            }
        },
    },
    getters: {

    }
});

export default store;