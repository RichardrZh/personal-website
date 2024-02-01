enum MainRouteEnum {
    HOME,
    ABOUT,
    SKILLS,
    PROJECTS,
    CONTACT_ME
};

function enumToString(enumValue: MainRouteEnum, separator?: string) {
    let words = MainRouteEnum[enumValue].split('_');

    for (var i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0) + words[i].substring(1).toLowerCase();     
    }

    let routeStrSeparator = typeof separator === "undefined" ? " " : separator;

    return words.join(routeStrSeparator);
}

function enumToPath(enumValue: MainRouteEnum) {
    if (enumValue === MainRouteEnum.HOME) {
        return "/";
    }
    return `/${MainRouteEnum[enumValue].toLowerCase()}`;
}

function pathnameToEnum(pathname: string) {
    if (pathname === '/') {
        return MainRouteEnum.HOME;
    }
    
    let value = pathname.split('/', 2)[1].toUpperCase();
    return MainRouteEnum[value as keyof typeof MainRouteEnum];
}

export { 
    MainRouteEnum as default, 
    pathnameToEnum,
    enumToPath,
    enumToString
};