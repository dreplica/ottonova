import React from "react";
import { Box } from "@chakra-ui/react";
import CustomModal from "..";
import { MapLoader } from "../../../utils/maps";
import { AppContext } from "../../../context/app-state";
import { iProps } from "../../../types/props";


function MapModel({ isOpen, onClose }: iProps) {
  const {
    command: { data = {lng:0, lat:0} },
  } = React.useContext(AppContext);
  const [map, setMap] = React.useState<google.maps.Map>();
  const element = React.useRef<HTMLDivElement>(null);
  const getLocation = async (lat?: number, long?: number) => {
      console.log(data)
      const google = await MapLoader.load();
      if(element?.current){
        const map = new google.maps.Map(element?.current!, {
          center: { ...data },
          zoom: 8,
        });
        new google.maps.Marker({
          position: { ...data },
          map: map,
        });
        setMap(map);
      }
    // }
  };

  React.useEffect(() => {
    getLocation();
  }, [element?.current, data]);

  return (
    <CustomModal isOpen={isOpen} onClose={onClose} size="3xl" header="Map">
      <Box id="map" ref={element} w="full" h="full"></Box>
    </CustomModal>
  );
}

export default MapModel;
