//useCallback
import React from "react";

export const Count = React.memo(({ text, count }) => {
  console.log(`count -`, text);

  return (
    <div>
      {text}: {count}
    </div>
  );
});
