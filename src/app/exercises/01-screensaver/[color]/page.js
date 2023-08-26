import React from "react";

import ScreenSaver from "../../../../components/ScreenSaver";

function ScreenSaverColored({ params }) {
  return (
    <main className="screen-saver-wrapper">
      <ScreenSaver color={params.color} />
    </main>
  );
}

export default ScreenSaverColored;
