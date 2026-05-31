"use client";

import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";
import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

type CursorContextValue = {
  setCursorLabel: (label: string) => void;
};

const CursorContext = createContext<CursorContextValue>({
  setCursorLabel: () => {},
});

export function useCursorLabel(label = "View Project") {
  const { setCursorLabel } = useContext(CursorContext);

  return {
    onMouseEnter: () => setCursorLabel(label),
    onMouseLeave: () => setCursorLabel(""),
    onFocus: () => setCursorLabel(label),
    onBlur: () => setCursorLabel(""),
  };
}

export function CustomCursorProvider({ children }: { children: ReactNode }) {
  const [cursorLabel, setCursorLabel] = useState("");
  const [enabled, setEnabled] = useState(false);

  const pointerX = useMotionValue(-100);
  const pointerY = useMotionValue(-100);

  const smoothX = useSpring(pointerX, {
    stiffness: 420,
    damping: 34,
    mass: 0.35,
  });

  const smoothY = useSpring(pointerY, {
    stiffness: 420,
    damping: 34,
    mass: 0.35,
  });

  useEffect(() => {
    const cursorQuery = window.matchMedia("(hover: hover) and (pointer: fine)");

    const updateEnabled = () => setEnabled(cursorQuery.matches);

    const moveCursor = (event: PointerEvent) => {
      pointerX.set(event.clientX);
      pointerY.set(event.clientY);
    };

    updateEnabled();
    window.addEventListener("pointermove", moveCursor);
    cursorQuery.addEventListener("change", updateEnabled);

    return () => {
      window.removeEventListener("pointermove", moveCursor);
      cursorQuery.removeEventListener("change", updateEnabled);
    };
  }, [pointerX, pointerY]);

  const value = useMemo(() => ({ setCursorLabel }), []);

  return (
    <CursorContext.Provider value={value}>
      {children}

      {enabled && (
        <>
          <motion.div
            className="custom-cursor-dot"
            style={{ x: smoothX, y: smoothY }}
            aria-hidden="true"
          />

          <AnimatePresence>
            {cursorLabel && (
              <motion.div
                className="custom-cursor-label"
                style={{ x: smoothX, y: smoothY }}
                initial={{ opacity: 0, scale: 0.88 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.88 }}
                transition={{ duration: 0.18 }}
                aria-hidden="true"
              >
                {cursorLabel}
              </motion.div>
            )}
          </AnimatePresence>
        </>
      )}
    </CursorContext.Provider>
  );
}
