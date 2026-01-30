import React, { useEffect } from "react";
import { motion } from "motion/react";
import { useCursor } from "@shared/hooks/useCursor";
import { useTheme } from "next-themes";
import { useDesktopDevice } from "@shared/hooks/useDesktopDevice";

const CustomCursor: React.FC = () => {
  const { mousePosition, cursorVariant, textHeight } = useCursor();
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const isDesktop = useDesktopDevice();

  // Agregar clase CSS para ocultar el cursor predeterminado cuando el cursor personalizado está activo
  useEffect(() => {
    if (isDesktop) {
      document.body.classList.add("custom-cursor-enabled");
      return () => {
        document.body.classList.remove("custom-cursor-enabled");
      };
    }
  }, [isDesktop]);

  // No renderizar cursor en dispositivos móviles/tablet
  if (!isDesktop) {
    return null;
  }

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[999] mix-blend-normal"
        animate={{
          x:
            mousePosition.x -
            (cursorVariant === "text"
              ? 1
              : cursorVariant === "image"
                ? 32
                : cursorVariant === "hover"
                  ? 16
                  : 12),
          y:
            mousePosition.y -
            (cursorVariant === "text"
              ? textHeight / 2
              : cursorVariant === "image"
                ? 14
                : cursorVariant === "hover"
                  ? 16
                  : 12),
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
          mass: 0.5,
        }}
        style={{
          willChange: "transform",
        }}
      >
        <motion.div
          animate={{
            width:
              cursorVariant === "text"
                ? 2
                : cursorVariant === "image"
                  ? 64
                  : cursorVariant === "hover"
                    ? 32
                    : 24,
            height:
              cursorVariant === "text"
                ? textHeight
                : cursorVariant === "image"
                  ? 28
                  : cursorVariant === "hover"
                    ? 32
                    : 24,
            borderRadius:
              cursorVariant === "text"
                ? "1px"
                : cursorVariant === "image"
                  ? "6px"
                  : "50%",
            backgroundColor:
              cursorVariant === "text"
                ? "var(--primary-solid)"
                : cursorVariant === "image"
                  ? "var(--bg-overlay-light)"
                  : cursorVariant === "hover"
                    ? "var(--primary-opacity-30)"
                    : "var(--primary-opacity-80)",
            border:
              cursorVariant === "text"
                ? "none"
                : cursorVariant === "image"
                  ? "2px solid var(--primary-opacity-90)"
                  : cursorVariant === "hover"
                    ? "2px solid var(--primary-solid)"
                    : "2px solid var(--primary-solid)",
            boxShadow:
              cursorVariant === "text"
                ? "0 0 8px var(--primary-opacity-60)"
                : cursorVariant === "image"
                  ? "0 0 20px var(--primary-opacity-60)"
                  : cursorVariant === "hover"
                    ? "0 0 25px var(--primary-opacity-80)"
                    : "0 0 15px var(--primary-opacity-60)",
            fontSize: cursorVariant === "image" ? "11px" : "0px",
            color:
              cursorVariant === "image" ? "var(--accent-light)" : "transparent",
            display: cursorVariant === "image" ? "flex" : "block",
            alignItems: cursorVariant === "image" ? "center" : "flex-start",
            justifyContent: cursorVariant === "image" ? "center" : "flex-start",
            padding: cursorVariant === "image" ? "4px 8px" : "0px",
            opacity: 1,
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20,
            mass: 0.8,
          }}
          style={{
            fontFamily:
              cursorVariant === "image"
                ? 'ui-monospace, SFMono-Regular, "SF Mono", Consolas, "Liberation Mono", Menlo, monospace'
                : "inherit",
            fontWeight: cursorVariant === "image" ? "600" : "normal",
            letterSpacing: cursorVariant === "image" ? "0.5px" : "normal",
          }}
        >
          {cursorVariant === "image" && "image"}
        </motion.div>
      </motion.div>
    </>
  );
};

export default CustomCursor;
