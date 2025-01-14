import { useLocation, useNavigate } from "react-router-dom";
import React, { useState } from "react";

import {
  EachClass,
  ClassHeader,
  ClassHeaderTitle,
  ClassHeaderTitleButton,
  ClassContents,
  ClassSet,
  ClassName,
} from "../../../styles/study/Class_Main";
import { JavaStudyChapter } from "../../../../util/study/JavaStudyChapter";

const Java_ClassList = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { firstpath, secondpath } = location.state || {};

  // 클래스 헤더 클릭시 진입
  const handleNext = (cls) => {
    navigate(`/study/java/${cls.id}`, {
      state: {
        firstpath: firstpath,
        secondpath: secondpath,
        thirdpath: cls.title,
      },
    });
  };

  // 클래스 이름 클릭시 진입
  const handleNavigation = (navigatepath, data) => {
    navigate(navigatepath, { state: data });
  };

  // 챕터 헤더 우측 Arrow 클릭시 토글
  const [isToggleOpenId, setIsToggleOpenId] = useState([]);
  const toggleVisibility = (id) => {
    setIsToggleOpenId((prevId) =>
      prevId.includes(id) ? prevId.filter((i) => i !== id) : [...prevId, id]
    );
  };

  // 각 챕터/클래스 리스트 생성
  const EachClassComponent = ({ cls, isOpen, onToggle }) => (
    <EachClass key={cls.id}>
      <ClassHeader isOpen={isOpen}>
        <ClassHeaderTitle onClick={() => handleNext(cls)}>
          {cls.title}
        </ClassHeaderTitle>
        <ClassHeaderTitleButton
          isOpen={isOpen}
          onClick={() => onToggle(cls.id)}
        />
      </ClassHeader>
      <ClassContents isOpen={isOpen}>
        {cls.contents.map((content, index) => (
          <ClassSet key={index}>
            <ClassName
              onClick={() =>
                handleNavigation(content.navigatepath, {
                  firstpath: firstpath,
                  secondpath: secondpath,
                  thirdpath: content.thirdpath,
                  fourthpath: content.label,
                })
              }
            >
              {content.label}
            </ClassName>
          </ClassSet>
        ))}
      </ClassContents>
    </EachClass>
  );

  // 경로 받아오기
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
        <EachClassComponent
          key={cls.id}
          cls={cls}
          isOpen={isToggleOpenId.includes(cls.id)}
          onToggle={toggleVisibility}
        />
      ))}
    </>
  );
};

export default Java_ClassList;
