import useLocalStorage from "./useLocalStorage"

export default function useDarkMode(){
    const[darkMode, setDArkMode] = useLocalStorage("darkModeOn")
    return[darkMode, setDarkMode];
}