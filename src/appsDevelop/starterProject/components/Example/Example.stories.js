import React from 'react';
import Example from "./Example";
import {withKnobs, text, number, select, boolean, object , color} from '@storybook/addon-knobs';
import {action} from "@storybook/addon-actions";
import SampleCode from "../../../../frameworks/StoryBook/SampleCode";

export default {
    title: 'starterProject|Components/Example',
    component : Example
};
export const example = () => {

    let params = {
        label : text('Label', 'Label'),
        size : number('size' , 10),
    }

    return<div>
        <Example {...params} clickHandler={action('onClick')}></Example>
        <SampleCode params={params} componentName='Example' />

    </div>
}