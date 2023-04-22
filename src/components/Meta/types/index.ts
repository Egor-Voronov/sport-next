import {ReactNode} from "react";

export interface IMeta {
    title: string;
    description?: string;
    children?: ReactNode;
}

export interface TitleGenerator {
    (title: string): string;
}