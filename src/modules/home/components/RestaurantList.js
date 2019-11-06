import React,{useEffect,Fragment} from "react";
import {connect} from "react-redux";
import RestaurantBlock from "./RestaurantBlock";
import {getNextRestaurantsByLocationId} from "../actions/HomeActions";

const RestaurantList = ({restaurantList,getNexResto,location,totalRestaurants})=>{
    let offset=10;

    const isBottom=(el)=> {
        return el.getBoundingClientRect().bottom <= window.innerHeight;
      };

    const trackScrolling = () => {
        const wrappedElement = document.getElementById('scroll_bottom');
        if (isBottom(wrappedElement)) {
          getNexResto(location.entity_id,offset);
          offset=offset+10;
        }
      };

    useEffect(()=>{
        document.addEventListener('scroll', trackScrolling);
        return ()=>{
            document.removeEventListener('scroll', trackScrolling);
        }
    });
    return(
        <Fragment>
        <div className="result-count-con">
            <div className="result-count">
                <b>{totalRestaurants}</b> restaurants are found near <b>{location.title}</b>
            </div>            
        </div>
        <div className="resto-list-con">
            
            <div className="resto-list-con-in">
                {restaurantList.map(({restaurant})=><RestaurantBlock key={restaurant.id} resto={restaurant} />)}
            </div>
            <div id="scroll_bottom"></div>
        </div>
        </Fragment>
    )
}

const mapStateToProps= state=>({
    restaurantList:state.restaurant.restaurantList,
    location:state.location.selectedLocation,
    totalRestaurants:state.restaurant.restaurantsFound
});

const mapDispatchToProps = {getNexResto:getNextRestaurantsByLocationId}

export default connect(mapStateToProps,mapDispatchToProps)(RestaurantList);