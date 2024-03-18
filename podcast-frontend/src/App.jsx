import React from "react";
import NavigationDesktop from "./navigation/NavigationDesktop";
import NavigationPhone from "./navigation/NavigationPhone";
import NavigationTablet from "./navigation/NavigationTablet";

/*
  STANDARD SIZE-->
    Desktop: (1920×1080, 1366×768, 1280×1024, 1024×768)
    Tablet: (768×1024, 1024×768, 601×962)
    Mobile: (375×667, 414×736, 360×800, 390×844)
*/

function App() {
  const mobileThreshold = 414; // Typical mobile width threshold
  const tabletThreshold = 992; // Typical tablet width threshold

  const isMobile = window?.screen?.width < mobileThreshold;
  const isTablet =
    window?.screen?.width < tabletThreshold &&
    window?.screen?.width > mobileThreshold;

  return (
    <>
      {isMobile ? (
        <NavigationPhone />
      ) : isTablet ? (
        <NavigationTablet />
      ) : (
        <NavigationDesktop />
      )}
    </>
  );
}

export default App;
