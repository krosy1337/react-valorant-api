import React, {FC, useEffect, useRef, useState} from 'react';
import {IconButton, Slider, Stack, useTheme} from "@mui/material";
import {PauseRounded, PlayArrowRounded, VolumeUpRounded, VolumeDownRounded, VolumeOffRounded} from "@mui/icons-material";
import {common} from "@mui/material/colors";

interface AgentVoiceProps {
    url?: string
}

const AgentVoice: FC<AgentVoiceProps> = ({url}) => {
    const theme = useTheme()
    const [currentTime, setCurrentTime] = useState<number>(0)
    const [isPaused, setPaused] = useState<boolean>(true)
    const [duration] = useState<number>(100)
    const [maxVolume] = useState<number>(10)
    const [volume, setVolume] = useState<number>(maxVolume)

    const audioRef = useRef<HTMLAudioElement>(null)

    const timeUpdateHandler = () => {
        if (audioRef.current) {
            const audionCurrentTime = audioRef.current.currentTime
            const audioDuration = audioRef.current.duration

            setCurrentTime((audionCurrentTime / audioDuration) * duration)

            if (audionCurrentTime === audioDuration) {
                setPaused(true)
                setCurrentTime(0)
                audioRef.current.currentTime = 0
            }
        }
    }
    const positionChangeHandler = (value: number | number[]) => {
        if (audioRef.current) {
            const audioDuration = audioRef.current.duration
            audioRef.current.currentTime = (value as number * (audioDuration / duration))
        }
    }

    const volumeChangeHandler = (value: number | number[]) => {
        if (audioRef.current) {
            audioRef.current.volume = (value as number) * (1 / maxVolume)
        }
    }
    const volumeUpdateHandler = () => {
        if (audioRef.current) {
            setVolume(audioRef.current.volume * maxVolume)
        }

    }

    useEffect(() => {
        if (audioRef.current) {
            if (isPaused) {
                audioRef.current.pause()
            } else {
                audioRef.current.play()
            }
        }
    }, [isPaused])

    return (
        <Stack sx={{marginTop: 2, height: 50}} direction="row" alignItems="baseline">
            <Stack direction="row" alignItems="center" sx={{width: "100%"}}>
                <IconButton
                    onClick={() => setPaused((prev) => !prev)}>
                    {isPaused
                        ?
                        (<PlayArrowRounded sx={{fontSize: '3rem'}} htmlColor={common.white}/>)
                        :
                        (<PauseRounded sx={{fontSize: '3rem'}} htmlColor={theme.palette.primary.main}/>)}
                </IconButton>
                <Slider value={currentTime} size="small"
                        min={0} max={duration} step={1}
                        sx={{color: isPaused ? common.white : "primary.main"}}
                        onChange={(_, value) => positionChangeHandler(value)}/>
            </Stack>
            <Stack direction="row" alignItems="end" sx={{height: 50}}>
                <Slider value={volume} size="small"
                        min={0} max={maxVolume} step={1}
                        orientation="vertical"
                        onChange={(_, value) => volumeChangeHandler(value)} />
                {volume >= maxVolume/2 && <VolumeUpRounded htmlColor={theme.palette.primary.main} />}
                {volume < maxVolume/2 && volume > 0 && <VolumeDownRounded htmlColor={theme.palette.primary.main} />}
                {volume === 0 && <VolumeOffRounded htmlColor={theme.palette.primary.main} />}
            </Stack>

            <audio ref={audioRef} src={url}
                   onTimeUpdate={timeUpdateHandler}
                   onVolumeChange={volumeUpdateHandler}/>
        </Stack>
    );
};

export default AgentVoice;