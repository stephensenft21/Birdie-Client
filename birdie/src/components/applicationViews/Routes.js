const ApplicationViews = (props) => {
    const { isAuthenticated } = useSimpleAuth();

    return (
        <>
            <Route
                exact
                path="/"
                render={(props) => {
                    return <Home {...props} />;
                }}
            />
        </>
    );
};
export default ApplicationViews;
