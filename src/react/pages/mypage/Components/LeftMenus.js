import { useLocation, useNavigate } from "react-router-dom";
import {
  LeftContainerEach,
  LeftContainerTitle,
  LeftContainerContentsInactive,
  LeftContainerContentsActive,
  LeftContainerContentsBox,
  LeftMenuLink,
} from "../../../styles/mypage/MyPage";
import { useEffect, useState } from "react";

const LeftMenus = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { firstpath } = location.state || {};
  const [activeMenu, setActiveMenu] = useState("");

  const handleNavigation = (navigatepath, data) => {
    navigate(navigatepath, { state: data });
  };

  useEffect(() => {
    const currentMenu = location.state?.secondpath || "accountmanager";
    setActiveMenu(currentMenu);
  }, [location.state]);

  const menus = [
    {
      id: "accountmanager",
      sort: "profile",
      label: "계정 관리",
      link: "/mypage/accountmanager",
      firstpath: firstpath,
      secondpath: "계정 관리",
    },
    {
      id: "userfeedfeed",
      sort: "profile",
      label: "내 소개",
      link: "/mypage/userfeed",
      firstpath: firstpath,
      secondpath: "내 소개",
    },
    {
      id: "withdrawal",
      sort: "profile",
      label: "️회원 탈퇴",
      link: "/mypage/withdrawal",
      firstpath: firstpath,
      secondpath: "회원 탈퇴",
    },
    {
      id: "study",
      sort: "dashboard",
      label: "Study",
      link: "/mypage/study",
      firstpath: firstpath,
      secondpath: "Study",
    },
    {
      id: "codingtest",
      sort: "dashboard",
      label: "Coding Test",
      link: "/mypage/codingtest",
      firstpath: firstpath,
      secondpath: "Coding Test",
    },
    {
      id: "community",
      sort: "post",
      label: "Community",
      link: "/mypage/community",
      firstpath: firstpath,
      secondpath: "Community",
    },
    {
      id: "report",
      sort: "post",
      label: "악성 게시글 신고",
      link: "/mypage/report",
      firstpath: firstpath,
      secondpath: "악성 게시글 신고",
    },
    {
      id: "question",
      sort: "post",
      label: "건의사항",
      link: "/mypage/question",
      firstpath: firstpath,
      secondpath: "건의사항",
    },
  ];

  return (
    <>
      <LeftContainerEach>
        <LeftContainerTitle>profile</LeftContainerTitle>
        <LeftContainerContentsBox>
          {menus
            .filter((menu) => menu.sort === "profile") // sort가 'profile'인 항목만 필터링
            .map((menu) => {
              const isActive = activeMenu === menu.secondpath;
              const BoardComponent = isActive
                ? LeftContainerContentsActive
                : LeftContainerContentsInactive;
              return (
                <BoardComponent key={menu.id}>
                  <LeftMenuLink
                    onClick={() => {
                      handleNavigation(menu.link, {
                        firstpath: menu.firstpath,
                        secondpath: menu.secondpath,
                      });
                      setActiveMenu(menu.secondpath);
                    }}
                  >
                    {menu.label}
                  </LeftMenuLink>
                </BoardComponent>
              );
            })}
        </LeftContainerContentsBox>
      </LeftContainerEach>

      <LeftContainerEach>
        <LeftContainerTitle>dashboard</LeftContainerTitle>
        <LeftContainerContentsBox>
          {menus
            .filter((menu) => menu.sort === "dashboard") // sort가 'dashboard'인 항목만 필터링
            .map((menu) => {
              const isActive = activeMenu === menu.secondpath;
              const BoardComponent = isActive
                ? LeftContainerContentsActive
                : LeftContainerContentsInactive;
              return (
                <BoardComponent key={menu.id}>
                  <LeftMenuLink
                    onClick={() => {
                      handleNavigation(menu.link, {
                        firstpath: menu.firstpath,
                        secondpath: menu.secondpath,
                      });
                      setActiveMenu(menu.secondpath);
                    }}
                  >
                    {menu.label}
                  </LeftMenuLink>
                </BoardComponent>
              );
            })}
        </LeftContainerContentsBox>
      </LeftContainerEach>

      <LeftContainerEach>
        <LeftContainerTitle>post</LeftContainerTitle>
        <LeftContainerContentsBox>
          {menus
            .filter((menu) => menu.sort === "post") // sort가 'post'인 항목만 필터링
            .map((menu) => {
              const isActive = activeMenu === menu.secondpath;
              const BoardComponent = isActive
                ? LeftContainerContentsActive
                : LeftContainerContentsInactive;
              return (
                <BoardComponent key={menu.id}>
                  <LeftMenuLink
                    onClick={() => {
                      handleNavigation(menu.link, {
                        firstpath: menu.firstpath,
                        secondpath: menu.secondpath,
                      });
                      setActiveMenu(menu.secondpath);
                    }}
                  >
                    {menu.label}
                  </LeftMenuLink>
                </BoardComponent>
              );
            })}
        </LeftContainerContentsBox>
      </LeftContainerEach>
    </>
  );
};

export default LeftMenus;
