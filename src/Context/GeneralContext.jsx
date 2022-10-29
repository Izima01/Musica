import { createContext, useState } from "react";

const AppContext = createContext();

export function AppProvider({ children }) {
    const [navOpen, setNavOpen] = useState(false);

    const toggleHam = () => {
        setNavOpen((navOpen) => !navOpen);
    };

    return (
        <AppContext.Provider value={{ navOpen, toggleHam }}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContext;