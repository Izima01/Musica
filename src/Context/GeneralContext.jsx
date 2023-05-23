import { createContext, useMemo, useState } from "react";
// import peruL from '../assets/Peru - Fireboy Dml  Ed Sheeran (128).mp3';
// import james from '../assets/james.png';

// export const defaultSong = {audio: peruL, title: 'Peru', artist: 'Fireboy Dml ft Ed Sheeran', cover: james, duration: "3:07", id:"default" };
const AppContext = createContext();

export function AppProvider({ children }) {
    const [navOpen, setNavOpen] = useState(false);
    const [liked, setLiked] = useState([]);
    const [isPlaying, setisPlaying] = useState(false);
    const [nowPlaying, setNowPlaying] = useState([]);
    const [currentSongIndex, setCurrentSongIndex] = useState(0);
    const currentSong = nowPlaying[currentSongIndex];
    const [selectedChart, setSelected] = useState({});

    const likedAlbumNames = liked.map(like => like.albumName);
    const [page, setPage] = useState("/");

    const toggleHam = () => {
        setNavOpen((navOpen) => !navOpen);
    };

    const handleLiked = (albumName, albumCover, artist, files) => {
        if (likedAlbumNames.includes(albumName)) {
            setLiked((liked) => liked.filter(like => like.albumName !== albumName));
        } else {
            setLiked((liked) => [...liked, {albumName, albumCover, artist, files}]);
        }
    };

    const playPause = (value) => {
        value
        ? setisPlaying(true)
        : setisPlaying(false);
    };
    
    const contextData = useMemo(() => ({
        navOpen, setNavOpen, liked, page, setPage, isPlaying, setisPlaying, nowPlaying, setNowPlaying, currentSongIndex, setCurrentSongIndex, currentSong, selectedChart, setSelected, likedAlbumNames, toggleHam, handleLiked, playPause
    }), [navOpen, liked, isPlaying, nowPlaying, currentSongIndex, currentSong, selectedChart, page]);

    return (
        <AppContext.Provider value={contextData}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContext;