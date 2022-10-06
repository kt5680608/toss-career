import React from "react";

import {
  NavMainContainer,
  TossImageLogo,
  TossImageContainer,
  NavPContainer,
  Menubar,
  MenuItem,
  MenuItemLink,
} from "./style";

import { TOSS_LOGO_IMAGE, NAVBAR_ITEMS } from "../../assets";

function Navbar() {
  return (
    <NavMainContainer>
      <NavPContainer>
        <TossImageContainer>
          <TossImageLogo src={TOSS_LOGO_IMAGE} />
        </TossImageContainer>
        <Menubar>
          {NAVBAR_ITEMS.map((item) => {
            return (
              <MenuItem
                onClick={() => {
                  window.location.href = item.location;
                }}
              >
                <MenuItemLink
                  whileHover={{
                    backgroundColor: `rgba(0, 29, 58, 0.08)`,
                  }}
                >
                  {item.name}
                </MenuItemLink>
              </MenuItem>
            );
          })}
        </Menubar>
      </NavPContainer>
    </NavMainContainer>
  );
}

export default Navbar;
