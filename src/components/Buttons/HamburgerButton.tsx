'use client'
import { useAppDispatch, useAppSelector } from '@/redux/hook';
import { toggleHamburger } from '@/redux/Slice/UtilitySlice';
import { RootState } from '@/redux/store';
import React, { useRef } from 'react';

const HamburgerButton = () => {
  const dispatch = useAppDispatch();
  const hamburgerClick = useAppSelector((state:RootState) => state.utility.hamburgerClick);

  const svgRef = useRef<SVGSVGElement>(null);

  const handleToggle = () => {
    if (svgRef.current) {
      svgRef.current.classList.toggle('active');
    }
  };

  return (
    <button onClick={() => dispatch(toggleHamburger(!hamburgerClick))}>
      <svg
        ref={svgRef}
        className="xl:hidden ham hamRotate ham8"
        viewBox="0 0 100 100"
        width="50"
        onClick={handleToggle}
      >
        <path
          className="line top"
          d="m 30,33 h 40 c 3.722839,0 7.5,3.126468 7.5,8.578427 0,5.451959 -2.727029,8.421573 -7.5,8.421573 h -20"
        />
        <path className="line middle" d="m 30,50 h 40" />
        <path
          className="line bottom"
          d="m 70,67 h -40 c 0,0 -7.5,-0.802118 -7.5,-8.365747 0,-7.563629 7.5,-8.634253 7.5,-8.634253 h 20"
        />
      </svg>
    </button>
  );
};

export default HamburgerButton;