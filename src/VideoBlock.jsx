import Video from "./components/Video";

export default function VideoBlock() {
    return (
        <div className="video-block">
            <div className="video-block-inner">
                <div className="video-text">
                    <h2>Kuchnia w centrum uwagi</h2>
                    <p>
                        Zobacz, jak powstają nasze dania – od świeżych składników po gotowe potrawy. Smak i jakość to nasza pasja!
                    </p>
                </div>
                <div className="video-container">
                    <div className="video-eclipse"/>
                    <Video className="video-kitchen" src="/cafemenu/mainpage/kitchen.mp4" width="100%" height="450px" />
                </div>
            </div>
        </div>
    );
}