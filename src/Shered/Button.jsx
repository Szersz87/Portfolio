import React from "react";
import Icon from "./Icon";

export default function({ className, icon, onClick, title, buttonContent}) {
    return (
        <button className={className} onClick={onClick}>
        <div className={buttonContent}>
            <Icon src={icon} />
            <p>{title}</p>
        </div>

        </button>

    )
}