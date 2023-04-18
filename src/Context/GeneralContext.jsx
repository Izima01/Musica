import { createContext, useEffect, useMemo, useState } from "react";
import peruL from '../assets/Peru - Fireboy Dml  Ed Sheeran (128).mp3';
import james from '../assets/james.png';
import { useLocation } from "react-router-dom";

export const defaultSong = {audio: peruL, title: 'Peru', artist: 'Fireboy Dml ft Ed Sheeran', cover: james, duration: "3:07", id:"default" };
const AppContext = createContext();

export function AppProvider({ children }) {
    const [navOpen, setNavOpen] = useState(false);
    const [liked, setLiked] = useState([]);
    const [collection, setCollection] = useState([]);
    const [isPlaying, setisPlaying] = useState(false);
    const [nowPlaying, setNowPlaying] = useState([defaultSong]);
    const [currentSongIndex, setCurrentSongIndex] = useState(0);
    const currentSong = nowPlaying[currentSongIndex];
    const [selectedChart, setSelected] = useState({});

    const likedAlbumNames = liked.map(like => like.albumName);
    const collectionNames = collection.map(collect => collect.albumName);
    const loc = useLocation();
    const [page, setPage] = useState("");

    useEffect(() => {
        setPage(loc.pathname.substring(10));
    }, [loc]);

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

    const addToCollection = (albumName, albumCover, artist, files) => {
        if (collectionNames.includes(albumName)) {
            setCollection((album) => album.filter(alb => alb.albumName !== albumName));
        } else {
            setCollection((album) => [...album, {albumName, albumCover, artist, files}]);
        }
    };

    const playPause = (value) => {
        value
        ? setisPlaying(true)
        : setisPlaying(false);
    };
    
    const contextData = useMemo(() => ({
        navOpen, setNavOpen, liked, page, collection, isPlaying, setisPlaying, nowPlaying, setNowPlaying, currentSongIndex, setCurrentSongIndex, currentSong, selectedChart, setSelected, likedAlbumNames, collectionNames, toggleHam, handleLiked, addToCollection, playPause
    }), [navOpen, liked, collection, isPlaying, nowPlaying, currentSongIndex, currentSong, selectedChart, likedAlbumNames, collectionNames]);

    return (
        <AppContext.Provider value={contextData}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContext;