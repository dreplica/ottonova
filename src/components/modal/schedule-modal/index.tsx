import React from "react";
import { Button, UnorderedList, ListItem } from "@chakra-ui/react";
import CustomModal from "..";
import { AppContext } from "../../../context/app-state";
import { getDays } from "../../../utils/helper";
import { iProps } from "../../../types/props";

function ScheduleModal({ isOpen, onClose }: iProps) {
  const { setState, command } = React.useContext(AppContext);
  const [date, setDate] = React.useState<string[]>([]);

  React.useEffect(() => {
    let dateCommand = command?.data;
    const dates = getDays(dateCommand);
    setDate(dates);
  }, [command.data]);

  const processRate = (e: React.MouseEvent<HTMLButtonElement>) => {
    let day = e.currentTarget.dataset.day ?? "";
    updateDate(day);
    onClose();
  };

  const updateDate = (day: string) => {
    setState("dreplica", `Dreplica, ${day}`);
  };

  return (
    <CustomModal
      isOpen={isOpen}
      onClose={onClose}
      size="xl"
      header="Schedule Appointment!"
    >
      <UnorderedList
        listStyleType="none"
        display="flex"
        justifyContent="space-evenly"
        alignContent="flex-start"
        flexWrap="wrap"
      >
        {date.map((day, index) => (
          <ListItem key={index} m="1">
            <Button
              w="fit-content"
              variant="outline"
              data-day={day}
              onClick={processRate}
            >
              {day}
            </Button>
          </ListItem>
        ))}
      </UnorderedList>
    </CustomModal>
  );
}

export default ScheduleModal;
