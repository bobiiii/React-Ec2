import React, { useEffect, useLayoutEffect, useRef } from 'react'
import './draggable-slider.css'

const DraggableChipsSlider = () => {
  useLayoutEffect(() => {
    const tabsBox = document.querySelector('.tabs-box'),
      allTabs = tabsBox.querySelectorAll('.tab'),
      arrowIcons = document.querySelectorAll('.icon i')
    let isDragging = false
    const handleIcons = (scrollVal) => {
      let maxScrollableWidth = tabsBox.scrollWidth - tabsBox.clientWidth
      arrowIcons[0].parentElement.style.display =
        scrollVal <= 0 ? 'none' : 'flex'
      arrowIcons[1].parentElement.style.display =
        maxScrollableWidth - scrollVal <= 1 ? 'none' : 'flex'
    }
    arrowIcons.forEach((icon) => {
      icon.addEventListener('click', () => {
        // if clicked icon is left, reduce 350 from tabsBox scrollLeft else add
        let scrollWidth = (tabsBox.scrollLeft +=
          icon.id === 'left' ? -340 : 340)
        handleIcons(scrollWidth)
      })
    })
    allTabs.forEach((tab) => {
      tab.addEventListener('click', () => {
        tabsBox.querySelector('.active').classList.remove('active')
        tab.classList.add('active')
      })
    })
    const dragging = (e) => {
      if (!isDragging) return
      tabsBox.classList.add('dragging')
      tabsBox.scrollLeft -= e.movementX
      handleIcons(tabsBox.scrollLeft)
    }
    const dragStop = () => {
      isDragging = false
      tabsBox.classList.remove('dragging')
    }
    tabsBox.addEventListener('mousedown', () => (isDragging = true))
    tabsBox.addEventListener('mousemove', dragging)
    document.addEventListener('mouseup', dragStop)
  }, [])
  return (
    <div>
      <div class="wrapper">
        <div className="icon">
          <i className="fa-solid fa-angle-left" id="left"></i>
        </div>
        <ul class="tabs-box">
          <li className="tab">Coding</li>
          <li className="tab">Javascript</li>
          <li className="tab">Podcasts</li>
          <li className="tab">Programming</li>
          <li className="tab">Databases</li>
          <li className="tab">Web Development</li>
          <li className="tab">Unboxing</li>
          <li className="tab">History</li>
          <li className="tab">Gadgets</li>
          <li className="tab">Algorithms</li>
          <li className="tab">Data Structures</li>
          <li className="tab">Gaming</li>
          <li className="tab">Share Market</li>
          <li className="tab">Game Development</li>
          <li className="tab">Mobile Development</li>
          <li className="tab">Smart Phones</li>
        </ul>
        <div className="icon">
          <i className="fa-solid fa-angle-right" id="right"></i>
        </div>
      </div>
    </div>
  )
}

export default DraggableChipsSlider
