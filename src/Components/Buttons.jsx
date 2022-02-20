/**@jsxRuntime classic*/
/**@jsx jsx */
import { css, jsx } from "@emotion/react";

const Buttons = ({ setProject, setAboutme, setCv }) => {
  const breakpoints = [576, 768, 992, 1200];

  const mq = breakpoints.map((bp) => `@media (max-width: ${bp}px)`);

  return (
    <div
      className="Buttons"
      css={css`
        display: flex;

        button {
          margin: 0 2rem;
          border: none;
          padding: 10px;
          cursor: pointer;
          transition: 0.3s linear;
          outline: none;

          ${mq[2]} {
            margin: 0 1rem;
          }
          ${mq[0]} {
            margin: 0;
            margin-top: 2rem;
          }

          &::after {
            content: "";
            display: block;
            height: 2px;
            width: 0;
            background: #24242a;
            transition: width 0.3s ease-in;
          }

          &:hover::after {
            width: 100%;
          }

          span {
            padding: 0 5px;
            font-family: "Poppins", sans-serif;
            font-weight: 600;
            font-size: 1rem;
            margin: auto;
            ${mq[2]} {
              padding: 0;
            }
            ${mq[0]} {
              font-size: 0.9rem;
            }
          }
        }
      `}
    >
      <button
        onClick={() => {
          setProject(true);
          setAboutme(false);
          setCv(false);
        }}
      >
        <span>Projet(s)</span>
      </button>

      <button
        onClick={() => {
          setAboutme(true);
          setProject(false);
          setCv(false);
        }}
      >
        <span>A propos de moi </span>
      </button>

      <button
        onClick={() => {
          setAboutme(false);
          setProject(false);
          setCv(true);
        }}
      >
        <span>CV</span>
      </button>
    </div>
  );
};

export default Buttons;
