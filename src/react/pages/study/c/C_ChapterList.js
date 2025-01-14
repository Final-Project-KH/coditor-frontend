import { CStudyChapter } from "../../../../util/study/CStudyChapter";
import {
  ChapterOuter,
  ChapterInner,
  ChapterName,
} from "../../../styles/study/Class_Chapter";

const C_ChapterList = ({ refs }) => {

  const handleScrollToSection = (section) => {
    if (refs[section].current) {
      const offset = 175;  // 상단 여백 오프셋
      const elementPosition = refs[section].current.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",  // 부드러운 스크롤
      });
    }
  };

  const ChapterComponent = ({ cls }) => <ChapterName>{cls.title}</ChapterName>;

  return (
    <>
      <ChapterOuter>
        <ChapterInner>
          {CStudyChapter.map((cls) => (
            <ChapterComponent key={cls.id} cls={cls} />
          ))}
        </ChapterInner>
      </ChapterOuter>
    </>
  );
};

export default C_ChapterList;