const resolveRoutes = (route) => {
    if(route.lenght <= 3){
        let validRoute = route === '/' ? route : '/:id';
        return validRoute;
    }
    return `/${route}`; // /about
};

export default resolveRoutes;