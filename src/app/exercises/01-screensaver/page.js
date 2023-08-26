import React from "react";
import Link from "next/link";

function ScreenSaverIndex() {
  const colors = ["red", "blue", "green"];
  return (
    <main className="screen-saver-wrapper">
      <ul>
        {colors.map((color) => {
          return (
            <li>
              <Link href={`/exercises/01-screensaver/${color}`}>{color}</Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
}

export default ScreenSaverIndex;
