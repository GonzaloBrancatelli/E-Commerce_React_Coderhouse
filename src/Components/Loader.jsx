import React from "react";

const Loader = () => {
    return (
        <div className="text-center p-5">
            <div className="spinner-border text-success" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}

export default Loader;