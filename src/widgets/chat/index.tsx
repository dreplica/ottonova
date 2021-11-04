import React from "react";
import { ComponentProps } from "../../types/props";

function ChatWidget({ element }: ComponentProps) {
  const [user, setUser] = React.useState(element.dataset.user);
  React.useEffect(() => {
      setUser(element.dataset.user);
      return ()=>{}
  }, [element.dataset.user]);

  //React.useEffect(() => {}) //for socket io
  return <div>chat widget {user}</div>;
}

export default ChatWidget;
