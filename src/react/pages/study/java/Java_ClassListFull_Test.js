import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { forwardRef, useState } from "react";

import {
  EachClass,
  ClassHeader,
  ClassHeaderTitle,
  ClassHeaderTitleButton,
  ClassContents,
  ClassSet,
  ClassHeaderTitlePathLink,
  NavigatePath,
  ClassName,
} from "../../../styles/study/Class_Main";
import { JavaStudyChapter } from "../../../../util/study/JavaStudyChapter";

const Java_ClassListFull_Test = forwardRef((ref) => {


  const navigate = useNavigate();
  const location = useLocation();
  const { firstpath, secondpath, thirdpath } = location.state || {};

  const handleNavigation = (navigatepath, data) => {
    navigate(navigatepath, { state: data });
  };

  const [isToggleOpenId, setIsToggleOpenId] = useState([]);

  const toggleVisibility = (id) => {
    setIsToggleOpenId((prevId) =>
      prevId.includes(id) ? prevId.filter((i) => i !== id) : [...prevId, id]
    );
  };

  const updatedJavaStudyChapter = JavaStudyChapter.map((menu) => ({
    ...menu,
    contents: menu.contents.map((content) => ({
      ...content,
      label: content.label,
      navigatepath: content.navigatepath,
      firstpath: firstpath,
      secondpath: secondpath,
      thirdpath: content.thirdpath,
      fourthpath: content.fourthpath,
    })),
  }));

  return (
    <>
      {updatedJavaStudyChapter.map((cls) => (
        <EachClass key={cls.id}>
          <ClassHeader isOpen={isToggleOpenId.includes(cls.id)}>
            <ClassHeaderTitle>{cls.title}</ClassHeaderTitle>
            <ClassHeaderTitleButton
              isOpen={isToggleOpenId.includes(cls.id)}
              onClick={() => toggleVisibility(cls.id)}
            />
          </ClassHeader>
          <ClassContents isOpen={isToggleOpenId.includes(cls.id)}>
            {cls.contents.map((content, index) => (
              <ClassSet key={index}>

                <ClassName>
                <NavigatePath
                    onClick={() =>
                      handleNavigation(content.navigatepath, {
                        firstpath: content.firstpath,
                        secondpath: content.secondpath,
                        thirdpath: content.thirdpath,
                        fourthpath: content.fourthpath,
                        lowerpath: content.label,
                      })
                    }
                   />
                  {content.label}
                </ClassName>

              </ClassSet>
            ))}
          </ClassContents>
        </EachClass>
      ))}
    </>
  );
});

export default Java_ClassListFull_Test;
