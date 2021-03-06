var React = require('react');
var style = require('./style');
import {
  View,
} from 'react-native';

class IconBadge extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <View style={[style.MainView, (this.props.MainViewStyle ? this.props.MainViewStyle : {})]}>
        {
          // main element
          this.props.MainElement
        }
        <View style={[style.IconBadge, (this.props.IconBadgeStyle ? this.props.IconBadgeStyle : {}), {display: this.props.Hidden ? 'none' : 'flex'}]}>
          {
            // badge element
            this.props.BadgeElement
          }
        </View>
      </View>
    )
  }
}

module.exports = IconBadge;
