import React, { useState } from "react";
import "./Address.css";
import { useDispatch } from "react-redux";
import building from "../../assets/images/place.webp";
import map from "../../assets/images/pin.webp";
import {
  setLocation,
  setUserInfo,
} from "../../services/providers/redux/featuresSlice";

function Address({ handleClose }) {
  console.log(handleClose);
  const [pin, setPin] = useState();

  const dispatch = useDispatch();

  const CurrantLocation = () => {
    navigator.geolocation.getCurrentPosition(async (pos) => {
      try {
        const { latitude, longitude } = pos.coords;

        const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`;
        const res = await fetch(url);
        const data = await res.json();
        const { address, display_name } = data;
        address.full_address = display_name;
        dispatch(setLocation(address));
        console.log(address);
        handleClose();
      } catch (error) {
        console.log(error);
        handleClose();
      }
    });
  };

  return (
    <article className="address-box">
      <h5>select delivery address</h5>
      <div className="flex">
        <img src={building} alt="" width={70} />
        <h6>Please login to view full address</h6>
      </div>
      <hr />
      <form className="flex">
        <input
          placeholder="Enter pincode"
          type="text"
          maxLength="6"
          autoComplete="off"
          value={pin}
          onChange={(e) => setPin(e.target.value)}
        />
        <button>submit</button>
      </form>
      <img src={map} alt="" width={120} />
      <button className="map" onClick={CurrantLocation}>
        use my currant location
      </button>
    </article>
  );
}

export default Address;
