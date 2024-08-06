
"use client";
import React, { useState, useRef, useEffect } from 'react';
import { Stack, HStack, Text, Slider, SliderTrack, SliderFilledTrack, SliderThumb, Box, IconButton,Collapse } from '@chakra-ui/react';
import { FaPlay, FaPause } from 'react-icons/fa';
import { CiVolume, CiVolumeHigh, CiVolumeMute } from 'react-icons/ci';
import { MdGraphicEq } from 'react-icons/md';

function AudioPlayer() {
  const [playing, setPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1); // Volume ranges from 0 to 1
  const audioref = useRef<HTMLAudioElement>(null);

  const handleIconClick = () => {
    setPlaying(!playing);
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  useEffect(() => {
    if (playing) {
      audioref.current?.play();
    } 
    
    else {
      audioref.current?.pause();
    }
  }, [playing]);

  useEffect(() => {
    const audio = audioref.current;
    if (audio) {
      const handleTimeUpdate = () => {
        setCurrentTime(audio.currentTime);
      };

      const handleDurationChange = () => {
        setDuration(audio.duration);
      };

      audio.addEventListener('timeupdate', handleTimeUpdate);
      audio.addEventListener('loadedmetadata', handleDurationChange);

      return () => {
        audio.removeEventListener('timeupdate', handleTimeUpdate);
        audio.removeEventListener('loadedmetadata', handleDurationChange);
      };
    }
  }, []);

  const handleSliderChange = (value: number) => {
    if (audioref.current) {
      audioref.current.currentTime = value;
      setCurrentTime(value);
    }
  };

  const handleVolumeChange = (newVolume: number) => {
    if (audioref.current) {
      audioref.current.volume = newVolume;
      setVolume(newVolume);
    }
  };

  const handleMute = () => {
    if (audioref.current) {
      audioref.current.volume = audioref.current.volume === 0 ? volume : 0;
    }
  };

  return (
    <Stack className='md:mx-5 sm:mx-3'>
      <audio ref={audioref} src='https://github.com/rafaelreis-hotmart/Audio-Sample-files/raw/master/sample.mp3'></audio>

      <HStack spacing={8} paddingInline={5}>
        <Text color="white">
          {formatTime(currentTime)}
        </Text>
        <Slider
          aria-label='slider-ex-4'
          value={currentTime}
          min={0}
          max={duration}
          onChange={handleSliderChange}
        >
          <SliderTrack bg='red.100'>
            <SliderFilledTrack bg='tomato' />
          </SliderTrack>
          <SliderThumb boxSize={6}>
            <Box color='tomato' as={MdGraphicEq} />
          </SliderThumb>
        </Slider>
        <Text color="white">
          {formatTime(duration)}
        </Text>
      </HStack>

      <HStack display="flex" justifyContent="center" spacing={6}>
        {playing ? (
          <IconButton aria-label='Pause' icon={<FaPause />} onClick={handleIconClick} />
        ) : (
          <IconButton aria-label='Play' icon={<FaPlay />} onClick={handleIconClick} />
        )}
        <IconButton aria-label='Mute' icon={<CiVolumeMute />} onClick={handleMute} />
        <Slider
          aria-label='volume-slider'
          value={volume}
          min={0}
          max={1}
          step={0.01}
          onChange={handleVolumeChange}
          width="200px"
        >
          <SliderTrack bg='red.100'>
            <SliderFilledTrack bg='tomato' />
          </SliderTrack>
          <SliderThumb boxSize={6}>
            <Box color='tomato' as={CiVolume} />
          </SliderThumb>
        </Slider>
        <IconButton aria-label='Increase Volume' icon={<CiVolumeHigh />} onClick={() => handleVolumeChange(Math.min(volume + 0.1, 1))} />
      </HStack>
    </Stack>
  );
}

export default AudioPlayer;



          // "use client";
          // import React, { ChangeEvent } from 'react'
          // import {
          //   Text,
          //   Stack,
          //   HStack,
          //   Slider,
          //   SliderTrack,
          //   SliderFilledTrack,
          //   SliderThumb,
          //   Box,
          //   IconButton
          // } from '@chakra-ui/react'
          // import { useEffect, useRef, useState } from 'react'
          // import { FaPause, FaPlay } from 'react-icons/fa';
          // import {CiVolume,CiVolumeHigh,CiVolumeMute} from 'react-icons/ci';
          // import { MdGraphicEq } from 'react-icons/md';
          
          // function AudioPlayer() {
          //   const [playing, setPlaying] = useState(false);
          
          //   const [currentTime, setCurrentTime] = useState(0);
          //   const [duration, setDuration] = useState(0);
          //   const [volume, setVolume] = useState(1); 
          
          //   const audioref = useRef<HTMLAudioElement>(null);
          //   const [src,setsrc] = useState<string>('');
          
          //   const handleIconClick = () => {
          //     console.log('Icon clicked');
          //     console.log(audioref.current?.currentTime);
          //     if(audioref.current){
          //       console.log(audioref.current.duration);
          //     }
          //     console.log(audioref);
              
          //     setPlaying(!playing);
          //   };
            
            
          //   useEffect(() => {
          //     if(playing){
          //       audioref.current?.play();
          //     } else{
          //       audioref.current?.pause();
          //     }
          //   },[playing])
          
          //   const handleSliderChange = (value: number) => {
          //     if (audioref.current) {
          //       audioref.current.currentTime = value;
          //       setCurrentTime(value);
          //     }
          //   };
          
          //   return (
          //     <Stack className='md:mx-5'>
          //       <audio ref={audioref} src='https://github.com/rafaelreis-hotmart/Audio-Sample-files/raw/master/sample.mp3'></audio>
          
          //     <HStack spacing={8}>
          //       <Text color="white">
          //         {
          //           currentTime
          //         }
          //       </Text>
          //       <Slider 
          //         aria-label='slider-ex-4' 
          //         defaultValue={audioref.current?.currentTime}
          //         min={0}
          //         max={audioref.current?.duration}
          //         onChange={handleSliderChange}
          //       >
          //         <SliderTrack bg='red.100'>
          //           <SliderFilledTrack bg='tomato' />
          //         </SliderTrack>
          //         <SliderThumb boxSize={6}>
          //           <Box color='tomato' as={MdGraphicEq} />
          //         </SliderThumb>
          //       </Slider>
          //       <Text color="white">
          //         {
          //           Number(audioref?.current?.duration)
          //         }
          //       </Text>
          //     </HStack>
          
          //     <HStack display="flex" justifyContent="center" spacing={6}>
          
          //     {
          //       playing ? 
          //       (
          //         <IconButton aria-label='Search database' icon={<FaPause/>} onClick={handleIconClick}/>
          //       ) :
          //       (
          //         <IconButton aria-label='Search database' icon={<FaPlay/>} onClick={handleIconClick}/>
          //       )
          //     }
          //     <IconButton aria-label='Search database' icon={<CiVolume/>} />
          //     <IconButton aria-label='Search database' icon={<CiVolumeHigh/>} />
          //     <IconButton aria-label='Search database' icon={<CiVolumeMute/>} />
          //     </HStack>
          //   </Stack>
          //   );
          // }
          
          // export default AudioPlayer