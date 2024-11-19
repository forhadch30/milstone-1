import React, { useEffect } from 'react';
const Statistics = () => {
    useEffect(() => {
        document.title = "Statistics" || "Page"
    }, [])
    return (
        <div>
            <h2>Statistics</h2>
        </div>
    );
};

export default Statistics;