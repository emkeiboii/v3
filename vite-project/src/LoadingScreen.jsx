function LoadingScreen() {
  return (
    <div className="full loading-background">
      <div className="loading-container">
        <svg
          id="logo-loading"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 125.22 150.42"
        >
          <path
            className="path-logo-loading"
            stroke="#EAEDFD"
            strokeWidth="5"
            d="M60.53,65.78L25.79,26.07c-1.68-1.92-4.83-.73-4.83,1.82v70.34c0,1.52,1.23,2.76,2.76,2.76h36.14c1.52,0,2.76,1.23,2.76,2.76v18.62c0,1.52,1.23,2.76,2.76,2.76h36.14c1.52,0,2.76-1.23,2.76-2.76V27.89c0-2.55-3.16-3.73-4.83-1.82l-34.75,39.71c-1.1,1.26-3.05,1.26-4.15,0Z"
          />
        </svg>
      </div>
    </div>
  );
}

export default LoadingScreen;
