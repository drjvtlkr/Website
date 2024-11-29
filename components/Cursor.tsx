'use client'
import React, { useEffect } from "react";
import {gsap} from 'gsap'

const Cursor = () => {
    useEffect(()=>{
        const cursor = document.getElementById('custom-cursor')
        const links = document.querySelectorAll('a')
        const cursorText = document.querySelector('.cursor-text') as HTMLElement;

        const onMouseMove = (event: MouseEvent)=>{
            const {clientX, clientY}= event;
            gsap.set(cursor,{x: clientX, y: clientY})
        }

        const onMouseEnterLink=(event :MouseEvent)=>{
            const link = event.target as HTMLElement;
            if (link.classList.contains('view')) {
                gsap.set(cursor,{scale:4})
                cursorText.style.display='block'
            }else{
                gsap.set(cursor,{scale:4})
            }
        }

        const onMouseLeaveLink=()=>{
            gsap.set(cursor,{scale:4})
            cursorText.style.display='none'
        }

        document.addEventListener('mousemove', onMouseMove)
        links.forEach((link)=>{
            link.addEventListener('mouseenter', onMouseEnterLink)
            link.addEventListener('mouseleave', onMouseLeaveLink)
        })
    })
  return (
    <div id="custom-cursor" className="custom-cursor">
      <span className="cursor-text">Cursor</span>
    </div>
  );
};

export default Cursor;
