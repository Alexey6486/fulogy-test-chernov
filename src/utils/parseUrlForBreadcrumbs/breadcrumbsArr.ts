
export const parseUrlForBreadcrumbs = (router) => {
    const currentUrlParseArr = router.asPath.split(/(\/)/g).filter(i => i != '');
    return currentUrlParseArr.map(i => {
        if (i === '/') {
            return { page: 'Личный кабинет', url: '/'}
        } else if (i === 'editProfile') {
            return { page: 'Редактирование данных', url: '/editProfile'}
        }
    })
}
