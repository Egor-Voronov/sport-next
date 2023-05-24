export interface ILinksProps {
    links: { link: string; label: string }[];
    onClose?: () => void;
}