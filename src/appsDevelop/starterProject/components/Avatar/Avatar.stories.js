import React from 'react';
import { withKnobs,text , number , select, boolean } from '@storybook/addon-knobs';
import {Avatar} from "./Avatar";

export default {
    title: 'starterProject|Avatar',
};
export const knobs = () => (
    <div>
        <a href="https://www.npmjs.com/package/@storybook/addon-knobs" target='_blank'>knobs</a>
        <Avatar
            label={text('Label' , 'Label')}
            loading={boolean('Loading' , false)}
            size={select('Size', ['tiny', 'small', 'medium', 'large'],'tiny')}
            counter={number('Counter' , 1)}
        />

    </div>

);

knobs.story = {
    decorators: [withKnobs],
};