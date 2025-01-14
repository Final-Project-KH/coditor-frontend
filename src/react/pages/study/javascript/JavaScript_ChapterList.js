import { JavaScriptStudyChapter } from "../../../../util/study/JavaScriptStudyChapter";
import {
  ChapterOuter,
  ChapterInner,
  ChapterName,
} from "../../../styles/study/Class_Chapter";

const JavaScript_ChapterList = ({ refs }) => {

  const handleScrollToSection = (section) => {
    if (refs[section].current) {
      const offset = 175; // 상단 여백 오프셋
      const elementPosition = refs[section].current.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset; // 오프셋 적용
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth", // 부드러운 스크롤
      });
    }
  };

  const ChapterComponent = ({ cls }) => <ChapterName onClick={() => handleScrollToSection(cls.id)}>{cls.title}</ChapterName>;

  return (
    <>
      <ChapterOuter>
        <ChapterInner>
          {JavaScriptStudyChapter.map((cls) => (
            <ChapterComponent key={cls.id} cls={cls} />
          ))}
        </ChapterInner>
      </ChapterOuter>
    </>
  );
};

export default JavaScript_ChapterList;
