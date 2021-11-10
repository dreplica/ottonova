import React from "react";
import { Box } from "@chakra-ui/react";
import CustomModal from "..";
import { MapLoader } from "../../../utils/maps";

interface iMap{
    isOpen: boolean,
    onClose():void
}

function MapModel({isOpen, onClose}: iMap) {
  const [map, setMap] = React.useState<google.maps.Map>();
  const element = React.useRef<HTMLDivElement>(null)

  const getLocation = async (lat?: number, long?: number) => {
      if(element.current){
          console.log("hi")
          const google = await MapLoader.load()
          const map = new google.maps.Map(element?.current, {
            center: { lat: -34.397, lng: 150.644 },
            zoom: 8,
          });
          new google.maps.Marker({
              position: { lat: -34.397, lng: 150.644 },
              map: map,
              label: 'Ottonova'
          })
          setMap(map);
      }
  };

  React.useEffect(() => {
      getLocation()
  },[element?.current]);

  return (
    <CustomModal isOpen={isOpen} onClose={onClose} size="3xl">
      <Box id="map" ref={element} w="full" h="full"></Box>
    </CustomModal>
  );
}

export default MapModel;