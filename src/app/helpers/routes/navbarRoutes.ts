type Routes = {
    id: number,
    url: string,
    title: string
}


export const navbarRoutes: Routes[] = [
    {
        id: 1,
        url: '/trending',
        title: 'Trending Movies'
    },
    {
        id: 2,
        url: '/newmovies',
        title: 'New Movies'
    },
    {
        id: 3,
        url: '/upcoming',
        title: 'Upcoming Movies'
    },
]