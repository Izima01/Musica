import { createContext, useState } from "react";
import peruL from '../assets/Peru - Fireboy Dml  Ed Sheeran (128).mp3';
import james from '../assets/james.png';

export const defaultSong = {audio: peruL, title: 'Peru', artist: 'Fireboy Dml ft Ed Sheeran', cover: james, duration: "3:07", id:"default" };
const AppContext = createContext();

export function AppProvider({ children }) {
    const [navOpen, setNavOpen] = useState(false);
    const [liked, setLiked] = useState([]);
    const [isPlaying, setisPlaying] = useState(false);
    const [nowPlaying, setNowPlaying] = useState([defaultSong]);
    const [currentSongIndex, setCurrentSongIndex] = useState(0);
    const [currentSong, setCurrentSong] = useState(nowPlaying[currentSongIndex]);


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

    const playPause = (value) => {
        value
        ? setisPlaying(true)
        : setisPlaying(false);
    };

    return (
        <AppContext.Provider value={{ navOpen, toggleHam, likedAlbumNames, handleLiked, playPause, currentSong, setCurrentSong, currentSongIndex, setCurrentSongIndex, nowPlaying, setNowPlaying, isPlaying, setisPlaying }}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContext;