import React, { useEffect, useRef, useState } from "react";

const LoadingComponent = () => {
  const element = useRef(null);
  const [isLoadingEnd, setIsLoadingEnd] = useState(false);

  useEffect(() => {
    console.log(element);
    setTimeout(() => {
      setIsLoadingEnd(true);
      requestAnimationFrame(() => {
        if (element.current) {
          element.current.style.backgroundColor = "red";
        }
      });
    }, 1000);
  });

  return (
    <div>
      {isLoadingEnd ? (
        <h1 ref={element}>Hello from render</h1>
      ) : (
        <h1>Please wait</h1>
      )}
    </div>
  );
};

export default LoadingComponent;
