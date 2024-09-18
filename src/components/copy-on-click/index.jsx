import React from "react";

const ClipboardExample = () => {
  const handleCopy = (event) => {
    console.log("Text copied:", event.target.value);
  };

  const handleCut = (event) => {
    console.log("Text cut:", event.target.value);
  };

  const handlePaste = (event) => {
    const pastedText = event.clipboardData.getData("text");
    console.log("Text pasted:", pastedText);
  };

  return (
    <div>
      <h3>Clipboard Events Example</h3>
      <textarea
        onCopy={handleCopy}
        onCut={handleCut}
        onPaste={handlePaste}
        placeholder="Try copying, cutting, or pasting text here!"
        rows={5}
        cols={40}
      />
    </div>
  );
};

export default ClipboardExample;
