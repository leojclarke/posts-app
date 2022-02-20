import React, { useState } from "react";

function Example() {
  const [url, setUrl] = useState("http://localhost:3000");
  return (
    <div>
      {" "}
      <input
        type="text"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />{" "}
    </div>
  );
}
