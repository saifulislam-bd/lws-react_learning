import  { useState, useEffect } from 'react'


export default function useSecondsTimer(defaultClock = 0) {
    const [time, setTime] = useState(defaultClock);
    const [playing, setPlaying] = useState(true);

    const tick = (e) => {
        e && e.preventDefault()
        if (time > 0 && playing) {
            setTime(time - 1)
        }
    }

    const handleReset = (e) => {
        e && e.preventDefault()
        setTime(defaultClock)
    }

    const togglePlayPause = (e) => {
        e && e.preventDefault()
        setPlaying(!playing)
    }

    useEffect(() => {
        let timerId = setInterval(tick, 1000);
        return () => clearInterval(timerId);
    }, [time, playing])


    return [time, playing, togglePlayPause, handleReset]
}
