import React from  'react';
import {   StatusBar, StyleSheet, Text, TextInput, Button, Modal, ToastAndroid, FlatList, View, ViewPagerAndroid, Picker } from 'react-native';
import FileUploader from 'react-native-file-uploader';
import com.filepicker.FilePickerPackage;
import SpeechAndroid from 'react-native-android-voice';

// open file audio
var FilePickerManager = require ('NativeModules').FilePickerManager;
const options = {
    title:'File Picker',
    mimeType: 'audio/*'
    chooseFileButtonTitle: 'Choose File...'
};
FilePickerManager.showFilePicker (options, (response) => {
    console.log('Response = ', response);

    if (response.didCancel){
        console.log ('User cancelled audio picker');
    }
    else if (response.error){
        console.log ('AudioPickerManager Error:', response.error);
    }
    else if (response.customButton){
        console.log('User tapped custom button:', response.customeButton);
    }
    else{
        this.setState({
            file:reponse
        });
    }
});

// voice to text

// import {
//     DocumentPicker, DocumentPickerUtil
// } from 'react-native-document-picker';

// DocumentPicker.show({
//     filetype: [DocumentPickerUtil.audio()],
// }, (error,res) => {
//     //android
//     console.log(
//         res.uri,
//         res.type,
//         res.fileName,
//         res.fileSize

//     ;)
});

render() {
    return(
        <View>
            <Header
            centerComponent={{text: 'Lecture Summarizer' }}
            >
            
    )   </View>
}


// const FilePickerManager = require ('NativeModules').FilePickerManager;

// FilePickerManager.showFilePicker(null, (response => {
//     console.log ('Response = ', response);
    
//     if (response.didCancel){
//         console.log('User cancelled file picker');

//     }
//     else if (response.error){
//         console.log ('FilePickerManager Error' . response.error);
//     }
//     else {
//         this.setState({
//             file:response
//         });

//     }
// }));