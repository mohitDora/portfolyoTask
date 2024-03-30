
import { motion, useScroll } from "framer-motion";
import "./project.css"
export default function PageProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
   
      
    </>
  );
}
