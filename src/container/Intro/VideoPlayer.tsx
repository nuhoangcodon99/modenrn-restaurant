/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";

interface IVideoPlayerProps {
    src: string;
}

export default class VideoPlayer extends React.Component<IVideoPlayerProps> {
    private _videoRef: React.RefObject<HTMLVideoElement>;

    constructor(props: IVideoPlayerProps) {
        super(props);
        this._videoRef = React.createRef();
    }

    public componentDidMount() {
        this._videoRef.current?.play();
    }

    public render() {
        return (
            <video ref={this._videoRef} width="100%" controls>
                <source src={this.props.src} type="video/mp4" />
            </video>

        );
    }
}