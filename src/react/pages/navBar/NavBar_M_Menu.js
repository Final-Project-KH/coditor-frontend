import { useState } from "react";
import {
  MenuContainer,
  MenuLeftActive,
  MenuLeftContainer,
  MenuLeftInctive,
  MenuLeftItem,
  MenuLeftItems,
  MenuLeftLogin,
  MenuRightColumn,
  MenuRightColumnContents,
  MenuRightColumnTitle,
  MenuRightContainer,
  MenuRightContentsWrap,
  MenuRightLink,
  MenuWrapper,
} from "../../styles/navBar/NavBar_M_Menu";
import { menus } from "../../../util/mobilemenu/MobileMenu";
import { useNavigate } from "react-router-dom";

const NavBar_M_Menu = ({ closeMenu }) => {
  const [activeMenu, setActiveMenu] = useState("about");
  const navigate = useNavigate();

  const activeMenuData = menus.find((menu) => menu.id === activeMenu);

  const handleNavigation = (link) => {
    navigate(link);
    closeMenu();
  };

  return (
    <MenuWrapper>
      <MenuContainer>
        <MenuLeftContainer>
          {menus.map((menu) => (
            <MenuLeftItems
              key={menu.id}
              as={menu.id === activeMenu ? MenuLeftActive : MenuLeftInctive}
              onClick={() => setActiveMenu(menu.id)}
            >
              {menu.label}
            </MenuLeftItems>
          ))}
          <MenuLeftLogin>login</MenuLeftLogin>
        </MenuLeftContainer>
        <MenuRightContainer>
          <MenuRightContentsWrap>
            {activeMenuData?.columns?.map((column, idx) => (
              <MenuRightColumn key={idx}>
                <MenuRightColumnTitle
                  onClick={() => handleNavigation(column.title.link)}
                  style={{ cursor: "pointer" }}
                >
                  {column.title.text}
                </MenuRightColumnTitle>
                {column.contents.map((content, idx) => (
                  <MenuRightColumnContents key={idx}>
                    <MenuRightLink
                      onClick={() => handleNavigation(content.link)}
                      style={{ cursor: "pointer" }}
                    >
                      {content.text}
                    </MenuRightLink>
                  </MenuRightColumnContents>
                ))}
              </MenuRightColumn>
            ))}
          </MenuRightContentsWrap>
        </MenuRightContainer>
      </MenuContainer>
    </MenuWrapper>
  );
};

export default NavBar_M_Menu;
