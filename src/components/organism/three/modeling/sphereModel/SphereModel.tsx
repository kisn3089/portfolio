import { SphereLayout } from "./SphereModelStyles";
import CanvasCore from "@/components/molecule/canvasCore/CanvasCore";
import ModelCore from "../../modelCore/ModelCore";
import ActionButton from "../../actionButton/ActionButton";
import { SPHERE } from "@/lib/util/constanse";
import { sphereProps } from "@/lib/util/model/orbitOption";
import { actionTypes } from "@/lib/util/model/actionTypes";
import PostProsessing from "@/components/molecule/canvasCore/postProsessing/PostProsessing";
import useModel from "@/hooks/useModel";

const SphereModel = () => {
  const { currentAction, changeAction } = useModel();

  return (
    <SphereLayout>
      <CanvasCore orbitProps={sphereProps} hasRadius>
        <ModelCore source={SPHERE} currentAction={currentAction} hasAnimation />
        <PostProsessing />
      </CanvasCore>
      <ActionButton
        actionTypes={actionTypes}
        currentAction={currentAction}
        changeAction={changeAction}
      />
    </SphereLayout>
  );
};

export default SphereModel;
