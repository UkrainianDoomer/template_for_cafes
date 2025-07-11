
export default function Video(props) {
    const { src, ...rest } = props;
    // https://ik.imagekit.io/20denysko05/cafemenu/mainpage/kitchen.mp4?updatedAt=1752258880173
    return (
    <video
        src={ src.startsWith('http') ? src : `https://ik.imagekit.io/20denysko05${src}` }
        {...rest}
        autoPlay
        loop
        muted
        playsInline
    />
  )
}