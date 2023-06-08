import { reactive } from "vue";

const data = reactive({
    message: "",
    active: false,
});

// Hier drin sind die Sachen definiert, auf die wir von außen zugreifen wollen.
const useNotification = () => {
    const setNotification = (newMessage) => {
        data.message = newMessage;
        return (data.active = true);
    };
    const toggleNotification = () => {
        data.active = !data.active;
    };

    return {
        notification: data,
        setNotification,
        toggleNotification,
    }
};

export default useNotification;
