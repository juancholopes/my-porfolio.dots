import React from 'react';
import { motion } from 'motion/react';
import { useCursor } from '../hooks/useCursor';

const CustomCursor: React.FC = () => {
  const { mousePosition, cursorVariant, textHeight } = useCursor();



  return (
    <>
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] mix-blend-normal"
        animate={{
          x: mousePosition.x - (cursorVariant === 'text' ? 1 : cursorVariant === 'image' ? 32 : 12),
          y: mousePosition.y - (cursorVariant === 'text' ? textHeight / 2 : cursorVariant === 'image' ? 14 : 12),
        }}
        transition={{
          type: 'spring',
          stiffness: 1000,
          damping: 40,
          mass: 0.1,
        }}
        style={{
          fontFamily: 'ui-monospace, SFMono-Regular, "SF Mono", Consolas, "Liberation Mono", Menlo, monospace',
          fontWeight: '600',
          letterSpacing: '0.5px',
          textShadow: '0 0 8px rgba(59, 130, 246, 0.5)',
        }}
      >
        <motion.div
          animate={{
            width: cursorVariant === 'text' ? 2 : cursorVariant === 'image' ? 64 : 24,
            height: cursorVariant === 'text' ? textHeight : cursorVariant === 'image' ? 28 : 24,
            borderRadius: cursorVariant === 'text' ? '1px' : cursorVariant === 'image' ? '6px' : '50%',
            backgroundColor: cursorVariant === 'text' ? 'rgba(59, 130, 246, 1)' : cursorVariant === 'image' ? 'rgba(15, 23, 42, 0.9)' : 'rgba(59, 130, 246, 0.1)',
            border: cursorVariant === 'text' ? 'none' : cursorVariant === 'image' ? '1px solid rgba(59, 130, 246, 0.9)' : '2px solid rgba(59, 130, 246, 0.8)',
            backdropFilter: cursorVariant === 'text' ? 'none' : cursorVariant === 'image' ? 'blur(16px)' : 'blur(15px)',
            boxShadow: cursorVariant === 'text' ? '0 0 8px rgba(59, 130, 246, 0.4)' : cursorVariant === 'image' ? '0 0 20px rgba(59, 130, 246, 0.6), inset 0 0 8px rgba(59, 130, 246, 0.2)' : '0 0 20px rgba(59, 130, 246, 0.3), inset 0 0 10px rgba(59, 130, 246, 0.1)',
            fontSize: cursorVariant === 'image' ? '11px' : '0px',
            color: cursorVariant === 'image' ? 'rgba(147, 197, 253, 1)' : 'rgba(147, 197, 253, 0)',
            display: cursorVariant === 'image' ? 'flex' : 'block',
            alignItems: cursorVariant === 'image' ? 'center' : 'flex-start',
            justifyContent: cursorVariant === 'image' ? 'center' : 'flex-start',
            padding: cursorVariant === 'image' ? '4px 8px' : '0px',
          }}
          transition={{
            type: 'spring',
            stiffness: 600,
            damping: 30,
            mass: 0.2,
          }}
        >
          {cursorVariant === 'image' && 'image'}
        </motion.div>
      </motion.div>
    </>
  );
};

export default CustomCursor;