/*
 * -------------------------------------------
 * route function
 * -------------------------------------------
 *
 * route('index')
 *  -> '/'
 *
 * route('index:id')
 *  -> '/:id'
 *
 * route('index:id:name', {id: 3, name: 'hi'})
 *  -> '/3/hi'
 * -------------------------------------------
 */
export default function route(name: string, value?: object): string
{
    let names:string[] = name.split(':');

    if (2 > names.length)
        return routes[name as keyof typeof routes];

    let path: string = routes[names[0] as keyof typeof routes];

    if (typeof value === 'undefined')
        return path + name.match(/:\S+$/);

    let parameters:string = name.match(/:\S+$/) + '';

    Object.keys(value).forEach(function (key: string) {
        parameters = parameters.replace(':' + key, '/' + value[key as keyof typeof value]);
    });
    return (path.slice(-1) === '/' ? path.slice(0, -1) : path) + parameters;
}

const routes: {} = {
    index: '/',
    about: '/about',
    recruitments: '/recruitments'
};