import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

export const FadeInOnView = (props) => {
  const fadeRef = useRef(null);
  const fadeRefInView = useInView(fadeRef, { amount: 0.6, once: true });
  return (
    <motion.div
      className={props.class}
      ref={fadeRef}
      style={{
        ...props.style,
        opacity: fadeRefInView ? 1 : 0,
        transition: `opacity ${props.fadeDuration || "1.6s"} ease ${
          props.fadeDelay || "0.2s"
        }`,
      }}
    >
      {props.children}
    </motion.div>
  );
};

export const FadeSlideRightOnView = (props) => {
  const fadeRef = useRef(null);
  const fadeRefInView = useInView(fadeRef, { amount: 0.6, once: true });
  return (
    <motion.div
      ref={fadeRef}
      style={{
        opacity: fadeRefInView ? 1 : 0,
        transition: `opacity ${props.fadeDuration || "1s"} ease ${
          props.fadeDelay || "0.2s"
        }`,
      }}
    >
      <motion.div
        className={props.class}
        style={{
          ...props.style,
          transform: fadeRefInView ? "translateX(0px) " : "translateX(-40px)",
          transition: `transform ${props.slideDuration || "0.8s"} ease ${
            props.slideDelay || "0.2s"
          }`,
        }}
      >
        {props.children}
      </motion.div>
    </motion.div>
  );
};

export const FadeSlideLeftOnView = (props) => {
  const fadeRef = useRef(null);
  const fadeRefInView = useInView(fadeRef, { amount: 0.6, once: true });
  return (
    <motion.div
      ref={fadeRef}
      style={{
        opacity: fadeRefInView ? 1 : 0,
        transition: `opacity ${props.fadeDuration || "1s"} ease ${
          props.fadeDelay || "0.2s"
        }`,
      }}
    >
      <motion.div
        className={props.class}
        style={{
          ...props.style,
          transform: fadeRefInView ? "translateX(0px) " : "translateX(40px)",
          transition: `transform ${props.slideDuration || "0.8s"} ease ${
            props.slideDelay || "0.2s"
          }`,
        }}
      >
        {props.children}
      </motion.div>
    </motion.div>
  );
};

export const FadeSlideUpOnView = (props) => {
  const fadeRef = useRef(null);
  const fadeRefInView = useInView(fadeRef, { amount: 0.5, once: true });
  return (
    <motion.div
      className={props.class}
      ref={fadeRef}
      style={{
        ...props.style,
        opacity: fadeRefInView ? 1 : 0,
        transform: fadeRefInView ? "translateY(0px) " : "translateY(40px)",
        transition: `opacity ${props.fadeDuration || "1s"} ease ${
          props.fadeDelay || "0.2s"
        }, transform ${props.slideDuration || "0.8s"} ease ${
          props.slideDelay || "0.2s"
        }`,
      }}
    >
      {props.children}
    </motion.div>
  );
};
