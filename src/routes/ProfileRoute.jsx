import ProfilePage from "@/pages/ProfilePage";
import WithWrapper from "@/components/HOC/WithWrapper";

function ProfileRoute() {
    return (
        <>
            <ProfilePage />
        </>
    );
}

export default WithWrapper(ProfileRoute);
