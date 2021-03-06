// @flow

import type { Node } from 'react';

import { useState, useRef, useEffect, useCallback } from 'react';
import Slider from 'rc-slider';
import styled from 'styled-components';

import { useCastState } from '../CastContext';

const castController = electron.remote.require('./CastController').default;

const SliderContainer = styled.div({
  marginBottom: '8px',
  '.rc-slider-track': {
    backgroundColor: 'deeppink',
  },
  '.rc-slider-dot-active': {
    borderColor: 'deeppink',
  },
  '.rc-slider-handle': {
    border: 'solid 2px deeppink',
  },
});

function MySlider({ totalPlayTime, currentTime }) {
  const [isDragging, setIsDragging] = useState(false);
  const [sliderValue, setSliderValue] = useState(currentTime);
  const ref = useRef();

  useEffect(() => {
    if (!isDragging) {
      setSliderValue(currentTime);
    }
  }, [currentTime, isDragging]);

  return (
    <>
      <SliderContainer>
        <Slider
          max={totalPlayTime}
          dots
          value={sliderValue}
          onBeforeChange={() => {
            setIsDragging(true);
          }}
          onAfterChange={async (value) => {
            await castController.seekTo(value);
            setIsDragging(false);
            if (ref.current != null) {
              // Weird things happen when the slider stays with focus
              ref.current.blur();
            }
          }}
          onChange={(value) => {
            setSliderValue(value);
          }}
          ref={ref}
        />
      </SliderContainer>
      {formatTime(sliderValue)}
      {' / '}
      {formatTime(totalPlayTime)}
    </>
  );
}

const formatTime = (input: number) => {
  const hours = Math.floor(input / 3600);
  const minutes = Math.floor((input - hours * 3600) / 60);
  const seconds = Math.floor(input - hours * 3600 - minutes * 60);
  return [hours, minutes, seconds].map((i) => i.toString().padStart(2, '0')).join(':');
};
export default function Timer(): Node {
  const [currentTime, setCurrentTime] = useState(0);
  const [totalPlayTime, setTotalPlaytime] = useState(0);
  const ref = useRef(null);
  const { castState, movie } = useCastState();

  const fetchTime = useCallback(async () => {
    const time = await castController.getCurrentTime();
    if (movie != null) {
      localStorage.setItem(movie, time);
    }
    setCurrentTime(time);
  }, [movie]);

  useEffect(() => {
    if (castState === 'casting') {
      ref.current = setInterval(fetchTime, 1000);
    }
    return () => {
      if (ref.current != null) {
        clearInterval(ref.current);
        ref.current = null;
      }
    };
  }, [castState, fetchTime]);

  useEffect(() => {
    setTotalPlaytime(castController.getTotalPlayTime());
  }, []);

  return (
    <div>
      <MySlider currentTime={currentTime} totalPlayTime={totalPlayTime} />
    </div>
  );
}
