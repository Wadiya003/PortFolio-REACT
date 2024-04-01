import React from "react";
import { Skills } from "../../Assets/data";

function Techstack() {
  return (
    <div className="spaces">
      {Skills.map((e) => {
        return (
          <div className="tech-icon" key={e.name}>
            <span className="tooltip">{e.name}</span>
            <div className="tech-icons">{e.icon}</div>
          </div>
        );
      })}

    </div>
  );
}

export default Techstack;
