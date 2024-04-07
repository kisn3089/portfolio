import { SphereLayout } from "./SphereModelStyles";
import CanvasCore from "@/components/molecule/canvasCore/CanvasCore";
import ModelCore from "../../modelCore/ModelCore";
import ActionButton from "../../actionButton/ActionButton";
import { SPHERE } from "@/lib/util/constanse";
import { sphereProps } from "@/lib/util/model/orbitOption";
import { actionTypes } from "@/lib/util/model/actionTypes";
import useModel from "@/hooks/useModel";
import PostProsessing from "@/components/molecule/canvasCore/postProsessing/PostProsessing";

const SphereModel = () => {
  const { currentAction, isLoaded, loadedCallback, changeAction } = useModel();

  return (
    <SphereLayout>
      <CanvasCore
        orbitProps={sphereProps}
        loadedCallback={loadedCallback}
        hasRadius>
        <ModelCore source={SPHERE} currentAction={currentAction} hasAnimation />
        <PostProsessing />
      </CanvasCore>
      {isLoaded && (
        <ActionButton
          actionTypes={actionTypes}
          currentAction={currentAction}
          changeAction={changeAction}
        />
      )}
    </SphereLayout>
  );
};

export default SphereModel;
