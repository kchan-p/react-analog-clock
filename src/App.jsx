import { useState, useRef, useLayoutEffect } from 'react'
import ClockFace from './clockface/face';
import ClockHands from './clockhands/hands';
import ClockInfo from './info/info';

import './App.css'


function App() {
  const [frameRect, setFrameRect] = useState(null);
  const frameRef = useRef(null);

    // サイズ変更監視
  useLayoutEffect(() => {
    const observer = new ResizeObserver(entries => {
      const { width, height, left, top } = entries[0].contentRect;

      const diameter = width < height ? width : height;
      const radius = diameter / 2;
      const x = left + width / 2;
      const y = top + height / 2;

      setFrameRect({ diameter, radius, x, y });
    });

    observer.observe(frameRef.current);
    return () => observer.disconnect();

  }, []);
  
    // #clock-containerのスタイル定義
  const innerStyle = !frameRect ? {} :
    {
      width: frameRect.diameter + "px",
      height: frameRect.diameter + "px",
      position: "absolute",
      top: (frameRect.y - frameRect.radius) + "px",
      left: (frameRect.x - frameRect.radius) + "px",
    };

  return (
    <>
      <div id="clock-wrap" ref={frameRef} >
        {frameRect &&
          <div id="clock-container" style={innerStyle} >
            <ClockFace radius={frameRect.radius} />
            <ClockHands radius={frameRect.radius} />
          </div>
        }
      </div>
      <ClockInfo />
    </>
  )
}

export default App
