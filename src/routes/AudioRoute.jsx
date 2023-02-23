import AudioPage from "@/pages/AudioPage";
import WithWrapper from "@/components/HOC/WithWrapper";

function AudioRoute() {
    return (
        <>
            <AudioPage />
        </>
    );
}

export default WithWrapper(AudioRoute);
