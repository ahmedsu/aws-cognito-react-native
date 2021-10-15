import React, {useState, useEffect} from 'react'
import {View, Text, StyleSheet, Pressable, Image} from 'react-native'
import { launchImageLibrary, launchCamera } from 'react-native-image-picker'
import {Button, Divider} from '../components'

const SelectImage = () => {
    const [path, setPath] = useState(null)

    useEffect(() => {
        console.log("== PATH ==")
        console.log(path)
    }, path)

    const resolveResults = (res) => {
        console.log("=== RESPONSE IMG ===")
        console.log(res)
        

        if(res.didCancel){
            return;
        } else if(res.errorCode == 'camera_unavailable'){
            alert('Camera is unavailable')
            return
        } else if(res.errorCode == 'permission'){
            alert('Permission not granted.')
            return
        } else if(res.errorCode == 'others'){
            alert("Error: " + res.errorMessage)
            return
        }

        setPath(res.assets[0])
    }

    const takeFromCamera = async () => {
        let options = {
            mediaType: 'photo',
            includeBase64: true
        }
    
        try{
            launchCamera(options, (res) => {
                resolveResults(res)
            })
        }catch(err){
            console.log("== IMG FROM CAMERA ERR ==")
            console.log(err)
        }
    }

    const chooseFromLibrary = () => {
        let options = {
            mediaType: 'photo',
            includeBase64: true
        }

        try{
            launchImageLibrary(options, (res) => {
                resolveResults(res)
            })

        }catch(err){
            console.log("== IMG FROM FILE ERR ==")
            console.log(err)
        }
    }

    const uploadPhoto = () => {
        const imgReady = path
        return
    }

    return (
        <View style={localStyles.container}>
            {path &&
                <Image
                    source={{uri: `data:image/jpeg;base64,${path.base64}`}}
                    style={{width: 200, height: 200, borderWidth: 1, borderColor:'black'}}
                />
            }
            <View style={{justifyContent: 'center', alignItems: 'center', marginTop: 15}}>
                {!path ?
                <View style={{width: 180}}>
                    <Button fullWidth title='Take from camera' onPress={takeFromCamera}/>
                    <Divider />
                    <Button fullWidth title='Choose from gallery' onPress={chooseFromLibrary}/>
                </View>
                :
                <>
                    <Pressable onPress={() => setPath(null)}><Text>Re-take</Text></Pressable>
                    <Divider />
                    <Button fullWidth title='Upload' onPress={uploadPhoto}/>
                </>
                }
            </View>
        </View>
    )
}

const localStyles = StyleSheet.create({
    previewImg: {
        width: 200,
        height: 200,
    }
})

export default SelectImage
