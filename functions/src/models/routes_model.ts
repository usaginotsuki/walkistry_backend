export interface Routes {
    RouteName:   string;
    routeStart:  RouteSt;
    routeStop:   RouteSt;
    routeLenght: number;
}

export interface RouteSt {
    _latitude:  number;
    _longitude: number;
}
