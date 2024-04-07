import React, { lazy, Suspense, useEffect, useContext } from "react";
import avatarProps from "./storyProps/avatarProps";
import {
  changeDocumentTitle,
  getComponentsRelated,
} from "../../../utils/utils";
import { PreferencesContext } from "../../../store";

const Preview = lazy(() => import("../../Preview"));
const Avatar = lazy(() => import("./Avatar"));
const Spinner = lazy(() => import("../../lib/Spinner"));

const avatarComponents = getComponentsRelated("avatar");

const AvatarHistory = ({ location }) => {
  const { version } = useContext(PreferencesContext);

  useEffect(() => {
    document.title = changeDocumentTitle({ component: "Avatar", state: "" });
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div>
      <Preview
        title="Avatar"
        subTitle={avatarProps.subTitle}
        description={avatarProps.description}
        importType={avatarProps.importType(version)}
        propsDescription={avatarProps.propsDescription}
        notes={avatarProps.notes}
        componentsRealated={avatarComponents}
        storyLink={avatarProps.storyLink}
      >
        <Suspense
          fallback={
            <div className="center">
              <h4>Loading implementation</h4>
              <Spinner />
            </div>
          }
        >
          <Avatar
            avatarProps={avatarProps.avatarProp}
            componentText={avatarProps.componentText}
          />
        </Suspense>
      </Preview>
    </div>
  );
};

export default AvatarHistory;
