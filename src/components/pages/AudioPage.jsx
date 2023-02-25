import ButtonIcon from "@/elements/buttons/ButtonIcon";
import Toggle from "@/elements/buttons/Toggle";
import Player from "@/elements/audio/Player";
import {ReactComponent as NextSvg} from "@/assets/icons/audio/next.svg";
import {ReactComponent as PauseSvg} from "@/assets/icons/audio/pause.svg";
import {ReactComponent as PlaySvg} from "@/assets/icons/audio/play.svg";
import {ReactComponent as PrevSvg} from "@/assets/icons/audio/prev.svg";
import {ReactComponent as RepeatSvg} from "@/assets/icons/audio/repeat.svg";
import {ReactComponent as ShuffleSvg} from "@/assets/icons/audio/shuffle.svg";

const AudioPage = () => {
    return (
        <>
            <div>
                <Player src={"https://s3-us-west-2.amazonaws.com/s.cdpn.io/355309/Swing_Jazz_Drum.mp3"} />
                {/* <ButtonIcon icon={<NextSvg />} />
                <ButtonIcon icon={<PauseSvg />} />
                <ButtonIcon icon={<PlaySvg />} />
                <ButtonIcon icon={<PrevSvg />} />
                <ButtonIcon icon={<RepeatSvg />} />
                <ButtonIcon icon={<ShuffleSvg />} />
                <Toggle icon={<ShuffleSvg />} /> */}
            </div>
        </>
    );
};

export default AudioPage;
