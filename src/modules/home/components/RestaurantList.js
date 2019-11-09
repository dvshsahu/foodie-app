import React,{useEffect,Fragment} from "react";
import {connect} from "react-redux";
import RestaurantBlock from "./RestaurantBlock";
import Loading from "./Loading";
import {getNextRestaurantsByLocationId,likeRestaurant} from "../actions/HomeActions";

let offset=10;

const RestaurantList = ({restaurantList,getNexResto,location,totalRestaurants,likeRestaurant,isLoading})=>{
  

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
            {location.title!=null&&
                <div className="result-count-con">
                    <div className="result-count">
                       Showing <b>{totalRestaurants}</b> restaurants near <b>{location.title}</b>
                    </div>            
                </div>}
                <div className="resto-list-con">
                    
                    <div className="resto-list-con-in">
                        {restaurantList.map(({restaurant})=><RestaurantBlock likeRestaurant={likeRestaurant} key={restaurant.id} resto={restaurant} />)}
                        {isLoading&&<Loading />}
                    </div>
                    <div id="scroll_bottom"></div>
                    
                </div>
        </Fragment>
    )
}

const mapStateToProps= state=>({
    restaurantList:state.restaurant.restaurantList,
    location:state.location.selectedLocation,
    totalRestaurants:state.restaurant.restaurantsFound,
    isLoading:state.loading.isFetchingNextResults
});

const mapDispatchToProps = {getNexResto:getNextRestaurantsByLocationId,likeRestaurant}

export default connect(mapStateToProps,mapDispatchToProps)(RestaurantList);