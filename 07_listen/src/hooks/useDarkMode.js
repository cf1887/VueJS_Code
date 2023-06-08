import { ref } from "vue";
import useNotification from "./useNotification";

const { setNotification } = useNotification();
const darkModeActive = ref(false);
const useDarkMode = () => {
    const toggleDarkMode = () => {
        darkModeActive.value = !darkModeActive.value;

        const type = darkModeActive.value ? "Dunkle Ansicht" : "Helle Ansicht";
        return setNotification(`${type} wurde aktiviert.`);
    };
    return {
        darkMode: darkModeActive,
        toggleDarkMode,
    };
};

export default useDarkMode;