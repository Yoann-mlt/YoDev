/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { motion } from "framer-motion";

import Project from "./MenuProjet";
import Aboutme from "./MenuAboutMe";
import CV from "./MenuCV";

const MenuItems = ({ items, project, aboutme, cv }) => {

  return (
    <motion.div
      initial="hidden"
      animate="visible"
    >
      <Project project={project} items={items} />
      <Aboutme breakfast={aboutme} items={items} />
      <CV cv={cv} items={items} />
    </motion.div>
  );
};

export default MenuItems;
