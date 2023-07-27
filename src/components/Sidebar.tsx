// 'use client'
// import * as React from 'react'
// import { useRef } from 'react'
// import { motion, sync, useCycle } from 'framer-motion'
// import { useDimensions } from '../hooks/use-dimensions'
// import { MenuToggle } from './MenuToggle'
// import { Navigation } from './Navigation'

// const sidebar = {
//   open: ({ height = 1000, width = 1000 }) => ({
//     clipPath: `circle(${height * 2 + 200}px at ${width}px 40px)`,
//     transition: {
//       type: 'spring',
//       stiffness: 20,
//       restDelta: 2,
//     },
//   }),
//   closed: {
//     clipPath: 'circle(30px at 40px 40px)',
//     transition: {
//       delay: 0.5,
//       type: 'spring',
//       stiffness: 400,
//       damping: 40,
//     },
//   },
// }

// export const Sidebar = () => {
//   return (
//     <motion.nav
//       initial={false}
//       animate={isOpen ? 'open' : 'closed'}
//       custom={{ height, width }}
//       ref={containerRef}
//       className='absolute h-full w-full'
//     >
//       <motion.div
//         className='absolute top-0 right-0 bottom-0 w-full bg-white'
//         variants={sidebar}
//       />
//       <Navigation />
//       <MenuToggle toggle={() => toggleOpen()} />
//     </motion.nav>
//   )
// }
