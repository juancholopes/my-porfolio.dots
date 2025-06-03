import { motion } from "motion/react";

const Carrusel = () => {
  return (
    <motion.div
      whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.8 }}
      style={{
        width: 100,
        height: 100,
        backgroundColor: "#772931",
        borderRadius: 5,
      }}
    />
  );
};

export default Carrusel;
