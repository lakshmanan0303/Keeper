import React from "react";

const currentDate = new Date();
const currentYear = currentDate.getFullYear();

function footer() {
    return (
        <p className="copyrights">Copyright © {currentYear}</p>
    );
}

export default footer;