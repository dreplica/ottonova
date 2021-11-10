import React from "react";
import { HStack, Text, Button, UnorderedList, ListItem } from "@chakra-ui/react";
import CustomModal from "..";
import { AppContext } from "../../../context/app-state";
import { getDays } from "../../../utils/helper";

interface iMap {
  isOpen: boolean;
  onClose(): void;
}

function ScheduleModal({ isOpen, onClose }: iMap) {
    const {setState, state,Socketio} = React.useContext(AppContext)
    const [date, setDate] = React.useState<string[]>([])

    React.useEffect(()=>{
        let dateCommand = "2018-01-08T14:32:33.921Z"
        const dates = getDays(dateCommand)
        setDate(dates)
    },[])

    const processRate = (e: React.MouseEvent<HTMLButtonElement>) =>{
        // Socketio?.emit("command")
        let day = e.currentTarget.dataset.day ?? ""
        updateDate(day)
        onClose()
    }

    const updateDate = (day: string) =>{
        setState('dreplica',   `Dreplica, ${day}`)
    }

    //onclicking a day, put back into message <username> Day
  return (
    <CustomModal
      isOpen={isOpen}
      onClose={onClose}
      size="xl"
      header="Schedule Appointment!"
    >

     <UnorderedList listStyleType="none" display="flex" justifyContent="space-evenly" alignContent="flex-start" flexWrap="wrap">
                {date.map((day, index) =><ListItem key={index} m="1">
                  <Button w="fit-content" variant="outline" data-day={day} onClick={processRate}>
                    {day}
                  </Button>
                </ListItem>)}
              </UnorderedList>
    </CustomModal>
  );
}

export default ScheduleModal;