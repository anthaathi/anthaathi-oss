import { useStyletron } from 'baseui';
import React, { forwardRef, useCallback, useRef, useState } from 'react';
import { useRecoilState } from 'recoil';
import { splitViewAtom } from './atom';

// TODO: FIX THIS BUGGY COMPONENT
export const SplitView = ({
  left,
  right,
  id,
}: {
  left: React.ReactNode;
  right: React.ReactNode;
  id: string;
}) => {
  const [css, $theme] = useStyletron();

  const rootRef = useRef<HTMLDivElement>(null);

  const [hovering, setHovering] = useState(false);

  const resizerRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);

  const x = useRef(0);

  const [swipeMemory, setSwipeMemory] = useRecoilState(splitViewAtom);

  // Width of left side
  const leftWidth = useRef(0);

  const mouseUpHandler = useCallback(() => {
    resizerRef.current!!.style.removeProperty('cursor');
    document.body.style.removeProperty('cursor');

    leftRef.current!!.style.removeProperty('user-select');
    leftRef.current!!.style.removeProperty('pointer-events');

    rightRef.current!!.style.removeProperty('user-select');
    rightRef.current!!.style.removeProperty('pointer-events');

    setHovering(false);

    // Remove the handlers of `mousemove` and `mouseup`
    document.removeEventListener('mousemove', mouseMoveHandler);
    document.removeEventListener('mouseup', mouseUpHandler);
  }, []);

  const mouseMoveHandler = useCallback((e: MouseEvent) => {
    // How far the mouse has been moved
    const dx = e.clientX - x.current;

    const newLeftWidth =
      ((leftWidth.current + dx) * 100) /
      rootRef?.current!!.getBoundingClientRect().width;

    leftRef.current!!.style.width = `${newLeftWidth}%`;

    setSwipeMemory((prev) => ({ ...prev, [id]: newLeftWidth }));

    setHovering(true);

    resizerRef.current!!.style.cursor = 'col-resize';
    document.body.style.cursor = 'col-resize';

    leftRef.current!!.style.userSelect = 'none';
    leftRef.current!!.style.pointerEvents = 'none';

    rightRef.current!!.style.userSelect = 'none';
    rightRef.current!!.style.pointerEvents = 'none';
  }, []);

  const mouseDownHandler = useCallback(
    (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      // Get the current mouse position
      x.current = e.clientX;
      leftWidth.current = leftRef.current!!.getBoundingClientRect().width;

      // Attach the listeners to `document`
      document.addEventListener('mousemove', mouseMoveHandler);
      document.addEventListener('mouseup', mouseUpHandler);
    },
    []
  );

  return (
    <div
      className={css({ display: 'flex', width: '100%', height: '100%' })}
      ref={rootRef}
    >
      <div
        ref={leftRef}
        className={css({
          overflow: 'auto',
        })}
        style={{
          width: (swipeMemory[id] || '25') + '%',
          minWidth: '340px',
        }}
      >
        {left}
      </div>
      <div
        ref={resizerRef}
        className={css({
          backgroundColor: '#EEE',
          cursor: 'ew-resize',
          height: '100%',
          width: '1px',
          ':hover': {
            boxShadow: $theme.lighting.shadow400,
          },
          boxShadow: hovering ? $theme.lighting.shadow400 : 'none',
        })}
        onMouseDown={mouseDownHandler}
      ></div>
      <div
        ref={rightRef}
        className={css({
          flex: 1,
        })}
      >
        {right}
      </div>
    </div>
  );
};
