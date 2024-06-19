declare module '*.sass' {
    const styles: {[key: string]: string};
    export = styles;
}

declare module '*.less' {
    const styles: {[key: string]: string};
    export = styles;
}

declare module "*.css" {
    const styles: { [key: string]: string };
    export = styles;
}

declare module "*.jpeg";

declare module "*.png";

interface Window {
    __token__: string
}