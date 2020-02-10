import React from 'react';
import { action } from '@storybook/addon-actions';
import { withKnobs, object } from '@storybook/addon-knobs/react';
import Task from "./Task";

export default {
    title: 'starterProject|Components/Task',
};

const taskData = {
    label :"Hello"
}

export const task = () => {
    return <Task {...object('Task Data', { ...taskData })} onClick={action('button-click')}/>;
};

//https://www.learnstorybook.com/intro-to-storybook/react/en/using-addons/