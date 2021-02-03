import React, { useState, useEffect, useMemo } from "react";
import PropTypes from "prop-types";

const OverlayContext = React.createContext();

OverlayProvider.propTypes = {
  children: PropTypes.element.isRequired
};


function OverlayProvider({ children }) {
    const [overlay, setOverlay] = useState(false);

    return (
        <OverlayContext.Provider
            value={{
                overlay,
                setOverlay
            }}
        >
            {" "}
            {children}
        </OverlayContext.Provider>
    );
}

function useOverlay() {
    const context = React.useContext(OverlayContext);

    if (context === undefined) {
        throw new Error(`useOverlay must be used within a OverlayProvider`);
    }

    return context;
}

export { OverlayProvider, useOverlay };
