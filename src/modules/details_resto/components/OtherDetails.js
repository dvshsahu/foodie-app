import React from "react";

const OtherDetails =({selectedRestaurant})=>{
    let {currency,
        average_cost_for_two,
        location,
        phone_numbers,
        has_online_delivery,
        has_table_booking,
        url,
        photos} = selectedRestaurant;
        
    return(
        <div className="other-details-con">
                <div className="row">
                    <div className="info-con">
                        <div className="label">
                            Average cost for two
                        </div>
                        <div className="data">
                            {currency}{average_cost_for_two}
                        </div>
                    </div>
                    <div className="info-con">
                        <div className="label">
                            Online delivery
                        </div>
                        <div className="data">
                            {has_online_delivery?"Available":"Not available"}
                        </div>
                    </div>
                    <div className="info-con">
                        <div className="label">
                            Table booking
                        </div>
                        <div className="data">
                            {has_table_booking?"Available":"Not available"}
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="info-con">
                        <div className="label">
                            Contact Number
                        </div>
                        <div className="data">
                            {phone_numbers}
                        </div>
                    </div>
                    <div className="info-con">
                        <div className="label">
                            Website
                        </div>
                        <div className="data">
                            <a href={url} target="blank">Link</a>
                        </div>
                    </div>
                    <div className="info-con">
                        <div className="label">
                            Location
                        </div>
                        {location&&<div className="data">
                            {location.address}, {location.locality}, {location.city}. {location.zipcode}
                        </div>}
                    </div>
                   
                </div>
                <div className="row">
                    <div className="info-con">
                            <div className="label">
                                Photos
                            </div>
                            <div className="data" style={{display:"flex",flexWrap:"wrap"}}>
                               {photos && photos.map(({photo})=>{
                                   return(
                                       <div key={photo.id} className="photo-con">                                        
                                            <img src={photo.thumb_url} width="100%" height="100%" alt="restaurents" />
                                        </div>
                                   )
                               })}
                            </div>
                    </div>
                </div>
                
        </div>
    )
}

export default OtherDetails;