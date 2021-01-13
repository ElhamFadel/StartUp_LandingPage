import React from 'react';
import Button from "../Button";
import {Logo} from "../../assets";
import * as S from "./style";
import {Container} from "../GenerallStyle";

function Navbar() {
    return (
        <S.NavBar>
        <Container>
        <S.NavWrapper>
                <S.NavLink>
                    <Logo />
                </S.NavLink>
            <S.NavBarMenu>
            <S.NavLi>
                <S.NavLink to="/">
                   Documentation
                </S.NavLink>
                </S.NavLi>
                <S.NavLi>
                <Button to="/" className="button">SignUp</Button>
                </S.NavLi>
            </S.NavBarMenu>
        </S.NavWrapper>
        </Container>
        </S.NavBar>
    )
}

export default Navbar;
