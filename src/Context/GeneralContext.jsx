import { createContext, useState } from "react";

const AppContext = createContext();

export function AppProvider({ children }) {
    const [navOpen, setNavOpen] = useState(false);
    const [liked, setLiked] = useState([]);
    const [playing, setPlaying] = useState({});
    const likedAlbumNames = liked.map(like => like.albumName);

    const toggleHam = () => {
        setNavOpen((navOpen) => !navOpen);
    };

    const handleLiked = (albumName, albumCover, artist, time) => {
        if (likedAlbumNames.includes(albumName)) {
            setLiked((liked) => liked.filter(like => like.albumName !== albumName));
        } else {
            setLiked((liked) => [...liked, {albumName, albumCover, artist, time}]);
        }
    };

    return (
        <AppContext.Provider value={{ navOpen, toggleHam, likedAlbumNames, handleLiked, playing, setPlaying }}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContext;