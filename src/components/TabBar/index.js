/**
 * Created by sks on 16/10/10.
 */
import React from 'react'
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import heart from './../../../static/img/heart.png'
import chaplin from './../../../static/img/chaplin.png'
import house from './../../../static/img/house.png'
class Tabbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedIndex: 0,
        };
    }
    select = (index) => {
        this.setState({selectedIndex: index});
        this.props.show(index);
    }

    render() {
        return (
            <div>
                <BottomNavigation selectedIndex={this.state.selectedIndex}>
                    <BottomNavigationItem
                        label="回家"
                        icon={<img src={house} style={{position: 'relative', width: '20%', flex: '1 1 0%', left: '40%', height: '60%'}}/>}
                        onTouchTap={() => this.select(0)}
                    />
                    <BottomNavigationItem
                        label="爱你"
                        icon={<img src={chaplin} style={{position: 'relative', width: '20%', flex: '1 1 0%', left: '40%', height: '60%'}}/>}
                        onTouchTap={() => this.select(1)}
                    />
                    <BottomNavigationItem
                        label="比心"
                        icon={<img src={heart} style={{position: 'relative', width: '20%', flex: '1 1 0%', left: '40%', height: '60%'}}/>}
                        onTouchTap={() => this.select(2)}
                    />
                </BottomNavigation>

            </div>

        )
    }
}
export default Tabbar
