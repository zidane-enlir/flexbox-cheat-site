import React, { Dispatch, ReactElement, SetStateAction } from 'react';
import { createCssCodeForParent } from '../../common/util/CreateCssCode';
import { BehaviorFlexbox } from '../../common/components/BehaviorFlexbox';
import { css } from 'styled-components';

type Props = {
    setParentStyle: Dispatch<SetStateAction<string>>;
};

const PROPERTY_NAME = 'space-between';

const PARENT_STYLE_CONTENTS = `display: flex;
    flex-wrap: wrap;
    align-content: space-between;
    height: 100%;`;

const CHILD_STYLE_CONTENTS = `width: 30%;`;

export const ACSpaceBetweenContainer = (props: Props): ReactElement => {
    const parentStyleCssCode = createCssCodeForParent(PARENT_STYLE_CONTENTS);
    const onClickBoxHandler = (): void => props.setParentStyle(parentStyleCssCode);
    const parentStyle = css`
        ${PARENT_STYLE_CONTENTS}
    `;
    const childStyle = css`
        ${CHILD_STYLE_CONTENTS}
    `;
    return (
        <BehaviorFlexbox
            parentStyle={parentStyle}
            childStyle={childStyle}
            propertyName={PROPERTY_NAME}
            onClickBoxHandler={onClickBoxHandler}
        />
    );
};
