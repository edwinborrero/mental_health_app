import React from 'react';
import {Image} from 'react-native';

export type ProfilePictureProps = {
    image?: string,
    size?: number,
}

const ProfilePicture = ({image = 'https://www.clipartkey.com/mpngs/m/146-1461473_default-profile-picture-transparent.png',
                            size = 50}: ProfilePictureProps) => (
    <Image
        source={{uri: image}}
        style={{
            width: size,
            height: size,
            borderRadius: size,
        }}
    />
)

export default ProfilePicture;