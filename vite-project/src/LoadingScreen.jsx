function LoadingScreen() {
  return (
    <div className="full loading-background">
      <div className="loading-container">
        <svg
          id="logo-loading"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 128.83 150"
        >
          <path
            className="path-logo-loading"
            stroke="#102fce"
            d="M62.28,66.92L26.46,25.98c-1.73-1.98-4.98-.75-4.98,1.87v69.42c0,1.57,1.27,2.84,2.84,2.84h37.26c1.57,0,2.84,1.27,2.84,2.84v19.2c0,1.57,1.27,2.84,2.84,2.84h37.26c1.57,0,2.84-1.27,2.84-2.84V27.85c0-2.63-3.25-3.85-4.98-1.87l-35.82,40.94c-1.13,1.29-3.15,1.29-4.28,0Z"
          />
        </svg>
      </div>
    </div>
  );
}

export default LoadingScreen;
