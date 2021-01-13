import React from 'react';
import * as S from "./style";

export const H1 = (props) => {
    const { children } = props;
    return <S.H1>{children}</S.H1>;
  };
  export const H2 = (props) => {
    const { children } = props;
    return <S.H2>{children}</S.H2>;
  };
  export const H4 = (props) => {
    const { children } = props;
    return <S.H4>{children}</S.H4>;
  };
  export const H3 = (props) => {
    const { children } = props;
    return <S.H3>{children}</S.H3>;
  };
  export const H5 = (props) => {
    const { children } = props;
    return <S.H5>{children}</S.H5>;
  };
  export const H6 = (props) => {
    const { children } = props;
    return <S.H6>{children}</S.H6>;
  };
export const Para = (props) => {
    const { children, className } = props;
    return <S.Para  className={className}>{children}</S.Para>;
};

export const ParaFeature = (props) => {
  const { children } = props;
  return <S.ParaFeature>{children}</S.ParaFeature>;
};