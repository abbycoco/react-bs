/**
 * Created by benben on 17/2/21.
 */
import React from 'react';
import {createDevTools} from 'redux-devtools';
import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';
export default createDevTools(
    <DockMonitor toggleVisibilityKey='ctrl-j'
                 changePositionKey='ctrl-q'>
        <LogMonitor />
    </DockMonitor>
);