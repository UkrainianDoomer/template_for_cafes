import { Image as ImageKit, ImageKitProvider } from '@imagekit/react';

export default function Image(props) {
  return (
    <ImageKitProvider urlEndpoint="https://ik.imagekit.io/20denysko05">
      <ImageKit
        {...props   }
      />
    </ImageKitProvider>
  )
}