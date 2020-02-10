import React from 'react';
import { withKnobs,text , number , select, boolean } from '@storybook/addon-knobs';
import {Button} from "antd";
import '../../styles/index.less'
import {action} from "@storybook/addon-actions";

export default {
    title: 'starterProject|Components/Button',
};
export const avatar = () => (
    <div>
        <a href="https://www.npmjs.com/package/@storybook/addon-knobs" target='_blank'>knobs</a>
        <br/>
        <Button
            type={select('type', ['primary', '', 'dashed', 'danger','link'],'primary')}
            size={select('size', ['large', 'small'],'small')}
            icon={select('icon', ['download', 'circle', 'round' , ''],'download')}
            loading={boolean('loading' , false)}
            onClick={action('onClick')}
        >{text('Label' , 'Label')}</Button>
    </div>

);

avatar.story = {
    decorators: [withKnobs],
};