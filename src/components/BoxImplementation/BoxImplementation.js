import React from 'react'

const BoxImplementation = ({ componentText }) => {

  const handleCopy = e => {
    e.preventDefault();
  };

  return (
    <div className="div-implementation">
      <span className="red" />
      <span className="yellow" />
      <span className="green" />
      <textarea
        className="kromac-scroll"
        onKeyPress={handleCopy}
        onChange={handleCopy}
        spellCheck="false"
        value={componentText}
      />
    </div>)
}

export default BoxImplementation