/**
 * Created by benben on 17/3/30.
 */
import React from 'react'
var AMUIReact = require('amazeui-react');
var ListItem = AMUIReact.ListItem;
var List = AMUIReact.List;
var Badge = AMUIReact.Badge;
class List123 extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (<div>
            <List border static>
                <ListItem>
                    <Badge amStyle="warning">NO</Badge><Badge amStyle="success">YEs</Badge>走在风中 今天阳光 突然好温柔
                </ListItem>
                <ListItem>
                    <Badge>1</Badge>天的温柔 地的温柔 像你抱着我 然后发现 你的改变 孤单的今后
                </ListItem>
                <ListItem>
                    <Badge>20</Badge>奔向梦幻的疆界
                </ListItem>
                <ListItem>
                    <Badge>5</Badge>让我享受这感觉
                </ListItem>
            </List>
        </div>)
    }
}
export default List123