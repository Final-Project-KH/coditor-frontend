import { PythonStudyChapter } from "../../../../util/study/PythonStudyChapter";
import {
  ChapterOuter,
  ChapterInner,
  ChapterName,
} from "../../../styles/study/Class_Chapter";

const Python_ChapterList = ({ refs }) => {

    // Scrolling Action Set
    const handleScrollToSection = (clsId) => {
      const sectionElement = refs[clsId];
      const offset = 175;
      if (sectionElement) {
        const elementPosition = sectionElement.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - offset;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    };

  // Chapter Shortcut Set
  const ChapterComponent = ({ cls }) => {
    return (
      <ChapterName onClick={() => handleScrollToSection(cls.id)}>
        {cls.title}
      </ChapterName>
    );
  };
  
  return (
    <>
      <ChapterOuter>
        <ChapterInner>
          {PythonStudyChapter.map((cls) => (
            <ChapterComponent key={cls.id} cls={cls} />
          ))}
        </ChapterInner>
      </ChapterOuter>
    </>
  );
};

export default Python_ChapterList;
