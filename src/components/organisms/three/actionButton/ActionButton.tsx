import React from "react";
import { ActionButtonItems, ChangeActionLayout } from "./ActionButtonStyles";

interface ActionButtonProps {
  actionTypes: string[];
  currentAction: number;
  changeAction: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const ActionButton = ({
  actionTypes,
  currentAction,
  changeAction,
}: ActionButtonProps) => {
  return (
    <ChangeActionLayout>
      {actionTypes.map((actionItem, i) => (
        <ActionButtonItems
          key={i}
          id={String(i)}
          onClick={changeAction}
          disabled={i === currentAction}>
          {actionItem}
        </ActionButtonItems>
      ))}
    </ChangeActionLayout>
  );
};

export default ActionButton;
