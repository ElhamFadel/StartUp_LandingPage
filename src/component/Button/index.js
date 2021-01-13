import React from 'react';
import * as S from "./style";

function WrapperButton({children,type,path,className}) {
    return (
        <S.Button type={type} to={path}  className={className}>{children}</S.Button>
    )
}

export default WrapperButton;
