import React, { ReactElement, useCallback, useState } from 'react';
import { FlexboxItemsProps } from 'src/@types/FlexboxItems';
import { css } from 'styled-components';
import { BehaviorFlexbox } from '../../common/components/BehaviorFlexbox';
import { createCssCodeForChildFeatured, createCssCodeForParent } from '../../common/util/CreateCssCode';
import { ThemeColor } from '../../common/util/DefineProperty';

const parentStyleContents = `display: flex;
    align-items: flex-start;`;

const parentStyleCode = createCssCodeForParent(parentStyleContents);

const parentStyle = css`
    ${parentStyleContents}
`;

const reference = 'https://developer.mozilla.org/ja/docs/Web/CSS/flex-grow';

export const FlexGrowContainer = (props: FlexboxItemsProps): ReactElement => {
    const { propertyValue, setFlexboxItemsStyle, setOpened, setReference } = props;

    const [isMouseEnter, setMouseEnter] = useState(false);

    const childFeaturedStyleContents = `flex-grow: ${propertyValue};
    background-color: ${ThemeColor.backgroundFeaturedItem};`;

    const childFeaturedCode = createCssCodeForChildFeatured(childFeaturedStyleContents);

    const onClickBoxHandler = useCallback(() => {
        setFlexboxItemsStyle(`${parentStyleCode}\n\n${childFeaturedCode}`);
        setOpened(true);
        setReference(reference);
    }, [childFeaturedCode, setFlexboxItemsStyle, setOpened, setReference]);

    const childFeaturedStyle = css`
        ${childFeaturedStyleContents}
    `;

    return (
        <BehaviorFlexbox
            isMouseEnter={isMouseEnter}
            setMouseEnter={setMouseEnter}
            parentStyle={parentStyle}
            childFeaturedStyle={childFeaturedStyle}
            propertyValue={propertyValue}
            onClickBoxHandler={onClickBoxHandler}
        />
    );
};
