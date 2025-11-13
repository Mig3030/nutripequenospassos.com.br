import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const useScrollAnimation = (options = {}) => {
  const elementRef = useRef(null)

  useEffect(() => {
    if (!elementRef.current) return

    const {
      duration = 0.8,
      delay = 0,
      y = 50,
      opacity = 0,
      stagger = 0,
      ease = 'power3.out',
      markers = false
    } = options

    // Animação ao entrar na viewport
    gsap.fromTo(
      elementRef.current,
      {
        opacity: opacity,
        y: y,
      },
      {
        opacity: 1,
        y: 0,
        duration: duration,
        delay: delay,
        ease: ease,
        scrollTrigger: {
          trigger: elementRef.current,
          start: 'top 80%',
          end: 'top 50%',
          toggleActions: 'play none none reverse',
          markers: markers,
        },
        stagger: stagger,
      }
    )

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [options])

  return elementRef
}

export const useParallax = (strength = 1) => {
  const elementRef = useRef(null)

  useEffect(() => {
    if (!elementRef.current) return

    gsap.to(elementRef.current, {
      y: (i, target) => {
        return gsap.getProperty(target, 'offsetHeight') * strength
      },
      scrollTrigger: {
        trigger: elementRef.current,
        scrub: 1,
        markers: false,
      },
    })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [strength])

  return elementRef
}

export const useHoverAnimation = () => {
  const elementRef = useRef(null)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const handleMouseEnter = () => {
      gsap.to(element, {
        scale: 1.05,
        duration: 0.3,
        ease: 'power2.out',
      })
    }

    const handleMouseLeave = () => {
      gsap.to(element, {
        scale: 1,
        duration: 0.3,
        ease: 'power2.out',
      })
    }

    element.addEventListener('mouseenter', handleMouseEnter)
    element.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      element.removeEventListener('mouseenter', handleMouseEnter)
      element.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return elementRef
}

