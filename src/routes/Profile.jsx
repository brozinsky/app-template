import ProfilePage from "@/pages/ProfilePage";
import WithWrapper from "@/components/HOC/WithWrapper";

function Profile() {
    return (
        <>
            <ProfilePage />
        </>
    );
}

export default WithWrapper(Profile);
