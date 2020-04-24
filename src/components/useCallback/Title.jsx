//useCallback
import React from "react";

export const Title = React.memo(() => {
  console.log("title");

  return (
    <div>
      <h1>Title</h1>
    </div>
  );
});
