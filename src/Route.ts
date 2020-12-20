export default function route(name: string)
{
    let names:string[] = name.split(':');

    if (names.length > 1)
        return routes[names[0] as keyof typeof routes] + names[1];
    else
        return routes[name as keyof typeof routes];
}

const routes: {} = {
    index: '/',
    about: '/about',
    recruitments: '/recruitments'
};