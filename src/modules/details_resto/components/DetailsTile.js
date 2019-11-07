import React from "react";

const DetailsTile = ({resto}) =>{
    let {name,cuisines,average_cost_for_two,currency,phone_numbers} = resto;
    return(
        <div className="resto-tile-con">
            <div className="resto-title">
                {name}
            </div>
            <div className="resto-cuisine">
                {cuisines}
            </div>
            <div className="resto-cost">
                Avg. {currency}{average_cost_for_two} for two
            </div>
            <div className="resto-contact">
                Contact No: {phone_numbers}
            </div>
        </div>
    )
}

export default DetailsTile;