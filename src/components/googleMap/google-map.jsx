import React, { useState, useEffect } from "react";
import GoogleMapReact from "google-map-react";
import { Box } from "@material-ui/core";
import styles from "./googleMap.module.css";
import { key } from "../../config";
import RoomIcon from "@material-ui/icons/Room";

const GoogleMap = (props) => {
  const [center, setCenter] = useState({});

  useEffect(() => {
    setCenter({ lat: props.lat, lng: props.lng });
  }, [props.lat, props.lng]);

  if (!center) return null;
  return (
    <Box className={styles.mapSize}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: key }}
        defaultCenter={center}
        defaultZoom={7}
        center={center}
      >
        <div lat={center.lat} lng={center.lng}>
          <RoomIcon style={{ fontSize: "50px", color: "red" }}></RoomIcon>
        </div>
      </GoogleMapReact>
    </Box>
  );
};

export default GoogleMap;
