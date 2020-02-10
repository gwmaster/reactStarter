import React from 'react';
import {withKnobs, text, number, select, boolean, object , color} from '@storybook/addon-knobs';
import Button from './Button';
import '../../styles/index.less'
import {action} from "@storybook/addon-actions";
import SampleCode from '../../../../frameworks/StoryBook/SampleCode'

export default {
    title: 'starterProject|Components/Button',
    component: Button
};

const style = {
    backgroundColor : 'green'
}
export const button = () => {
    let params = {
        children : text('Label', 'Label'),
        color : color('Color' , 'blue'),
        style : object('style', style),
        type : select('type', ['primary', '', 'dashed', 'danger', 'link'], 'primary'),
        size : select('size', ['large', 'small'], 'small'),
        icon : select('icon', ['download', 'circle', 'round', ''], 'download'),
        loading : boolean('loading', false),
        onClick : action('onClick')
    }

    return(
        <div>
            <Button {...params}>{params.children}</Button>
            <SampleCode componentName='Button' params={params} />
        </div>
    )

};

button.story = {
    decorators: [withKnobs],
};