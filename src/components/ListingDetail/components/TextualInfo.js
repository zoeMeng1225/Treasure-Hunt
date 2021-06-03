import React from "react"
import Overview from "./Overview"
import Details from "./Details"
import SellerInfo from "./SellerInfo"
import "../styles/TextualInfo.css"

const TextualInfo = props => {
  const { listingInfo,userID } = props

  return (
    <div className="textual-info">
      <Overview
        // title={listingInfo.title}
        // date={listingInfo.date}
        // category = {listingInfo.category}
        // location={listingInfo.city_and_state}
        // price={listingInfo.price}
        // sellerId={listingInfo.seller_id}
        // userID = {userID}
        // listingId={listingInfo.listing_id}
        listingInfo = {listingInfo} userID = {userID}
      />
      <Details
        condition={listingInfo.item_condition}
        brand={listingInfo.brand}
        description={listingInfo.description}
      />

      <SellerInfo
        sellerName={listingInfo.seller_name}
        address={listingInfo.city_and_state }
      />
    </div>
  )
}

export default TextualInfo
