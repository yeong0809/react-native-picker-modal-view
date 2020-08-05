import * as React from 'react';
import { View, TextInput, TouchableOpacity, Image } from 'react-native';
import { SearchStyle } from '../Assets/Styles';
export class SearchComponent extends React.PureComponent {
    render() {
        const { SearchInputProps, placeholderTextColor, onClose, setText, forceSelect, searchText, onBackRequest, backButtonDisabled } = this.props;
        return (React.createElement(View, { style: [SearchStyle.searchArea, SearchInputProps.style] },
            !backButtonDisabled &&
                this.touchableOpacityButton(onBackRequest, require('../Assets/Images/left-arrow.png'), SearchStyle.leftBtn, {...SearchStyle.backButton,...SearchInputProps.backImageStyle}),
            React.createElement(TextInput, Object.assign({ placeholder: searchText, placeholderTextColor: placeholderTextColor, style: [SearchStyle.textInput, forceSelect && SearchStyle.nonCloseButton, backButtonDisabled && SearchStyle.nonBackButton, SearchInputProps.placeholderStyle], underlineColorAndroid: 'transparent', onChangeText: (text) => setText(text) })),
            !forceSelect &&
                this.touchableOpacityButton(onClose, require('../Assets/Images/close.png'), SearchStyle.leftBtn, {...SearchStyle.closeButton, ...SearchInputProps.backImageStyle})));
    }
    touchableOpacityButton(onPress, imgSrc, buttonStyle, imgStyle) {
        return (React.createElement(TouchableOpacity, { onPress: () => onPress(), style: buttonStyle },
            React.createElement(Image, { source: imgSrc, style: imgStyle })));
    }
}
//# sourceMappingURL=Search.js.map